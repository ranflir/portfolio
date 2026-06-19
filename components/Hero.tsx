"use client";
import { useEffect, useState } from "react";
import { Mail, ChevronDown } from "lucide-react";
import { IconGithub } from "./icons";

const ROLES = [
  "Full-Stack Developer",
  "React / Next.js Engineer",
  "UI/UX Enthusiast",
  "Open Source Contributor",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = ROLES[roleIdx];
    if (typing) {
      if (displayed.length < role.length) {
        const t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIdx((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Avatar */}
        <div className="animate-float mb-8 inline-block">
          <div className="w-28 h-28 mx-auto rounded-full gradient-border p-1">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-4xl font-bold text-white">
              👨‍💻
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/40 border border-indigo-500/30 text-indigo-300 text-xs font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for hire
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 animate-fadeInUp leading-tight">
          안녕하세요,<br />
          <span className="gradient-text">김현제</span>입니다
        </h1>

        <div className="h-10 flex items-center justify-center mb-6">
          <p className="text-xl md:text-2xl text-slate-300 font-medium">
            {displayed}
            <span className="cursor-blink text-indigo-400 ml-0.5">|</span>
          </p>
        </div>

        <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10 animate-fadeInUp">
          사용자 경험을 중시하는 풀스택 개발자입니다. 깔끔한 코드와 아름다운 UI로
          문제를 해결하는 것을 즐깁니다.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 animate-fadeInUp">
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </a>
          <a
            href="https://github.com/ranflir"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-500/50 text-white font-semibold transition-all duration-200 hover:-translate-y-0.5"
          >
            <IconGithub className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-indigo-400 transition-colors"
      >
        <span className="text-xs">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
