import UserIcon from "@/Components/UserIcon";

interface SimpleCardProps {
  imageSrc?: string;
  oberName?: string;
  profileName?: string;
  profileImage?: string;
} 


export default function SimpleCard({ imageSrc, oberName, profileName, profileImage }: SimpleCardProps){
    return (
        <>
      <div
      className="rounded-[28px] shadow- snap-start"
      style={{
        width: "350px", // aumentada para mais espaço
        height: "370px",
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
        {/* Imagem pode ser removida se não quiser nada aqui */}
      </div>
      {/* Área inferior colorida */}
      <div
        className="flex items-center px-5 py-3 gap-4"
        style={{
          background: "var(--laranjalaranja-default)",
          borderBottomLeftRadius: "28px",
          borderBottomRightRadius: "28px",
          minHeight: "80px",
        }}
      >
        <UserIcon imageSrc={profileImage} />
        <div className="flex flex-col justify-center min-w-0 flex-1">
          <span
            className="text-white font-bold text-base leading-5 break-words font-poppins"
            style={{ wordBreak: "break-word", lineHeight: 1.2 }}
          >
            {oberName}
          </span>
          <span
            className="text-[#FFD6C0] text-sm mb-0 mt-1 truncate font-poppins"
            style={{ maxWidth: "100%" }}
          >
            {profileName}
          </span>
        </div>
        {/* Botão visualizar obra */}
        <button
          className="rounded-md border font-semibold border-[#FFD6C0] px-4 py-2 text-[13px] 
                    transition-colors duration-200 bg-[var(--verdeverde-default)] 
                    text-[var(--branco-penaarte)] hover:bg-[var(--branco-penaarte)] 
                    hover:text-[var(--escala-de-cinzapreto-cinza-100)] cursor-pointer"
          style={{
            minWidth: "100px",
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