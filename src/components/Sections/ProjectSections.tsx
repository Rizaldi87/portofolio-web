import ProjectCard from "../ProjectCard";

export default function ProjectSections() {
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
        <h1 className="leading-12 text-4xl text-white font-mono">
          My <span className="text-[#4f8ef7]">best projects </span>
        </h1>
      </div>

      <div
        className=" grid gap-6 mt-5
            grid-cols-[repeat(auto-fit,minmax(200px,1fr))]"
      >
        <ProjectCard
          projectTitle="EnglishPath"
          projectDesc="
            Full-stack learning platform with admin dashboard,
            student courses, quizzes, submissions, and
            authentication flow using REST API architecture.
          "
          tags={["React", "Node.js", "REST API", "Database"]}
        />

        <ProjectCard
          projectTitle="3D Portfolio Website"
          projectDesc="
            Interactive 3D portfolio website with smooth
            scrolling, animations, and optimized real-time
            rendering experience.
          "
          tags={["React", "Three.js", "GSAP", "WebGL"]}
        />

        <ProjectCard
          projectTitle="Cell In Rogue"
          projectDesc="
            2D game project featuring character movement,
            enemy combat system, skills, upgrades, and
            procedural level generation.
          "
          tags={["Unity", "C#", "Game Dev", "Procedural"]}
        />

        <ProjectCard
          projectTitle="Population Administration System"
          projectDesc="
            Digital administration system for resident data
            management, registration, and document issuance
            workflows.
          "
          tags={["Java", "Database", "CRUD", "System Design"]}
        />
      </div>
    </section>
  );
}
