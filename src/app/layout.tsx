import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/portfolio-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.title}`,
  description: siteConfig.tagline,
  keywords: [
    "portfolio",
    "AI",
    "ML",
    "software engineering",
    "FastAPI",
    "RAG",
    siteConfig.name,
  ],
  openGraph: {
    title: `${siteConfig.name} | Portfolio`,
    description: siteConfig.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} bg-[#070b14] font-sans text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
