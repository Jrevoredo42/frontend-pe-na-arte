'use client';

import Image from "next/image";
import { useRef } from "react";



export default function Carousel() {

    const carouselRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 400; // ajuste conforme o tamanho do card
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Seta esquerda */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow hover:bg-white transition "
        onClick={() => scroll("left")}
        aria-label="Anterior"
      >
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
          <path d="M15 6l-6 6 6 6" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {/* Seta direita */}
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow hover:bg-white transition"
        onClick={() => scroll("right")}
        aria-label="Próximo"
      >
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
          <path d="M9 6l6 6-6 6" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex gap-8 py-4 px-0 w-full max-w-full"
        style={{ scrollBehavior: "smooth", overflowX: "hidden" }}
      >
        {[...Array(5)].map((_, idx) => (
          <div
            key={idx}
            className="rounded-lg border shadow-sm overflow-hidden bg-[var(--verdeverde-default)] border-slate-200 shadow-slate-950/5 w-80 min-w-[320px] max-w-[320px]"
          >
            <img
              src="/obras/revoredo/dianimal-livro1.svg"
              alt="card-image"
              className="w-[calc(100%-16px)] rounded m-2 h-96 object-cover"
            />
            <div className="w-full h-max rounded px-3.5 py-2.5 bg-[var(--laranjalaranja-default)]">
              <div className="mb-2 flex items-center justify-between">
                <h6 className="font-sans antialiased font-bold text-base md:text-lg lg:text-xl text-[var(--branco-penaarte)]">
                  Livro Dianimal
                </h6>
                <div className="flex flex-row items-center gap-7 mt-3">
                  <Image
                    className="font-sans rounded-full antialiased font-bold text-base md:text-lg lg:text-xl text-current"
                    width={40}
                    height={40}
                    src={"/artistas/revoredo-1.svg"}
                    alt=""
                  />
                  <Image
                    className="font-sans antialiased font-bold text-base md:text-lg lg:text-xl text-current"
                    width={20}
                    height={20}
                    src={"/icons/heart.svg"}
                    alt=""
                  />
                </div>
              </div>
              <p className="font-sans antialiased text-base text-[var(--branco-penaarte)]">
                Revoredo
              </p>
            </div>
            <div className="w-full px-3.5 pt-2 pb-3.5 rounded bg-[var(--laranjalaranja-default)]">
              <button className="inline-flex items-center justify-center align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-[var(--verdeverde-default)] border-slate-200 text-[var(--branco-penaarte)] hover:bg-slate-100 hover:text-[var(--escala-de-cinzapreto-cinza-100)]">
                Negociar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}