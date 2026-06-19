import { Code2, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <Code2 className="w-4 h-4 text-indigo-500" />
          <span>
            Built with{" "}
            <span className="text-indigo-400 font-medium">Next.js</span> &{" "}
            <span className="text-indigo-400 font-medium">Tailwind CSS</span>
          </span>
        </div>
        <p className="text-slate-500 text-sm flex items-center gap-1">
          © 2026 김현제. Made with{" "}
          <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />{" "}
          in Seoul
        </p>
      </div>
    </footer>
  );
}
