import { cubicBezier, spring } from "animejs";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import TechBadge from "../TechBadge";

export default function AboutMeSection() {
  return (
    <section id="about" className="min-h-screen p-6 max-w-ful px-12 lg:px-24">
      <div ref={useScrollReveal({fromTranslateY:30, delay: 80, ease:spring({stiffness:90, damping:14}),once:false})} className="flex items-center gap-3 w-fit">
        <div className="w-10 h-px bg-(--accent)"></div>
        <p
          className="
            text 
            font-mono 
            text-(--accent)
            "
        >
          About Me
        </p>
      </div>
      <div ref={useScrollReveal({fromTranslateY:30, delay: 90, ease:spring({stiffness:90, damping:14}),once:false})}>
        <h1 className="leading-8 sm:leading-12 text-2xl sm:text-4xl text-(--text) font-mono ">
          I am a <span className="text-(--accent)">Software Engineer</span>
        </h1>
      </div>
      <div  className="flex flex-col lg:flex-row gap-10 mt-10 text-sm sm:text-xl">
        <div  className="text-(--muted) w-fit lg:w-2xl text-justify">
          <p ref={useScrollReveal({fromTranslateY:30, delay: 100, ease:spring({stiffness:90, damping:14}),once:false})}>
            I am a detail-oriented Software Engineer with over 1 year of professional experience, focused on building reliable, maintainable, and high-quality software solutions. I currently develop and maintain a Hospital Management System
            in a healthcare environment where accuracy, stability, and system reliability are essential.
          </p>

          <br />

          <p ref={useScrollReveal({fromTranslateY:30, delay: 150, ease:spring({stiffness:90, damping:14}),once:false})}>
            In my current role, I contribute throughout the software development lifecycle, including UI development, database design, feature implementation, and production issue resolution. I have delivered 10+ production features while
            improving system functionality and supporting daily operational needs.
          </p>

          <br />

          <p ref={useScrollReveal({fromTranslateY:30, delay: 200, ease:spring({stiffness:90, damping:14}),once:false})}>
            I work with JavaScript, SQL, PHP, and Java, with additional experience in React, Next.js, NestJS, and C#. I continuously improve my skills through hands-on projects and practical development, aiming to create efficient software
            solutions that provide real value to users.
          </p>
        </div>
        {/* tech stack */}
        <div className="flex flex-col gap-5 self-start ">
          <div className="flex flex-col gap-5">
            <p ref={useScrollReveal({fromTranslateY:100,delay:100,once:false, ease:cubicBezier(0.1,0.7,0.5,1)})} className="text-(--muted) tracking-wide font-mono">Language &amp; Framework</p>
            <div className="flex flex-wrap items-center gap-5">
              <div ref={useScrollReveal({fromTranslateY:100,delay:100, once:false, ease:spring({bounce:.5})})}>
                <TechBadge techName="JAVA" dotColor="#f89820" toolTip="Object-Oriented Programming" />
              </div>  
              <div ref={useScrollReveal({fromTranslateY:100,delay:150, once:false, ease:spring({bounce:.5})})}>
                <TechBadge techName="JavaScript" dotColor="#f7df1e" toolTip="Frontend & Web Development" />
              </div>
              <div ref={useScrollReveal({fromTranslateY:100,delay:200, once:false, ease:spring({bounce:.5})})}>
                <TechBadge techName="PHP" dotColor="#777bb4" toolTip="Backend Web Development" />
              </div>
              <div ref={useScrollReveal({fromTranslateY:100,delay:200, once:false, ease:spring({bounce:.5})})}>
                <TechBadge techName="C#" dotColor="#68217a" toolTip="Game Developement" />
              </div>
              <div ref={useScrollReveal({fromTranslateY:100,delay:250, once:false, ease:spring({bounce:.5})})}>
                <TechBadge techName="React" dotColor="#61dafb" toolTip="Frontend UI Library" />
              </div>
              <div ref={useScrollReveal({fromTranslateY:100,delay:300, once:false, ease:spring({bounce:.5})})}>
                <TechBadge techName="Next.js" dotColor="#ffffff" toolTip="React Fullstack Framework" />
              </div>
              <div ref={useScrollReveal({fromTranslateY:100,delay:350, once:false, ease:spring({bounce:.5})})}>
                <TechBadge techName="NestJS" dotColor="#e0234e" toolTip="Node.js Backend Framework" />
              </div>
              <div ref={useScrollReveal({fromTranslateY:100,delay:400, once:false, ease:spring({bounce:.5})})}>
                <TechBadge techName="Laravel" dotColor="#ff2d20" toolTip="PHP Backend Framework" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <p ref={useScrollReveal({fromTranslateY:100,delay:100,once:false, ease:cubicBezier(0.1,0.7,0.5,1)})} className="text-(--muted) tracking-wide font-mono">Database</p>
            <div className="flex flex-wrap items-center gap-5">
              <div ref={useScrollReveal({fromTranslateY:100,delay:450, once:false, ease:spring({bounce:.5})})}>
                <TechBadge techName="MYSQL" dotColor="#f89820" toolTip="Lightweight Relational Database" />
              </div>
              <div ref={useScrollReveal({fromTranslateY:100,delay:500, once:false, ease:spring({bounce:.5})})}>
                <TechBadge techName="PostgreSQL" dotColor="#4f8ef7" toolTip="Relational Database Management System" />
              </div>
            </div>
          
          <div className="flex flex-col gap-5">
            <p ref={useScrollReveal({fromTranslateY:100,delay:100,once:false, ease:cubicBezier(0.1,0.7,0.5,1)})} className="text-(--muted) tracking-wide font-mono">Tool & Platform</p>
            <div className="flex flex-wrap items-center gap-5">
              <div ref={useScrollReveal({fromTranslateY:100,delay:550, once:false, ease:spring({bounce:.5})})}>
                <TechBadge techName="Git" dotColor="#F05032" toolTip="Version Control System" />
              </div>
              <div ref={useScrollReveal({fromTranslateY:100,delay:600, once:false, ease:spring({bounce:.5})})}>
                <TechBadge techName="NetBeans" dotColor="#1B6AC6" toolTip="Java Integrated Development Environment" />
              </div>
              <div ref={useScrollReveal({fromTranslateY:100,delay:650, once:false, ease:spring({bounce:.5})})}>
                <TechBadge techName="Visual Studio Code" dotColor="#007ACC" toolTip="Source Code Editor" />
              </div>
              <div ref={useScrollReveal({fromTranslateY:100,delay:700, once:false, ease:spring({bounce:.5})})}>
                <TechBadge techName="Unity Engine" dotColor="#FFFFFF" toolTip="Cross-Platform Game Engine" />
              </div>
              <div ref={useScrollReveal({fromTranslateY:100,delay:750, once:false, ease:spring({bounce:.5})})}>
                <TechBadge techName="Godot" dotColor="#478CBF" toolTip="Open Source Game Engine" />
              </div>
              <div ref={useScrollReveal({fromTranslateY:100,delay:800, once:false, ease:spring({bounce:.5})})}>
                <TechBadge techName="Blender" dotColor="#F5792A" toolTip="3D Modeling & Animation Software" />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
