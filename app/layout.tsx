import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { PageTransition } from "@/components/PageTransition";
import { LoadingScreen } from "@/components/LoadingScreen";
import { RefreshHandler } from "@/components/RefreshHandler";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Health Care - Personal Health Tracking Application",
    template: "%s | Health Care",
  },
  description: "A wellness mobile application that helps users track their daily habits including water intake, running activity, sleep quality, and nutrition. Built with React Native + Expo.",
  keywords: ["health", "wellness", "fitness", "tracking", "mobile app", "react native", "expo"],
  authors: [{ name: "HealthApp Team" }],
  openGraph: {
    title: "HealthApp - Personal Health Tracking Application",
    description: "Track your daily habits including water intake, running activity, sleep quality, and nutrition.",
    url: "https://healthapp.example.com",
    siteName: "HealthApp",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HealthApp - Personal Health Tracking Application",
    description: "Track your daily habits including water intake, running activity, sleep quality, and nutrition.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          <RefreshHandler />
          <LoadingScreen />
          <PageTransition>
            <SmoothScroll>
              <Header />
              <main className="pt-16">{children}</main>
              <Footer />
            </SmoothScroll>
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
