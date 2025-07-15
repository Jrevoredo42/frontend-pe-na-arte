import Link from "next/link";
import Image from "next/image";
export default function HomeNav(){
    return(
       <nav className="flex items-center justify-between px-8 h-24 top-0 left-0 w-full bg-[var(--azulazul-default)] z-20">
         <div className="flex items-center gap-4">
           {/* Logo */}
           <Image
             src={"/logo-branca.svg"}
             alt="Logo PE na Arte"
             width={60}
             height={60}
             className="z-10"
           />
         </div>
         <ul className="flex gap-8 text-white font-medium">
           <li>Início</li>
           <li><Link className="transition" href='/sobre'>Sobre</Link></li>
           <li>Contato</li>
         </ul>
         <div className="flex gap-4 items-center">
           <input
             type="text"
             placeholder="Buscar"
             className="rounded-full px-4 py-1 bg-[var(--azulazul-light)] text-white placeholder-white"
           />
           <span className="material-icons text-white">person</span>
           <span className="material-icons text-white">shopping_cart</span>
         </div>
       </nav>
    )
}