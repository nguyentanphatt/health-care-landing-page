"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        if (footerRect.top <= window.innerHeight) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/tech", label: "Tech Stack" },
    { href: "/about", label: "About Us" },
  ];

  const menuVariants = {
    open: {
      height: 520,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1] as [number, number, number, number],
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1] as [number, number, number, number],
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1 + custom * 0.08,
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1] as [number, number, number, number],
      },
    }),
  };

  const topBarVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 6 },
  };

  const middleBarVariants = {
    closed: { opacity: 1, x: 0 },
    open: { opacity: 0, x: 10 },
  };

  const bottomBarVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -6 },
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border"
    >
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex-shrink-0 group">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-card-border bg-card-bg flex items-center justify-center transition-transform duration-300 group-hover:scale-105 relative">
                <Image
                  src='/images/icon.jpg'
                  alt="Logo"
                  fill
                  className="object-contain p-1 rounded-xl"

                />
              </div>
            </Link>
          </div>

          <div className="flex-1 flex justify-center">
            <span className="text-xl font-bold tracking-[0.15em] text-foreground uppercase">
              Health Care
            </span>
          </div>

          <div className="flex-1 flex justify-end">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 focus:outline-none hover:bg-card-bg rounded-xl transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <motion.svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                initial="closed"
                animate={isMenuOpen ? "open" : "closed"}
                className="text-foreground"
              >
                <motion.path
                  variants={topBarVariants}
                  d="M4 6h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <motion.path
                  variants={middleBarVariants}
                  d="M4 12h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <motion.path
                  variants={bottomBarVariants}
                  d="M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </motion.svg>
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {isMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="overflow-hidden flex flex-col items-center justify-start"
            >
              <div className="w-full flex flex-col items-center py-8 space-y-6">
                {navLinks.map((link, index) => (
                  <div key={link.href} className="w-full flex flex-col items-center">
                    <div className="overflow-hidden px-4">
                      <motion.div
                        custom={index}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <Link
                          href={link.href}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setHoveredIndex(null);
                          }}
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}
                          className="text-3xl font-bold uppercase tracking-widest text-foreground transition-all duration-300"
                          style={{
                            opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.3 : 1,
                          }}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    </div>
                    {index < navLinks.length - 1 && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                        className="w-20 h-[2px] bg-line mt-6"
                      />
                    )}
                  </div>
                ))}

                <div className="pt-6">
                  <motion.div
                    custom={navLinks.length}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <button
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                      className="p-5 rounded-full bg-card-bg border border-card-border text-card-text-secondary hover:text-foreground hover:scale-110 transition-all duration-300 shadow-sm"
                      aria-label="Toggle theme"
                    >
                      {mounted && theme === "dark" ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                      )}
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
