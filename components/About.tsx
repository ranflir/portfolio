import { MapPin, Calendar, Briefcase, GraduationCap } from "lucide-react";

const stats = [
  { label: "Years of Experience", value: "3+", icon: "📅" },
  { label: "Projects Completed",  value: "20+", icon: "🚀" },
  { label: "Technologies Used",   value: "15+", icon: "⚡" },
  { label: "Open Source Repos",   value: "10+", icon: "💻" },
];

const timeline = [
  {
    icon: <Briefcase className="w-4 h-4" />,
    title: "Software Engineer",
    place: "테크 스타트업",
    period: "2023 – 현재",
    desc: "Next.js / Node.js 기반 SaaS 플랫폼 개발 및 운영",
  },
  {
    icon: <Briefcase className="w-4 h-4" />,
    title: "Frontend Developer",
    place: "IT 서비스 기업",
    period: "2022 – 2023",
    desc: "React 기반 대시보드 & 관리자 툴 구축",
  },
  {
    icon: <GraduationCap className="w-4 h-4" />,
    title: "컴퓨터공학 학사",
    place: "서울대학교",
    period: "2018 – 2022",
    desc: "자료구조, 알고리즘, 소프트웨어 공학 전공",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            저는 이런 <span className="gradient-text">개발자</span>입니다
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — bio */}
          <div>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              안녕하세요! 저는 <strong className="text-white">김현제</strong>입니다.
              사용자의 문제를 기술로 해결하는 것에 열정을 가진 풀스택 개발자로,
              특히 <strong className="text-indigo-400">React / Next.js</strong> 생태계를 좋아합니다.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              깔끔하고 유지보수하기 쉬운 코드를 작성하는 것을 중요하게 생각하며,
              팀원들과의 소통과 협업을 통해 더 나은 제품을 만들어 나가는 것을 즐깁니다.
              항상 새로운 기술을 배우고 성장하려는 자세로 임합니다.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>서울, 대한민국</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Calendar className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>2000년생 (만 25세)</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Briefcase className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>풀스택 개발자 · 3년 경력</span>
              </div>
            </div>
          </div>

          {/* Right — timeline */}
          <div className="space-y-4">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-xl bg-white/3 border border-white/8 card-hover">
                <div className="w-9 h-9 flex-shrink-0 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                    <span className="text-xs text-slate-500">· {item.period}</span>
                  </div>
                  <p className="text-indigo-400 text-xs mb-1">{item.place}</p>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {stats.map((s, i) => (
            <div key={i} className="p-6 rounded-2xl gradient-border text-center card-hover">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-3xl font-extrabold gradient-text mb-1">{s.value}</div>
              <div className="text-slate-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
