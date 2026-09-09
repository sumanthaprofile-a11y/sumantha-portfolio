import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";
import Background from "./components/Background";
import SectionDivider from "./components/SectionDivider";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Certification from "./sections/Certification";
import Achievements from "./sections/Achievements";
import Workshop from "./sections/Workshop";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="noise relative min-h-screen">
        <Background />
        <CursorGlow />
        <ScrollProgress />
        <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <div>
          <Certification />
          <Achievements />
          <Workshop />
        </div>
        <Contact />
      </main>

      <Footer />
      </div>
    </MotionConfig>
  );
}