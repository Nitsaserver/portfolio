import { Code2, ExternalLink } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Selected work">
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="glass-card group flex flex-col rounded-3xl p-8 transition hover:border-cyan-400/30"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-cyan-300">{project.year}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {project.name}
                </h3>
              </div>
              <div className="flex gap-2">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white/10 p-2 text-slate-400 transition hover:text-cyan-300"
                    aria-label={`${project.name} GitHub`}
                  >
                    <Code2 size={18} />
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white/10 p-2 text-slate-400 transition hover:text-cyan-300"
                    aria-label={`${project.name} demo`}
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <p className="mt-4 text-slate-300">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="mt-5 space-y-2">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="text-sm text-slate-400 before:mr-2 before:text-cyan-400 before:content-['•']"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
