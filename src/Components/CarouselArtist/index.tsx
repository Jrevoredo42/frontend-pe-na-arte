'use client'

import { useState } from 'react';


const artist = {
  name: "Revoredo",
  details: "Músico e Produtor Musical",
  description:
    "Sou músico e produtor musical apaixonado por criar experiências sonoras únicas. Trabalho com diversos estilos e estou sempre aberto a novas colaborações. Vamos conversar e transformar ideias em música!",
  profileImage: "/artistas/revoredo-1.svg",
  images: [
    "/obras/revoredo/revoredo-capa1.svg",
    "/artistas/revoredo-capa.svg",
    "/obras/revoredo/revoredo-disco2.svg"
  ],
};

export default function CarouselArtist() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % artist.images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + artist.images.length) % artist.images.length);

  return (
    <div className="w-full bg-[#cfd8dc] py-6 px-4 rounded-lg">
      <h2 className="text-3xl font-bold text-[var(--verdeverde-default)] mb-6 ml-4">
        Conheça os artistas
      </h2>
      <div className="relative flex items-center" style={{ minHeight: 340 }}>
        {/* Seta esquerda */}
        <button
          className="absolute right-230 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow hover:bg-white transition"
          onClick={prev}
          aria-label="Anterior"
        >
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
            <path d="M15 6l-6 6 6 6" stroke="#197278" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {/* Texto fixo */}
        <div
          className="flex flex-col justify-between rounded-2xl shadow-lg bg-[var(--azulazul-light)] min-w-[370px] max-w-[370px] h-[320px] p-7 mr-6"
          style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.13)" }}
        >
          <div className="flex items-center gap-5 mb-2">
            <div
              className="rounded-full flex-shrink-0 overflow-hidden bg-gray-200"
              style={{ width: "70px", height: "70px" }}
            >
              <img
                src={artist.profileImage}
                alt={artist.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <div className="text-white text-xl font-bold">{artist.name}</div>
              <div className="text-white text-base">{artist.details}</div>
            </div>
          </div>
          <div className="text-white text-sm mb-6">{artist.description}</div>
          <button className="bg-[var(--verdeverde-default)] text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-[var(--verdeverde-dark)] transition">
            Saber mais
          </button>
        </div>
        {/* Imagem única ocupando todo o espaço restante */}
        <div
          className="rounded-2xl shadow-lg h-[320px] flex-1 bg-white overflow-hidden flex items-center justify-center"
          style={{
            background: "#fff",
            boxShadow: "0 4px 24px 0 rgba(0,0,0,0.13)",
            minWidth: 0,
          }}
        >
          <img
            src={artist.images[current]}
            alt="art"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Seta direita */}
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow hover:bg-white transition"
          onClick={next}
          aria-label="Próximo"
        >
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
            <path d="M9 6l6 6-6 6" stroke="#197278" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}