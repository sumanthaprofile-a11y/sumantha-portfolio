import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Bot, ChevronDown, Landmark, ShieldCheck } from "lucide-react";
import { conicGradient } from "../lib/rgb";

const ICONS = {
  bot: Bot,
  shield: ShieldCheck,
  landmark: Landmark,
};

export default function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false);
  const Icon = ICONS[project.icon] ?? Bot;

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative h-full overflow-hidden rounded-3xl p-[1.5px]"
    >
      {/* animated RGB border ring (rotates; fades in on hover) */}
      <div aria-hidden className="absolute inset-0 overflow-hidden rounded-[inherit]">
        <div
          className="absolute left-[-50%] top-[-50%] h-[200%] w-[200%] opacity-0 transition-opacity duration-700 group-hover:opacity-80"
          style={{
            background: conicGradient(index * 40, index * 2),
            animation: "rgb-spin 16s linear infinite",
          }}
        />
      </div>

      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1.5rem-1.5px)] border border-white/8 bg-ink-800/40 backdrop-blur-sm transition-[border-color,background-color] duration-500 group-hover:border-white/15 group-hover:bg-ink-800/70">
        {/* hover gradient veil */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(420px circle at 20% 0%, rgba(139,0,255,0.12), transparent 60%)",
          }}
        />

        {/* visual header */}
        <div className="relative flex items-center justify-between overflow-hidden border-b border-white/8 px-7 py-6">
          <div
            aria-hidden
            className="absolute inset-0 opacity-70"
            style={{
              background:
                "linear-gradient(135deg, rgba(139,0,255,0.10), transparent 45%), radial-gradient(120% 120% at 100% 0%, rgba(0,217,255,0.06), transparent 50%)",
            }}
          />
          <span className="relative font-display text-5xl font-bold tracking-tight text-white/[0.06] transition-all duration-500 group-hover:text-white/[0.12] md:text-6xl">
            {project.number}
          </span>
          <span className="relative grid h-12 w-12 place-items-center rounded-2xl border border-white/12 bg-white/[0.05] text-zinc-200 transition-all duration-500 group-hover:scale-110 group-hover:border-white/25 group-hover:bg-white/[0.1] group-hover:text-white">
            <Icon className="h-6 w-6" strokeWidth={1.75} />
          </span>
        </div>

        <div className="flex flex-1 flex-col p-7">
          <div className="flex items-center justify-between gap-3">
            <span className="text-gradient text-xs font-semibold uppercase tracking-wider">
              {project.highlight}
            </span>
            <span className="text-xs font-medium text-zinc-500">{project.date}</span>
          </div>

          <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-zinc-50 md:text-[1.35rem]">
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-300 transition-colors hover:text-white"
            >
              View Details
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-semibold text-zinc-200 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.09] hover:text-white"
              >
                Live Demo
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : (
              <span
                aria-hidden
                className="ml-auto h-4 w-4"
              />
            )}
          </div>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-5">
                  <div className="rounded-2xl border border-white/8 bg-ink-900/60 p-5">
                    {project.features ? (
                      <>
                        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                          Key Features
                        </p>
                        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                          {project.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center gap-2 text-sm text-zinc-300"
                            >
                              <span
                                className="h-1.5 w-1.5 rounded-full"
                                style={{
                                  background: conicGradient(45, index * 3),
                                }}
                              />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <p className="text-sm leading-relaxed text-zinc-400">
                        {project.tags.length
                          ? `Focused on ${project.tags.join(" · ")} — designed, built, and shipped as a complete working solution.`
                          : "Designed, built, and shipped as a complete working solution."}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  );
}