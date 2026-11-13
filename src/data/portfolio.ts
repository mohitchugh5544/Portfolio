import type { Project, ProjectMetric } from "@/types/project";

export type { Project, ProjectMetric };

export interface SkillGroup {
  category: string;
  description: string;
  items: string[];
}

export interface TimelineItem {
  period: string;
  title: string;
  organization: string;
  description: string;
  tags: string[];
  current?: boolean;
}

export const jarvisAssistant = {
  id: "jarvis",
  title: "Jarvis",
  subtitle: "Voice-Enabled Multimodal AI Assistant with Native OS & iOS Integration",
  status: "Featured AI Project",
  description:
    "A full-featured multimodal desktop assistant bridging conversational AI with direct Windows 11 hardware control. Built around a tool-calling LLM loop powered by Google Gemini, Jarvis allows natural voice or text interaction to automate OS actions, query system telemetry, execute web searches, and perform screen vision analysis.",
  highlights: [
    "Hands-Free Voice Engine: Always-on 'Hey Jarvis' wake word detection with local int8 Whisper transcription and low-latency offline TTS",
    "Native Windows 11 Automation: Win32 & Core Audio control over system volume, brightness, media playback, application lifecycles, and screen lock",
    "Multimodal Screen Vision: Instant high-res GDI screenshot capture piped into Gemini Vision for error diagnosis and code explanation",
    "iOS Siri Remote Bridge: Secure FastAPI and Apple Shortcuts endpoint enabling iPhone Siri voice prompts to trigger PC automation over LAN or Tailscale",
  ],
  techStack: [
    "Python 3.12",
    "Google Gemini",
    "OpenAI SDK",
    "Faster-Whisper",
    "FastAPI",
    "PyQt6",
    "Win32 API",
    "Tailscale",
  ],
  liveUrl: "", // Desktop OS software (button auto-hides)
  githubUrl: "https://github.com/mohitchugh5544/Jarvis",
  videoUrl: "", // e.g. "/videos/jarvis.mp4"
  previewType: "jarvis-hud",
  metrics: [
    { label: "Speech Engine", value: "Local Whisper int8" },
    { label: "AI Reasoning", value: "Gemini Tool-Calling" },
    { label: "Remote Bridge", value: "iOS Siri & Shortcuts" },
  ],
} satisfies Project;

export const fitnessPlusVision = {
  id: "fitness-plus-vision",
  title: "Fitness+ Vision",
  subtitle: "AI Workout Form Analyzer",
  status: "Featured Project",
  description:
    "A computer vision app that tracks body pose from a webcam feed and gives live feedback on exercise form. It uses MediaPipe for pose detection, with my own logic on top for joint angles, rep counting, and posture checks.",
  highlights: [
    "Tracks 33 body landmarks in real time and computes joint angles from them",
    "Counts reps and grades range of motion for Squats, Bicep Curls, and Push-ups",
    "Flags posture deviations and shows session stats in a dashboard",
  ],
  techStack: [
    "Python",
    "OpenCV",
    "MediaPipe",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ],
  liveUrl: "", // TODO: deployed demo URL. The Live Demo button stays hidden while empty.
  githubUrl: "https://github.com/mohitchugh5544/Fitness-Vision",
  videoUrl: "/videos/fitness.mp4",
  previewType: "fitness-vision",
  metrics: [
    { label: "Pose landmarks", value: "33 (MediaPipe)" },
    { label: "Speed", value: "30 FPS real-time" },
    { label: "Exercises", value: "Squats, Curls & Push-ups" },
  ],
} satisfies Project;

export const riyaDresses = {
  id: "riya-dresses",
  title: "Riya Dresses",
  subtitle: "Storefront Website for a Local Clothing Brand",
  status: "Live in Production",
  description:
    "A mobile-first website I built and deployed for Riya Dresses, a real clothing business. Customers can browse collections on their phones and contact the shop directly.",
  highlights: [
    "Built and deployed for a real client, with the live site used by actual customers",
    "Responsive collection pages with optimized images for fast loading on mobile data",
    "Simple inquiry flow so customers can reach the shop in one tap via WhatsApp or phone call",
  ],
  techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase"],
  liveUrl: "https://riya-dresses.web.app",
  githubUrl: "https://github.com/mohitchugh5544/Riya-Dresses-Website",
  videoUrl: "", // TODO: e.g. "/videos/riya-dresses.mp4" (under 10s, muted, under 3 MB)
  imageUrl: "/rd-1.jpeg",
  images: ["/rd-1.jpeg", "/rd-2.jpeg", "/rd-3.jpeg"],
  previewType: "web-storefront",
  metrics: [
    { label: "Client", value: "Real business" },
    { label: "Catalog", value: "200+ products" },
    { label: "Inquiry Flow", value: "WhatsApp & Call" },
  ],
} satisfies Project;

// Helper: use in the card component so TODO placeholders never show on the live site.
export const getVisibleMetrics = (project: Project) =>
  project.metrics?.filter((m) => !m.value.startsWith("TODO")) ?? [];

export const portfolioData = {
  personal: {
    name: "Mohit Chugh",
    handle: "mohitchugh5544",
    role: "AI & ML Engineer · Full-Stack Developer",
    degree: "B.Tech in Computer Science & Engineering (AI & ML)",
    year: "3rd Year Undergraduate · Class of 2028",
    graduationYear: "2028",
    batch: "2024 – 2028",
    location: "Pune, India",
    availability: "Available for Internships & AI / SDE Roles",
    avatarUrl: "/profile.jpg",
    resumeUrl: "/resume.pdf",
    email: "mohitchughmmc@gmail.com",
    bio: "I'm a 3rd-year B.Tech CSE student specializing in Artificial Intelligence & Machine Learning at DY Patil International University, Pune (graduating in 2028). I build real-time computer vision applications and production full-stack web platforms.",
    socials: {
      github: "https://github.com/mohitchugh5544",
      linkedin: "https://www.linkedin.com/in/mohit-chugh-639153295/",
      email: "mailto:mohitchughmmc@gmail.com",
    },
  },

  projects: [jarvisAssistant, fitnessPlusVision, riyaDresses] as Project[],

  skills: [
    {
      category: "AI, Machine Learning & Vision",
      description: "Model training, pose estimation, voice AI, and LLM tool calling",
      items: [
        "Python",
        "Google Gemini & LLMs",
        "Function / Tool Calling",
        "Whisper (Speech AI)",
        "Computer Vision",
        "OpenCV",
        "MediaPipe",
        "PyTorch",
        "TensorFlow",
        "Scikit-Learn",
      ],
    },
    {
      category: "Frontend & Full-Stack Web",
      description: "Production web apps, responsive UIs, and backend APIs",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "FastAPI",
        "Tailwind CSS",
        "Node.js",
        "REST APIs",
      ],
    },
    {
      category: "Core CS, Systems & Tooling",
      description: "Foundational computer science, OS automation, and deployment",
      items: [
        "C / C++",
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Win32 API & pycaw",
        "Git & GitHub",
        "SQL & Databases",
        "Linux",
        "Vercel",
      ],
    },
  ] as SkillGroup[],

  timeline: [
    {
      period: "2024 – 2028",
      title: "B.Tech in Computer Science & Engineering (AI & ML Specialization)",
      organization: "DY Patil International University, Pune · 3rd Year Undergraduate",
      description:
        "Specializing in Artificial Intelligence & Machine Learning with core coursework in Deep Learning, Computer Vision, Data Structures & Algorithms, Operating Systems, and Database Management Systems.",
      tags: ["DYPIU Pune", "AI & ML Specialization", "Computer Vision", "DSA"],
      current: true,
    },
    {
      period: "2025 – Present",
      title: "Applied AI & Full-Stack Product Development",
      organization: "Independent Engineering Projects",
      description:
        "Engineered Jarvis (a voice-enabled multimodal assistant with native OS and iOS Siri integration), Fitness+ Vision (an AI workout biomechanics studio), and deployed the Riya Dresses commercial storefront.",
      tags: ["Jarvis Assistant", "Fitness+ Vision", "Riya Dresses", "Production Deployment"],
      current: false,
    },
  ] as TimelineItem[],
};
