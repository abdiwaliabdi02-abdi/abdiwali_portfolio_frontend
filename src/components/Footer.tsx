import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../api/profile.api";

export default function Footer() {
  const { data: profile } = useQuery({
    queryKey: ["profile", 1],
    queryFn: () => getProfile(1),
  });

  return (
    <footer className="w-full mt-10 flex justify-center">
      <div
        className="
        w-[92%] max-w-6xl rounded-2xl px-6 py-6
        bg-white/10 backdrop-blur-lg border border-white/10
        shadow-xl text-center space-y-4
      "
      >
        {/* Social Links */}
        <div className="flex justify-center gap-6 text-xl">
          {profile?.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>
          )}

          {profile?.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
          )}

          {profile?.twitter && (
            <a
              href={profile.twitter}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaTwitter />
            </a>
          )}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-300">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">
            {profile?.name || "Abdiwali"}
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
