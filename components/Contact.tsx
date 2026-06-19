"use client";
import { useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";
import { IconGithub, IconLinkedin, IconTwitterX } from "./icons";

const socials = [
  { icon: <IconGithub className="w-5 h-5" />,   label: "GitHub",   href: "https://github.com/ranflir",    color: "hover:text-white" },
  { icon: <IconLinkedin className="w-5 h-5" />, label: "LinkedIn", href: "https://linkedin.com",  color: "hover:text-blue-400" },
  { icon: <IconTwitterX className="w-5 h-5" />, label: "X",        href: "https://twitter.com",   color: "hover:text-sky-400" },
  { icon: <Mail className="w-5 h-5" />,         label: "Email",    href: "mailto:ranflir.sc@gmail.com", color: "hover:text-indigo-400" },
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
    <section id="contact" className="py-28 px-6 bg-[#0d0d1a]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            함께 <span className="gradient-text">일해봐요</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            새로운 기회나 협업 제안이 있으시면 언제든지 연락주세요. 최대한 빠르게 답변드리겠습니다!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left — info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-white text-xl font-bold mb-4">연락처 정보</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              포트폴리오 확인 / 채용 문의 / 사이드 프로젝트 협업 등
              어떤 내용이든 환영합니다.
            </p>
            <a
              href="mailto:ranflir.sc@gmail.com"
              className="flex items-center gap-3 text-slate-300 hover:text-indigo-400 transition-colors mb-6 group"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600/30 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">Email</p>
                <p className="font-medium">ranflir.sc@gmail.com</p>
              </div>
            </a>
            <div>
              <p className="text-slate-500 text-sm mb-4">소셜 미디어</p>
              <div className="flex gap-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 ${s.color} hover:border-indigo-500/40 transition-all duration-200 hover:-translate-y-1`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="p-8 rounded-2xl gradient-border">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-10 text-center">
                <CheckCircle className="w-14 h-14 text-green-400" />
                <h3 className="text-white text-xl font-bold">메시지를 보냈습니다!</h3>
                <p className="text-slate-400 text-sm">빠른 시일 내에 답변드리겠습니다 😊</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                  className="mt-2 text-indigo-400 hover:text-indigo-300 text-sm underline underline-offset-2"
                >
                  다시 보내기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-slate-400 text-sm mb-2">이름</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="김현제"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-sm mb-2">이메일</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-sm mb-2">메시지</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="안녕하세요! 협업 제안이 있어서 연락드립니다..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-indigo-500/25"
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
        </div>
      </div>
    </section>
  );
}
