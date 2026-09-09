import { motion } from "framer-motion";
import { staggerContainer, viewportOnceBottom } from "../lib/animations";
import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnceBottom}
      className={`flex flex-col ${alignment} mb-14 md:mb-16`}
    >
      <Reveal delay={0}>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={`mt-4 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg ${
              align === "left" ? "" : "mx-auto"
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </motion.div>
  );
}