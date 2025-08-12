import Image from "next/image";

export default function Gallery(){
    return(
      <>
        <div className="grid grid-cols-2 gap-4 h-[403px]">
          {/* Imagem grande à esquerda ocupando toda a altura */}
          <div>
            <Image
              className="h-full w-full max-w-full object-cover object-center rounded-lg"
              src={'/obras/revoredo/casaco-oco-isaac1.svg'}
              width={403}
              height={393}
              style={{ width: "393px", height: "403px", objectFit: "cover" }}
              alt=""
            />
          </div>
          {/* 4 imagens pequenas à direita, divididas em 2x2 */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <Image
              src={"/obras/revoredo/casaco-oco-isaac-principal1.svg"}
              className="h-[80px] w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
              width={193}
              height={190}
              style={{ width: "193px", height: "190px", objectFit: "cover" }}
            />
            <Image
              src={"/obras/revoredo/casaco-oco-isaac1.svg"}
              className="h-[80px] w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
              width={193}
              height={190}
              style={{ width: "193px", height: "190px", objectFit: "cover" }}
            />
            <Image
              src={"/obras/revoredo/casaco-oco-isaac2.svg"}
              className="h-[80px] w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
              width={193}
              height={190}
              style={{ width: "193px", height: "190px", objectFit: "cover" }}
            />
            <Image
              src={"/obras/revoredo/casaco-oco-isaac3.svg"}
              className="h-[80px] w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
              width={193}
              height={190}
              style={{ width: "193px", height: "190px", objectFit: "cover" }}
            />
          </div>
        </div>

      </>
    );
}