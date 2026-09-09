import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[80] h-0.5 origin-left"
      style={{
        scaleX,
        backgroundImage:
          "linear-gradient(90deg, #ff004c, #ff00a8, #8b00ff, #0066ff, #00d9ff, #00ff9d, #b6ff00, #ffd000, #ff6a00, #ff004c)",
        backgroundSize: "200% 100%",
        animation: "gradient-pan 8s linear infinite alternate",
      }}
    />
  );
}