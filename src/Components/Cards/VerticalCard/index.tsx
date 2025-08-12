import UserIcon from '@/Components/UserIcon'

interface VerticalCardProps {
  imageSrc?: string;
  oberName?: string;
  profileName?: string;
  profileImage?: string;
}

export default function VerticalCard({ imageSrc, oberName, profileName, profileImage }: VerticalCardProps) {
    return (
        <>
          <div
      className="rounded-[28px] shadow-lg overflow-hidden"
      style={{
        width: "297px",
        height: "566px",
        background: "var(--verdeverde-default)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        boxShadow: "0 4px 24px 0 rgba(0,0,0,0.13)",
      }}
    >
      <img
              src={imageSrc}
              alt="Imagem do card"
              style={{
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                objectFit: 'cover',
              }}
            />
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
        className="flex items-center px-4 py-4"
        style={{
          background: "var(--laranjalaranja-default)",
          borderBottomLeftRadius: "28px",
          borderBottomRightRadius: "28px",
          minHeight: "90px",
          gap: "14px",
        }}
      >
        {/* Círculo branco */}
        <UserIcon imageSrc={profileImage}/>
        {/* Texto */}
        <div className="flex flex-col justify-center" style={{ flex: 1 }}>
          <span className="text-white font-bold text-base font-poppins leading-6">{oberName}</span>
          <span className="text-[#FFD6C0] font-poppins text-sm" style={{ marginTop: "-2px" }}>{profileName}</span>
        </div>
        {/* Botão Negociar */}
        <button
          className="rounded-md border font-semibold border-[#FFD6C0] w-30 h-13 px-3 py-1 text-[12px] 
          transition-colors duration-200 bg-[var(--verdeverde-default)] text-[var(--branco-penaarte)] 
          hover:bg-[var(--branco-penaarte)] hover:text-[var(--escala-de-cinzapreto-cinza-100)]"
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