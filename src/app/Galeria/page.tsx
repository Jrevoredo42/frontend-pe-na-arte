import VerticalCard from "@/Components/Cards/VerticalCard";
import SimpleCard from "@/Components/Cards/SimpleCard";
import HorizontalCard from "@/Components/Cards/HorizontalCard";
import Image from "next/image";
import CarouselArtist from "@/Components/CarouselArtist";


  const FilterButton = () => {
    return(
      <button className="flex flex-row gap-2 border-2 border-[var(--azulazul-default)] rounded-md p-20 mt-10 ml-25 px-4 py-2 text-lg text-[var(--azulazul-default)] font-poppins font-black hover:bg-[var(--azulazul-default)] hover:text-white transition-colors duration-300">
        <Image 
        className="font-sans antialiased font-medium text-base md:text-lg lg:text-xl text-current" 
        width={15} 
        height={15} 
        src={"/icons/configControl.svg"} 
        alt="" 
       />Filtrar
       </button>
    )
  }

export default function Galeria() {
  return (
    <>
    <div className="flex flex-row items-center justify-center gap-10 mr-20">
      <FilterButton />
      <div className="relative mt-10">
          <input
            type="text"
            placeholder="Oque você está procurando..."
            className="border-2 border-[var(--azulazul-default)] placeholder-[var(--azulazul-light)] w-80 h-13 rounded-3xl p-2 pr-10"
            style={{ paddingRight: "40px" }}
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Image
              src={"/icons/searchIcon.svg"}
              alt="ícone de lupa"
              width={22}
              height={22}
            />
          </span>
        </div>
    </div>
    <div className="flex flex-row  justify-center items-center space-x-15 mt-30 ml-15">
      <SimpleCard imageSrc="/obras/gabi-da-pele-preta/encruzilhada-agreste1.svg" profileImage="/obras/gabi-da-pele-preta/gabi-da-pele-preta1.svg" oberName="Evento Encruzilhada Agreste"/>
      <HorizontalCard imageSrc="/obras/Luanda-ruanda/luanda-ruanda-capa1.svg" profileImage="/obras/Luanda-ruanda/luanda-ruanda2.svg" oberName="Contação de histórias Luanda Ruanda" />
    </div>
    <div className="flex flex-row items-start justify-items-start space-x-40 mt-20 ml-15">
     <SimpleCard imageSrc="obras/revoredo/casaco-oco-isaac2.svg" profileImage="/artistas/revoredo-1.svg" oberName="Livro Casaco Oco do Isaac "/>
     <SimpleCard imageSrc="/obras/revoredo/dianimal-livro1.svg" profileImage="/artistas/revoredo-1.svg" oberName="Livro Dianimal"/>
     <VerticalCard imageSrc="/obras/revoredo/o-de-casa1.svg" oberName="Evento Ô de Casa" profileImage="/artistas/revoredo-1.svg"/>
    </div>
    <div className="flex flex-row space-x-40 space-y-10 ml-14 mt-0">
     <SimpleCard imageSrc="/obras/gabi-da-pele-preta/gabi-da-pele-preta2.svg" profileImage="/obras/gabi-da-pele-preta/gabi-da-pele-preta1.svg" oberName="Evento Gabi da Pele Preta"/>
     <SimpleCard imageSrc="/obras/Luanda-ruanda/luanda-ruanda1.svg" profileImage="/obras/Luanda-ruanda/luanda-ruanda2.svg" oberName="Evento Luanda Ruanda nas escolas"/>
    </div>
    <div>
      <CarouselArtist />
    </div>
    <h2 className="text-4xl font-extrabold font-inter text-[var(--azulazul-default)] py-0 mt-11 mb-17 -me-0 ml-5 h-17 flex flex-row items-center"> 
    Destaques
    </h2>
      <div className="relative flex flex-row justify-between mt-8 mr-5 ml-7">
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <div className="absolute left-0 right-0 -bottom-14 h-1 bg-[var(--verdeverde-default)] rounded-full" />
      </div>


<div className="grid grid-cols-3 gap-x-10 gap-y-8 w-full mt-5 ml-5 px-8 py-20">
  <div className="flex flex-col gap-8">
    <SimpleCard />
    <SimpleCard />
  </div>
  <div className="flex flex-col items-center justify-center mr-15">
    <VerticalCard />
  </div>
  <div className="flex flex-col gap-12 ml-18">
    <SimpleCard />
    <SimpleCard />
  </div>
</div>

      







    </>
  )
}