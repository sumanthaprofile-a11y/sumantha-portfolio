import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks, personal } from "../data/portfolio";
import Magnetic from "./Magnetic";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goTo = (href) => {
    setOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className={`rgb-hairline fixed inset-x-0 top-0 z-[70] transition-all duration-500 ${
          scrolled ? "hairline-on bg-ink-950/80 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <nav
          className={`container-x flex items-center justify-between transition-all duration-500 ${
            scrolled ? "h-16" : "h-20"
          }`}
          aria-label="Primary"
        >
          <a
            href="#home"
            onClick={() => goTo("#home")}
            className="group flex items-center gap-2.5"
          >
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 bg-white/[0.05] font-display text-sm font-bold text-zinc-100 shadow-[0_0_18px_-6px_rgba(139,0,255,0.6)] transition-shadow duration-300 group-hover:shadow-[0_0_22px_-6px_rgba(255,0,168,0.7)]">
              {personal.monogram}
            </span>
            <span className="hidden sm:block font-display text-lg font-semibold tracking-tight text-zinc-100">
              {personal.firstName}
              <span className="text-accent">.</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`link-underline rounded-md px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
                  active === link.href
                    ? "is-active text-zinc-50"
                    : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Magnetic strength={0.15} className="hidden sm:inline-flex">
              <a
                href={`mailto:${personal.email}`}
                className="group inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-ink-900/70 px-5 py-2 text-sm font-semibold text-zinc-100 transition-all duration-300 hover:border-white/25 hover:text-white hover:shadow-[0_0_30px_-10px_rgba(255,0,168,0.55)]"
              >
                Let's Talk
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2.5}
                />
              </a>
            </Magnetic>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-200 transition-colors hover:border-white/25 hover:text-white lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[65] bg-ink-950/70 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-4 top-20 z-[66] overflow-hidden rounded-2xl border border-white/10 bg-ink-900/95 p-4 shadow-card backdrop-blur-xl lg:hidden"
            >
              <ul className="flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.35 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => goTo(link.href)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
                        active === link.href
                          ? "bg-white/[0.06] text-white"
                          : "text-zinc-300 hover:bg-white/[0.04] hover:text-zinc-50"
                      }`}
                    >
                      {link.label}
                      <ArrowUpRight className="h-4 w-4 opacity-50" />
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-3 border-t border-white/8 pt-4">
                <a
                  href={`mailto:${personal.email}`}
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full"
                >
                  Let's Talk
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}