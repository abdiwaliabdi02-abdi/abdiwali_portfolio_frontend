export default function Skills() {
  const skills = [
    {
      title: "Frontend",
      icon: "🎨",
      glow: "from-pink-500/20 to-purple-500/20",
      border: "hover:border-pink-400/40",
      shadow: "hover:shadow-[0_0_40px_rgba(236,72,153,0.25)]",
      items: ["React", "TypeScript", "Tailwind", "Next.js"],
    },
    {
      title: "Backend",
      icon: "⚙️",
      glow: "from-cyan-500/20 to-blue-500/20",
      border: "hover:border-cyan-400/40",
      shadow: "hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]",
      items: ["Node.js", "PHP", "Laravel", "REST APIs"],
    },
    {
      title: "Tools",
      icon: "🛠️",
      glow: "from-green-500/20 to-emerald-500/20",
      border: "hover:border-green-400/40",
      shadow: "hover:shadow-[0_0_40px_rgba(34,197,94,0.25)]",
      items: ["Git", "Docker", "Linux", "VS Code"],
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
            text-4xl
            md:text-5xl
            font-bold

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
            mt-5
            text-base
            md:text-lg
            max-w-2xl
            mx-auto
          "
        >
          Technologies and tools I use to build modern, scalable and
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

              rounded-3xl

              border
              border-white/10

              bg-[rgba(15,23,42,0.7)]

              backdrop-blur-xl

              p-8

              transition-all
              duration-500

              hover:-translate-y-3

              ${skill.border}
              ${skill.shadow}
            `}
          >
            {/* TOP LIGHT */}
            <div
              className="
                absolute
                top-0
                left-0

                w-full
                h-[1px]

                bg-gradient-to-r
                from-transparent
                via-white/50
                to-transparent

                opacity-40
              "
            />

            {/* GLOW */}
            <div
              className={`
                absolute
                -top-16
                -left-16

                w-40
                h-40

                rounded-full

                blur-3xl

                bg-gradient-to-br
                ${skill.glow}

                opacity-80

                transition-all
                duration-500
              `}
            />

            {/* CONTENT */}
            <div className="relative z-10">
              {/* HEADER */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="
                    w-16
                    h-16

                    flex
                    items-center
                    justify-center

                    rounded-2xl

                    bg-white/5

                    text-4xl

                    border
                    border-white/10

                    shadow-inner
                  "
                >
                  {skill.icon}
                </div>

                <h3
                  className="
                    text-2xl
                    font-bold
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
                      font-medium

                      bg-white/5

                      border
                      border-white/10

                      backdrop-blur-md

                      text-gray-200

                      transition-all
                      duration-300

                      hover:bg-white
                      hover:text-black
                      hover:scale-105
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
