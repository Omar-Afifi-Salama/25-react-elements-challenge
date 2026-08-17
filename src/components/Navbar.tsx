type Props = {
    theme: "light" | "dark";
    toggleTheme: () => void;
};

export default function Navbar({ theme, toggleTheme }: Props) {
    return (
        <nav className="top-nav">
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
        </nav>
    );
}
