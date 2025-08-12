import HorizontalCard from '@/Components/Cards/HorizontalCard';
import Image from 'next/image';
import SimpleCard from '@/Components/Cards/SimpleCard';
import Carousel from '@/Components/Cards/Carousel';



export default function Artista() {
  return (
    <>
    <div className="max-w-[1400px] mx-auto">
      <div className="grid grid-cols-[400px_1fr] gap-8 min-h-screen px-8 py-8">
          {/* Card de Artista */}
          <div className="h-[714px] w-99 bg-[var(--branco-penaarte)] border-3 rounded-t-4xl rounded-b-4xl border-[var(--azulazul-default)] mt-30 ml-5">
          {/* Trecho azul */}
          <div className="bg-[var(--azulazul-default)] w-full h-[227px] rounded-t-4xl rounded-b-none relative flex flex-row justify-between items-center gap-4">
            <div className="">
              <Image
                    className=" rounded-full w-50 h-40 cursor-pointer"
                    src="/artistas/revoredo-1.svg"
                    alt="Extra large avatar"
                    width={56}
                    height={56}
              />
            </div>
            {/* Texto sobre perfil */}
            <div className="flex flex-col gap-4 justify-between mr-7 mb-7">
              <h6 className=" text-[var(--azulazul-dark)] font-poppins font-semibold">Conta Verificada</h6>
                <div className="flex flex-col gap-2">
                  <h1 className="text-[var(--branco-penaarte)] font-poppins font-bold text-4xl">Revoredo</h1>
                  <h6 className="text-[var(--branco-penaarte)] font-bold text-sm">última atualização há 2h</h6>
                </div>
                {/* Status do perfil */}
                <div className="flex flex-row gap-2">
                  <div className="flex flex-row gap-2">
                    <Image src={"/icons/eye.svg"} width={25} height={25} alt="imagem de olho"/>
                    <span className="text-[var(--branco-penaarte)] font-bold text-lg">160</span>
                    <Image src={"/icons/heart.svg"} width={25} height={25} alt="imagem de coração"/>
                    <span className="text-[var(--branco-penaarte)] text-lg font-bold">560</span>
                  </div>
                  <div className="absolute right-2 top-48">
                    <button className="relative border font-poppins font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-0 px-4 h-6 shadow-sm hover:shadow-md bg-[var(--amareloamarelo-default)] border-[var(--amareloamarelo-default)] text-[var(--azulazul-default)] hover:bg-amber-400 hover:border-amber-400 cursor-pointer">Editar</button> 
                  </div>
                </div>
            </div>
            {/* Detalhes do artista */}
          </div>
            <div className="flex flex-col gap-4 mt-7 ml-7">
              <div className="flex flex-row gap-4">
                <Image src={"/icons/tag.svg"} width={25} height={25} alt="imagem de etiqueta"/>
                <span className="bg-[var(--verdeverde-default)] text-[var(--branco-penaarte)] text-md font-bold font-inter me-2 px-2.5 py-0.5 rounded-sm">Músico</span>
                <span className="bg-[var(--amareloamarelo-default)] text-[var(--branco-penaarte)] text-md font-bold font-inter me-2 px-2.5 py-0.5 rounded-sm">Produtor Musical</span>
              </div> 
              <div className="flex flex-row gap-4">
                <Image src={"/icons/calendar.svg"} width={25} height={25} alt="imagem de whatsapp"/>
                <span className="text-[var(--azulazul-default)] font-inter text-md font-medium">Disponivel para trabalhos</span>
              </div>
              <div className="flex flex-row gap-4">
                <Image src={"/icons/location.svg"} width={25} height={25} alt="imagem de localização"/>
                <span className="text-[var(--azulazul-default)] text-md font-medium">Garanhuns, PE</span>
              </div>
              <div className="mt-6 flex flex-col gap-4">
                <h2 className="text-[var(--azulazul-default)] font-inter font-black text-2xl mb-2">Me conheça</h2>
                <p className="text-[var(--azulazul-dark)] font-poppins text-base mb-3 mr-2">
                  Sou músico e produtor musical apaixonado por criar experiências sonoras únicas. Trabalho com diversos estilos e estou sempre aberto a novas colaborações. Vamos conversar e transformar ideias em música!
                </p>
                <div className="flex flex-row justify-end pr-4 mt-5">
                  <button className="w-40 border font-poppins font-bold text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed py-2 px-4 shadow-sm hover:shadow-md bg-transparent border-[var(--azulazul-default)] text-[var(--azulazul-default)] hover:bg-[var(--azulazul-default)] hover:text-[var(--branco-penaarte)] hover:border-blue-700 mt-5 rounded-full cursor-pointer">Contate-me</button>
                </div>
              </div>
            </div>
            {/* Botões de redes sociais */}
            <div className="flex flex-col gap-4 mt-18 ml-7">
              <button
                    type="button"
                    className="text-white bg-[#fa1004] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2 cursor-pointer"
                    >
              <Image
                    src="/icons/social/youtube.svg"
                    alt="Youtube"
                    width={20}
                    height={20}
                    className="me-2"
                    />
                    Seguir no Youtube
              </button>
              <button
                    type="button"
                    className="text-white bg-[#c10dcedd] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2 cursor-pointer"
                    >
              <Image
                    src="/icons/social/instagram.svg"
                    alt="Instagram"
                    width={20}
                    height={20}
                    className="me-2"
                    />
                    Seguir no Instagram
              </button>
              <button
                    type="button"
                    className="text-white bg-[#0aba42] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2 cursor-pointer"
                    >
              <Image
                    src="/icons/social/spotify.svg"
                    alt="Spotify"
                    width={20}
                    height={20}
                    className="me-2"
                    />
                    Seguir no Spotify
              </button>
            </div>        
          </div>
          {/* Conteúdo principal */}
          <div className="ml-10">
            <Image
              src="/artistas/revoredo-capa.svg" // Altere para o caminho correto da sua imagem de capa
              alt="Capa do perfil"
              width={753} // ajuste conforme o layout desejado
              height={306} // ajuste conforme o layout desejado
              className="rounded-xl h-[280px] w-400 object-cover border-3 border-[var(--vermelhovermelho-default)]"
              priority
            />
          <h2 className="text-[var(--azulazul-default)] font-inter font-black text-5xl mt-30 mb-10">Destaques</h2>
          <div className="w-full max-w-full flex flex-row items-center justify-center mt-50 overflow-x-hidden">
            <HorizontalCard imageSrc="/obras/revoredo/revoredo-capa1.svg" oberName='Disco Agreste' profileImage="/artistas/revoredo-1.svg"/>
          </div>
          </div>
        </div>    
      </div>

      <div className="w-full flex justify-between px-8 my-60 pb-10">
        <SimpleCard imageSrc='/obras/revoredo/casaco-oco-isaac1.svg' oberName='Livro O Casaco Oco do Isaac' profileImage='/artistas/revoredo-1.svg'/>
        <SimpleCard imageSrc='/obras/revoredo/revoredo-disco1.svg' oberName='Disco Revoredo' profileImage='/artistas/revoredo-1.svg'/>
        <SimpleCard imageSrc='/obras/revoredo/o-de-casa1.svg' oberName='Evento Ô De Casa' profileImage='/artistas/revoredo-1.svg'/>
      </div>
    </>
  )
}