import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Activity Tracking - HealthApp",
  description: "Track your activities in real-time with GPS for distance, speed, and calorie tracking.",
};

export default function RunningFeaturePage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Link
            href="/features"
            className="inline-flex items-center text-primary mb-6 hover:text-sky-600 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Features
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Activity Tracking
          </h1>
          <p className="text-xl text-card-text-secondary max-w-3xl mx-auto">
            Track your activities in real-time with GPS for distance, current/average/max speed. Step counting using Accelerometer estimates movement intensity and calories burned.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <AnimatedSection delay={0.1}>
            <div className="bg-card-bg min-h-[140vh] rounded-2xl shadow-lg overflow-hidden border border-card-border">
              <Image
                src="/images/running-activity.jpg"
                alt="Start Running"
                width={400}
                height={800}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-card-text mb-2">Start Activity</h3>
                <p className="text-card-text-secondary">Begin your running session with GPS tracking</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-card-bg min-h-[140vh] rounded-2xl shadow-lg overflow-hidden border border-card-border">
              <Image
                src="/images/running-start.jpg"
                alt="Activity in Progress"
                width={400}
                height={800}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-card-text mb-2">Live Tracking</h3>
                <p className="text-card-text-secondary">Real-time stats including distance, speed, and calories</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="bg-card-bg min-h-[140vh] rounded-2xl shadow-lg overflow-hidden border border-card-border">
              <Image
                src="/images/running-result.jpg"
                alt="Activity Results"
                width={400}
                height={800}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-card-text mb-2">Session Results</h3>
                <p className="text-card-text-secondary">Detailed summary after completing your activity</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.4}>
          <div className="bg-gradient-to-r from-cyan-500 to-teal-600 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-white mb-8">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Real-time GPS tracking for distance",
                "Current, average, and max speed display",
                "Step counting with accelerometer",
                "Calorie burn estimation",
                "Activity history and sessions",
                "Route mapping on interactive maps",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
