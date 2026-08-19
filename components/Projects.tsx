import {
  ExternalLink,
  Star,
  Users,
  Compass,
  Search,
  Coffee,
} from "lucide-react";
import { IconGithub } from "./icons";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

interface Project {
  title: string;
  desc: string;
  tech: string[];
  github: string;
  demo?: string;
  icon: typeof Users;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Wara",
    desc: "모임 준비 부담을 만남의 설렘으로 바꾸는 소셜 플랫폼. 웹·모바일·API 모노레포로 초대, 일정, 실시간 위치 공유까지 제공.",
    tech: ["Next.js", "NestJS", "Expo", "PostgreSQL", "Redis", "Socket.io"],
    github: "https://github.com/Wara-by-Gara/Wara",
    demo: "https://www.wara.kr",
    icon: Users,
    featured: true,
  },
  {
    title: "관광지 도슨트 AI 가이드",
    desc: "QR 스캔으로 앱 설치 없이 접속하는 관광지 페르소나 AI 가이드. RAG·공공데이터·3D 아바타·다국어 PWA.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "pgvector", "OpenAI", "R3F"],
    github: "https://github.com/lareina7486/persona-guide",
    icon: Compass,
    featured: true,
  },
  {
    title: "네이버 마케팅 호스팅 서비스",
    desc: "네이버 검색 기반 스마트스토어 크롤 MVP. 신규입점 4신호 판별, Admin 스프레드시트 UI, 일일 자동 크롤·메일 리포트.",
    tech: ["Next.js", "Playwright", "Supabase", "GitHub Actions", "Render"],
    github: "https://github.com/K-Ymakers/pageCrwaling",
    icon: Search,
  },
  {
    title: "CATCH-COFFEE",
    desc: "위치 기반 카페 할인 정보 플랫폼. 사용자 제보·판매자 등록·자동 크롤링 3중 검증과 최적 결제수단 추천.",
    tech: ["Next.js", "NestJS", "Expo", "PostgreSQL", "Drizzle", "Turborepo"],
    github: "https://github.com/ranflir/CATCH-COFEE",
    icon: Coffee,
  },
];

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <div className="group card p-6 flex flex-col h-full card-hover">
      {project.featured && (
        <span className="self-start flex items-center gap-1 text-xs font-medium text-accent bg-accent-light border border-accent/20 px-2.5 py-1 rounded-full mb-4">
          <Star className="w-3 h-3 fill-accent" />
          Featured
        </span>
      )}

      <div className="w-11 h-11 rounded-xl bg-accent-light flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
        <Icon className="w-5 h-5 text-accent group-hover:text-white transition-colors duration-300" />
      </div>

      <h3 className="text-foreground font-bold text-lg mb-2 group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5">
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-border">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground text-sm font-medium transition-colors cursor-pointer"
        >
          <IconGithub className="w-4 h-4" />
          Code
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-muted-foreground hover:text-accent text-sm font-medium transition-colors cursor-pointer"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <Container>
        <RevealOnScroll>
          <SectionHeader
            label="Projects"
            title={
              <>
                주요{" "}
                <span className="font-display text-accent text-4xl md:text-5xl">
                  프로젝트
                </span>
              </>
            }
          />
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <RevealOnScroll key={p.title} delay={i * 100}>
              <ProjectCard project={p} />
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={400}>
          <div className="text-center mt-12">
            <a
              href="https://github.com/ranflir"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <IconGithub className="w-4 h-4" />
              GitHub에서 더 보기
            </a>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
