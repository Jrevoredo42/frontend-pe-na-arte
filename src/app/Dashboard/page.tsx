 import Link from "next/link";


export default function Dashboard() {
  return (
    <>
     <h1 className="text-black text-2xl">Pagina de Dashboard</h1>

  <Link href="/Artista">Link pra página de perfil de Artista</Link>
  <Link href="/Obra">Link pra página de Obra</Link>
    </>
  )
}