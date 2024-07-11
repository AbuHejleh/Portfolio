import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  reactjs,
  tailwind,
  solutionsnow,
  ats,
  htu,
  pwc,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Android Developer",
    company_name: "Adaptive TechSoft",
    icon: ats,
    iconBg: "#fff",
    date: "Sept 2020 - Dec 2020",
    points: [
      "Learn and practice building Android apps using Kotlin and Java.",
      "Understand Android Studio and its tools.",
      "Learn the basics of Android UI components: layouts, views, and view groups.",
      "Practice designing responsive and adaptive user interfaces.",
      "Practice making network requests using Retrofit and handling JSON data.",
    ],
  },
  {
    title: "Flutter Internship",
    company_name: "Al Hussein Technical University (HTU)",
    icon: htu,
    iconBg: "#fff",
    date: "Apr 2021 - Jul 2021",
    points: [
      "Flutter: learning dart, widgets, trees, API, OOP and design.",
      "English language: writing reports, conversation and email writing.",
      "Soft skills: life and employability skills, such as time management, positive attitude, communication skills and goal setting.",
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "Solutions Now",
    icon: solutionsnow,
    iconBg: "#fff",
    date: "Aug 2021 - Oct 2022",
    points: [
      "Implementing and managing state using providers, Riverpod, or Bloc for scalable and maintainable applications.",
      "Analyzing and improving app performance using the Flutter DevTools.",
      "Minimizing widget rebuilds and optimizing widget tree structures for better performance.",
      "Creating custom animations using the AnimationController and Tween classes.",
      "Integrating RESTful APIs and handling network requests with the http package or Dio.",
      "Using Firebase for real-time data synchronization and offline capabilities.",
      "Managing complex navigation flows using nested navigators and custom route transitions.",
      "Implementing deep linking and URL routing for web and mobile apps with the go_router package.",
      "Implementing secure authentication mechanisms using Firebase Authentication, OAuth, or JWT.",
      "Writing and maintaining unit tests, widget tests, and integration tests to ensure app reliability.",
      "Managing state persistence using Hive, Shared Preferences, or SQLite.",
      "Preparing and publishing apps to Google Play Store and Apple App Store.",
    ],
  },
  {
    title: "Software Consultant",
    company_name: "PwC Middle East",
    icon: pwc,
    iconBg: "#fff",
    date: "Nov 2022 - May 2024",
    points: [
      "Designing scalable and maintainable architectures using VIPER, or other architectural patterns.",
      "Creating complex animations and transitions using SwiftUI, including custom animations and gesture-driven interactions.",
      "Developing custom views and view modifiers to extend the functionality of SwiftUI components.",
      "Techniques for optimizing the performance of SwiftUI applications, including efficient rendering and memory management.",
      "Implementing advanced patterns such as Higher-Order Components (HOCs), Render Props, and Context API.",
      "Techniques for optimizing the performance of React applications, including memoization, code-splitting, and lazy loading.",
      "Implementing SSR with frameworks like Next.js to improve SEO and initial load performance.",
      "Handling complex forms and validation using libraries like Formik and Yup.",
      "Using agile methodologies and tools like JIRA or Trello for managing project timelines and deliverables.",
      "Conducting thorough code reviews and implementing best practices for code quality and maintainability.",
    ],
  },
];

export { services, technologies, experiences };
