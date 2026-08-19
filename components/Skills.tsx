"use client";

import { useEffect, useRef, useState } from "react";
import { Palette, Server, Wrench } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

interface Skill {
  name: string;
  level: number;
}

interface Category {
  title: string;
  icon: typeof Palette;
  skills: Skill[];
}

const categories: Category[] = [
  {
    title: "Frontend",
    icon: Palette,
    skills: [
      { name: "React / Next.js", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Python / FastAPI", level: 72 },
      { name: "PostgreSQL", level: 75 },
      { name: "REST / GraphQL", level: 78 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 68 },
      { name: "Vercel / AWS", level: 74 },
      { name: "Figma", level: 65 },
    ],
  },
];

const techBadges = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Tailwind CSS",
  "Docker",
  "Git",
  "REST API",
  "GraphQL",
  "Vercel",
  "AWS S3",
  "Prisma",
  "Redux",
  "Zustand",
];

function SkillBar({ skill, visible }: { skill: Skill; visible: boolean }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-foreground text-sm font-medium">{skill.name}</span>
        <span className="text-muted-foreground text-xs">{skill.level}%</span>
      </div>
      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-accent transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${skill.level}%` : "0%",
            transitionDelay: "150ms",
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
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-padding section-alt">
      <Container>
        <RevealOnScroll>
          <SectionHeader
            label="Skills"
            title={
              <>
                기술{" "}
                <span className="font-display text-accent text-4xl md:text-5xl">
                  스택
                </span>
              </>
            }
          />
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {categories.map((cat, i) => (
            <RevealOnScroll key={cat.title} delay={i * 100}>
              <div className="card p-6 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-lg bg-accent-light flex items-center justify-center">
                    <cat.icon className="w-4 h-4 text-accent" />
                  </div>
                  <h3 className="text-foreground font-bold">{cat.title}</h3>
                </div>
                <div className="space-y-5">
                  {cat.skills.map((sk) => (
                    <SkillBar key={sk.name} skill={sk} visible={visible} />
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={200}>
          <div className="text-center">
            <p className="text-muted-foreground text-sm mb-6">
              그 외에도 사용해 본 기술들
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {techBadges.map((t) => (
                <span key={t} className="tag cursor-default">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
