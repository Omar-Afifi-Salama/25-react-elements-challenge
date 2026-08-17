import { useEffect, useState } from "react";

import "./css/globals.css";
import "./css/App.css";

import Navbar from "./components/Navbar.tsx";
import { OceanCanvas } from "./components/OceanCanvas.tsx";
import { ShowcaseSection } from "./components/ShowcaseSection.tsx";
import { componentsData } from "./componentsData.ts";

import Accordion from "./components/01-Accordion.tsx";
import ReviewStarMeter from "./components/02-ReviewStarMeter.tsx";
import MultiStepWizard from "./components/03-MultiStepWizard.tsx";

type Theme = "light" | "dark";

function App() {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window === "undefined") return "dark";

        const existing = localStorage.getItem("theme");

        return existing === "light" || existing === "dark" ? existing : "dark";
    });

    // Sync data-theme attribute on the root html element
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <div className="app-layout">
            <OceanCanvas theme={theme} />

            <main className="content-layer">
                <Navbar
                    theme={theme}
                    toggleTheme={() =>
                        setTheme((prev) => (prev === "dark" ? "light" : "dark"))
                    }
                />
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
                        features={componentsData["ratingMeter"].features}
                        verticalAlignment="center"
                        layout="split"
                    >
                        <ReviewStarMeter />
                    </ShowcaseSection>

                    <ShowcaseSection
                        badge="Wizard Forms"
                        title="Multi-Step Stepper & Wizard Navigation"
                        description="A workflow that segments complex form entries across structured stages with persistent state, step indicators, and instant review summaries."
                        features={componentsData["multiStepWizard"].features}
                        verticalAlignment="center"
                        layout="split"
                    >
                        <MultiStepWizard />
                    </ShowcaseSection>
                </div>
            </main>
        </div>
    );
}

export default App;
