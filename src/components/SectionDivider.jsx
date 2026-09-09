import { motion } from "framer-motion";
import { viewportOnce } from "../lib/animations";

export default function SectionDivider() {
  return (
    <div aria-hidden className="relative mx-auto max-w-container px-5 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, scaleX: 0.4 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-center gap-3"
      >
        <span className="h-px w-16 bg-gradient-to-r from-transparent to-white/15 sm:w-28" />
        <span className="h-1.5 w-1.5 rounded-full bg-accent/60 shadow-glow-sm" />
        <span className="h-px w-16 bg-gradient-to-l from-transparent to-white/15 sm:w-28" />
      </motion.div>
    </div>
  );
}