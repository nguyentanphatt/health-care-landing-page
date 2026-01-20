import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Nutrition Tracking - HealthApp",
  description: "Keep track of what you eat with our nutrition tracking feature. Browse and view detailed food information.",
};

export default function FoodFeaturePage() {
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
            Nutrition Tracking
          </h1>
          <p className="text-xl text-card-text-secondary max-w-3xl mx-auto">
            Keep track of what you eat with our nutrition tracking feature. Browse and view detailed food information, and easily add new foods to your nutrition log.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <AnimatedSection delay={0.1}>
            <div className="bg-card-bg rounded-2xl shadow-lg overflow-hidden border border-card-border">
              <Image
                src="/images/food-main.jpg"
                alt="Food Tracking Main"
                width={400}
                height={800}
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-card-text mb-2">Food List</h3>
                <p className="text-card-text-secondary text-sm">Browse your daily food intake</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-card-bg rounded-2xl shadow-lg overflow-hidden border border-card-border">
              <Image
                src="/images/upload-food.jpg"
                alt="Upload Food"
                width={400}
                height={800}
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-card-text mb-2">Add Food</h3>
                <p className="text-card-text-secondary text-sm">Upload and add new foods easily</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="bg-card-bg rounded-2xl shadow-lg overflow-hidden border border-card-border">
              <Image
                src="/images/food-after-add.jpg"
                alt="Food Added"
                width={400}
                height={800}
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-card-text mb-2">Food Details</h3>
                <p className="text-card-text-secondary text-sm">View nutritional information</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="bg-card-bg rounded-2xl shadow-lg overflow-hidden border border-card-border">
              <Image
                src="/images/nutrition-chart.jpg"
                alt="Nutrition Chart"
                width={400}
                height={800}
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-card-text mb-2">Nutrition Chart</h3>
                <p className="text-card-text-secondary text-sm">Visual breakdown of nutrients</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.5}>
          <div className="bg-gradient-to-r from-cyan-500 to-teal-600 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-white mb-8">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Browse and search food database",
                "Add custom foods with photos",
                "Track calories and macros",
                "Nutrition pie chart visualization",
                "Daily and weekly meal logs",
                "Meal planning and suggestions",
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
