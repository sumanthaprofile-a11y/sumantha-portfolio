import { Medal } from "lucide-react";
import { certification } from "../data/portfolio";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

export default function Certification() {
  return (
    <section id="certification" className="section-pad relative scroll-mt-24 py-20 md:py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Certification" title="Credentials." />

        <Reveal className="mx-auto max-w-2xl">
          <div className="group relative flex items-center gap-5 overflow-hidden rounded-3xl border border-white/8 bg-ink-800/50 p-7 backdrop-blur-sm transition-all duration-500 hover:border-accent/25 hover:shadow-card">
            <div
              aria-hidden
              className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/[0.06] blur-2xl transition-opacity duration-500 group-hover:opacity-150"
            />
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-accent/25 bg-accent/[0.08] text-accent-soft transition-all duration-500 group-hover:scale-105 group-hover:border-accent/40">
              <Medal className="h-8 w-8" strokeWidth={1.5} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                {certification.organization}
              </p>
              <h3 className="mt-1 font-display text-xl font-semibold text-zinc-50">
                {certification.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-400">
                Robotics Process Automation · UiPath Platform
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}