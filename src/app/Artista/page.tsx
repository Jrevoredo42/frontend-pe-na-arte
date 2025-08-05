import HorizontalCard from '@/Components/Cards/HorizontalCard';
import Image from 'next/image';
import CardArtist from '@/Components/Cards/CardArtist';
import SimpleCard from '@/Components/Cards/SimpleCard';



export default function Artista() {
  return (
    <>
    
      <div className=" grid grid-cols-[400px_1fr] w-full gap-8 min-h-screen px-8 py-8 ">
        {/* Card de Artista */}
        <div className="h-[714px] w-99 bg-[var(--branco-penaarte)] border-3 rounded-t-4xl rounded-b-4xl border-[var(--azulazul-default)] mt-30 ml-5">
        {/* Trecho azul */}
        <div className="bg-[var(--azulazul-default)] w-full h-[227px] rounded-t-4xl rounded-b-none relative flex flex-row justify-between items-center gap-4">
          <div className="">
            <Image
                  className=" rounded-full w-50 h-40"
                  src="/artistas/revoredo-1.svg"
                  alt="Extra large avatar"
                  width={56}
                  height={56}
            />
          </div>
          <div className="flex flex-col gap-4 justify-between mr-7">
            <h6 className=" text-[var(--azulazul-default)] font-semibold">Conta Verificada</h6>
              <div className="flex flex-col gap-2">
                <h1 className="text-[var(--branco-penaarte)] font-bold text-4xl">Revoredo</h1>
                <h6 className="text-[var(--branco-penaarte)] font-bold text-sm">última atualização há 2h</h6>
              </div>
              <div className="flex flex-row gap-2">
                <Image className=" src">
                <p>icone</p>
              </div>
          </div>
        </div>    
      </div>
    </>
  )
}


    {/* <h1 className="text-black text-2xl">Pagina de Artista</h1>
     <Link href="/Galeria">Link pra página de galeria</Link>
     
     <img class="rounded-sm w-36 h-36" src="/docs/images/people/profile-picture-5.jpg" alt="Extra large avatar">
     
     */}