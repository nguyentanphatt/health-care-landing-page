"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [isAnimating, setIsAnimating] = useState(false);
    const [showContent, setShowContent] = useState(true);
    const [displayChildren, setDisplayChildren] = useState(children);
    const [prevPathname, setPrevPathname] = useState(pathname);

    useEffect(() => {
        if (pathname !== prevPathname) {
            setShowContent(false);
            setIsAnimating(true);

            const timer1 = setTimeout(() => {
                setDisplayChildren(children);
                window.scrollTo(0, 0);
            }, 500);

            const timer2 = setTimeout(() => {
                setShowContent(true);
            }, 550);

            const timer3 = setTimeout(() => {
                setIsAnimating(false);
                setPrevPathname(pathname);
            }, 1100);

            return () => {
                clearTimeout(timer1);
                clearTimeout(timer2);
                clearTimeout(timer3);
            };
        } else {
            setDisplayChildren(children);
        }
    }, [pathname, children, prevPathname]);

    const columns = [0, 1, 2, 3];
    const bgColor = "#396addff";

    return (
        <>
            <div style={{ opacity: showContent ? 1 : 0, transition: "opacity 0.1s" }}>
                {displayChildren}
            </div>

            <AnimatePresence mode="wait">
                {isAnimating && (
                    <div className="fixed inset-0 z-[100] pointer-events-none flex">
                        {columns.map((i) => (
                            <motion.div
                                key={`column-${i}`}
                                initial={{ y: "100%" }}
                                animate={{
                                    y: "0%",
                                    transition: {
                                        duration: 0.4,
                                        ease: "easeInOut",
                                        delay: i * 0.08,
                                    }
                                }}
                                exit={{
                                    y: "-100%",
                                    transition: {
                                        duration: 0.4,
                                        ease: "easeInOut",
                                        delay: i * 0.08,
                                    }
                                }}
                                className="flex-1 h-full"
                                style={{ backgroundColor: bgColor }}
                            />
                        ))}
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
