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
    <div className="relative w-full">
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
        className="flex gap-8 overflow-x-auto py-4 px-0 w-full scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent"
        style={{ scrollBehavior: "smooth" }}
      >
        {[...Array(5)].map((_, idx) => (
          <div
            key={idx}
            className="rounded-lg border shadow-sm overflow-hidden bg-[var(--verdeverde-default)] border-slate-200 shadow-slate-950/5 w-96 min-w-[384px]"
          >
            <img
              src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
              alt="card-image"
              className="w-[calc(100%-16px)] rounded m-2 h-96 object-cover"
            />
            <div className="w-full h-max rounded px-3.5 py-2.5 bg-[var(--laranjalaranja-default)]">
              <div className="mb-2 flex items-center justify-between">
                <h6 className="font-sans antialiased font-bold text-base md:text-lg lg:text-xl text-[var(--branco-penaarte)]">
                  Quadro estilizado
                </h6>
                <div className="flex flex-row items-center gap-7">
                  <Image
                    className="font-sans antialiased font-bold text-base md:text-lg lg:text-xl text-current"
                    width={20}
                    height={20}
                    src={"/icons/user.svg"}
                    alt=""
                  />
                  <Image
                    className="font-sans antialiased font-bold text-base md:text-lg lg:text-xl text-current"
                    width={20}
                    height={20}
                    src={"/icons/coracao.svg"}
                    alt=""
                  />
                </div>
              </div>
              <p className="font-sans antialiased text-base text-[var(--branco-penaarte)]">
                Nome do Artista
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

{/* --> Versão 1 do carousel
    
    <div className="flex gap-8 overflow-x-auto py-4">
      {[...Array(5)].map((_, idx) => (
        <div
          key={idx}
          className="rounded-lg border shadow-sm overflow-hidden bg-white border-slate-200 shadow-slate-950/5 w-96 min-w-[384px]"
        >
          <img
            src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
            alt="card-image"
            className="w-[calc(100%-16px)] rounded m-2 h-96 object-cover"
          />
          <div className="w-full h-max rounded px-3.5 py-2.5">
            <div className="mb-2 flex items-center justify-between">
              <h6 className="font-sans antialiased font-bold text-base md:text-lg lg:text-xl text-current">
                Quadro estilizado
              </h6>
              <div className="flex flex-row items-center gap-7">
                <Image
                  className="font-sans antialiased font-bold text-base md:text-lg lg:text-xl text-current"
                  width={20}
                  height={20}
                  src={"/icons/user.svg"}
                  alt=""
                />
                <Image
                  className="font-sans antialiased font-bold text-base md:text-lg lg:text-xl text-current"
                  width={20}
                  height={20}
                  src={"/icons/coracao.svg"}
                  alt=""
                />
              </div>
            </div>
            <p className="font-sans antialiased text-base text-slate-600">
              Nome do Artista
            </p>
          </div>
          <div className="w-full px-3.5 pt-2 pb-3.5 rounded">
            <button className="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-200 border-slate-200 text-slate-800 hover:bg-slate-100">
              Negociar
            </button>
          </div>
        </div>
      ))}
    </div>
    
    
    */}


{/*     
<div className="rounded-lg border shadow-sm overflow-hidden bg-white border-slate-200 shadow-slate-950/5 w-96"><img src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80" alt="card-image" className="w-[calc(100%-16px)] rounded m-2 h-96 object-cover" />
  <div className="w-full h-max rounded px-3.5 py-2.5">
    <div className="mb-2 flex items-center justify-between">
      <h6 className="font-sans antialiased font-bold text-base md:text-lg lg:text-xl text-current">Quadro estilizado</h6>
      <div className="flex flex-row items-center gap-7">
        <Image className="font-sans antialiased font-bold text-base md:text-lg lg:text-xl text-current" width={20} height={20} src={"/icons/user.svg"} alt=""/>
        <Image className="font-sans antialiased font-bold text-base md:text-lg lg:text-xl text-current" width={20} height={20} src={"/icons/coracao.svg"} alt=""/>
      </div>
    </div>
    <p className="font-sans antialiased text-base text-slate-600">Nome do Artista</p>
  </div>
  <div className="w-full px-3.5 pt-2 pb-3.5 rounded"><button className="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-200 border-slate-200 text-slate-800 hover:bg-slate-100 hover:bg-slate-100" data-shape="default" data-width="full">Negociar</button></div>
</div>
    
    */}