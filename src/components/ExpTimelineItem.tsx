type props = {
    period:String;
    title:String;
    company:String;
    description:String;
}

export default function ExpTimelineItem({period, title, company, description}:props) {
  return (
    <div>
        <div className="
            relative
            pb-12
            
            translate-y-6
            transition-all
            duration-700
            ease-in-out

            before:content-['']
            before:absolute
            before:-left-8
            before:top-1.5
            before:w-1.75
            before:h-1.75
            before:rounded-full
            before:bg-(--bg)
            before:border
            before:border-(--accent)
            before:-translate-x-0.7
            "
        >
            <p className="
                    font-mono
                    text-[0.7rem]
                    text-(--accent)
                    tracking-widest
                    mb-[0.4rem]
                "
            >
                {period}
            </p>
            <h3 className="
                    text-(--text)
                    text-[1.05rem]
                    font-medium
                    mb-[0.2rem]
                "
            >
                {title}
            </h3>
            <p
                className="
                    text-[0.85rem]
                    text-(--muted)
                    mb-3
                "
            >
                {company}
            </p>
            <p
                className="
                    text-sm
                    text-(--muted)
                    leading-[1.8]
                "
            >
                {description}
            </p>
        </div>
    </div>
  )
}
