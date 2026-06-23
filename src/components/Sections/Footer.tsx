export default function Footer() {
  return (
    <footer
      className="
        w-full
        py-6
        px-4
        text-center
        text-xs
        text-(--muted)
        border-t
        border-white/5
        font-mono
        bg-(--bg)
      "
    >
      <p>
        © 2026 Rizaldi • Designed & Built with React, TypeScript and Tailwind CSS
      </p>

      <p className="mt-1">
        Merauke, Indonesia
      </p>
    </footer>
  );
}