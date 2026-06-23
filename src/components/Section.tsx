import { about } from "@/lib/portfolio-data";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            {title}
          </p>
          {subtitle && (
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {subtitle}
            </h2>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

export function About() {
  return (
    <Section id="about" title="About" subtitle="Building systems that learn and scale">
      <div className="glass-card max-w-4xl rounded-3xl p-8">
        <p className="text-lg leading-8 text-slate-300">{about.summary}</p>
      </div>
    </Section>
  );
}
