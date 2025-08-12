'use client';

import { useRef } from "react";
import SimpleCard from "@/Components/Cards/SimpleCard";

export default function CarouselCardArtist() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 320; // largura aproximada do SimpleCard
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative max-w-[1200px] mx-auto overflow-x-visible">
      {/* Seta esquerda */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow hover:bg-white transition hover:cursor-pointer"
        onClick={() => scroll("left")}
        aria-label="Anterior"
      >
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
          <path d="M15 6l-6 6 6 6" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {/* Seta direita */}
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow hover:bg-white transition cursor-pointer"
        onClick={() => scroll("right")}
        aria-label="Próximo"
      >
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
          <path d="M9 6l6 6-6 6" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {/* Carousel de SimpleCards */}
      <div
        ref={carouselRef}
        className="flex gap-8 py-4 px-0 w-full scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent justify-start snap-x snap-mandatory"
        style={{ scrollBehavior: "smooth" }}
      >
        {[...Array(8)].map((_, idx) => (
          <div key={idx} className="min-w-[320px]">
            <SimpleCard />
          </div>
        ))}
      </div>
    </div>
  );
}