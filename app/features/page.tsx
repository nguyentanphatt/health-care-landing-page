import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { features } from "@/lib/data";

export const metadata: Metadata = {
  title: "Features",
  description: "Explore all the features of HealthApp - Health Overview, Activity Tracking, Water Management, Sleep Tracking, Nutrition Tracking, Workout Training, Health Blog, and Account Settings.",
};

const iconMap: Record<string, React.ReactNode> = {
  dashboard: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  activity: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  water: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  sleep: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  ),
  nutrition: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  workout: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  news: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
    </svg>
  ),
  statistics: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  settings: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

const featureRoutes: Record<string, string> = {
  "health-overview": "/",
  "activity-tracking": "/features/running",
  "water-management": "/features/water",
  "sleep-tracking": "/features/sleep",
  "nutrition-tracking": "/features/food",
  "workout-training": "/features/workout",
  "health-news": "/features/blog",
  "statistics-profile": "/features/statistics",
  "account-settings": "/features/statistics",
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen py-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <AnimatedSection className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            All <span className="gradient-text">Features</span>
          </h1>
          <p className="text-lg text-card-text-secondary max-w-2xl mx-auto">
            Discover all the features that make HealthApp your perfect companion for tracking health and wellness.
          </p>
        </AnimatedSection>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.id} delay={index * 0.1}>
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl text-white mb-6">
                    {iconMap[feature.icon] || iconMap.dashboard}
                  </div>
                  <h2 className="text-3xl font-bold mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-card-text-secondary mb-6">
                    {feature.fullDesc}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {getFeatureHighlights(feature.id).map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-sky-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-card-text-secondary">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {featureRoutes[feature.id] && featureRoutes[feature.id] !== "/" && (
                    <Link
                      href={featureRoutes[feature.id]}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-400 to-blue-600 text-white font-semibold rounded-xl hover:from-sky-500 hover:to-blue-700 transition-all duration-300"
                    >
                      View Details
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <Link href={featureRoutes[feature.id] || "#"}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                      <div className="absolute inset-0 group-hover:from-sky-400/20 group-hover:to-blue-500/20 transition-all duration-300"></div>
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={600}
                        height={400}
                        className="w-full h-80 lg:h-[80vh] object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}

function getFeatureHighlights(featureId: string): string[] {
  const highlights: Record<string, string[]> = {
    "health-overview": [
      "View daily steps, distance, and calories",
      "Monitor sleep duration and quality",
      "Track water intake progress",
      "See recent activity history",
    ],
    "activity-tracking": [
      "Real-time GPS tracking for distance and speed",
      "Step counting using Accelerometer",
      "Movement intensity (MV) estimation",
      "Detailed session history and statistics",
    ],
    "water-management": [
      "Set personalized daily water goals",
      "Edit and adjust goals as needed",
      "Receive timely hydration reminders",
      "Track daily progress visually",
    ],
    "sleep-tracking": [
      "Record sleep duration easily",
      "View basic sleep statistics",
      "Monitor sleep patterns over time",
      "Improve rest quality with insights",
    ],
    "nutrition-tracking": [
      "Browse food database",
      "View detailed nutritional information",
      "Add and upload new foods",
      "Track daily nutrition intake",
    ],
    "workout-training": [
      "Access guided workout video library",
      "Complete personalized surveys",
      "Track workout completion",
      "View detailed session results",
    ],
    "health-news": [
      "Read curated health articles",
      "View detailed article content",
      "Create and share your own articles",
      "Stay informed on health topics",
    ],
    "statistics-profile": [
      "View comprehensive health statistics",
      "Track weekly and monthly progress",
      "Manage your personal profile",
      "Customize app settings",
    ],
    "account-settings": [
      "Sign up, sign in, forgot password flows",
      "Account verification for security",
      "Profile and password management",
      "Configure units (kg/lb, cm/inch), language",
    ],
  };
  return highlights[featureId] || [];
}
