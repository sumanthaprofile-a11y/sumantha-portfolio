import { useRef } from "react";
import { motion, useSpring } from "framer-motion";

const getPointer = (e) => (e.pointerType === "mouse" ? e : null);

export default function Magnetic({ children, strength = 0.25, className = "" }) {
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 180, damping: 18, mass: 0.4 });
  const y = useSpring(0, { stiffness: 180, damping: 18, mass: 0.4 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el || !getPointer(e)) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x, y, display: "inline-flex" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}