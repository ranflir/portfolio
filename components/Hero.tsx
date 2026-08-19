"use client";

import { useEffect, useState } from "react";
import { Mail, ChevronDown, ArrowDownRight } from "lucide-react";
import { IconGithub } from "./icons";
import Container from "@/components/ui/Container";

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
        const t = setTimeout(
          () => setDisplayed(role.slice(0, displayed.length + 1)),
          55
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setTyping(false), 1800);
      return () => clearTimeout(t);
    }
    if (displayed.length > 0) {
      const t = setTimeout(
        () => setDisplayed(displayed.slice(0, -1)),
        30
      );
      return () => clearTimeout(t);
    }
    setRoleIdx((i) => (i + 1) % ROLES.length);
    setTyping(true);
  }, [displayed, typing, roleIdx]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center section-padding overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #dbeafe 0%, transparent 50%), radial-gradient(circle at 80% 80%, #f4f4f5 0%, transparent 50%)",
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-light border border-accent/20 text-accent text-xs font-semibold mb-8 animate-fadeInUp">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            Available for hire
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6 animate-fadeInUp">
            안녕하세요,
            <br />
            <span className="font-display text-accent text-6xl md:text-7xl lg:text-8xl">
              김현제
            </span>
            입니다
          </h1>

          <div className="h-9 flex items-center mb-6">
            <p className="text-lg md:text-xl text-secondary font-medium">
              {displayed}
              <span className="cursor-blink text-accent ml-0.5">|</span>
            </p>
          </div>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mb-10 animate-fadeInUp">
            사용자 경험을 중시하는 풀스택 개발자입니다. 깔끔한 코드와
            세련된 UI로 문제를 해결하는 것을 즐깁니다.
          </p>

          <div className="flex flex-wrap items-center gap-3 animate-fadeInUp">
            <a href="#contact" className="btn-primary">
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
            <a
              href="https://github.com/ranflir"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <IconGithub className="w-4 h-4" />
              GitHub
              <ArrowDownRight className="w-3.5 h-3.5 opacity-50" />
            </a>
          </div>
        </div>
      </Container>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-accent transition-colors cursor-pointer"
      >
        <span className="text-xs font-medium tracking-wide">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
