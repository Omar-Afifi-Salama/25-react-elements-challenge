import { useEffect, useState } from "react";

import "./css/globals.css";
import "./css/App.css";

import { OceanCanvas } from "./components/OceanCanvas.tsx";
import { ShowcaseSection } from "./components/ShowcaseSection.tsx";

import Accordion from "./components/01-Accordion.tsx";
import ReviewStarMeter from "./components/02-ReviewStarMeter.tsx";

interface FeatureItem {
    id: string;
    title: string;
    desc: string;
}

interface ComponentSection {
    features: FeatureItem[];
}

type ComponentNames = "accordion" | "ratingMeter";

const componentsData: Record<ComponentNames, ComponentSection> = {
    accordion: {
        features: [
            {
                id: "feature-dual-modes",
                title: "Dual Interaction Modes",
                desc: "Seamless switching between single-item expansion and multi-select modes with isolated state management.",
            },
            {
                id: "feature-accessibility",
                title: "Full WAI-ARIA Accessibility",
                desc: 'Built to WAI-ARIA standards with dynamic aria-expanded, aria-controls, and role="region" bindings.',
            },
            {
                id: "feature-keyboard-nav",
                title: "Comprehensive Keyboard Navigation",
                desc: "Full support for ArrowUp, ArrowDown, Home, and End with automated circular focus wrapping.",
            },
            {
                id: "feature-grid-animations",
                title: "Pure CSS Grid Height Animations",
                desc: "Smooth 0fr to 1fr intrinsic transitions powered by CSS Grid, avoiding costly JavaScript layout thrashing.",
            },
            {
                id: "feature-scope-encapsulation",
                title: "Modern CSS @scope Encapsulation",
                desc: "Complete component-level style isolation using native CSS scoping to prevent class name collisions.",
            },
            {
                id: "feature-focus-interactions",
                title: "Accessible Focus & Micro-Interactions",
                desc: "High-contrast :focus-visible rings paired with GPU-accelerated icon rotation transitions.",
            },
            {
                id: "feature-typescript",
                title: "Strict TypeScript Architecture",
                desc: "Strongly typed data schemas, props, and event handlers for predictable state transitions and reusability.",
            },
        ],
    },
    ratingMeter: {
        features: [
            {
                id: "feature-dual-state-model",
                title: "Dual-State Interaction Engine",
                desc: "Decoupled hover preview and committed selection states that instantly revert on mouse exit without layout flickers.",
            },
            {
                id: "feature-half-star-precision",
                title: "Sub-Pixel Half-Star Geometry",
                desc: "Bifurcated hitbox zones combined with SVG gradient fills to support precise 0.5-increment ratings.",
            },
            {
                id: "feature-wai-aria-slider",
                title: "WAI-ARIA Slider Semantics",
                desc: 'Accessible role="slider" architecture equipped with aria-valuemin, aria-valuemax, aria-valuenow, and live text bindings.',
            },
            {
                id: "feature-keyboard-control",
                title: "Full Keyboard Navigation",
                desc: "Intuitive step adjustments via ArrowLeft, ArrowRight, ArrowUp, and ArrowDown, with instant Home (0) and End (Max) snaps.",
            },
            {
                id: "feature-svg-defs-dedup",
                title: "Singleton SVG Defs Optimization",
                desc: "Centralized gradient and filter definitions rendered once at root level to prevent duplicate DOM ID collisions.",
            },
            {
                id: "feature-screen-reader-announcements",
                title: "Live Region Screen Reader Feedback",
                desc: "Integrated aria-live polite regions that announce updated scores to assistive technologies without disruptive focus shifts.",
            },
            {
                id: "feature-typescript-strict",
                title: "Type-Safe Prop Interfaces",
                desc: "Strictly typed FillType variants, step intervals, and callback contracts ensuring robust parent-child component integration.",
            },
        ],
    },
};

function App() {
    const [theme, setTheme] = useState<"light" | "dark">("dark");

    // Sync data-theme attribute on the root html element
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <div className="app-layout">
            {/* 60+ FPS Satellite Ocean Canvas Layer */}
            <OceanCanvas theme={theme} />

            {/* Foreground Content */}
            <main className="content-layer">
                {/* Top bar with theme toggle */}
                <header className="top-nav">
                    <div className="nav-container">
                        <div className="nav-brand">
                            <span className="brand-dot" />
                            <span className="brand-title">
                                25 Element React Challenge
                            </span>
                        </div>

                        <button
                            onClick={toggleTheme}
                            className="theme-toggle-btn"
                            aria-label="Toggle visual theme"
                        >
                            <span className="theme-icon">
                                {theme === "dark" ? "☀️" : "🌙"}
                            </span>
                            <span className="theme-label">
                                {theme === "dark" ? "Light" : "Dark"}
                            </span>
                        </button>
                    </div>
                </header>
                <header className="hero-header">
                    <h1 className="title">25 Element React Challenge</h1>
                    <p className="subtitle">
                        A deep-dive collection of accessible, high-performance
                        UI components built with React, TypeScript, and modern
                        CSS.
                    </p>
                </header>

                <div className="showcase-container">
                    <ShowcaseSection
                        badge="Accordion"
                        title="Interactive FAQ Accordion"
                        description="A robust, accessible accordion engineered with pure CSS grid transitions and standard keyboard controls."
                        features={componentsData["accordion"].features}
                        verticalAlignment="start"
                        layout="split"
                    >
                        <Accordion />
                    </ShowcaseSection>

                    <ShowcaseSection
                        badge="Rating Meter"
                        title="Interactive Star Rating & Review Meter"
                        description="A precision-engineered, accessible star rating meter featuring sub-pixel half-star snapping, dual-state hover previews, and full WAI-ARIA slider keyboard controls."
                        features={componentsData["accordion"].features}
                        verticalAlignment="center"
                        layout="split"
                    >
                        <ReviewStarMeter />
                    </ShowcaseSection>
                </div>
            </main>
        </div>
    );
}

export default App;
