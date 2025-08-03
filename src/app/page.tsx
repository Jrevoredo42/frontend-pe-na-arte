import Image from "next/image";


export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between overflow-visible px-0 w-full pt-36 mb-14 min-h-screen">
        <Image
          src={"/PE-na-arte-mural.svg"}
          alt="Mural artístico"
          fill
          priority
          className="absolute inset-0 w-full min-h-17 h-full object-cover pointer-events-none select-none z-0"
        />
        {/* Logo ao lado da figura branca com sol amarelo */}
        <div className="flex flex-col md:flex-row items-center md:items-start ml-55 z-10 ">
          <div className="flex items-center justify-center mb-9 md:mb-0">
            <Image
              src={"/logo-colorida-fundos-escuros.svg"}
              alt="Logo PE na Arte"
              width={150}
              height={150}
              className="mb-42 mr-0"
            />
          </div>
          <div className="flex flex-col items-center md:items-start ml-18 mt-7"> 
            <p className="font-poppins text-white text-lg max-w-md mb-6 text-center md:text-left">
              Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecid
            </p>
            <button className="font-poppins font-regular px-8 py-3 rounded-full border-2 border-[var(--laranjalaranja-default)] text-white font-bold hover:bg-[var(--laranjalaranja-default)] transition">
              Saiba Mais
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
