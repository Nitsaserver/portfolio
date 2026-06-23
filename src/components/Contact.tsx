import { Code2, Link, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/portfolio-data";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section id="contact" title="Contact" subtitle="Let's connect">
      <div className="glass-card rounded-3xl p-8">
        <p className="max-w-2xl text-lg text-slate-300">
          Interested in internships, ML engineering roles, or collaboration on
          AI/backend projects? Reach out — or ask the portfolio chatbot anything
          about my background.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-slate-200 transition hover:border-cyan-400/30"
          >
            <Mail className="text-cyan-400" size={20} />
            {siteConfig.email}
          </a>
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-slate-200">
            <MapPin className="text-cyan-400" size={20} />
            {siteConfig.location}
          </div>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-slate-200 transition hover:border-cyan-400/30"
          >
            <Code2 className="text-cyan-400" size={20} />
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-slate-200 transition hover:border-cyan-400/30"
          >
            <Link className="text-cyan-400" size={20} />
            LinkedIn
          </a>
        </div>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-400 sm:flex-row">
        <p>© {new Date().getFullYear()} {siteConfig.name}. Built with Next.js & Gemini RAG.</p>
        <p>Deploy on Vercel · Free tier friendly</p>
      </div>
    </footer>
  );
}
