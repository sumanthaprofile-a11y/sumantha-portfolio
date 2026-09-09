import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { about, personal } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal";
import StatCounter from "../components/StatCounter";
import { staggerContainer, viewportOnceBottom } from "../lib/animations";

export default function About() {
  return (
    <section id="about" className="section-pad relative scroll-mt-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="About Me"
          title="Curious developer, focused builder."
        />

        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Left: intro */}
          <Stagger className="space-y-5" delay={0.05} stagger={0.1}>
            {about.paragraphs.map((p, i) => (
              <StaggerItem key={i}>
                <p className="text-base leading-relaxed text-zinc-400 md:text-lg">
                  {p}
                </p>
              </StaggerItem>
            ))}
            <StaggerItem>
              <div className="pt-3">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
                  What I work with
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {about.focusAreas.map((area) => (
                    <span key={area} className="chip gap-2">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{
                          background:
                            "linear-gradient(135deg, #ff00a8, #8b00ff, #00d9ff)",
                        }}
                      />
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          </Stagger>

          {/* Right: stats panel */}
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnceBottom}
            className="relative overflow-hidden rounded-3xl"
          >
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-3xl bg-[#8B00FF]/[0.06] blur-2xl"
            />
            <div className="grid grid-cols-2 gap-4 rounded-3xl border border-white/8 bg-ink-800/50 p-5 backdrop-blur-sm shadow-card">
              {about.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={{
                    hidden: { opacity: 0, y: 22, scale: 0.96 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="group flex flex-col gap-1.5 rounded-2xl border border-white/8 bg-ink-900/60 p-5 transition-colors duration-300 hover:border-white/20"
                >
                  <StatCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals ?? 0}
                  />
                  <span className="text-sm text-zinc-400">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.45 } } }}
              className="mt-4 flex items-center gap-3 rounded-2xl border border-white/8 bg-ink-800/50 p-4 backdrop-blur-sm"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/[0.06]">
                <Briefcase className="h-5 w-5 text-zinc-300" />
              </span>
              <div>
                <p className="text-sm font-semibold text-zinc-200">{personal.role}</p>
                <p className="text-xs text-zinc-500">Currently based in {personal.location}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}