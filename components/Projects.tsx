import { ExternalLink, Star } from "lucide-react";
import { IconGithub } from "./icons";

interface Project {
  title: string;
  desc: string;
  tech: string[];
  github?: string;
  demo?: string;
  emoji: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "DevBoard",
    desc: "개발자를 위한 올인원 대시보드. 깃허브 연동, 일정 관리, 코드 스니펫 저장 기능 제공.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/ranflir",
    demo: "https://vercel.com",
    emoji: "📊",
    featured: true,
  },
  {
    title: "ChainChat",
    desc: "AI 기반 실시간 채팅 앱. WebSocket으로 구현한 채팅에 GPT 봇을 통합.",
    tech: ["React", "Node.js", "Socket.io", "OpenAI API"],
    github: "https://github.com/ranflir",
    demo: "https://vercel.com",
    emoji: "💬",
    featured: true,
  },
  {
    title: "ShopNest",
    desc: "소규모 쇼핑몰 풀스택 프로젝트. 상품 관리, 장바구니, 결제 기능 구현.",
    tech: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/ranflir",
    emoji: "🛍️",
  },
  {
    title: "MemoStack",
    desc: "Notion 스타일의 메모 앱. 드래그 앤 드롭 블록 에디터 자체 구현.",
    tech: ["React", "TypeScript", "Zustand", "IndexedDB"],
    github: "https://github.com/ranflir",
    demo: "https://vercel.com",
    emoji: "📝",
  },
  {
    title: "WeatherNow",
    desc: "위치 기반 날씨 앱. Open-Meteo API 연동, 7일 예보 시각화.",
    tech: ["Next.js", "Recharts", "Tailwind CSS"],
    github: "https://github.com/ranflir",
    demo: "https://vercel.com",
    emoji: "🌤️",
  },
  {
    title: "CodeCollab",
    desc: "실시간 공동 코드 편집 도구. Monaco Editor + CRDT 알고리즘 적용.",
    tech: ["React", "Node.js", "Y.js", "Monaco Editor"],
    github: "https://github.com/ranflir",
    emoji: "👥",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">Projects</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            주요 <span className="gradient-text">프로젝트</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative flex flex-col p-6 rounded-2xl bg-[#0d0d1a] border border-white/8 card-hover"
            >
              {p.featured && (
                <span className="absolute top-4 right-4 flex items-center gap-1 text-xs text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-2 py-0.5 rounded-full">
                  <Star className="w-3 h-3 fill-yellow-400" />
                  Featured
                </span>
              )}
              <div className="text-4xl mb-4">{p.emoji}</div>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-indigo-300 transition-colors">
                {p.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-xs bg-indigo-900/30 text-indigo-300 border border-indigo-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    <IconGithub className="w-4 h-4" />
                    Code
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-slate-400 hover:text-indigo-400 text-sm transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/ranflir"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-indigo-500/50 text-slate-300 hover:text-white font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            <IconGithub className="w-4 h-4" />
            GitHub에서 더 보기
          </a>
        </div>
      </div>
    </section>
  );
}
