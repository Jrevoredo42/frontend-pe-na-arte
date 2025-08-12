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
        borderTopLeftRadius: "30px",
        borderTopRightRadius: "30px",
      }}
    >
      {imageSrc ? (
          imageSrc.endsWith('.svg') ? (
            <img
              src={imageSrc}
              alt="Imagem do card"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                top: 0,
                left: 0,
              }}
            />
          ) : (
            <Image
              src={imageSrc}
              alt="Imagem do card"
              fill
              style={{
                objectFit: 'cover',
              }}
              sizes="(max-width: 922px) 100vw, 922px"
              priority
            />
          )
        ) : null}
      {/* Área principal do card */}
      <div
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          position: 'relative',
          borderTopLeftRadius: '28px',
          borderTopRightRadius: '28px',
          overflow: 'hidden',
        }}
      >
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