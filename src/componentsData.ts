interface FeatureItem {
    id: string;
    title: string;
    desc: string;
}

interface ComponentSection {
    features: FeatureItem[];
}

type ComponentNames = "accordion" | "ratingMeter" | "multiStepWizard";

export const componentsData: Record<ComponentNames, ComponentSection> = {
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
                id: "feature-half-stars",
                title: "Half-Star Precision",
                desc: "Hovering over the left or right side of any star lets you pick half points (like 4.5) just as easily as whole numbers.",
            },
            {
                id: "feature-live-preview",
                title: "Instant Hover Preview",
                desc: "Stars light up dynamically as you move your mouse, and cleanly return to your saved score if you move away without clicking.",
            },
            {
                id: "feature-keyboard-friendly",
                title: "Arrow Key Controls",
                desc: "Use Left and Right arrow keys to step your score up or down, or jump straight to 0 or 10 with Home and End.",
            },
            {
                id: "feature-screen-reader",
                title: "Spoken Score Updates",
                desc: "Automatically tells screen readers the exact score whenever a new rating is selected.",
            },
            {
                id: "feature-smooth-animations",
                title: "Subtle Hover Animations",
                desc: "Stars gently scale up under the cursor to make interacting with the bar feel responsive and natural.",
            },
            {
                id: "feature-clean-vectors",
                title: "Crisp Star Icons",
                desc: "Custom vector stars that stay sharp on any screen size and automatically match your dark or light theme.",
            },
        ],
    },
    multiStepWizard: {
        features: [
            {
                id: "feature-state-persistence",
                title: "Cross-Step State Preservation",
                desc: "Centralized, controlled form state (`Record<string, string>`) that reliably retains user entries across forward and backward navigation steps.",
            },
            {
                id: "feature-schema-driven",
                title: "Schema-Driven Field Generation",
                desc: "Clean separation of static step metadata and reactive field values, enabling dynamic rendering of text inputs, password fields, and select dropdowns.",
            },
            {
                id: "feature-step-indicators",
                title: "Interactive Stepper Progress Indicators",
                desc: "Visual numbered badges and connector tracks reflecting active, upcoming, and completed states with direct click-to-navigate capabilities.",
            },
            {
                id: "feature-review-summary",
                title: "Automatic Review & Confirmation Stage",
                desc: "Dynamic key-value summary readout generated on the final step for users to verify their inputs before final submission.",
            },
            {
                id: "feature-button-gating",
                title: "Navigation Boundary Controls",
                desc: "Smart boundary gating that disables the Back button on the initial step and transitions the Next trigger into a final Submit button on the last step.",
            },
            {
                id: "feature-reset-cycle",
                title: "Complete Form Lifecycle Management",
                desc: "Seamless post-submission success view with an instant one-click reset action returning the wizard to its initial state.",
            },
        ],
    },
};
