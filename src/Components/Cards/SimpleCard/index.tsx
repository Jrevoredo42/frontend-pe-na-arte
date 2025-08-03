import Image from "next/image";
import UserIcon from "@/Components/UserIcon";

export default function SimpleCard(){
    return (
        <>
      <div
      className="rounded-[28px] shadow-lg overflow-hidden"
      style={{
        width: "305px",
        height: "300px",
        background: "var(--verdeverde-default)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        boxShadow: "0 4px 24px 0 rgba(0,0,0,0.13)",
      }}
    >
      {/* Área principal do card */}
      <div
        style={{
          flex: 1,
          background: "var(--verdeverde-default)",
          borderTopLeftRadius: "28px",
          borderTopRightRadius: "28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Imagem pode ser removida se não quiser nada aqui */}
      </div>
      {/* Área inferior colorida */}
      <div
        className="flex items-center px-4 py-3"
        style={{
          background: "var(--laranjalaranja-default)",
          borderBottomLeftRadius: "28px",
          borderBottomRightRadius: "28px",
          minHeight: "70px",
          gap: "12px",
        }}
      >
         <UserIcon />
        <div className="flex flex-col justify-center" style={{ flex: 1 }}>
          <span className="text-white font-bold text-lg leading-5">Quadro estilizado</span>
          <span className="text-[#FFD6C0] text-sm mb-0 whitespace-nowrap" style={{ marginTop: "-2px" }}>Nome do Usuário</span>
        </div>
        {/* Botão visualizar obra */}
        <button
          className="rounded-md border font-semibold border-[#FFD6C0] w-30 h-13 px-3 py-1 text-[12px] 
                    transition-colors duration-200 bg-[var(--verdeverde-default)] 
                    text-[var(--branco-penaarte)] hover:bg-[var(--branco-penaarte)] 
                    hover:text-[var(--escala-de-cinzapreto-cinza-100)]"
          style={{
            minWidth: "80px",
            boxShadow: "0 2px 6px 0 rgba(0,0,0,0.10)",
            alignSelf: "center",
          }}
        >
          Visualizar obra
        </button>
      </div>
    </div>
        </>
  )        
}