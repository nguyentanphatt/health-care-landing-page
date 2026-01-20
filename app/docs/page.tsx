import { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { setupSteps } from "@/lib/data";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Setup and run instructions for HealthApp - Install dependencies, start the dev server, and run on different platforms.",
};

export default function DocsPage() {
  return (
    <div className="min-h-screen py-20">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <AnimatedSection className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-card-text mb-6">
            <span className="gradient-text">Documentation</span>
          </h1>
          <p className="text-lg text-card-text-secondary max-w-2xl mx-auto">
            Get started with HealthApp development - setup instructions and useful scripts.
          </p>
        </AnimatedSection>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-card-text mb-8">Setup & Run</h2>
        </AnimatedSection>

        <div className="space-y-6">
          {setupSteps.map((step, index) => (
            <AnimatedSection key={step.title} delay={index * 0.1}>
              <div className="bg-card-bg rounded-2xl p-6 shadow-sm border border-card-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-card-text mb-2">
                      {step.title}
                    </h3>
                    <p className="text-card-text-secondary mb-4">{step.description}</p>

                    {step.command && (
                      <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 font-mono text-sm">
                        <code className="text-emerald-400">{step.command}</code>
                      </div>
                    )}

                    {step.commands && (
                      <div className="space-y-2">
                        {step.commands.map((cmd, i) => (
                          <div key={i} className="bg-gray-900 dark:bg-gray-950 rounded-lg p-3 font-mono text-sm">
                            <code className="text-emerald-400">{cmd}</code>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-card-text mb-8">Running Options</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-800">
            <p className="text-card-text-secondary mb-4">You can open the app via:</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-card-text-secondary">Expo Go on a physical device</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-card-text-secondary">Android Emulator / iOS Simulator</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-card-text-secondary">A development build (if configured)</span>
              </li>
            </ul>
          </div>
        </AnimatedSection>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-card-text mb-8">Useful Scripts</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="bg-card-bg rounded-2xl overflow-hidden shadow-sm border border-card-border">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-card-text">Command</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-card-text">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4"><code className="text-emerald-600 dark:text-emerald-400">npm start</code></td>
                  <td className="px-6 py-4 text-card-text-secondary">Start the dev server</td>
                </tr>
                <tr>
                  <td className="px-6 py-4"><code className="text-emerald-600 dark:text-emerald-400">npm run android</code></td>
                  <td className="px-6 py-4 text-card-text-secondary">Run on Android emulator/device</td>
                </tr>
                <tr>
                  <td className="px-6 py-4"><code className="text-emerald-600 dark:text-emerald-400">npm run ios</code></td>
                  <td className="px-6 py-4 text-card-text-secondary">Run on iOS simulator (macOS)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4"><code className="text-emerald-600 dark:text-emerald-400">npm run web</code></td>
                  <td className="px-6 py-4 text-card-text-secondary">Run on web (if supported)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4"><code className="text-emerald-600 dark:text-emerald-400">npm run lint</code></td>
                  <td className="px-6 py-4 text-card-text-secondary">Run linter (if configured)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-card-text mb-8">Resources</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid sm:grid-cols-2 gap-6">
            <a href="https://www.figma.com/design/ZaRVF6WRn12aYFgCpMooQ5/HealthCare" target="_blank" rel="noopener noreferrer"
              className="group bg-card-bg rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border border-card-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm3.61 6H14c-.31 0-.59.1-.82.24L12 9.42l-1.18-1.18C10.59 8.1 10.31 8 10 8H8.39c-.28 0-.54.11-.71.29L6 10l1.68 1.68c.19.18.45.29.71.29H10c.31 0 .59-.1.82-.24L12 10.58l1.18 1.18c.23.14.51.24.82.24h1.61c.28 0 .54-.11.71-.29L18 10l-1.68-1.68c-.17-.18-.43-.32-.71-.32z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-card-text group-hover:text-emerald-600 transition-colors">Figma Design</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">View the UI/UX design</p>
                </div>
              </div>
            </a>

            <a href="https://docs.expo.dev" target="_blank" rel="noopener noreferrer"
              className="group bg-card-bg rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border border-card-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-card-text group-hover:text-emerald-600 transition-colors">Expo Documentation</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Learn more about Expo</p>
                </div>
              </div>
            </a>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
