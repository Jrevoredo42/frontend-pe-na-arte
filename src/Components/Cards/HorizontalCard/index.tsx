import Image from "next/image";
import UserIcon from "@/Components/UserIcon";

export default function HorizontalCard(){
    return (
        <>
          <div
      className="rounded-[28px] shadow-lg overflow-hiddenw-full max-w-[500px]"
      style={{
        width: "922px",
        height: "274px",
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
        {/* Espaço para imagem ou conteúdo central */}
      </div>
      {/* Área inferior colorida */}
      <div
        className="flex items-center px-6 py-4"
        style={{
          background: "var(--laranjalaranja-default)",
          borderBottomLeftRadius: "28px",
          borderBottomRightRadius: "28px",
          minHeight: "70px",
          gap: "18px",
        }}
      >
        {/* Círculo branco */}
        <UserIcon />
        {/* Texto */}
        <div className="flex flex-col justify-center" style={{ flex: 1 }}>
          <span className="text-white font-bold text-2xl leading-6">Quadro estilizado</span>
          <span className="text-[#FFD6C0] text-base" style={{ marginTop: "-2px" }}>Nome do Usuário</span>
        </div>
        {/* Botão Visualizar Obra */}
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