import { useEffect, useState } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const mx = useMotionValue(-300);
  const my = useMotionValue(-300);
  const sx = useSpring(mx, { stiffness: 90, damping: 24, mass: 0.7 });
  const sy = useSpring(my, { stiffness: 90, damping: 24, mass: 0.7 });

  // Slowly sweep the hue through the RGB spectrum.
  const hue = useMotionValue(320);
  useEffect(() => {
    if (!enabled) return;
    const controls = animate(0, 360, {
      duration: 24,
      ease: "linear",
      repeat: Infinity,
      onUpdate: (v) => hue.set(v),
    });
    return () => controls.stop();
  }, [enabled, hue]);

  const c1 = useTransform(hue, (h) => `hsla(${h}, 85%, 62%, 0.10)`);
  const c2 = useTransform(hue, (h) => `hsla(${(h + 80) % 360}, 85%, 62%, 0.05)`);
  const glowBg = useMotionTemplate`radial-gradient(circle, ${c1} 0%, ${c2} 45%, transparent 70%)`;

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduced.matches) return;

    setEnabled(true);

    const onMove = (e) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      setVisible(true);
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [mx, my]);

  if (!enabled) return null;

  return (
    <motion.div aria-hidden className="pointer-events-none fixed left-0 top-0 z-[5] h-0 w-0" style={{ x: sx, y: sy }}>
      <motion.div
        className="relative h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: glowBg }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
}