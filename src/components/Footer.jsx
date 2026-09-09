import { Github, Heart, Linkedin, Mail } from "lucide-react";
import { footer, personal } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] py-10">
      <div className="container-x flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="font-display text-base font-semibold text-zinc-100">
            {personal.name}
          </p>
          <p className="mt-0.5 text-sm text-zinc-500">{personal.role}</p>
        </div>

        <p className="flex items-center gap-1.5 text-center text-xs text-zinc-500">
          © {year} {personal.name}. All rights reserved.
          <span className="mx-1 hidden md:inline">·</span>
          <span className="hidden items-center gap-1 md:inline-flex">
            Crafted with <Heart className="h-3 w-3 fill-accent text-accent" /> and React
          </span>
        </p>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:text-white hover:shadow-[0_10px_30px_-12px_rgba(139,0,255,0.6)]"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:text-white hover:shadow-[0_10px_30px_-12px_rgba(0,217,255,0.6)]"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:text-white hover:shadow-[0_10px_30px_-12px_rgba(255,106,0,0.6)]"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}