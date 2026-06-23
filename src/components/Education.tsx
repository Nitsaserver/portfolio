import { education, leadership } from "@/lib/portfolio-data";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" title="Education" subtitle="Academic foundation">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="glass-card rounded-3xl p-8">
          <h3 className="text-xl font-semibold text-white">{education.degree}</h3>
          <p className="mt-2 text-cyan-300">{education.school}</p>
        </div>

        <div className="glass-card rounded-3xl p-8">
          <h3 className="text-xl font-semibold text-white">Leadership</h3>
          <div className="mt-6 space-y-5">
            {leadership.map((item) => (
              <div key={item.role}>
                <p className="font-medium text-white">{item.role}</p>
                <p className="mt-1 text-sm text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
