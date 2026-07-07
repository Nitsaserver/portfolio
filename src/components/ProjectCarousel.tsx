"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";

type Screenshot = {
  src: string;
  alt: string;
};

type ProjectCarouselProps = {
  screenshots: Screenshot[];
  projectName: string;
};

export function ProjectCarousel({
  screenshots,
  projectName,
}: ProjectCarouselProps) {
  const [index, setIndex] = useState(0);
  const total = screenshots.length;

  const goTo = useCallback(
    (nextIndex: number) => {
      setIndex((nextIndex + total) % total);
    },
    [total],
  );

  if (total === 0) {
    return null;
  }

  const current = screenshots[index];

  return (
    <div className="mt-6">
      <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/30">
        <div className="relative aspect-video w-full">
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            className="object-cover object-top transition-opacity duration-300"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={index === 0}
          />
        </div>

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/60 p-2 text-white opacity-0 backdrop-blur-sm transition hover:border-cyan-400/40 hover:text-cyan-300 group-hover:opacity-100 focus:opacity-100"
              aria-label={`Previous screenshot for ${projectName}`}
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/60 p-2 text-white opacity-0 backdrop-blur-sm transition hover:border-cyan-400/40 hover:text-cyan-300 group-hover:opacity-100 focus:opacity-100"
              aria-label={`Next screenshot for ${projectName}`}
            >
              <ChevronRight size={18} />
            </button>

            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {screenshots.map((screenshot, dotIndex) => (
                <button
                  key={screenshot.src}
                  type="button"
                  onClick={() => setIndex(dotIndex)}
                  className={`h-1.5 rounded-full transition-all ${
                    dotIndex === index
                      ? "w-5 bg-cyan-400"
                      : "w-1.5 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Show screenshot ${dotIndex + 1} of ${total}`}
                  aria-current={dotIndex === index ? "true" : undefined}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {total > 1 && (
        <p className="mt-2 text-center text-xs text-slate-500">
          {index + 1} / {total}
        </p>
      )}
    </div>
  );
}
