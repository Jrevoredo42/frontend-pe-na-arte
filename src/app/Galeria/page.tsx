import Link from "next/link";


export default function () {
  return (
    <>
     <h1 className="text-black text-2xl">Pagina de Galeria </h1>

  <Link href="/Artista">Link pra página do artista</Link>
  <Link href="/Obra">Link pra página do Obra</Link>
    </>
  )
}