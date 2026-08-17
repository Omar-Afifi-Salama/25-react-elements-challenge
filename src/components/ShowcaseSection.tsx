import { type ReactNode } from "react";
import "../css/ShowcaseSection.css";

export interface FeatureItem {
    id: string;
    title: string;
    desc: string;
}

interface ShowcaseSectionProps {
    badge: string;
    title: string;
    description: string;
    features: FeatureItem[];
    layout?: "split" | "full-width"; // Supports both styles
    children: ReactNode;
}

export function ShowcaseSection({
    badge,
    title,
    description,
    features,
    layout = "split",
    children,
}: ShowcaseSectionProps) {
    return (
        <section className={`showcase-row layout-${layout}`}>
            {/* 1. Interactive Preview Area */}
            <div className="component-pane">
                <div className="component-card">{children}</div>
            </div>

            {/* 2. Text / Feature Details Area */}
            <div className="details-pane">
                {badge && <span className="showcase-badge">{badge}</span>}

                <h2>{title}</h2>
                <p className="description">{description}</p>

                <h3>Key Highlights</h3>
                <ul className="feature-list">
                    {features.map((feature) => (
                        <li key={feature.id}>
                            <strong>{feature.title}:</strong> {feature.desc}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
