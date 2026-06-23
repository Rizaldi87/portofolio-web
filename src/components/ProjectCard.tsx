type props = {
  projectTitle: string;
  projectDesc: string;
  tags: string[];
  onClick?: () => void;
};
export default function ProjectCard({ projectTitle, projectDesc, tags, onClick }: props) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;

    const rect = card.getBoundingClientRect();

    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);

    card.style.transform = `
        perspective(800px)
        rotateY(${dx * 8}deg)
        rotateX(${-dy * 8}deg)
        translateZ(10px)
        `;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;

    card.style.transition = "transform 0.5s cubic-bezier(0.16,1,0.3,1)";

    card.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg)";
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transition = "none";
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
      className="
            project-card
            group
            bg-(--card-bg)
            border
            border-(--border)
            rounded-[10px]
            p-7
            cursor-pointer
            transform-3d
            transition-[border-color,box-shadow]
            duration-300
            will-change-transform
            hover:border-[rgba(79,142,247,0.3)]
            hover:shadow-[0_16px_48px_rgba(0,0,0,0.4),0_0_0_1px_rgba(79,142,247,0.1)]

            active:border-[rgba(79,142,247,0.3)]
            active:shadow-[0_16px_48px_rgba(0,0,0,0.4),0_0_0_1px_rgba(79,142,247,0.1)]
            flex
            flex-col
            gap-5
        "
    >
      <h1
        className="font-mono text-[1.1rem] text-(--text)
                font-bold tracking-[-0.01rem] group-hover:text-(--accent) group-active:text-(--accent) transition-color duration-200"
      >
        {projectTitle}
      </h1>

      <p className="text-[0.875rem] text-(--muted) leading-6 text-justify">{projectDesc}</p>

      <div className="flex gap-3 items-center flex-wrap">
        {tags.map((tag, index) => {
          return (
            <div
              key={index}
              className="group-active:text-(--accent) group-active:border-[rgba(9,142,247,0.3)] group-hover:text-(--accent) group-hover:border-[rgba(9,142,247,0.3)] text-[0.7rem]
                    tracking-[0.08em]
                    uppercase
                    text-(--muted)
                    border
                    border-(--border)
                    rounded-[3px]
                    px-[0.6rem]
                    py-[0.2rem]
                    font-mono
                    transition-[color,border-color]
                    duration-200"
            >
              {tag}
            </div>
          );
        })}
      </div>

      <div className="flex justify-between items-center">
        <span className="text-(--muted) group-hover:text-(--accent) group-active:text-(--accent)">DETAILS</span>
        <span
          className="text-(--muted) group-hover:text-(--accent) group-active:text-(--accent) w-6 h-6 rounded-[50%]
                    flex items-center justify-center"
        >
          <span className="material-symbols-outlined text-xs">arrow_forward</span>
        </span>
      </div>
    </div>
  );
}
