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
        relative w-[92%] max-w-6xl flex items-center justify-between px-4 py-3 rounded-2xl

        /* 🌌 SAME SURFACE AS CARDS */
        bg-[rgba(2,6,23,0.88)] backdrop-blur-xl
        border border-white/10

        shadow-[0_12px_40px_rgba(0,0,0,0.7)]
        overflow-hidden
      "
      >
        {/* 🔵 LEFT (MATCHES PERSONAL CARD) */}
        <div
          className="
          absolute left-0 top-0 h-full w-[180px] pointer-events-none
          bg-gradient-to-r
          from-cyan-400/70
          via-cyan-400/30
          to-transparent
          blur-2xl
        "
        />

        {/* 🌸 RIGHT (MATCHES SOCIAL CARD) */}
        <div
          className="
          absolute right-0 top-0 h-full w-[180px] pointer-events-none
          bg-gradient-to-l
          from-pink-400/70
          via-pink-400/30
          to-transparent
          blur-2xl
        "
        />

        {/* ✨ TOP GLASS LINE */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-40" />

        {/* LEFT */}
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-r from-blue-500 to-purple-500 shadow-md">
            <div className="w-full h-full rounded-full overflow-hidden bg-black">
              <img
                src={profileImg}
                alt="profile"
                className="w-full h-full object-cover object-[50%_20%] scale-125"
              />
            </div>
          </div>

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
        <nav className="flex items-center gap-3 text-sm md:text-base relative z-10">
          {navItems.map((item) => {
            const isActive = active === item.name;

            return (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                onClick={() => setActive(item.name)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200

                  ${
                    isActive
                      ? `
                        bg-green-500/15 
                        text-green-400 
                        border border-green-400/40 
                        shadow-[0_0_18px_rgba(34,197,94,0.7)]
                      `
                      : `
                        text-gray-300 
                        hover:text-green-400 
                        hover:bg-green-500/10
                        hover:shadow-[0_0_10px_rgba(34,197,94,0.4)]
                      `
                  }
                `}
              >
                {item.icon()}
                {item.name}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
