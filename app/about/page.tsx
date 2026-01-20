"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function AboutPage() {
    const team = [
        {
            name: "Nguyen Tan Phat",
            role: "Frontend Developer / UI/UX Designer",
            image: "/images/image01.jpg",
        },
        {
            name: "Phan Trung Hieu",
            role: "Backend Developer / Researcher",
            image: "/images/image02.jpg",
        },
    ];

    const values = [
        {
            title: "RESEARCH",
            description: "Based on scientific studies of daily activity and hydration impact on health.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5S19.832 5.477 21 6.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
        },
        {
            title: "SIMPLICITY",
            description: "Creating an accessible tool that anyone can use to monitor their well-being.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            title: "DEDICATION",
            description: "A project born from months of dedicated development and user-centered design.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 to-transparent dark:from-sky-900/20" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <AnimatedSection className="text-center">
                        <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                            Graduation <br />
                            <span className="text-sky-500">Thesis Project</span>
                        </h1>
                        <p className="text-xl text-card-text-secondary max-w-2xl mx-auto font-medium">
                            Developing a comprehensive mobile ecosystem to simplify health tracking. This project explores the fusion of modern tech and daily wellness habits.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <AnimatedSection delay={0.1}>
                            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                                <Image
                                    src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop"
                                    alt="Modern Health Research"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2} className="space-y-8">
                            <h2 className="text-3xl font-bold uppercase tracking-widest text-sky-500">Our Project</h2>
                            <div className="space-y-6 text-lg text-card-text">
                                <p>
                                    This application is the culmination of our graduation thesis. Our objective was to create a seamless digital companion that helps users monitor their essentials: water, sleep, activity, and nutrition.
                                </p>
                                <p>
                                    By focusing on user experience and real-time data visualization, we've built a platform that turns abstract health goals into achievable daily milestones.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <section className="py-32">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <AnimatedSection className="mb-20">
                        <h2 className="text-4xl font-bold uppercase tracking-tight mb-4">Core Principles</h2>
                        <div className="w-24 h-1 bg-sky-500 mx-auto" />
                    </AnimatedSection>

                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((v, i) => (
                            <AnimatedSection key={v.title} delay={i * 0.1}>
                                <div className="p-10 rounded-[2.5rem] bg-card-bg border border-card-border hover:border-sky-500/50 shadow-sm hover:shadow-xl transition-all duration-500 group h-full flex flex-col items-center">
                                    <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {v.icon}
                                    </div>
                                    <h3 className="text-xl font-bold uppercase tracking-widest mb-4">{v.title}</h3>
                                    <p className="text-card-text-secondary leading-relaxed">{v.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <AnimatedSection className="text-center mb-20">
                        <h2 className="text-4xl font-bold uppercase tracking-tight mb-4">Project Members</h2>
                        <p className="text-card-text-secondary">The two-person team behind this development</p>
                    </AnimatedSection>

                    <div className="grid sm:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        {team.map((member, i) => (
                            <AnimatedSection key={member.name} delay={i * 0.1}>
                                <div className="group text-center">
                                    <div className="relative aspect-square rounded-[3rem] overflow-hidden mb-6 border-4 border-card-border shadow-xl shadow-card-border/50 dark:shadow-none transition-transform duration-500 group-hover:-translate-y-2">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-sky-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                    <h3 className="text-xl font-bold uppercase tracking-tight">{member.name}</h3>
                                    <p className="text-sky-500 text-sm font-bold uppercase tracking-widest mt-1">{member.role}</p>
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
