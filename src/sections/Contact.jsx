import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { contact, personal } from "../data/portfolio";
import Reveal from "../components/Reveal";
import Magnetic from "../components/Magnetic";
import SectionHeading from "../components/SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative scroll-mt-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/8 bg-ink-800/40 px-6 py-16 text-center backdrop-blur-sm md:px-16 md:py-24">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(700px circle at 50% 0%, rgba(56,189,248,0.12), transparent 65%)",
            }}
          />

          <div className="relative">
            <SectionHeading
              eyebrow="Contact"
              title={contact.heading}
              description={contact.text}
            />

            <Reveal delay={0.1} className="flex flex-wrap items-center justify-center gap-4">
              <Magnetic strength={0.15}>
                <a
                  href={`mailto:${personal.email}`}
                  className="group btn-primary"
                >
                  <Mail className="h-4 w-4" />
                  Email Me
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Magnetic>
              <Magnetic strength={0.12}>
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group btn-ghost"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Magnetic>
              <Magnetic strength={0.12}>
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group btn-ghost"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Magnetic>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-8 text-sm text-zinc-500">
                Prefer a quick call?{" "}
                <a
                  href={personal.phoneHref}
                  className="link-underline font-medium text-zinc-300 hover:text-white"
                >
                  {personal.phone}
                </a>
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}