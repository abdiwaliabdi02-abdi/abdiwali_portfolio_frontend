export default function Skills() {
  const skills = [
    {
      title: "Frontend",
      icon: "🎨",
      color: "from-pink-500 to-purple-600",
      items: ["React", "TypeScript", "Tailwind", "Next.js"],
    },
    {
      title: "Backend",
      icon: "⚙️",
      color: "from-blue-500 to-cyan-500",
      items: ["Node.js", "PHP", "Laravel", "REST APIs"],
    },
    {
      title: "Tools",
      icon: "🛠️",
      color: "from-green-500 to-emerald-500",
      items: ["Git", "Docker", "Linux", "VS Code"],
    },
  ];

  return (
    <section className="text-white py-20 px-6 max-w-7xl mx-auto">
      {/* TITLE */}
      <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-10">
        {skills.map((skill, i) => (
          <div
            key={i}
            className={`p-8 rounded-3xl shadow-xl text-white bg-gradient-to-br ${skill.color} hover:scale-105 transition`}
          >
            {/* HEADER */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{skill.icon}</span>
              <h3 className="text-2xl font-bold">{skill.title}</h3>
            </div>

            {/* SKILL TAGS */}
            <div className="flex flex-wrap gap-3">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur hover:bg-white hover:text-black transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
