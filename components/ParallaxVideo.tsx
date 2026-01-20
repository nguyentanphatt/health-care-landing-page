"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ParallaxVideo() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1]);
    const borderRadius = useTransform(scrollYProgress, [0, 0.4], ["2rem", "0rem"]);
    const textOpacity = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);
    const textY = useTransform(scrollYProgress, [0.35, 0.5], [40, 0]);

    return (
        <section ref={containerRef} className="relative h-[250vh]">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{
                        scale,
                        borderRadius,
                    }}
                    className="relative w-[90vw] h-[70vh] md:w-full md:h-full overflow-hidden shadow-2xl"
                >
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src="/videos/running.mp4" type="video/mp4" />
                    </video>

                    <motion.div
                        style={{ opacity: textOpacity, y: textY }}
                        className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4"
                    >
                        <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4 leading-none">
                            Movement is <br />
                            <span className="text-sky-400">Purity</span>
                        </h2>
                        <p className="text-lg md:text-2xl text-white/90 font-medium max-w-2xl mx-auto uppercase tracking-widest">
                            Unlock your potential with real-time tracking
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
