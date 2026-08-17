import { type ReactNode } from "react";
import "../css/ShowcaseSection.css";
import { useScrollReveal } from "../hooks/useScrollReveal";

export interface FeatureItem {
    id: string;
    title: string;
    desc: string;
}

interface ShowcaseSectionProps {
    badge?: string;
    title: string;
    description: string;
    features: FeatureItem[];
    layout?: "split" | "full-width";
    verticalAlignment?: "start" | "center";
    children: ReactNode;
}

export function ShowcaseSection({
    badge,
    title,
    description,
    features,
    layout = "split",
    verticalAlignment = "start",
    children,
}: ShowcaseSectionProps) {
    const { elementRef, isVisible } = useScrollReveal({
        threshold: 0.2,
        rootMargin: "-30px 0px",
        triggerOnce: false,
    });

    return (
        <section
            ref={elementRef}
            className={`showcase-row layout-${layout} v-align-${verticalAlignment} ${isVisible ? "is-revealed" : "is-hidden"}`}
        >
            {/* 1. Interactive Preview Area */}
            <div className="component-pane reveal-item item-preview">
                <div className="component-card">{children}</div>
            </div>

            {/* 2. Text / Feature Details Area */}
            <div className="details-pane">
                {badge && (
                    <span className="showcase-badge reveal-item item-badge">
                        {badge}
                    </span>
                )}

                <h2 className="reveal-item item-title">{title}</h2>
                <p className="description">{description}</p>

                <h3 className="reveal-item item-heading">Key Highlights</h3>
                <ul className="feature-list">
                    {features.map((feature, idx) => (
                        <li
                            key={feature.id}
                            className="reveal-item"
                            style={
                                {
                                    "--stagger-delay": `${idx * 45}ms`,
                                } as React.CSSProperties
                            }
                        >
                            <strong>{feature.title}:</strong> {feature.desc}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
