import Image from "next/image";

interface UserIconProps {
  imageSrc?: string;
}

export default function UserIcon({ imageSrc }: UserIconProps) {
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
                  <img
                        className="font-sans antialiased font-bold text-base md:text-lg lg:text-xl text-current w-full h-full top-0 left-0 object-cover rounded-full"
                        width={20}
                        height={20}
                        src={imageSrc}
                        alt="Ícone de usuário"
                    />
                </div>
    )
}