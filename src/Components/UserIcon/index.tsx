import Image from "next/image";

export default function UserIcon(){
    return(
        <div
                  className="flex items-center justify-center gap-4"
                  style={{
                    width: "45px",
                    height: "46px",
                    borderRadius: "50%",
                    background: "#fff",
                  }}
                >
                  <Image
                        className="font-sans antialiased font-bold text-base md:text-lg lg:text-xl text-current"
                        width={20}
                        height={20}
                        src={"/icons/user.svg"}
                        alt="Ícone de usuário"
                    />
                </div>
    )
}