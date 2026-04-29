export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Modern portfolio built with React & Tailwind",
    },
    {
      title: "E-commerce App",
      desc: "Full-stack app with payment integration",
    },
    {
      title: "Trading Journal",
      desc: "Track and analyze trading performance",
    },
  ];

  return (
    <section className="text-white py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white text-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
          >
            <div className="h-40 bg-gradient-to-r from-purple-500 to-pink-500" />

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>

              <p className="text-sm text-gray-600 mb-4">{p.desc}</p>

              <button className="text-purple-600 font-semibold">
                View Project →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
