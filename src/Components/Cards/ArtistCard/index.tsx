'use client';

import { useRef } from "react";
import SimpleCard from "@/Components/Cards/SimpleCard";

export default function ArtistCard() {
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
    <div className="relative w-full max-w-[800px] mx-auto overflow-hidden">
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
        className="flex gap-8 py-4 px-0 w-full scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent justify-center"
        style={{ scrollBehavior: "smooth" }}
      >
        {[...Array(8)].map((_, idx) => (
          <div key={idx} className="min-w-[305px]">
            <SimpleCard />
          </div>
        ))}
      </div>
    </div>
  );
}

{/* <div className="w-full rounded-lg border shadow-sm bg-white border-slate-200 shadow-slate-950/5 max-w-[24rem] overflow-hidden">
  <div className="p-2">
    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80" alt="ui/ux review check" className="w-full h-max rounded" />
  </div>
  <div className="w-full h-max rounded px-3.5 py-2.5">
    <h6 className="font-sans antialiased font-bold text-base md:text-lg lg:text-xl text-current">
      UI/UX Review Check
    </h6>
    <p className="font-sans antialiased text-base mt-1 text-slate-600">
      Because it&#x27;s about motivating the doers. Because I&#x27;m here to follow my dreams and inspire others.
    </p>
  </div>
  <div className="w-full px-3.5 pt-2 pb-3.5 rounded mt-4 flex justify-between">
    <div className="flex -space-x-3">
      <button className="outline-none group">
        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80" alt="natali craig" className="inline-block object-cover object-center rounded-full w-8 h-8 rounded border-2 border-slate-200 hover:z-10" />
      </button>
      <button className="outline-none group">
        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80" alt="tania andrew" className="inline-block object-cover object-center rounded-full w-8 h-8 rounded border-2 border-slate-200 hover:z-10" />
      </button>
    </div>
    <small className="font-sans antialiased text-sm text-current">
      January 10
    </small>
  </div>
</div> */}