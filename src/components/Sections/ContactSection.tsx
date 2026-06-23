export default function ContactSection() {
  return (
    <section id="contact" className="bg-(--bg2)">
      <div
        className="
            text-center
            max-w-155
            mx-auto
            px-8
            py-28
            "
      >
        <h2 className="section-title text-(--text) font-mono text-2xl">
          Let's Build Something <span className="text-(--accent)">Great Together</span>
        </h2>

        <p
          className="
                text-(--muted)
                mb-10
                text-base
            "
        >
          I'm always interested in discussing new opportunities, collaborating on meaningful projects, and solving real-world problems through software. Whether you have a project in mind or simply want to connect, feel free to reach out.
        </p>

        <a
          href="mailto:rizaldiibnum@gmail.com"
          className="
                    inline-block
                    font-mono
                    text-[1.2rem]
                    text-(--accent)
                    tracking-[0.02em]
                    relative
                    pb-0.5

                    after:content-['']
                    after:absolute
                    after:left-0
                    after:bottom-0
                    after:h-px
                    after:w-0
                    after:bg-(--accent)
                    after:transition-all
                    after:duration-300

                    hover:after:w-full
                    active:after:w-full
                "
        >
          rizaldiibnum@gmail.com
        </a>

        <div
          className="
                flex
                justify-center
                gap-6
                mt-10
            "
        >
          <a
            href="https://github.com/Rizaldi87"
            className="
                    text-[0.75rem]
                    tracking-[0.12em]
                    uppercase
                    text-(--muted)
                    transition-colors
                    duration-200
                    hover:text-(--text)
                    active:text-(--text)
                    "
          >
            GitHub
          </a>

          <a
            href="https://id.linkedin.com/in/rizaldi-ibnu-mohamad-b898bb318"
            className="
                    text-[0.75rem]
                    tracking-[0.12em]
                    uppercase
                    text-(--muted)
                    transition-colors
                    duration-200
                    hover:text-(--text)
                    active:text-(--text)
                    "
          >
            LinkedIn
          </a>

          <a
            href="/docs/cv.pdf"
            className="
                    text-[0.75rem]
                    tracking-[0.12em]
                    uppercase
                    text-(--muted)
                    transition-colors
                    duration-200
                    hover:text-(--text)
                    active:text-(--text)
                    "
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
