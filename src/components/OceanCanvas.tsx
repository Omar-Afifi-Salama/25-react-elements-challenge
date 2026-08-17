import { useEffect, useRef } from "react";
import "../css/OceanCanvas.css";

interface OceanCanvasProps {
    theme?: "light" | "dark";
}

const THEME_PALETTES = {
    dark: {
        bgGradient: ["#0a0a0a", "#121212", "#181818"],
        waves: [
            {
                amplitude: 16,
                wavelength: 180,
                speed: 2.2,
                color: "rgba(255, 255, 255, 0.03)",
                yOffset: 0.25,
            },
            {
                amplitude: 22,
                wavelength: 240,
                speed: 1.8,
                color: "rgba(255, 255, 255, 0.045)",
                yOffset: 0.5,
            },
            {
                amplitude: 28,
                wavelength: 300,
                speed: 1.4,
                color: "rgba(255, 255, 255, 0.065)",
                yOffset: 0.75,
            },
        ],
        glint: ["rgba(255, 255, 255, 0.06)", "rgba(255, 255, 255, 0.01)"],
    },
    light: {
        bgGradient: ["#fafafa", "#f4f4f5", "#e4e4e7"],
        waves: [
            {
                amplitude: 16,
                wavelength: 180,
                speed: 2.2,
                color: "rgba(0, 0, 0, 0.02)",
                yOffset: 0.25,
            },
            {
                amplitude: 22,
                wavelength: 240,
                speed: 1.8,
                color: "rgba(0, 0, 0, 0.035)",
                yOffset: 0.5,
            },
            {
                amplitude: 28,
                wavelength: 300,
                speed: 1.4,
                color: "rgba(0, 0, 0, 0.05)",
                yOffset: 0.75,
            },
        ],
        glint: ["rgba(255, 255, 255, 0.5)", "rgba(255, 255, 255, 0.08)"],
    },
};

export function OceanCanvas({ theme = "dark" }: OceanCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const themeRef = useRef(theme);

    useEffect(() => {
        themeRef.current = theme;
    }, [theme]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // alpha: false tells the GPU no transparent alpha blending is needed
        const ctx = canvas.getContext("2d", { alpha: false });
        if (!ctx) return;

        let animationFrameId: number;
        let width = 0;
        let height = 0;
        let time = 0;
        let isRunning = true;

        function resize() {
            if (!canvas) return;
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        }

        resize();
        window.addEventListener("resize", resize, { passive: true });

        // Stop execution when tab is in background to preserve CPU & battery
        function handleVisibility() {
            if (document.hidden) {
                isRunning = false;
                cancelAnimationFrame(animationFrameId);
            } else {
                isRunning = true;
                render();
            }
        }
        document.addEventListener("visibilitychange", handleVisibility);

        function render() {
            if (!isRunning) return;

            time += 0.02; // Smooth slow motion
            const palette =
                THEME_PALETTES[themeRef.current] || THEME_PALETTES.dark;

            // 1. Base Gradient
            const baseGradient = ctx!.createLinearGradient(0, 0, width, height);
            baseGradient.addColorStop(0, palette.bgGradient[0]);
            baseGradient.addColorStop(0.5, palette.bgGradient[1]);
            baseGradient.addColorStop(1, palette.bgGradient[2]);
            ctx!.fillStyle = baseGradient;
            ctx!.fillRect(0, 0, width, height);

            // 2. Wave Swells with Optimized Point Stepping (28px step = 60% fewer calculations)
            const STEP = 28;

            for (const layer of palette.waves) {
                ctx!.beginPath();
                const startY = height * layer.yOffset;

                ctx!.moveTo(0, height);
                for (let x = 0; x <= width + STEP; x += STEP) {
                    const y =
                        startY +
                        Math.sin(x / layer.wavelength + time * layer.speed) *
                            layer.amplitude +
                        Math.cos(
                            x / (layer.wavelength * 0.5) -
                                time * (layer.speed * 0.5),
                        ) *
                            (layer.amplitude * 0.3);

                    ctx!.lineTo(x, y);
                }

                ctx!.lineTo(width, height);
                ctx!.closePath();

                ctx!.fillStyle = layer.color;
                ctx!.fill();
            }

            // 3. Subtle Glint Light
            const glintX = width * 0.65;
            const glintY = height * 0.4;
            const glint = ctx!.createRadialGradient(
                glintX,
                glintY,
                10,
                glintX,
                glintY,
                width * 0.5,
            );
            glint.addColorStop(0, palette.glint[0]);
            glint.addColorStop(0.5, palette.glint[1]);
            glint.addColorStop(1, "transparent");

            ctx!.fillStyle = glint;
            ctx!.fillRect(0, 0, width, height);

            animationFrameId = requestAnimationFrame(render);
        }

        render();

        return () => {
            window.removeEventListener("resize", resize);
            document.removeEventListener("visibilitychange", handleVisibility);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas ref={canvasRef} className="ocean-canvas" aria-hidden="true" />
    );
}
