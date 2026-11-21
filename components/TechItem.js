import { Network } from "lucide-react";
import { FaAws } from "react-icons/fa";
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiJavascript, SiMongodb, SiPostgresql,
  SiMysql, SiTailwindcss, SiPython, SiExpress, SiDocker, SiGit, SiGithub, SiVercel,
} from "react-icons/si";

const map = {
  "React": { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
  "MongoDB": { icon: SiMongodb, color: "#47A248" },
  "PostgreSQL": { icon: SiPostgresql, color: "#4169E1" },
  "MySQL": { icon: SiMysql, color: "#4479A1" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Python": { icon: SiPython, color: "#3776AB" },
  "Express.js": { icon: SiExpress, color: "#FFFFFF" },
  "Docker": { icon: SiDocker, color: "#2496ED" },
  "Git": { icon: SiGit, color: "#F05032" },
  "GitHub": { icon: SiGithub, color: "#FFFFFF" },
  "Vercel": { icon: SiVercel, color: "#FFFFFF" },
  "AWS": { icon: FaAws, color: "#FF9900" },
  "React Native": { icon: SiReact, color: "#61DAFB" },
  "REST APIs": { icon: Network, color: "#A78BFA" },
};

export default function TechItem({ name, className = "chip", size = 24, fontSize = "1.05rem" }) {
    const t = map[name];
    const Icon = t?.icon;
    return (
      <span
        className={className}
        style={{ display: "inline-flex", alignItems: "center", gap: "0.65rem", fontSize, padding: "0.45rem 1rem" }}
      >
        {Icon && <Icon size={size} color={t.color} aria-hidden="true" />}
        {name}
      </span>
    );
  }