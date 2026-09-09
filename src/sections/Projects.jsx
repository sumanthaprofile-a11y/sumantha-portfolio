import { projects } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative scroll-mt-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Selected Projects"
          title="Things I've built."
          description="A selection of work spanning automation, security, and web development."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={project.number} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}