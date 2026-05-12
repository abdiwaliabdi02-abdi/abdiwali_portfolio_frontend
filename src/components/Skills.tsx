export default function Skills() {
  const skills = [
    {
      title: "Frontend",
      icon: "🎨",
      glow: "from-pink-500/30 via-purple-500/20 to-cyan-500/20",
      border: "hover:border-pink-400/50",
      shadow: "hover:shadow-[0_0_60px_rgba(236,72,153,0.45)]",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "TypeScript",
        "Tailwind",
        "Next.js",
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      glow: "from-cyan-500/30 via-blue-500/20 to-indigo-500/20",
      border: "hover:border-cyan-400/50",
      shadow: "hover:shadow-[0_0_60px_rgba(34,211,238,0.45)]",
      items: ["Node.js", "Express", "MySQL"],
    },
    {
      title: "Tools",
      icon: "🛠️",
      glow: "from-green-500/30 via-emerald-500/20 to-yellow-500/20",
      border: "hover:border-green-400/50",
      shadow: "hover:shadow-[0_0_60px_rgba(34,197,94,0.45)]",
      items: ["Git", "Docker", "Linux", "VS Code", "GitHub"],
    },
  ];

  return (
    <section
      id="skills"
      className="
        relative
        text-white
        py-24
        px-5
        max-w-7xl
        mx-auto
      "
    >
      {/* TITLE */}
      <div className="text-center mb-16">
        <h2
          className="
            text-5xl
            md:text-6xl
            font-black

            bg-gradient-to-r
            from-cyan-400
            via-green-400
            to-pink-400

            bg-clip-text
            text-transparent
          "
        >
          My Skills
        </h2>

        <p
          className="
            text-gray-400
            mt-6
            text-lg
            md:text-xl
            max-w-3xl
            mx-auto
            leading-relaxed
          "
        >
          Technologies and tools I use to build futuristic, scalable and
          high-performance web applications.
        </p>
      </div>

      {/* GRID */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
        "
      >
        {skills.map((skill, i) => (
          <div
            key={i}
            className={`
              group
              relative
              overflow-hidden

              rounded-[30px]

              border
              border-white/10

              bg-[rgba(15,23,42,0.72)]

              backdrop-blur-2xl

              p-7

              transition-all
              duration-500

              hover:-translate-y-2

              ${skill.border}
              ${skill.shadow}
            `}
          >
            {/* PREMIUM GLOW */}
            <div
              className={`
                absolute
                -top-24
                -left-24

                w-56
                h-56

                rounded-full

                blur-[90px]

                bg-gradient-to-br
                ${skill.glow}

                opacity-90

                transition-all
                duration-700

                group-hover:scale-110
              `}
            />

            {/* ANIMATED LIGHT LINE */}
            <div
              className="
                absolute
                top-0
                left-[-100%]

                w-full
                h-[2px]

                bg-gradient-to-r
                from-transparent
                via-white
                to-transparent

                opacity-70

                group-hover:left-[100%]

                transition-all
                duration-1000
              "
            />

            {/* CONTENT */}
            <div className="relative z-10">
              {/* HEADER */}
              <div className="flex items-center gap-5 mb-8">
                <div
                  className="
                    w-18
                    h-18

                    flex
                    items-center
                    justify-center

                    rounded-3xl

                    bg-white/5

                    text-4xl

                    border
                    border-white/10

                    shadow-[inset_0_0_25px_rgba(255,255,255,0.05)]

                    group-hover:rotate-3
                    transition-all
                    duration-500
                  "
                >
                  {skill.icon}
                </div>

                <h3
                  className="
                    text-2xl
                    font-black
                    tracking-wide
                  "
                >
                  {skill.title}
                </h3>
              </div>

              {/* TAGS */}
              <div className="flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="
                      px-4
                      py-2

                      rounded-full

                      text-sm
                      font-semibold

                      bg-white/5

                      border
                      border-white/10

                      backdrop-blur-md

                      text-gray-200

                      transition-all
                      duration-300

                      hover:bg-gradient-to-r
                      hover:from-green-400
                      hover:to-cyan-400

                      hover:text-black

                      hover:scale-105

                      hover:shadow-[0_0_20px_rgba(34,197,94,0.35)]
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
