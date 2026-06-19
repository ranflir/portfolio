"use client";
import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface Category {
  title: string;
  emoji: string;
  skills: Skill[];
}

const categories: Category[] = [
  {
    title: "Frontend",
    emoji: "🎨",
    skills: [
      { name: "React / Next.js", level: 92, color: "#6366f1" },
      { name: "TypeScript",      level: 88, color: "#8b5cf6" },
      { name: "Tailwind CSS",    level: 90, color: "#06b6d4" },
      { name: "HTML / CSS",      level: 95, color: "#f59e0b" },
    ],
  },
  {
    title: "Backend",
    emoji: "⚙️",
    skills: [
      { name: "Node.js",         level: 80, color: "#10b981" },
      { name: "Python / FastAPI",level: 72, color: "#6366f1" },
      { name: "PostgreSQL",      level: 75, color: "#8b5cf6" },
      { name: "REST / GraphQL",  level: 78, color: "#06b6d4" },
    ],
  },
  {
    title: "DevOps & Tools",
    emoji: "🛠️",
    skills: [
      { name: "Git / GitHub",    level: 90, color: "#f59e0b" },
      { name: "Docker",          level: 68, color: "#6366f1" },
      { name: "Vercel / AWS",    level: 74, color: "#10b981" },
      { name: "Figma",           level: 65, color: "#ec4899" },
    ],
  },
];

const techBadges = [
  "Next.js","React","TypeScript","Node.js","Python","PostgreSQL",
  "Tailwind CSS","Docker","Git","REST API","GraphQL","Vercel",
  "AWS S3","Prisma","Redux","Zustand",
];

function SkillBar({ skill, visible }: { skill: Skill; visible: boolean }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
        <span className="text-slate-500 text-xs">{skill.level}%</span>
      </div>
      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${skill.level}%` : "0%",
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`,
            transitionDelay: "200ms",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-28 px-6 bg-[#0d0d1a]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">Skills</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            기술 <span className="gradient-text">스택</span>
          </h2>
        </div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((cat) => (
            <div key={cat.title} className="p-6 rounded-2xl bg-white/3 border border-white/8">
              <h3 className="flex items-center gap-2 text-white font-bold mb-6">
                <span>{cat.emoji}</span>
                {cat.title}
              </h3>
              {cat.skills.map((sk) => (
                <SkillBar key={sk.name} skill={sk} visible={visible} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <div className="text-center">
          <p className="text-slate-500 text-sm mb-6">그 외에도 사용해 본 기술들</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-slate-300 text-sm hover:border-indigo-500/50 hover:text-indigo-300 transition-colors cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
