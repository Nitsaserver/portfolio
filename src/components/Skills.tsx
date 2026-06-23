import { skills } from "@/lib/portfolio-data";
import { Section } from "./Section";

function SkillGroup({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="glass-card rounded-3xl p-6">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-sm text-cyan-100"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Technical toolkit">
      <div className="grid gap-6 md:grid-cols-2">
        <SkillGroup title="Languages" items={skills.languages} />
        <SkillGroup title="Frameworks & Tools" items={skills.frameworks} />
        <SkillGroup title="AI / Machine Learning" items={skills.aiMl} />
        <SkillGroup title="Libraries" items={skills.libraries} />
        <SkillGroup title="Cloud & DevOps" items={skills.cloudDevOps} />
        <SkillGroup title="Databases & APIs" items={skills.databases} />
      </div>
    </Section>
  );
}
