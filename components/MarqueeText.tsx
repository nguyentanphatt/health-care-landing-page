"use client";

import { useRef } from "react";
import {
    motion,
    useScroll,
    useVelocity,
    useTransform,
    useSpring,
} from "framer-motion";

interface MarqueeTextProps {
    text?: string;
}

export function MarqueeText({
    text = "TRANSFORM YOUR HEALTH • TRACK YOUR PROGRESS • ACHIEVE YOUR GOALS • LIVE BETTER EVERY DAY"
}: MarqueeTextProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const scrollVelocity = useVelocity(scrollYProgress);

    const skewXRaw = useTransform(
        scrollVelocity,
        [-0.5, 0.5],
        ["15deg", "-15deg"]
    );
    const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

    const xFromScroll = useTransform(scrollYProgress, [0, 1], [0, -2000]);
    const xSmooth = useSpring(xFromScroll, { mass: 3, stiffness: 400, damping: 50 });

    const repeatedText = `${text} • `;

    return (
        <section
            ref={containerRef}
            className="py-16 overflow-hidden bg-gradient-to-r from-sky-500/5 via-transparent to-blue-500/5"
        >
            <div className="relative flex items-center overflow-hidden">
                <motion.div
                    style={{ x: xSmooth, skewX }}
                    className="flex whitespace-nowrap"
                >
                    <motion.div
                        className="flex"
                        animate={{
                            x: ["0%", "-50%"],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30,
                                ease: "linear",
                            },
                        }}
                    >
                        {[...Array(4)].map((_, i) => (
                            <span
                                key={i}
                                className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight mx-4 uppercase"
                                style={{
                                    background: "linear-gradient(90deg, #19B1FF, #06B6D4, #3B82F6, #19B1FF)",
                                    backgroundSize: "200% 100%",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                {repeatedText}
                            </span>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
