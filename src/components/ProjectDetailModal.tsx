import { useEffect } from "react";

export type ProjectDetail = {
  projectTitle: string;
  projectDesc: string;
  tags: string[];
  image?: string;
  repoUrl?: string;
  demoUrl?: string;
};

type Props = {
  project: ProjectDetail;
  onClose: () => void;
};

export default function ProjectDetailModal({ project, onClose }: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4
                 bg-[rgba(0,0,0,0.8)] backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-(--bg2) border border-(--border) rounded-xl
                   w-full max-w-lg max-h-[85vh] overflow-y-auto p-8
                   shadow-[0_32px_64px_rgba(0,0,0,0.6)]
                   animate-[fadeScaleIn_0.25s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="ml-auto block text-(--muted) hover:text-(--text)
                     transition-colors mb-4 cursor-pointer"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {project.image && (
          <div
            className="w-full aspect-video rounded-lg overflow-hidden mb-6
                          bg-(--bg) border border-(--border)"
          >
            <img src={project.image} alt={project.projectTitle} className="w-full h-full object-cover" />
          </div>
        )}

        <h2 className="font-mono text-xl text-(--text) font-bold mb-3">{project.projectTitle}</h2>

        <p className="text-[0.875rem] text-(--muted) leading-6 mb-6 text-justify">{project.projectDesc}</p>

        <div className="flex gap-2 flex-wrap mb-8">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[0.65rem] tracking-[0.08em] uppercase
                         text-(--accent) border border-[rgba(79,142,247,0.2)]
                         rounded-[3px] px-[0.6rem] py-[0.2rem] font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-md
                         bg-(--accent) text-white font-mono text-sm
                         hover:brightness-110 transition-all"
            >
              <span className="material-symbols-outlined text-base">code</span>
              Repository
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-md
                         border border-(--accent) text-(--accent) font-mono text-sm
                         hover:bg-(--accent) hover:text-white transition-all"
            >
              <span className="material-symbols-outlined text-base">open_in_new</span>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
