import { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { techStack, projectStructure } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tech Stack",
  description: "Explore the technology stack and architecture behind HealthApp.",
};

const categoryColors: Record<string, string> = {
  Core: "bg-badge-blue-bg text-badge-blue-text",
  "Expo SDK": "bg-badge-purple-bg text-badge-purple-text",
  UI: "bg-badge-pink-bg text-badge-pink-text",
  Storage: "bg-badge-orange-bg text-badge-orange-text",
  State: "bg-badge-green-bg text-badge-green-text",
  Internationalization: "bg-badge-teal-bg text-badge-teal-text",
};

export default function TechPage() {
  return (
    <div className="min-h-screen py-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <AnimatedSection className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Tech Stack</span> & Architecture
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Built with modern technologies for performance and scalability.
          </p>
        </AnimatedSection>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-8">Technologies</h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((tech, index) => (
            <AnimatedSection key={tech.name} delay={index * 0.05}>
              <div className="bg-card-bg rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border border-card-border h-full">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold">{tech.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[tech.category] || "bg-gray-100 text-gray-700"}`}>
                    {tech.category}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{tech.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-8">Project Structure</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="bg-card-bg rounded-2xl p-8 shadow-sm border border-card-border">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectStructure.map((item) => (
                <div key={item.folder} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold font-mono">{item.folder}</h3>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                  <ul className="pl-14 space-y-1">
                    {item.subfolders.map((subfolder, i) => (
                      <li key={i} className="text-sm flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        <code className="text-xs">{subfolder}</code>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-8">Learn More</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Expo", url: "https://docs.expo.dev", desc: "Expo documentation" },
              { name: "Zustand", url: "https://docs.pmnd.rs/zustand", desc: "State management" },
              { name: "TanStack Query", url: "https://tanstack.com/query", desc: "Data fetching" },
              { name: "i18next", url: "https://react.i18next.com", desc: "Internationalization" },
            ].map((resource) => (
              <a key={resource.name} href={resource.url} target="_blank" rel="noopener noreferrer"
                className="group bg-card-bg rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border border-card-border">
                <h3 className="text-lg font-semibold text-card-text group-hover:text-emerald-600 transition-colors">
                  {resource.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{resource.desc}</p>
              </a>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
