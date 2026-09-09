import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export default function StatCounter({ value, suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) {
          ref.current.textContent = `${v.toFixed(decimals)}${suffix}`;
        }
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix, decimals]);

  return (
    <span ref={ref} className="font-display text-4xl font-bold tracking-tight text-zinc-50 md:text-5xl">
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}