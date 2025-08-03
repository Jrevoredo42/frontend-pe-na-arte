import Gallery from "@/Components/Gallery";
import PricingCard from "@/Components/Cards/PricingCard";
import Carousel from '@/Components/Cards/Carousel';

export default function Obra() {
  return (
    <>
      <div className="grid grid-cols-2 gap-7 items-start mt-17 ml-20">
        {/* Galeria de imagens + texts*/}
        <div>
          <Gallery />
          <h2 className="text-4xl font-extrabold font-inter text-[var(--azulazul-default)] py-0 mt-20 bg-[var(--escala-de-cinzacinza-900)] border-b-2 -me-0 h-17 flex flex-row items-center"> 
            Sobre
          </h2>
          <p 
          className="text-[var(--azulazul-default)] font-poppins font-normal mt-10 bg-white/90 rounded-lg p-6 shadow-md"
          >
          Obra em madeira entalhada por Mestre Fida, o “Homem-Cata-Vento” é uma escultura interativa que representa um homem com braços
          articulados, que se movimentam com o vento. Carregando a força da tradição quilombola e a simplicidade da vida no campo, a peça
          expressa a relação do homem com a natureza e traduz, de forma lúdica e simbólica, a criatividade popular nordestina. Com acabamento 
          rústico e estrutura funcional, é uma representação viva da cultura ancestral do Timbó, combinando arte, movimento e identidade 
          em uma criação única.
          </p>
          <h2 className="text-4xl font-extrabold font-inter text-[var(--azulazul-default)] py-0 mt-25 bg-[var(--escala-de-cinzacinza-900)] border-b-2 -me-0 h-17 flex flex-row items-center"> Detalhes do produto</h2>
          <ul className="mt-12 bg-white/90 rounded-lg p-6 shadow-md">
            <li className="border-b-2 border-[var(--azulazul-default)] py-2">
              <span className="font-semibold text-[var(--azulazul-default)]">Material do produto:</span>
            </li>
            <li className="border-b-2 border-[var(--azulazul-default)] py-2">
              <span className="font-semibold text-[var(--azulazul-default)]">Dimensão do produto:</span>
            </li>
            <li className="border-b-2 border-[var(--azulazul-default)] py-2">
              <span className="font-semibold text-[var(--azulazul-default)]">Cor do produto:</span>
            </li>
            <li className="border-b-2 border-[var(--azulazul-default)] py-2">
              <span className="font-semibold text-[var(--azulazul-default)]">Detalhes adicionais:</span>
            </li>
          </ul>
          <h2 className="text-4xl font-extrabold font-inter text-[var(--azulazul-default)] py-0 mt-30 bg-[var(--escala-de-cinzacinza-900)] border-b-2 -me-0 h-17 flex flex-row items-center"> 
            Explore Mais
          </h2>

        </div>
        {/* Pricing Card à direita */}
        <div className="flex justify-center items-start">
          <PricingCard />
        </div>
        {/* Carousel de produtos */}  
      </div>
      <div className="mt-10 w-full mx-0">
          <Carousel />
        </div>
    </>
  )
}