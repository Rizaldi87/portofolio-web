import ExpTimelineItem from "../ExpTimelineItem";


export default function ExperienceSection() {
  return (
    <section className='relative min-h-screen p-6 max-w-ful px-12 lg:px-24'>
        <div className="flex items-center gap-3 w-fit">  
            <div className="w-10 h-px bg-[#4f8ef7]"></div>
            <p className="
                text 
                font-mono 
                text-[#4f8ef7]
                ">
                Experiences
            </p>
        </div>
        <div>
            <h1 className='leading-12 text-4xl text-white font-mono'>
                My <span className='text-[#4f8ef7]'>profesional & education </span> experiences  
            </h1>
        </div>
        <div className="
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
                <ExpTimelineItem
                    period="2025 — Present"
                    title="Software Engineer"
                    company="RSUD Merauke — Merauke"
                    description="Develop and maintain a Hospital Management System used to support daily healthcare operations. Deliver new features, troubleshoot production issues, optimize database queries, and improve system reliability, performance, and user experience across multiple clinical workflows."
                />

                <ExpTimelineItem
                    period="Sep 2022 — Jan 2023"
                    title="Exchange Student"
                    company="Universitas PGRI Semarang — Semarang"
                    description="Participated in a 5-month student exchange program, collaborating with students from diverse academic backgrounds while expanding knowledge in software engineering, problem-solving, and professional communication within a new learning environment."
                />

                <ExpTimelineItem
                    period="2020 — 2024"
                    title="Bachelor of Computer Science"
                    company="Universitas Musamus — Merauke"
                    description="Studied software engineering, database systems, algorithms, and application development. Completed academic and personal projects focused on building reliable software solutions while strengthening analytical and problem-solving skills."
                />
        </div>
    </section>
  )
}
