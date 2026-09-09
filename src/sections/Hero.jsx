import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, BadgeCheck, ChevronDown, Sparkles } from "lucide-react";
import { personal } from "../data/portfolio";
import { EASE } from "../lib/animations";
import { conicGradient } from "../lib/rgb";
import ProfileImage from "../components/ProfileImage";
import Magnetic from "../components/Magnetic";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.25 },
  },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

function AnimatedLine({ children, className = "" }) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block"
        initial={{ y: "110%", rotate: 3 }}
        animate={{ y: 0, rotate: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.55 }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const wrapRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), {
    stiffness: 120,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 120,
    damping: 20,
  });

  const glareX = useTransform(mx, [-0.5, 0.5], ["30%", "70%"]);
  const glareY = useTransform(my, [-0.5, 0.5], ["30%", "70%"]);
  const glareBg = useMotionTemplate`radial-gradient(380px circle at ${glareX} ${glareY}, rgba(255,255,255,0.10), transparent 55%)`;

  const onMouseMove = (e) => {
    const el = wrapRef.current;
    if (!el || e.pointerType !== "mouse") return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden pt-28 pb-20 lg:pt-0"
    >
      <div className="container-x relative z-10 grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        {/* ---------- Left ---------- */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <motion.div variants={item} className="flex items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium tracking-wide text-zinc-300">
              <Sparkles className="h-3.5 w-3.5 text-[#C084FC]" />
              FULL STACK DEVELOPER
            </span>
          </motion.div>

          <h1 className="mt-6 font-display text-[2.6rem] leading-[1.05] font-bold tracking-tight text-zinc-50 sm:text-6xl lg:text-[4.2rem] xl:text-[4.6rem]">
            <AnimatedLine>
              Hi, I'm <span className="rgb-text">Sumantha.</span>
            </AnimatedLine>
            <AnimatedLine className="mt-1">
              <span className="text-zinc-300">I build digital</span>
            </AnimatedLine>
            <AnimatedLine className="mt-1">
              <span className="text-zinc-300">experiences that </span>
              <span className="rgb-text">work.</span>
            </AnimatedLine>
          </h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg"
          >
            {personal.heroIntro}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <Magnetic strength={0.18}>
              <a href="#projects" className="group btn-primary">
                View My Work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic strength={0.15}>
              <a href="#contact" className="group btn-ghost">
                Let's Connect
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3.5 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-medium text-emerald-300">
              {personal.availability}
            </span>
          </motion.div>
        </motion.div>

        {/* ---------- Right: photo ---------- */}
        <motion.div
          ref={wrapRef}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          initial={{ opacity: 0, scale: 0.86, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.55 }}
          className="relative mx-auto flex justify-center lg:justify-end"
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative h-[420px] w-[320px] sm:h-[480px] sm:w-[370px] lg:h-[520px] lg:w-[400px]"
          >
            {/* ambient crossfade glow */}
            <div aria-hidden className="absolute -inset-12 -z-10">
              <div
                className="rgb-fade-a absolute inset-0 rounded-full blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,0,168,0.28), transparent 65%)",
                }}
              />
              <div
                className="rgb-fade-b absolute inset-0 rounded-full blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,217,255,0.25), transparent 65%)",
                }}
              />
              <div
                className="rgb-fade-c absolute inset-0 rounded-full blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,106,0,0.22), transparent 65%)",
                }}
              />
            </div>
            {/* rotating RGB ring */}
            <div
              aria-hidden
              className="absolute -inset-[3px] overflow-hidden rounded-[2rem]"
            >
              <div
                className="absolute left-[-50%] top-[-50%] h-[200%] w-[200%] opacity-70"
                style={{
                  background: conicGradient(0),
                  animation: "rgb-spin 14s linear infinite",
                }}
              />
            </div>

            <div className="group relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-ink-800 shadow-card">
              <ProfileImage className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[2rem]"
                style={{ background: glareBg }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-t from-ink-950/70 via-transparent to-ink-950/10"
              />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl border border-white/10 bg-ink-950/70 px-4 py-3 backdrop-blur-md">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/[0.07]">
                    <BadgeCheck className="h-4 w-4 text-zinc-200" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-zinc-100">
                      {personal.name}
                    </p>
                    <p className="text-[11px] text-zinc-400">{personal.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        aria-label="Scroll to explore"
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
      >
        <span className="flex flex-col items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-zinc-500 transition-colors hover:text-white">
          Scroll to explore
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.span>
        </span>
      </motion.a>
    </section>
  );
}