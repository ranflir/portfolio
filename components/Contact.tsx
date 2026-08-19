"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";
import { IconGithub, IconLinkedin, IconTwitterX } from "./icons";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const socials = [
  {
    icon: IconGithub,
    label: "GitHub",
    href: "https://github.com/ranflir",
  },
  {
    icon: IconLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    icon: IconTwitterX,
    label: "X",
    href: "https://twitter.com",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSent(true);
    setLoading(false);
  };

  return (
    <section id="contact" className="section-padding section-alt">
      <Container>
        <RevealOnScroll>
          <SectionHeader
            label="Contact"
            title={
              <>
                함께{" "}
                <span className="font-display text-accent text-4xl md:text-5xl">
                  일해봐요
                </span>
              </>
            }
            description="새로운 기회나 협업 제안이 있으시면 언제든지 연락주세요. 최대한 빠르게 답변드리겠습니다."
          />
        </RevealOnScroll>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <RevealOnScroll className="lg:col-span-2" delay={100}>
            <div className="space-y-8">
              <div>
                <h3 className="text-foreground font-bold mb-2">연락처 정보</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  포트폴리오 확인, 채용 문의, 사이드 프로젝트 협업 등 어떤
                  내용이든 환영합니다.
                </p>
              </div>

              <a
                href="mailto:ranflir.sc@gmail.com"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-xl bg-accent-light flex items-center justify-center group-hover:bg-accent transition-colors duration-200">
                  <Mail className="w-5 h-5 text-accent group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                  <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                    ranflir.sc@gmail.com
                  </p>
                </div>
              </a>

              <div>
                <p className="text-muted-foreground text-sm mb-4">소셜 미디어</p>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                    >
                      <s.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="lg:col-span-3" delay={200}>
            <div className="card p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <CheckCircle className="w-12 h-12 text-green-500" />
                  <h3 className="text-foreground text-xl font-bold">
                    메시지를 보냈습니다!
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    빠른 시일 내에 답변드리겠습니다.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setForm({ name: "", email: "", message: "" });
                    }}
                    className="mt-2 text-accent hover:text-accent/80 text-sm font-medium cursor-pointer"
                  >
                    다시 보내기
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-foreground text-sm font-medium mb-2">
                      이름
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="김현제"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground text-sm font-medium mb-2">
                      이메일
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="email@example.com"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground text-sm font-medium mb-2">
                      메시지
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="안녕하세요! 협업 제안이 있어서 연락드립니다..."
                      className="input-field resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    {loading ? "전송 중..." : "메시지 보내기"}
                  </button>
                </form>
              )}
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
