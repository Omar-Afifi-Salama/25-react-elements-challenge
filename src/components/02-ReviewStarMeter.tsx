import { useState, type KeyboardEvent } from "react";
import "../css/02-ReviewStarMeter.css";

type FillType = "full" | "half" | "empty";

interface ReviewStarMeterProps {
    maxStars?: number;
    initialRating?: number;
    onChange?: (rating: number) => void;
}

export default function ReviewStarMeter({
    maxStars = 10,
    initialRating = 0,
    onChange,
}: ReviewStarMeterProps) {
    const [committedRating, setCommittedRating] =
        useState<number>(initialRating);
    const [hoverRating, setHoverRating] = useState<number | null>(null);

    const activeRating = hoverRating !== null ? hoverRating : committedRating;

    const handleCommit = (value: number) => {
        setCommittedRating(value);
        onChange?.(value);
    };

    // Keyboard navigation supporting WAI-ARIA slider semantics
    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        let nextRating;

        switch (e.key) {
            case "ArrowRight":
            case "ArrowUp":
                e.preventDefault();
                nextRating = Math.min(maxStars, committedRating + 0.5);
                break;
            case "ArrowLeft":
            case "ArrowDown":
                e.preventDefault();
                nextRating = Math.max(0, committedRating - 0.5);
                break;
            case "Home":
                e.preventDefault();
                nextRating = 0;
                break;
            case "End":
                e.preventDefault();
                nextRating = maxStars;
                break;
            default:
                return;
        }

        setHoverRating(null);

        if (nextRating) handleCommit(nextRating);
    };

    return (
        <div className="review-meter-root">
            {/* Global Gradient Definition for Half Stars */}
            <svg
                width="0"
                height="0"
                style={{ position: "absolute" }}
                aria-hidden="true"
            >
                <defs>
                    <linearGradient
                        id="star-half-fill"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                    >
                        <stop
                            offset="50%"
                            stopColor="var(--star-active, #f59e0b)"
                        />
                        <stop offset="50%" stopColor="transparent" />
                    </linearGradient>
                </defs>
            </svg>

            <h3 className="rating-label" aria-live="polite">
                {activeRating.toFixed(1)} / {maxStars} Stars
            </h3>

            {/* Accessible Slider Container */}
            <div
                className="rating-container"
                tabIndex={0}
                role="slider"
                aria-label={`Rating: ${activeRating} out of ${maxStars} stars`}
                aria-valuemin={0}
                aria-valuemax={maxStars}
                aria-valuenow={activeRating}
                aria-valuetext={`${activeRating} stars`}
                onKeyDown={handleKeyDown}
                onMouseLeave={() => setHoverRating(null)}
            >
                {Array.from({ length: maxStars }, (_, i) => i + 1).map(
                    (starIndex) => {
                        let fillType: FillType = "empty";
                        if (activeRating >= starIndex) {
                            fillType = "full";
                        } else if (activeRating === starIndex - 0.5) {
                            fillType = "half";
                        }

                        return (
                            <Star
                                key={starIndex}
                                starIndex={starIndex}
                                fillType={fillType}
                                onHover={setHoverRating}
                                onClick={handleCommit}
                            />
                        );
                    },
                )}
            </div>
        </div>
    );
}

interface StarProps {
    starIndex: number;
    fillType: FillType;
    onHover: (value: number) => void;
    onClick: (value: number) => void;
}

export function Star({ starIndex, fillType, onHover, onClick }: StarProps) {
    const halfValue = starIndex - 0.5;
    const fullValue = starIndex;

    const getFill = () => {
        if (fillType === "full") return "var(--star-active, #f59e0b)";
        if (fillType === "half") return "url(#star-half-fill)";
        return "transparent";
    };

    const getStroke = () => {
        return fillType === "empty"
            ? "var(--star-empty, #737373)"
            : "var(--star-active, #f59e0b)";
    };

    return (
        <div className="star-wrapper">
            <div
                className="hitbox left"
                onMouseEnter={() => onHover(halfValue)}
                onClick={() => onClick(halfValue)}
                aria-hidden="true"
            />
            <div
                className="hitbox right"
                onMouseEnter={() => onHover(fullValue)}
                onClick={() => onClick(fullValue)}
                aria-hidden="true"
            />

            <svg
                className="star-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={getFill()}
                stroke={getStroke()}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        </div>
    );
}
