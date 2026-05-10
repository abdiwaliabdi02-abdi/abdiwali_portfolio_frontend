import { useState } from "react";
import profileImg from "../assets/profile.png";

import {
  FaHome,
  FaFileAlt,
  FaCode,
  FaTrophy,
  FaHeart,
  FaTools,
} from "react-icons/fa";

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
    { name: "Skills", icon: () => <FaTools /> },
    { name: "Projects", icon: () => <FaCode /> },
    { name: "Achievement", icon: () => <FaTrophy /> },
    { name: "Hobbies", icon: () => <FaHeart /> },
  ];

  const [active, setActive] = useState("Home");

  const {
    data: profile,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  /* Loading State */
  if (isLoading) {
    return (
      <div className="w-full flex justify-center py-10">
        <h1 className="text-green-400 text-xl animate-pulse">
          Loading profile...
        </h1>
      </div>
    );
  }

  /* Error State */
  if (error) {
    return (
      <div className="w-full flex justify-center py-10">
        <h1 className="text-red-400 text-xl">Something went wrong</h1>
      </div>
    );
  }

  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50

        flex
        justify-center

        pt-5
        px-4
      "
    >
      <div
        className="
          relative

          w-[95%]
          max-w-7xl

          flex
          items-center
          justify-between

          px-5
          py-3

          rounded-[28px]

          bg-[rgba(2,6,23,0.82)]

          backdrop-blur-2xl

          border
          border-white/10

          shadow-[0_10px_40px_rgba(0,0,0,0.75)]

          overflow-hidden
        "
      >
        {/* CLEAN GREEN GLOW */}
        <div
          className="
            absolute
            inset-0

            bg-gradient-to-r
            from-green-500/5
            via-transparent
            to-green-500/5

            pointer-events-none
          "
        />

        {/* TOP LIGHT LINE */}
        <div
          className="
            absolute
            top-0
            left-0

            w-full
            h-[1px]

            bg-gradient-to-r
            from-transparent
            via-green-400/40
            to-transparent
          "
        />

        {/* PROFILE */}
        <div className="flex items-center gap-4 relative z-10">
          {/* IMAGE */}
          <div
            className="
              w-14
              h-14

              rounded-full

              p-[2px]

              bg-gradient-to-r
              from-green-400
              via-cyan-400
              to-green-400

              shadow-[0_0_18px_rgba(34,197,94,0.45)]
            "
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-black">
              <img
                src={profileImg}
                alt="profile"
                className="
                  w-full
                  h-full
                  object-cover
                  object-[50%_20%]
                  scale-125
                "
              />
            </div>
          </div>

          {/* TEXT */}
          <div>
            <h1
              className="
                text-white
                font-bold
                text-[17px]
                leading-none
              "
            >
              {profile?.name}
            </h1>

            <p
              className="
                text-gray-400
                text-[13px]
                mt-1
              "
            >
              {profile?.bio || "Software Developer"}
            </p>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav
          className="
            flex
            items-center
            gap-2

            relative
            z-10
          "
        >
          {navItems.map((item) => {
            const isActive = active === item.name;

            return (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                onClick={() => setActive(item.name)}
                className={`
                  flex
                  items-center
                  gap-2

                  px-4
                  py-3

                  rounded-[18px]

                  text-[14px]
                  font-medium

                  transition-all
                  duration-300

                  border

                  ${
                    isActive
                      ? `
                        text-green-400
                        border-green-400/30
                        bg-green-500/10
                        shadow-[0_0_20px_rgba(34,197,94,0.28)]
                      `
                      : `
                        text-gray-300
                        border-transparent

                        hover:text-white
                        hover:bg-white/[0.03]
                        hover:border-green-400/20
                        hover:shadow-[0_0_18px_rgba(34,197,94,0.14)]
                      `
                  }
                `}
              >
                <span className="text-[15px]">{item.icon()}</span>

                <span>{item.name}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
