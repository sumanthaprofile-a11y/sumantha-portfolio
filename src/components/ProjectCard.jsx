import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Bot, ChevronDown, Landmark, ShieldCheck } from "lucide-react";

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
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/8 bg-ink-800/40 backdrop-blur-sm transition-[border-color,background-color,box-shadow] duration-500 hover:border-accent/30 hover:bg-ink-800/70 hover:shadow-card hover:shadow-accent/10"
    >
      {/* hover gradient veil */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(400px circle at 20% 0%, rgba(56,189,248,0.10), transparent 60%)",
        }}
      />

      {/* visual header */}
      <div className="relative flex items-center justify-between overflow-hidden border-b border-white/8 px-7 py-6">
        <div
          aria-hidden
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "linear-gradient(135deg, rgba(56,189,248,0.10), transparent 45%), radial-gradient(120% 120% at 100% 0%, rgba(125,211,252,0.06), transparent 50%)",
          }}
        />
        <span className="relative font-display text-5xl font-bold tracking-tight text-white/[0.06] transition-colors duration-500 group-hover:text-accent/20 md:text-6xl">
          {project.number}
        </span>
        <span className="relative grid h-12 w-12 place-items-center rounded-2xl border border-accent/20 bg-accent/[0.08] text-accent-soft transition-all duration-500 group-hover:scale-110 group-hover:border-accent/40 group-hover:bg-accent/15">
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
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
            <span
              key={tag}
              className="chip transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/[0.06] hover:text-accent-soft"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 pt-2">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-soft transition-colors hover:text-accent"
          >
            View Details
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          <span className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors duration-300 group-hover:text-accent-soft">
            Case <ArrowUpRight className="h-4 w-4" />
          </span>
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
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <p className="text-sm leading-relaxed text-zinc-400">
                      Focused on {project.tags.join(" · ")} — designed, built, and
                      shipped as a complete working solution.
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}