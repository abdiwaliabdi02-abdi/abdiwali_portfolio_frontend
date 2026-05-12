import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../api/profile.api";

import {
  FaUser,
  FaLink,
  FaBriefcase,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";

type Profile = {
  id: number;
  name: string;
  bio?: string;
  location?: string;
  nationality?: string;
  availability?: string;
  dateOfBirth?: string;
  email?: string;
  phone?: string;
  address?: string;
  github?: string;
  twitter?: string;
  linkedin?: string;
  expectedSalary?: number;
  ownACar?: boolean;
  haveDrivingLicense?: boolean;
  noticePeriod?: string;
  immigrationStatus?: string;
  referees?: string;
  willingToRelocate?: boolean;
  languages?: string;
  skills?: string;
};

export default function ProfilePage() {
  const {
    data: profile,
    isLoading,
    error,
  } = useQuery<Profile>({
    queryKey: ["profile", 1],
    queryFn: getProfile,
  });

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        Error loading profile
      </div>
    );

  if (!profile) return null;

  const cards = [
    {
      title: "Personal Information",
      icon: <FaUser />,
      color: "cyan",
      items: [
        {
          icon: <FaMapMarkerAlt />,
          label: "Location",
          value: profile.location,
        },
        {
          icon: <FaGlobe />,
          label: "Nationality",
          value: profile.nationality,
        },
        {
          icon: <FaEnvelope />,
          label: "Email",
          value: profile.email,
        },
        {
          icon: <FaPhone />,
          label: "Phone",
          value: profile.phone,
        },
      ],
    },

    {
      title: "Social Links",
      icon: <FaLink />,
      color: "pink",
      items: [
        {
          icon: <FaGithub />,
          label: "GitHub",
          value: "GitHub",
          link: "https://github.com/abdiwaliabdi02-abdi",
        },
        {
          icon: <FaTwitter />,
          label: "Twitter",
          value: "Twitter",
          link: "https://x.com/AbdiAbdiwa69824",
        },
        {
          icon: <FaLinkedin />,
          label: "LinkedIn",
          value: "LinkedIn",
          link: "https://www.linkedin.com/in/abdiwali-abdi",
        },
      ],
    },

    {
      title: "Employment",
      icon: <FaBriefcase />,
      color: "green",
      items: [
        {
          icon: <FaBriefcase />,
          label: "Availability",
          value: profile.availability,
        },
        {
          icon: <FaBriefcase />,
          label: "Salary",
          value: profile.expectedSalary ? `$${profile.expectedSalary}` : "-",
        },
        {
          icon: <FaBriefcase />,
          label: "Notice",
          value: profile.noticePeriod,
        },
        {
          icon: <FaBriefcase />,
          label: "Relocate",
          value: profile.willingToRelocate ? "Yes" : "No",
        },
      ],
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8">
      <div
        className="
          max-w-7xl
          mx-auto

          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3

          gap-8
        "
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={`
              relative
              overflow-hidden

              rounded-[34px]

              p-[1px]

              group

              ${
                card.color === "cyan"
                  ? "bg-gradient-to-b from-cyan-400 to-blue-500"
                  : card.color === "pink"
                    ? "bg-gradient-to-b from-pink-500 to-fuchsia-500"
                    : "bg-gradient-to-b from-yellow-300 to-green-500"
              }

              shadow-[0_0_25px_rgba(0,0,0,0.65)]

              hover:-translate-y-4
              hover:scale-[1.03]

              hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]

              transition-all
              duration-500
            `}
          >
            {/* PREMIUM GLOW */}
            <div
              className={`
                absolute
                -top-24
                -left-24

                w-60
                h-60

                rounded-full

                blur-[120px]

                opacity-90

                transition-all
                duration-700

                group-hover:scale-150

                ${
                  card.color === "cyan"
                    ? "bg-cyan-400/20"
                    : card.color === "pink"
                      ? "bg-fuchsia-500/20"
                      : "bg-lime-400/20"
                }
              `}
            />

            {/* INNER CARD */}
            <div
              className="
                relative
                h-full

                rounded-[33px]

                bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(2,6,23,0.98))]
                backdrop-blur-2xl
                border
                border-white/10

                px-7
                py-8
              "
            >
              {/* MOVING LIGHT */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-20

                  bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)]

                  translate-x-[-100%]
                  group-hover:translate-x-[100%]

                  transition-all
                  duration-1000
                "
              />

              {/* TOP LIGHT */}
              <div
                className="
                  absolute
                  top-0
                  left-0

                  w-full
                  h-24

                  bg-gradient-to-r
                  from-white/[0.08]
                  via-white/[0.03]
                  to-transparent

                  rounded-t-[33px]
                "
              />

              {/* TOP RIGHT BUTTON */}
              <div
                className={`
                  absolute
                  top-5
                  right-5

                  w-6
                  h-6

                  rounded-full

                  flex
                  items-center
                  justify-center

                  text-[10px]
                  font-bold

                  ${
                    card.color === "cyan"
                      ? "bg-cyan-500/30 text-cyan-200"
                      : card.color === "pink"
                        ? "bg-pink-500/30 text-pink-200"
                        : "bg-green-500/30 text-green-200"
                  }
                `}
              >
                ×
              </div>

              {/* ICON */}
              <div
                className={`
                  text-5xl
                  mb-6

                  flex
                  justify-center

                  ${
                    card.color === "cyan"
                      ? "text-cyan-300"
                      : card.color === "pink"
                        ? "text-pink-300"
                        : "text-lime-300"
                  }

                  drop-shadow-[0_0_30px_currentColor]
                  animate-bounce
                `}
              >
                {card.icon}
              </div>

              {/* TITLE */}
              <h2
                className="
                  text-white
                  text-2xl
                  font-bold

                  text-center

                  mb-8
                "
              >
                {card.title}
              </h2>

              {/* CONTENT */}
              <div className="space-y-5">
                {card.items.map((item, i) => (
                  <div
                    key={i}
                    className="
                      flex
                      items-center
                      justify-between

                      border-b
                      border-white/5

                      pb-4
                    "
                  >
                    {/* LEFT */}
                    <div className="flex items-center gap-3">
                      <div
                        className={`
                          text-sm

                          ${
                            card.color === "cyan"
                              ? "text-cyan-300"
                              : card.color === "pink"
                                ? "text-pink-300"
                                : "text-lime-300"
                          }
                        `}
                      >
                        {item.icon}
                      </div>

                      <span className="text-gray-400 text-sm">
                        {item.label}
                      </span>
                    </div>

                    {/* RIGHT */}
                    {"link" in item && item.link ? (
                      <a
                        href={item.link as string}
                        target="_blank"
                        rel="noreferrer"
                        className={`
                          font-semibold
                          transition

                          ${
                            card.color === "cyan"
                              ? "text-cyan-300 hover:text-cyan-200"
                              : card.color === "pink"
                                ? "text-pink-300 hover:text-pink-200"
                                : "text-lime-300 hover:text-lime-200"
                          }
                        `}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-white font-medium">
                        {item.value || "-"}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* BOTTOM GLOW LINE */}
              <div
                className={`
                  absolute
                  bottom-0
                  left-0

                  w-full
                  h-6

                  blur-[1px]

                  ${
                    card.color === "cyan"
                      ? "bg-gradient-to-r from-blue-600 to-cyan-400"
                      : card.color === "pink"
                        ? "bg-gradient-to-r from-rose-500 to-fuchsia-500"
                        : "bg-gradient-to-r from-yellow-300 to-green-500"
                  }
                `}
              />

              {/* UNDER GLOW */}
              <div
                className={`
                  absolute
                  -bottom-6
                  left-1/2
                  -translate-x-1/2

                  w-[70%]
                  h-8

                  blur-3xl
                  opacity-100

                  ${
                    card.color === "cyan"
                      ? "bg-cyan-400"
                      : card.color === "pink"
                        ? "bg-fuchsia-500"
                        : "bg-lime-400"
                  }
                `}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
