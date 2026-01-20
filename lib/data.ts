// Content data extracted from README.md - HealthApp

export const features = [
  {
    id: "health-overview",
    title: "Health Overview",
    shortDesc: "Dashboard showing steps, distance, calories, sleep, water intake, and recent activities",
    fullDesc: "Get a comprehensive view of your health metrics at a glance. The dashboard displays your daily steps, distance traveled, calories burned, sleep duration, water intake, and recent activities all in one place.",
    icon: "dashboard",
    image: "/images/home.jpg",
    url: "statistics"
  },
  {
    id: "activity-tracking",
    title: "Activity Tracking",
    shortDesc: "Real-time GPS tracking with step counting and calorie estimation",
    fullDesc: "Track your activities in real-time with GPS for distance, current/average/max speed. Step counting using Accelerometer estimates movement intensity (MV) and calories burned. Save and view your activity history with detailed session screens.",
    icon: "activity",
    image: "/images/running-activity.jpg",
    url: "running"
  },
  {
    id: "water-management",
    title: "Water Management",
    shortDesc: "Set daily water intake goals and receive reminders",
    fullDesc: "Stay hydrated with personalized water intake goals. Set and edit your daily targets, and receive timely reminders to ensure you drink enough water throughout the day.",
    icon: "water",
    image: "/images/water-main.jpg",
    url: "water"
  },
  {
    id: "sleep-tracking",
    title: "Sleep Tracking",
    shortDesc: "Record sleep duration and view basic statistics",
    fullDesc: "Monitor your sleep patterns by recording your sleep duration. View basic statistics to understand your sleep habits and improve your rest quality.",
    icon: "sleep",
    image: "/images/sleep-info.jpg",  
    url: "sleep"
  },
  {
    id: "nutrition-tracking",
    title: "Nutrition Tracking",
    shortDesc: "List and view food details, add new foods",
    fullDesc: "Keep track of what you eat with our nutrition tracking feature. Browse and view detailed food information, and easily add new foods to your nutrition log.",
    icon: "nutrition",
    image: "/images/food-main.jpg",
    url: "food"
  },
  {
    id: "workout-training",
    title: "Workout Training",
    shortDesc: "Follow guided workout videos and track your exercise progress",
    fullDesc: "Access a library of workout videos with step-by-step guidance. Complete workout surveys to personalize your training plan and view detailed results of your exercise sessions.",
    icon: "workout",
    image: "/images/workout-video.jpg",
    url: "workout"
  },
  {
    id: "health-news",
    title: "Health Blog",
    shortDesc: "Read health articles and create new content",
    fullDesc: "Stay informed with the latest health news and articles. Browse through curated content, read detailed articles, and even create your own health-related posts.",
    icon: "news",
    image: "/images/blog-main.jpg",
    url: "blog"
  },
  {
    id: "profile",
    title: "Profile",
    shortDesc: "View detailed statistics and manage your profile settings",
    fullDesc: "Access comprehensive statistics about your health journey. Manage your profile, update personal information, and customize app settings to your preferences.",
    icon: "statistics",
    image: "/images/statistic.jpg",
    url: "statistics"
  }
];

export const techStack = [
  {
    name: "React Native",
    description: "Cross-platform mobile development framework",
    category: "Core",
  },
  {
    name: "Expo Router",
    description: "File-based routing for React Native",
    category: "Core",
  },
  {
    name: "TypeScript",
    description: "Type-safe JavaScript for better developer experience",
    category: "Core",
  },
  {
    name: "expo-location",
    description: "GPS tracking for activity monitoring",
    category: "Expo SDK",
  },
  {
    name: "expo-sensors (Accelerometer)",
    description: "Step counting and movement intensity detection",
    category: "Expo SDK",
  },
  {
    name: "expo-notifications",
    description: "Reminders and tracking status notifications",
    category: "Expo SDK",
  },
  {
    name: "React Native Maps",
    description: "Display maps and activity routes",
    category: "UI",
  },
  {
    name: "AsyncStorage",
    description: "Local persistence for tracking sessions and app state",
    category: "Storage",
  },
  {
    name: "Zustand",
    description: "State management for auth, user, toast, modal, and more",
    category: "State",
  },
  {
    name: "i18n (react-i18next)",
    description: "Multi-language support with JSON locale files",
    category: "Internationalization",
  },
];

export const projectStructure = [
  {
    folder: "app/",
    description: "Main application screens",
    subfolders: [
      "(tabs)/ – main tab screens",
      "activity/ – activity tracking, history, statistics",
      "auth/ – sign in, sign up, forgot password, verify",
      "food/, sleep/, water/, work/, news/, user/setting/ – feature modules",
    ],
  },
  {
    folder: "components/",
    description: "Reusable UI components",
    subfolders: ["ActivityCard, ReminderList, LockScreen, etc."],
  },
  {
    folder: "hooks/",
    description: "Custom React hooks",
    subfolders: [
      "useActivityTracking.ts – centralized activity tracking logic",
      "useUnits.ts, useNotification.ts – utility hooks",
    ],
  },
  {
    folder: "context/",
    description: "React contexts for global state",
    subfolders: ["appThemeContext.tsx, unitContext.tsx – theme and unit settings"],
  },
  {
    folder: "stores/",
    description: "Zustand state stores",
    subfolders: ["Auth, user, toast, modal stores"],
  },
  {
    folder: "utils/",
    description: "Shared utilities and helpers",
    subfolders: [
      "activityHelper.ts – distance, speed, time, calories calculations",
      "activityNotificationService.ts – notification helpers",
      "convertTime.ts, convertMeasure.ts, validate.ts",
    ],
  },
];

export const setupSteps = [
  {
    title: "Install dependencies",
    command: "npm install",
    description: "Install all required packages",
  },
  {
    title: "Start the app (dev)",
    command: "npm start",
    description: "Start the Expo development server",
  },
  {
    title: "Run on platforms",
    commands: [
      "npm run android – Run on Android emulator/device",
      "npm run ios – Run on iOS simulator (macOS)",
      "npm run web – Run on web (if supported)",
    ],
    description: "Choose your target platform",
  },
];

export const useCases = [
  {
    title: "Daily Health Tracking",
    description: "Track your steps, distance, and calories burned throughout the day with real-time GPS and accelerometer data.",
  },
  {
    title: "Stay Hydrated",
    description: "Set personalized water intake goals and receive timely reminders to maintain optimal hydration levels.",
  },
  {
    title: "Better Sleep",
    description: "Monitor your sleep patterns and view statistics to improve your rest quality and daily energy.",
  },
  {
    title: "Nutrition Awareness",
    description: "Log your meals and track nutritional intake to make informed dietary choices.",
  },
];
