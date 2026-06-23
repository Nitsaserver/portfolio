import { ArrowDown, Code2, Link, Mail } from "lucide-react";
import { siteConfig } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_45%)]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm text-cyan-300">
            Available for internships & collaborations
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-4 text-xl font-medium text-cyan-300 sm:text-2xl">
            {siteConfig.title}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            {siteConfig.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:scale-[1.02]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-white/5"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/10 p-2.5 text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
              aria-label="GitHub"
            >
              <Code2 size={20} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/10 p-2.5 text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
              aria-label="LinkedIn"
            >
              <Link size={20} />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="rounded-lg border border-white/10 p-2.5 text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="glass-card rounded-3xl p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Focus Areas
          </p>
          <div className="mt-6 space-y-4">
            {[
              "Real-time ML inference & auto-retraining",
              "RAG + LLM explainability layers",
              "Backend automation on AWS & GCP",
              "Microservices with FastAPI & Docker",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 transition hover:text-cyan-300"
        aria-label="Scroll to about"
      >
        <ArrowDown className="animate-bounce" size={24} />
      </a>
    </section>
  );
}
