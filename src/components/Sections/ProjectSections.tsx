import ProjectCard from "../ProjectCard";

export default function ProjectSections() {
  return (
      <section className='min-h-screen p-6 max-w-ful px-12 lg:px-24'>
         <div className="flex items-center gap-3 w-fit">  
          <div className="w-10 h-px bg-[#4f8ef7]"></div>
          <p className="
            text 
            font-mono 
            text-[#4f8ef7]
            ">
            Projects
          </p>
        </div>
        <div>
            <h1 className='leading-12 text-4xl text-white font-mono'>
                My  <span className='text-[#4f8ef7]'>best projects </span>  
            </h1>
        </div>

        <div className=" grid gap-6 mt-5
            grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          <ProjectCard projectTitle={"JAVA"} projectDesc={"INI JAVA"} tags={["Java", "oracle"]}/>
          <ProjectCard projectTitle={"JAVA"} projectDesc={"INI JAVA"} tags={["Java", "oracle"]}/>
          <ProjectCard projectTitle={"JAVA"} projectDesc={"INI JAVA"} tags={["Java", "oracle"]}/>
          <ProjectCard projectTitle={"JAVA"} projectDesc={"INI JAVA"} tags={["Java", "oracle"]}/>
        </div>
      </section>
  )
}
