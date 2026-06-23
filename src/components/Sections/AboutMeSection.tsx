import TechBadge from '../TechBadge'

export default function AboutMeSection() {
  return (
    <section className='min-h-screen p-6 max-w-ful px-12 lg:px-24'>
        <div className="flex items-center gap-3 w-fit">  
          <div className="w-10 h-px bg-[#4f8ef7]"></div>
          <p className="
            text 
            font-mono 
            text-[#4f8ef7]
            ">
            About Me
          </p>
        </div>
        <div>
          <h1 className='leading-12 text-4xl text-white font-mono'>
            A <span className='text-[#4f8ef7]'> Detail oriented </span> 
            Software Engineer 
            <br />
            with over 1 year Experiences
            </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 mt-10 text-xl">
          <div className='text-[#6b6b88] w-fit lg:w-2xl text-justify'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis culpa assumenda numquam voluptates minus minima quibusdam blanditiis atque, voluptatum quis?</p>
             <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis culpa assumenda numquam voluptates minus minima quibusdam blanditiis atque, voluptatum quis?</p>
              <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis culpa assumenda numquam voluptates minus minima quibusdam blanditiis atque, voluptatum quis?</p>
          </div>
          {/* tech stack */}
          <div className="flex flex-col gap-5 self-start ">
            <div className='flex flex-col gap-5'>
              <p className='text-[#6b6b88] tracking-wide font-mono'>Language &amp; Framework</p>
              <div className="flex flex-wrap items-center gap-5">
                <TechBadge 
                  techName="JAVA"
                  dotColor="#f89820"
                  toolTip="Object-Oriented Programming"
                />

                <TechBadge 
                  techName="JavaScript"
                  dotColor="#f7df1e"
                  toolTip="Frontend & Web Development"
                />

                <TechBadge 
                  techName="PHP"
                  dotColor="#777bb4"
                  toolTip="Backend Web Development"
                />

                <TechBadge 
                  techName="C#"
                  dotColor="#68217a"
                  toolTip="Game Developement"
                />

                <TechBadge
                  techName="React"
                  dotColor="#61dafb"
                  toolTip="Frontend UI Library"
                />

                <TechBadge
                  techName="Next.js"
                  dotColor="#ffffff"
                  toolTip="React Fullstack Framework"
                />

                <TechBadge
                  techName="NestJS"
                  dotColor="#e0234e"
                  toolTip="Node.js Backend Framework"
                />

                <TechBadge
                  techName="Laravel"
                  dotColor="#ff2d20"
                  toolTip="PHP Backend Framework"
                />
              </div>
            </div>
            
            <div className='flex flex-col gap-5'>
              <p className='text-[#6b6b88] tracking-wide font-mono'>Database</p>
              <div className="flex flex-wrap items-center gap-5">
                <TechBadge 
                  techName="MYSQL"
                  dotColor="#f89820"
                  toolTip="Lightweight Relational Database"
                />

                <TechBadge
                  techName="PostgreSQL"
                  dotColor="#4f8ef7"
                  toolTip="Relational Database Management System"
                />
              </div>

              <div className='flex flex-col gap-5'>
              <p className='text-[#6b6b88] tracking-wide font-mono'>Tool & Platform</p>
              <div className="flex flex-wrap items-center gap-5">
               <TechBadge
                  techName="Git"
                  dotColor="#F05032"
                  toolTip="Version Control System"
                />

                <TechBadge
                  techName="NetBeans"
                  dotColor="#1B6AC6"
                  toolTip="Java Integrated Development Environment"
                />

                <TechBadge
                  techName="Visual Studio Code"
                  dotColor="#007ACC"
                  toolTip="Source Code Editor"
                />

                <TechBadge
                  techName="Unity Engine"
                  dotColor="#FFFFFF"
                  toolTip="Cross-Platform Game Engine"
                />

                <TechBadge
                  techName="Godot"
                  dotColor="#478CBF"
                  toolTip="Open Source Game Engine"
                />

                <TechBadge
                  techName="Blender"
                  dotColor="#F5792A"
                  toolTip="3D Modeling & Animation Software"
                />
              </div>
            </div>
            </div>
          </div>
        </div>

      </section>
  )
}
