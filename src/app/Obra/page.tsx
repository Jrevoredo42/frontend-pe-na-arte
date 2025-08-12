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
            O Casaco Oco do Isaac conta a história de um menino, um casaco diferente e muitos segredos guardados entre as costuras da imaginação.
            Com ilustrações delicadas de Deirdre Holanda e texto de Alexandre Revoredo, o livro encanta leitores pequenos e grandes, falando sobre memória, fantasia e afeto de forma leve e sensível. 🌿💛
            Uma obra para quem acredita que as histórias podem aquecer, proteger e, acima de tudo, transformar. ✨🧥
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