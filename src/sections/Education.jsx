import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import { staggerContainer, viewportOnceBottom } from "../lib/animations";

export default function Education() {
  return (
    <section id="education" className="section-pad relative scroll-mt-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Education"
          title="Academic journey."
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnceBottom}
          className="grid gap-5 md:grid-cols-3"
        >
          {education.map((edu, i) => (
            <motion.article
              key={edu.degree}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{ y: -6 }}
              className={`group relative flex flex-col rounded-3xl border border-white/8 bg-ink-800/40 p-7 backdrop-blur-sm transition-[border-color,background-color,box-shadow] duration-500 hover:border-accent/25 hover:shadow-card ${
                i === 0 ? "md:col-span-1 row-span-1" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-accent/20 bg-accent/[0.07] text-accent-soft transition-transform duration-500 group-hover:scale-110">
                  <GraduationCap className="h-6 w-6" strokeWidth={1.75} />
                </span>
                {edu.current && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    In Progress
                  </span>
                )}
              </div>

              <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-zinc-50">
                {edu.degree}
              </h3>
              <p className="mt-1.5 text-sm text-zinc-400">{edu.institution}</p>

              <div className="mt-auto flex items-center justify-between pt-6">
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  {edu.period}
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-zinc-200">
                  {edu.score}
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}