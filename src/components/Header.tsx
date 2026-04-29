import { useState } from "react";
import profile from "../assets/profile.png";

import { FaHome, FaFileAlt, FaCode, FaTrophy, FaHeart } from "react-icons/fa";

import React from "react"; // ⚠️ IMPORTANT

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

  return (
    <header className="w-full flex justify-center py-4">
      <div
        className="w-[90%] max-w-6xl flex items-center justify-between px-1 py-1 rounded-2xl
        bg-gradient-to-r from-blue-900 via-purple-800 to-pink-700
        shadow-xl border border-white/10"
      >
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-r from-pink-500 to-blue-500">
            <div className="w-full h-full rounded-full overflow-hidden bg-black">
              <img
                src={profile}
                alt="profile"
                className="w-full h-full object-cover object-[50%_20%] scale-125"
              />
            </div>
          </div>

          <div>
            <h1 className="text-white font-semibold text-base">Abdiwali Mohamed Abdi</h1>
            <p className="text-gray-300 text-sm">Software Developer</p>
          </div>
        </div>

        {/* RIGHT NAV */}
        <nav className="flex items-center gap-6 text-base">
          {navItems.map((item) => {
            const isActive = active === item.name;

            return (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                onClick={() => setActive(item.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition duration-300
                  ${
                    isActive
                      ? "bg-white text-purple-700 font-semibold shadow"
                      : "text-gray-200 hover:bg-white/10 hover:text-white"
                  }
                `}
              >
                {/* ✅ GUARANTEED SAFE */}
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
