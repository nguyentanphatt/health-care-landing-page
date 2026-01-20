"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
    const [progress, setProgress] = useState(0);
    const [complete, setComplete] = useState(false);

    useEffect(() => {
        const hasLoaded = sessionStorage.getItem("hasLoaded");
        if (hasLoaded) {
            sessionStorage.removeItem("hasLoaded");
        }

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    sessionStorage.setItem("hasLoaded", "true");
                    setTimeout(() => setComplete(true), 800);
                    return 100;
                }

                const next = prev + Math.random() * 15;
                return next >= 100 ? 100 : next;
            });
        }, 150);

        return () => clearInterval(timer);
    }, []);

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.8,
                ease: [0.33, 1, 0.68, 1] as [number, number, number, number],
            },
        }),
    };

    const letters = "HEALTH CARE".split("");

    return (
        <AnimatePresence>
            {!complete && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        y: "-100%",
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col items-center justify-center overflow-hidden"
                >
                    <div className="flex mb-12 overflow-hidden">
                        {letters.map((char, i) => (
                            <motion.span
                                key={i}
                                custom={i}
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                className={`text-4xl md:text-6xl font-black uppercase tracking-tighter text-white ${char === " " ? "mr-4" : ""}`}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </div>

                    <div className="w-64 md:w-80 h-[2px] bg-white/10 relative rounded-full overflow-hidden">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: progress / 100 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute inset-0 bg-sky-500 origin-left"
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-4 text-white/40 text-xs font-bold uppercase tracking-widest"
                    >
                        {Math.round(progress)}%
                    </motion.div>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
                        <div className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-medium mb-2">
                            Graduation Thesis Project
                        </div>
                        <div className="w-1 h-12 bg-gradient-to-t from-sky-500/50 to-transparent rounded-full" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
