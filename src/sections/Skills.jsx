import { motion } from "framer-motion";
import { Cloud, Code2, Database, LayoutTemplate, Server, Workflow } from "lucide-react";
import { skills } from "../data/portfolio";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { staggerContainer, viewportOnceBottom } from "../lib/animations";

const CATEGORY_ICONS = {
  programming: Code2,
  frontend: LayoutTemplate,
  backend: Server,
  database: Database,
  cloud: Cloud,
  automation: Workflow,
};

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative scroll-mt-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Skills"
          title="My technical toolkit."
          description="Technologies I use to design, build, and ship products end to end."
        />

        <motion.div
          variants={staggerContainer(0.08, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnceBottom}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {Object.entries(skills).map(([key, category], index) => {
            const Icon = CATEGORY_ICONS[key] ?? Code2;
            return (
              <motion.div
                key={key}
                variants={{
                  hidden: { opacity: 0, y: 28, scale: 0.98 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl border border-white/8 bg-ink-800/40 p-6 backdrop-blur-sm transition-[border-color,background-color,box-shadow] duration-500 hover:border-white/20 hover:bg-ink-800/70 hover:shadow-card"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/12 bg-white/[0.05] text-zinc-200 transition-all duration-500 group-hover:scale-110 group-hover:border-white/25 group-hover:bg-white/[0.1] group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-zinc-100">
                    {category.label}
                  </h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span key={skill} tabIndex={0} className="chip cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* closing note */}
          <Reveal delay={0.1} className="sm:col-span-2 lg:col-span-3">
            <div className="mt-2 rounded-2xl border border-dashed border-white/10 bg-white/[0.01] p-6 text-center">
              <p className="text-sm text-zinc-400">
                Always learning — currently exploring{" "}
                <span className="font-medium text-zinc-200">cloud</span> and{" "}
                <span className="font-medium text-zinc-200">security</span>{" "}
                engineering.
              </p>
            </div>
          </Reveal>
        </motion.div>
      </div>
    </section>
  );
}