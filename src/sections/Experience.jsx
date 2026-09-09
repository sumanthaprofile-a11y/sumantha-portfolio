import { motion } from "framer-motion";
import { experience } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import { EASE, viewportOnceBottom } from "../lib/animations";

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative scroll-mt-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked."
          description="A mix of freelance and internship experience building real products for real clients."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* track */}
          <div
            aria-hidden
            className="absolute left-[13px] top-2 bottom-2 w-px bg-white/[0.08] sm:left-[15px]"
          />
          {/* drawing line */}
          <motion.div
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.4, ease: EASE }}
            className="absolute left-[13px] top-2 bottom-2 w-px origin-top sm:left-[15px]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(56,189,248,0.25), rgba(56,189,248,0.95))",
              boxShadow: "0 0 12px rgba(56,189,248,0.35)",
            }}
          />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <motion.article
                key={job.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnceBottom}
                transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
                className="group relative pl-12 sm:pl-16"
              >
                {/* dot */}
                <span
                  aria-hidden
                  className="absolute left-0 top-1.5 grid h-7 w-7 place-items-center rounded-full border border-accent/40 bg-ink-900 sm:h-8 sm:w-8"
                >
                  <span className="h-2 w-2 rounded-full bg-accent shadow-glow-sm transition-transform duration-300 group-hover:scale-125" />
                </span>

                <div className="rounded-2xl border border-white/8 bg-ink-800/40 p-6 backdrop-blur-sm transition-all duration-500 group-hover:border-accent/25 group-hover:bg-ink-800/70 group-hover:shadow-glow-sm md:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {job.role}
                    </p>
                    <p className="text-xs font-medium text-zinc-500">{job.period}</p>
                  </div>
                  <h3 className="mt-1.5 font-display text-xl font-semibold text-zinc-50">
                    {job.company}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400 md:text-[15px]">
                    {job.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="chip transition-all duration-300 group-hover:border-white/15 hover:border-accent/40 hover:text-accent-soft"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}