import { useState } from "react";
import ProjectCard from "../ProjectCard";
import ProjectDetailModal from "../ProjectDetailModal";

type ProjectData = {
  projectTitle: string;
  projectDesc: string;
  tags: string[];
  image?: string;
  repoUrl?: string;
  demoUrl?: string;
};

export default function ProjectSections() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  // 3. Data project (bisa dipisah ke file sendiri nanti)
  const projects: ProjectData[] = [
    {
      projectTitle: "EnglishPath (Backend)",
      projectDesc: "Full-stack learning platform with admin dashboard, student courses, quizzes, submissions, and authentication flow using REST API architecture.",
      image: "/images/erd.png",
      tags: ["Nest Js", "PostgreSQL", "TypeScript"],
      repoUrl: "https://github.com/Rizaldi87/crack-be-Rizaldi87",
    },
    {
      projectTitle: "EnglishPath (Frontend)",
      projectDesc: "Full-stack learning platform with admin dashboard, student courses, quizzes, submissions, and authentication flow using REST API architecture.",
      image: "/images/image(6).png",
      tags: ["Next js", "React Js", "TailwindCSS"],
      repoUrl: "https://github.com/Rizaldi87/crack-fe-Rizaldi87",
    },
    {
      projectTitle: "3D Portfolio Website",
      projectDesc: "Interactive 3D portfolio website with smooth scrolling, animations, and optimized real-time rendering experience.",
      tags: ["React", "Three.js"],
      repoUrl: "https://github.com/Rizaldi87/portofolio-web",
    },
    {
      projectTitle: "Cell In Rogue",
      projectDesc: "2D game project featuring character movement, enemy combat system, skills, upgrades, and procedural level generation.",
      image: "/images/game.jpg",
      tags: ["Unity", "C#", "Game Dev", "Procedural"],
      demoUrl: "https://rizzzydi-rizz.itch.io/cell-in-rogue",
    },
    {
      projectTitle: "Photo Booth App",
      projectDesc: "Desktop photo booth application with camera capture, image processing, photo layouts, and event-ready photo workflow.",
      tags: ["React Js", "Camera", "Laravel"],
      repoUrl: "https://github.com/Rizaldi87/photo_booth_app",
    },
  ];
  return (
    <section id="project" className="min-h-screen p-6 max-w-ful px-12 lg:px-24">
      <div className="flex items-center gap-3 w-fit">
        <div className="w-10 h-px bg-[#4f8ef7]"></div>
        <p
          className="
            text 
            font-mono 
            text-[#4f8ef7]
            "
        >
          Projects
        </p>
      </div>
      <div>
        <h1 className="leading-12 text-2xl sm:text-4xl text-white font-mono">
          My <span className="text-[#4f8ef7]">best projects </span>
        </h1>
      </div>

      <div
        className=" grid gap-6 mt-5
            grid-cols-[repeat(auto-fit,minmax(200px,1fr))]"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.projectTitle}
            {...project} // spread semua prop
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>
      {selectedProject && <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
}
