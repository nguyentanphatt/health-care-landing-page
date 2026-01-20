import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Water Management - HealthApp",
  description: "Stay hydrated with personalized water intake goals. Set and edit your daily targets, and receive timely reminders.",
};

export default function WaterFeaturePage() {
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
            Water Management
          </h1>
          <p className="text-xl text-card-text-secondary max-w-3xl mx-auto">
            Stay hydrated with personalized water intake goals. Set and edit your daily targets, and receive timely reminders to ensure you drink enough water throughout the day.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <AnimatedSection delay={0.1}>
            <div className="bg-card-bg rounded-2xl shadow-lg overflow-hidden border border-card-border">
              <Image
                src="/images/water-main.jpg"
                alt="Water Tracking Main Screen"
                width={400}
                height={800}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-card-text mb-2">Daily Tracking</h3>
                <p className="text-card-text-secondary">Track your daily water intake with an intuitive interface</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="bg-card-bg rounded-2xl shadow-lg overflow-hidden border border-card-border">
              <Image
                src="/images/water-weekly.jpg"
                alt="Weekly Water Statistics"
                width={400}
                height={800}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-card-text mb-2">Weekly Statistics</h3>
                <p className="text-card-text-secondary">View your hydration trends over time with detailed charts</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-card-bg rounded-2xl shadow-lg overflow-hidden border border-card-border">
              <Image
                src="/images/water-recommend.jpg"
                alt="Water Recommendations"
                width={400}
                height={800}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-card-text mb-2">Smart Recommendations</h3>
                <p className="text-card-text-secondary">Get personalized hydration recommendations based on your current weather conditions</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.4}>
          <div className="bg-gradient-to-r from-cyan-500 to-teal-600 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-white mb-8">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Set personalized daily water intake goals",
                "Quick-add buttons for common cup sizes",
                "Smart reminders throughout the day",
                "Weekly and monthly statistics",
                "Track progress with visual indicators",
                "Sync with your activity level",
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
