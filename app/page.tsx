"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FeatureCard } from "@/components/FeatureCard";
import { MarqueeText } from "@/components/MarqueeText";
import { ParallaxVideo } from "@/components/ParallaxVideo";
import { features, useCases } from "@/lib/data";

export default function Home() {
  const [entranceDelay, setEntranceDelay] = useState(0.5);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("hasLoaded");
    if (!hasLoaded) {
      setEntranceDelay(3);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen lg:h-screen lg:max-h-screen flex items-center hero-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1, once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: entranceDelay,
                }
              }
            }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-8">
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] } }
                }}
                className="inline-flex items-center px-4 py-1.5 bg-badge-blue-bg text-badge-blue-text backdrop-blur-sm rounded-full text-sm font-semibold tracking-wide"
              >
                <span className="w-2 h-2 bg-badge-blue-text rounded-full mr-2 animate-pulse shadow-[0_0_8px_rgba(14,165,233,0.5)]"></span>
                Built with React Native
              </motion.div>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] } }
                }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Your Personal{" "}
                <span className="gradient-text">Health Tracking</span>{" "}
                Companion
              </motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] } }
                }}
                className="text-lg sm:text-xl text-card-text-secondary max-w-xl"
              >
                A wellness mobile application that helps users track their daily habits including water intake, running activity, sleep quality, and nutrition.
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] } }
                }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/features"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-400 to-blue-600 text-white font-semibold rounded-xl hover:from-sky-500 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40"
                >
                  Explore Features
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
            </div>

            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.9, x: 30 },
                visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] } }
              }}
              className="relative lg:flex lg:items-center lg:justify-center"
            >
              <div className="relative lg:max-w-md xl:max-w-lg">
                <div className="absolute -top-4 -right-4 w-48 h-48 lg:w-56 lg:h-56 bg-sky-400/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-4 -left-4 w-48 h-48 lg:w-56 lg:h-56 bg-blue-400/20 rounded-full blur-3xl"></div>

                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/home.jpg"
                    alt="HealthApp Activity Tracking"
                    width={500}
                    height={350}
                    className="w-full h-auto object-cover lg:max-h-[80vh] lg:w-auto"
                    priority
                  />
                </div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { delay: 1, duration: 0.6 } }
                  }}
                  className="absolute -left-4 lg:-left-2 top-1/4 bg-card-bg border border-card-border rounded-xl shadow-lg p-3 lg:p-2 animate-float z-20"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 lg:w-7 lg:h-7 bg-sky-100 dark:bg-sky-900/50 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 lg:w-3.5 lg:h-3.5 text-sky-600 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs lg:text-[10px] text-card-text-secondary">Steps Today</p>
                      <p className="text-base lg:text-sm font-bold text-card-text">8,432</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.6 } }
                  }}
                  className="absolute -right-4 lg:-right-2 bottom-1/4 bg-card-bg border border-card-border rounded-xl shadow-lg p-3 lg:p-2 animate-float z-20" style={{ animationDelay: "0.5s" }}>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 lg:w-7 lg:h-7 bg-sky-100 dark:bg-sky-900/50 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 lg:w-3.5 lg:h-3.5 text-sky-600 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs lg:text-[10px] text-card-text-secondary">Water Goal</p>
                      <p className="text-base lg:text-sm font-bold text-card-text">2.1L / 2.5L</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ParallaxVideo />

      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything You Need to Track Your Health
            </h2>
            <p className="text-lg text-card-text-secondary max-w-2xl mx-auto">
              Comprehensive features designed to help you maintain a healthy lifestyle
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.slice(0, 8).map((feature, index) => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.shortDesc}
                icon={feature.icon}
                index={index}
                url={feature.url}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/features"
              className="inline-flex items-center text-sky-500 dark:text-sky-400 font-semibold hover:text-sky-600 dark:hover:text-sky-300 transition-colors"
            >
              View All Features
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>


      <MarqueeText text="Your Health Journey Starts Here" />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How HealthApp Helps You
            </h2>
            <p className="text-lg text-card-text-secondary max-w-2xl mx-auto">
              Real scenarios where HealthApp makes a difference in your daily routine
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <AnimatedSection key={useCase.title} delay={index * 0.1}>
                <div className="bg-card-bg  rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-card-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-card-text mb-2">
                        {useCase.title}
                      </h3>
                      <p className="text-card-text-secondary">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl p-12 text-center overflow-hidden">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>

              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Ready to Start Your Health Journey?
                </h2>
                <p className="text-lg text-sky-100 mb-8 max-w-xl mx-auto">
                  Explore the documentation to set up HealthApp and begin tracking your wellness goals today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div
                    onClick={() => {
                      window.open("https://drive.google.com/file/d/1_CcAiJPj5d1CjrmiyZMf0bbIFjqQVP0g/view?usp=drive_link", "_blank");
                    }}
                    className="cursor-pointer inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    Download
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <Link
                    href="/tech"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/20"
                  >
                    View Tech Stack
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
