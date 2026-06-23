import { experience } from "@/lib/portfolio-data";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="Where I've applied my skills">
      <div className="space-y-6">
        {experience.map((job) => (
          <article key={`${job.company}-${job.role}`} className="glass-card rounded-3xl p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                <p className="text-cyan-300">{job.company}</p>
              </div>
              <div className="text-sm text-slate-400">
                <p>{job.period}</p>
                <p>{job.location}</p>
              </div>
            </div>
            <ul className="mt-5 space-y-2">
              {job.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-3 text-slate-300 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-cyan-400"
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
