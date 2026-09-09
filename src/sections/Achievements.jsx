import { motion } from "framer-motion";
import { Flame, Target, Trophy } from "lucide-react";
import { achievements } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import { staggerContainer, viewportOnceBottom } from "../lib/animations";

const ICONS = {
  trophy: Trophy,
  target: Target,
  flame: Flame,
};

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad relative scroll-mt-24 py-20 md:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Achievements"
          title="Beyond the code."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnceBottom}
          className="grid gap-5 sm:grid-cols-3"
        >
          {achievements.map((item) => {
            const Icon = ICONS[item.icon] ?? Trophy;
            return (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 26 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                whileHover={{ y: -6 }}
                className="group flex items-start gap-4 rounded-2xl border border-white/8 bg-ink-800/40 p-6 backdrop-blur-sm transition-[border-color,background-color,box-shadow] duration-500 hover:border-accent/25 hover:bg-ink-800/70"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-accent/20 bg-accent/[0.07] text-accent-soft transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-zinc-100">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}