export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  status: string;
  description: string;
  highlights: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  imageUrl?: string;
  images?: string[];
  previewType: "fitness-vision" | "web-storefront" | "jarvis-hud";
  metrics?: ProjectMetric[];
}
