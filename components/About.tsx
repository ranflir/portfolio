import {
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Rocket,
  Zap,
  Code2,
  CalendarDays,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const stats = [
  { label: "Years of Experience", value: "3+", icon: CalendarDays },
  { label: "Projects Completed", value: "20+", icon: Rocket },
  { label: "Technologies Used", value: "15+", icon: Zap },
  { label: "Open Source Repos", value: "10+", icon: Code2 },
];

const timeline = [
  {
    icon: Briefcase,
    title: "Software Engineer",
    place: "테크 스타트업",
    period: "2023 – 현재",
    desc: "Next.js / Node.js 기반 SaaS 플랫폼 개발 및 운영",
  },
  {
    icon: Briefcase,
    title: "Frontend Developer",
    place: "IT 서비스 기업",
    period: "2022 – 2023",
    desc: "React 기반 대시보드 & 관리자 툴 구축",
  },
  {
    icon: GraduationCap,
    title: "컴퓨터공학 학사",
    place: "서울대학교",
    period: "2018 – 2022",
    desc: "자료구조, 알고리즘, 소프트웨어 공학 전공",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <Container>
        <RevealOnScroll>
          <SectionHeader
            label="About Me"
            title={
              <>
                저는 이런{" "}
                <span className="font-display text-accent text-4xl md:text-5xl">
                  개발자
                </span>
                입니다
              </>
            }
          />
        </RevealOnScroll>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <RevealOnScroll className="lg:col-span-2" delay={100}>
            <div className="space-y-6">
              <p className="text-secondary text-lg leading-relaxed">
                안녕하세요! 저는 <strong className="text-foreground">김현제</strong>
                입니다. 사용자의 문제를 기술로 해결하는 것에 열정을 가진
                풀스택 개발자로, 특히{" "}
                <strong className="text-accent">React / Next.js</strong>{" "}
                생태계를 좋아합니다.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                깔끔하고 유지보수하기 쉬운 코드를 작성하는 것을 중요하게
                생각하며, 팀원들과의 소통과 협업을 통해 더 나은 제품을
                만들어 나가는 것을 즐깁니다.
              </p>

              <div className="flex flex-col gap-3 pt-2">
                {[
                  { icon: MapPin, text: "서울, 대한민국" },
                  { icon: Calendar, text: "1986년생 (만 39세)" },
                  { icon: Briefcase, text: "PM, 풀스택 개발자" },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 text-muted-foreground text-sm"
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="lg:col-span-3" delay={200}>
            <div className="relative pl-6 border-l-2 border-border space-y-6">
              {timeline.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[calc(1.5rem+5px)] top-1 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-background" />
                  <div className="card p-5 card-hover">
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 flex-shrink-0 rounded-lg bg-accent-light flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-accent" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1">
                          <h3 className="text-foreground font-semibold text-sm">
                            {item.title}
                          </h3>
                          <span className="text-xs text-muted-foreground">
                            {item.period}
                          </span>
                        </div>
                        <p className="text-accent text-xs font-medium mb-1.5">
                          {item.place}
                        </p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {stats.map((s, i) => (
            <RevealOnScroll key={s.label} delay={i * 80}>
              <div className="card p-6 text-center card-hover">
                <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-accent-light flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-accent" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">
                  {s.value}
                </div>
                <div className="text-muted-foreground text-sm">{s.label}</div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
