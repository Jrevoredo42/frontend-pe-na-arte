'use client'

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import UserIcon from "@/Components/UserIcon";
import ButtonLogin from "@/Components/buttons/ButtonLogin";

const SearchBar = () => (
  <div className="relative flex items-center">
    <input
      type="text"
      className="rounded-full pl-4 pr-10 py-2 bg-white text-[var(--azulazul-default)] placeholder-[var(--azulazul-default)] focus:outline-none w-40 md:w-56"
      style={{ boxShadow: "0 1px 4px 0 rgba(0,0,0,0.04)" }}
    />
    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--azulazul-default)] pointer-events-none">
      <Image
        src={"/icons/searchIcon.svg"}
        alt="ícone de lupa"
        width={30}
        height={30}
        />
    </span>
  </div>
);


export default function HomeNav(){

  const HOME_URL = "http://localhost:3000/";
  const [isHomePage, setIsHomePage] = useState<boolean>(true);
  
   useEffect(() => {
    if (typeof window !== "undefined") {
      setIsHomePage(window.location.href === HOME_URL);
    }
  }, []);

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
         <ul className="flex gap-26 ml-13 text-white text-[20px] font-inter font-extrabold">
           <li>Início</li>
           <li><Link className="transition" href='/sobre'>Sobre</Link></li>
           <li>Galeria</li>
         </ul>
         <div className="flex gap-4 items-center">
          {isHomePage ? (
            <>
           <SearchBar />
           <ButtonLogin />
            </>
          ) : (
            <div className="flex flex-row items-center gap-9">
              <SearchBar />
              <Image className="font-sans antialiased font-medium text-base md:text-lg lg:text-xl text-current" width={30} height={30} src={"/icons/heart.svg"} alt="" />
              <UserIcon />
            </div>
          )}
         </div>
       </nav>
    )
}