import { motion } from "framer-motion";
import { Presentation, Users } from "lucide-react";
import { workshop } from "../data/portfolio";
import Reveal from "../components/Reveal";
import StatCounter from "../components/StatCounter";
import { viewportOnceBottom } from "../lib/animations";

export default function Workshop() {
  return (
    <section id="workshop" className="section-pad relative scroll-mt-24 py-20 md:py-24">
      <div className="container-x">
        <Reveal delay={0.05}>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-ink-800/50 px-7 py-12 backdrop-blur-sm md:px-14 md:py-16">
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(600px circle at 85% 20%, rgba(56,189,248,0.10), transparent 60%)",
              }}
            />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <span className="eyebrow">Workshop</span>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">
                  {workshop.title}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
                  {workshop.text}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#8B00FF]/25 bg-[#8B00FF]/[0.07] px-4 py-2 text-sm font-medium text-[#C084FC]">
                  <Presentation className="h-4 w-4" />
                  {workshop.topic}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportOnceBottom}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center justify-center gap-6 rounded-3xl border border-white/8 bg-ink-900/60 p-8"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-[#8B00FF]/20 bg-[#8B00FF]/[0.08] text-[#C084FC]">
                  <Users className="h-7 w-7" strokeWidth={1.5} />
                </span>
                <div>
                  <StatCounter
                    value={workshop.statValue}
                    suffix={workshop.statSuffix}
                  />
                  <p className="mt-1 text-sm text-zinc-400">{workshop.statLabel}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}