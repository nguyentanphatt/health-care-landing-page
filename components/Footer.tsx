"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  const marqueeItems = [
    "WATER TRACKING",
    "•",
    "SLEEP QUALITY",
    "•",
    "ACTIVITY TRACKING",
    "•",
    "NUTRITION",
    "•",
    "WORKOUT",
    "•",
    "HEALTH BLOG",
    "•",
    "STATISTICS",
    "•",
  ];

  const allItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <footer className="min-h-screen bg-background flex flex-col">
      <motion.div
        className="border-b border-card-border"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span className="text-xl font-bold">Health Care</span>
          </motion.div>
          <motion.a
            href="#"
            className="px-6 py-2.5 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("https://drive.google.com/file/d/1_CcAiJPj5d1CjrmiyZMf0bbIFjqQVP0g/view?usp=drive_link", "_blank")}
          >
            Download
          </motion.a>
        </div>
      </motion.div>

      <div className="flex-1 flex items-center justify-center border-b border-card-border overflow-hidden group">
        <motion.h2
          className="text-[10vw] lg:text-[12vw] font-bold tracking-tighter text-center leading-none px-4 cursor-pointer transition-all duration-500 hover:tracking-normal"
          initial={{ opacity: 0, scale: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            background: "linear-gradient(90deg, #19B1FF, #06B6D4, #8B5CF6, #EC4899, #19B1FF)",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "gradient-shift 3s ease infinite",
          }}
        >
          HEATH CARE
        </motion.h2>
      </div>

      <motion.div
        className="py-4 border-b border-card-border overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {allItems.map((item, index) => (
            <span
              key={index}
              className="mx-4 text-sm font-bold text-card-text-secondary uppercase tracking-widest"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </motion.div>

      <div className="border-t border-card-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              className="col-span-1 md:col-span-2 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-card-text-secondary text-sm max-w-md">
                A wellness mobile application that helps users track their daily habits including water intake, running activity, sleep quality, and nutrition.
              </p>
              <div className="space-y-2">
                <p className="text-card-text-secondary text-sm">
                  <span className="font-medium">Email: nguyentanphattt0907@gmail.com</span>{" "}
                </p>
                <p className="text-card-text-secondary text-sm">
                  <span className="font-medium">Email: phantrunghieu1109@gmail.com</span>{" "}
                </p>
                <p className="text-card-text-secondary text-sm">
                  <span className="font-medium">Location: Ho Chi Minh City, Vietnam</span>{" "}
                </p>
              </div>
            </motion.div>

            <div className="col-span-1 md:col-span-2 grid grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="col-span-1"
              >
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Navigation</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-card-text-secondary hover:text-primary hover:translate-x-1 inline-block transition-all text-sm">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/features" className="text-card-text-secondary hover:text-primary hover:translate-x-1 inline-block transition-all text-sm">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/tech" className="text-card-text-secondary hover:text-primary hover:translate-x-1 inline-block transition-all text-sm">
                      Tech Stack
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-card-text-secondary hover:text-primary hover:translate-x-1 inline-block transition-all text-sm">
                      About
                    </Link>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="col-span-1"
              >
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://docs.expo.dev" target="_blank" rel="noopener noreferrer" className="text-card-text-secondary hover:text-primary hover:translate-x-1 inline-block transition-all text-sm">
                      Expo Docs
                    </a>
                  </li>
                  <li>
                    <a href="https://docs.pmnd.rs/zustand" target="_blank" rel="noopener noreferrer" className="text-card-text-secondary hover:text-primary hover:translate-x-1 inline-block transition-all text-sm">
                      Zustand
                    </a>
                  </li>
                  <li>
                    <a href="https://www.figma.com/design/ZaRVF6WRn12aYFgCpMooQ5/HealthCare" target="_blank" rel="noopener noreferrer" className="text-card-text-secondary hover:text-primary hover:translate-x-1 inline-block transition-all text-sm">
                      Figma Design
                    </a>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="mt-8 pt-6 border-t border-card-border flex flex-col md:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-card-text-secondary text-sm">
              © {new Date().getFullYear()}
            </p>
            <div className="flex items-center gap-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-card-text-secondary hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </motion.a>
              <motion.a
                href="https://www.figma.com/design/ZaRVF6WRn12aYFgCpMooQ5/HealthCare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-card-text-secondary hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 14">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.00005 2.04999H5.52505C4.71043 2.04999 4.05005 2.71037 4.05005 3.52499C4.05005 4.33961 4.71043 4.99999 5.52505 4.99999H7.00005V2.04999ZM7.00005 1.04999H8.00005H9.47505C10.842 1.04999 11.95 2.15808 11.95 3.52499C11.95 4.33163 11.5642 5.04815 10.9669 5.49999C11.5642 5.95184 11.95 6.66836 11.95 7.475C11.95 8.8419 10.842 9.95 9.47505 9.95C8.92236 9.95 8.41198 9.76884 8.00005 9.46266V9.95L8.00005 11.425C8.00005 12.7919 6.89195 13.9 5.52505 13.9C4.15814 13.9 3.05005 12.7919 3.05005 11.425C3.05005 10.6183 3.43593 9.90184 4.03317 9.44999C3.43593 8.99814 3.05005 8.28163 3.05005 7.475C3.05005 6.66836 3.43594 5.95184 4.03319 5.5C3.43594 5.04815 3.05005 4.33163 3.05005 3.52499C3.05005 2.15808 4.15814 1.04999 5.52505 1.04999H7.00005ZM8.00005 2.04999V4.99999H9.47505C10.2897 4.99999 10.95 4.33961 10.95 3.52499C10.95 2.71037 10.2897 2.04999 9.47505 2.04999H8.00005ZM5.52505 8.94998H7.00005L7.00005 7.4788L7.00005 7.475L7.00005 7.4712V6H5.52505C4.71043 6 4.05005 6.66038 4.05005 7.475C4.05005 8.28767 4.70727 8.94684 5.5192 8.94999L5.52505 8.94998ZM4.05005 11.425C4.05005 10.6123 4.70727 9.95315 5.5192 9.94999L5.52505 9.95H7.00005L7.00005 11.425C7.00005 12.2396 6.33967 12.9 5.52505 12.9C4.71043 12.9 4.05005 12.2396 4.05005 11.425ZM8.00005 7.47206C8.00164 6.65879 8.66141 6 9.47505 6C10.2897 6 10.95 6.66038 10.95 7.475C10.95 8.28962 10.2897 8.95 9.47505 8.95C8.66141 8.95 8.00164 8.29121 8.00005 7.47794V7.47206Z"
                  />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
