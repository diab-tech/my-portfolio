import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "My First Domain",
    description:
      "A personal portfolio website showcasing my projects and skills, built with modern web technologies.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/diab-tech/my-first-domain",
    live: "https://my-first-domain-v2.netlify.app/",
  },
  {
    title: "Project 2",
    description: "A brief description of your second project",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=500",
    technologies: ["TypeScript", "Next.js", "Tailwind"],
    github: "https://diab-tech.github.io/special-design/",
    live: "https://diab-tech.github.io/special-design/",
  },
];
