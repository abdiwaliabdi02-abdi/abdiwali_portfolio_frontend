import { useState } from "react";
import profileImg from "../assets/profile.png";

import { FaHome, FaFileAlt, FaCode, FaTrophy, FaHeart } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../api/profile.api";

type NavItem = {
  name: string;
  icon: () => React.ReactElement;
};

export default function Header() {
  const navItems: NavItem[] = [
    { name: "Home", icon: () => <FaHome /> },
    { name: "CV", icon: () => <FaFileAlt /> },
    { name: "Projects", icon: () => <FaCode /> },
    { name: "Achievement", icon: () => <FaTrophy /> },
    { name: "Hobbies", icon: () => <FaHeart /> },
  ];

  const [active, setActive] = useState("Home");

  const { data: profile } = useQuery({
    queryKey: ["profile", 1],
    queryFn: () => getProfile(1),
  });

  return (
    <header className="w-full flex justify-center py-4">
      <div
        className="
        w-[92%] max-w-6xl flex items-center justify-between px-5 py-3 rounded-2xl

        bg-[rgba(2,6,23,0.7)] backdrop-blur-xl
        border border-white/10

        shadow-[0_10px_40px_rgba(0,0,0,0.5)]
      "
      >
        {/* LEFT */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div
            className="relative w-14 h-14 rounded-full p-[2px]
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          >
            {/* glow */}
            <div className="absolute inset-0 rounded-full blur-md opacity-70 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

            <div className="relative w-full h-full rounded-full overflow-hidden bg-black">
              <img
                src={profileImg}
                alt="profile"
                className="w-full h-full object-cover object-[50%_20%] scale-125 hover:scale-110 transition duration-300"
              />
            </div>
          </div>

          {/* Name */}
          <div>
            <h1 className="text-white font-semibold text-lg">
              {profile?.name || "Loading..."}
            </h1>
            <p className="text-gray-400 text-sm">
              {profile?.bio || "Software Developer"}
            </p>
          </div>
        </div>

        {/* NAV */}
        <nav className="flex items-center gap-6 text-sm md:text-base relative">
          {navItems.map((item, index) => {
            const isActive = active === item.name;

            return (
              <div key={item.name} className="relative">
                <a
                  href={`#${item.name.toLowerCase()}`}
                  onClick={() => setActive(item.name)}
                  className={`
                    flex items-center gap-2 px-2 py-2 transition-all duration-300

                    ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }
                  `}
                >
                  {/* ICON */}
                  <span
                    className={`
                      transition-all duration-300
                      ${
                        isActive
                          ? index === 0
                            ? "text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                            : index === 1
                              ? "text-pink-400 drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]"
                              : index === 2
                                ? "text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]"
                                : "text-purple-400 drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]"
                          : ""
                      }
                    `}
                  >
                    {item.icon()}
                  </span>

                  {item.name}
                </a>

                {/* 🔥 ANIMATED UNDERLINE */}
                {isActive && (
                  <div
                    className={`
                      absolute bottom-0 left-0 h-[2px] w-full rounded-full

                      ${
                        index === 0
                          ? "bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.9)]"
                          : index === 1
                            ? "bg-pink-400 shadow-[0_0_8px_rgba(236,72,153,0.9)]"
                            : index === 2
                              ? "bg-green-400 shadow-[0_0_8px_rgba(34,197,94,0.9)]"
                              : "bg-purple-400 shadow-[0_0_8px_rgba(139,92,246,0.9)]"
                      }

                      animate-pulse
                    `}
                  />
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
