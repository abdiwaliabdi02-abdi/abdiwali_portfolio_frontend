import profileImg from "../assets/me.png.png";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center

        px-6
        pt-24
        pb-16

        overflow-hidden
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2

          w-[700px]
          h-[700px]

          bg-green-400/10

          blur-[180px]

          rounded-full
        "
      />

      {/* MAIN CONTAINER */}
      <div
        className="
          relative
          z-10

          max-w-7xl
          w-full

          grid
          grid-cols-1
          lg:grid-cols-2

          gap-20
          items-center
        "
      >
        {/* LEFT SIDE */}
        <div>
          <p
            className="
              text-gray-300
              text-2xl
              mb-4
            "
          >
            Hello, It's Me
          </p>

          <h1
            className="
              text-5xl
              md:text-7xl

              font-black

              text-white

              leading-tight
            "
          >
            Abdiwali
          </h1>

          <h2
            className="
              mt-5

              text-2xl
              md:text-4xl

              font-bold
              leading-snug
            "
          >
            <span className="text-white">And I'm a </span>

            <span
              className="
                bg-gradient-to-r
                from-green-400
                via-cyan-400
                to-green-300

                bg-clip-text
                text-transparent
              "
            >
              Full Stack Developer
            </span>
          </h2>

          <p
            className="
              text-gray-400

              mt-8

              max-w-xl

              text-lg
              leading-relaxed
            "
          >
            I build modern, scalable and high-performance web applications using
            React, TypeScript, Node.js and modern backend technologies.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-5 mt-10">
            {/* GITHUB */}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="
                w-14
                h-14

                rounded-2xl

                flex
                items-center
                justify-center

                text-2xl

                bg-white/5

                border
                border-white/10

                backdrop-blur-xl

                text-white

                transition-all
                duration-300

                hover:scale-110
                hover:text-green-400
                hover:border-green-400/40
                hover:shadow-[0_0_25px_rgba(34,197,94,0.35)]
              "
            >
              <FaGithub />
            </a>

            {/* LINKEDIN */}
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="
                w-14
                h-14

                rounded-2xl

                flex
                items-center
                justify-center

                text-2xl

                bg-white/5

                border
                border-white/10

                backdrop-blur-xl

                text-white

                transition-all
                duration-300

                hover:scale-110
                hover:text-green-400
                hover:border-green-400/40
                hover:shadow-[0_0_25px_rgba(34,197,94,0.35)]
              "
            >
              <FaLinkedin />
            </a>

            {/* TWITTER */}
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="
                w-14
                h-14

                rounded-2xl

                flex
                items-center
                justify-center

                text-2xl

                bg-white/5

                border
                border-white/10

                backdrop-blur-xl

                text-white

                transition-all
                duration-300

                hover:scale-110
                hover:text-green-400
                hover:border-green-400/40
                hover:shadow-[0_0_25px_rgba(34,197,94,0.35)]
              "
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="
            relative
            flex
            justify-center
            items-center
            mt-10
            lg:mt-0
          "
        >
          {/* GREEN GLOW */}
          <div
            className="
              absolute

              w-[380px]
              h-[380px]

              bg-green-400/20

              blur-[120px]

              rounded-full
            "
          />

          {/* CARD */}
          <div
            className="
              relative

              w-[300px]
              h-[360px]

              md:w-[380px]
              md:h-[440px]

              rounded-[35px]
              border
              border-green-400/30

              overflow-visible
            "
          >
            {/* MOVING BORDER */}
            <div
              className="
                absolute
                inset-0

                rounded-[35px]

                p-[3px]

                bg-[linear-gradient(90deg,#22c55e,#4ade80,#22c55e,#86efac,#22c55e)]

                bg-[length:300%_300%]

                animate-[greenBorder_4s_linear_infinite]

                shadow-[0_0_45px_rgba(34,197,94,0.45)]
              "
            >
              {/* INNER CARD */}
              <div
                className="
                  relative

                  w-full
                  h-full

                  rounded-[32px]

                  overflow-hidden

                  bg-transparent
                  backdrop-blur-sm
                "
              >
                {/* LIGHT */}
                <div
                  className="
                    absolute
                    inset-0

                    bg-gradient-to-b
                    from-green-400/10
                    to-transparent

                    z-10
                  "
                />

                {/* IMAGE */}
                <div
                  className="
                    absolute

                    bottom-0
                    left-1/2
                    -translate-x-1/2

                    w-[110%]
                    h-[115%]

                    z-20

                    flex
                    items-end
                    justify-center
                  "
                >
                  <img
                    src={profileImg}
                    alt="profile"
                    className="
                      h-full

                      object-cover
                      object-top

                      mix-blend-lighten

                      drop-shadow-[0_0_30px_rgba(34,197,94,0.35)]
                    "
                  />
                </div>
              </div>
            </div>

            {/* HEAD OUTSIDE GLOW */}
            <div
              className="
                absolute

                top-[-35px]
                left-1/2

                -translate-x-1/2

                w-[140px]
                h-[140px]

                rounded-full

                bg-green-400/20

                blur-3xl

                z-0
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
