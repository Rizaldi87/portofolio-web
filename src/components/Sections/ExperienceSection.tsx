import { spring } from "animejs";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import ExpTimelineItem from "../ExpTimelineItem";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative min-h-screen p-6 max-w-ful px-12 lg:px-24">
      <div ref={useScrollReveal({fromTranslateY:30, delay: 80, ease:spring({stiffness:90, damping:14}),once:false})} className="flex items-center gap-3 w-fit">
        <div className="w-10 h-px bg-(--accent)"></div>
        <p
          className="
                text 
                font-mono 
                text-(--accent)
                "
        >
          Experiences
        </p>
      </div>
      <div ref={useScrollReveal({fromTranslateY:30, delay: 90, ease:spring({stiffness:90, damping:14}),once:false})}>
        <h1 className="leading-8 sm:leading-12 text-2xl sm:text-4xl text-(--text) font-mono">
          My <span className="text-(--accent)">profesional & education </span> experiences
        </h1>
      </div>
      <div
        className="
            relative
            pl-8 
            before:content-[''] 
            before:absolute
            before:left-[3.5px]
            before:top-7.5
            before:bottom-1.5
            before:w-px
            before:bg-(--border)
            "
      >
        <div ref={useScrollReveal({fromTranslateY:30, delay: 100, ease:spring({stiffness:90, damping:14}),once:false})}>
          <ExpTimelineItem
            period="2025 — Present"
            title="Software Engineer"
            company="RSUD Merauke — Merauke"
            description="Develop and maintain a Hospital Management System used to support daily healthcare operations. Deliver new features, troubleshoot production issues, optimize database queries, and improve system reliability, performance, and user experience across multiple clinical workflows."
          />
        </div>
        <div ref={useScrollReveal({fromTranslateY:30, delay: 150, ease:spring({stiffness:90, damping:14}),once:false})}>
          <ExpTimelineItem
            period="Sep 2022 — Jan 2023"
            title="Exchange Student"
            company="Universitas PGRI Semarang — Semarang"
            description="Participated in a 5-month student exchange program, collaborating with students from diverse academic backgrounds while expanding knowledge in software engineering, problem-solving, and professional communication within a new learning environment."
          />
        </div>
        <div ref={useScrollReveal({fromTranslateY:30, delay: 200, ease:spring({stiffness:90, damping:14}),once:false})}>
          <ExpTimelineItem
            period="2020 — 2024"
            title="Bachelor of Computer Science"
            company="Universitas Musamus — Merauke"
            description="Studied software engineering, database systems, algorithms, and application development. Completed academic and personal projects focused on building reliable software solutions while strengthening analytical and problem-solving skills."
          />
        </div>
      </div>
    </section>
  );
}
