'use client'

const Select = () => {
  return (
    <div className="w-70 h-9 bg-white rounded-md px-2 py-1 flex items-center mt-2 ml-4">
      <div className="relative w-full">
        <input
          id="quantidade"
          type="number"
          min={1}
          className="w-full pl-28 pr-8 py-1 rounded-md bg-white text-[var(--azulazul-light)] text-base font-semibold outline-none"
          defaultValue={1}
        />
        <label
          htmlFor="quantidade"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--azulazul-halflight)] text-base pointer-events-none"
          style={{ opacity: 0.6 }}
        >
          Quantidade:
        </label>
      </div>
    </div>
  );

}


export default function PricingCard(){
    return (
      
   <div className="w-85 h-200 ml-30 rounded-lg shadow-sm overflow-hidden shadow-slate-950/25 max-w-xs bg-[var(--azulazul-light)] ">
    <div className="flex items-end mt-7 ml-5">
      <span className="text-[var(--branco-penaarte)] text-3xl font-bold relative" style={{ top: '-0.7em' }}>R$</span>
      <span className="text-[var(--branco-penaarte)] text-6xl font-bold leading-none mx-2">30,00</span>
      <span className="text-[var(--branco-penaarte)] text-2xl font-bold relative" style={{ top: '-0.5em' }}>50</span>
    </div>  
    <div className="mt-5">
      <span className="text-[var(--branco-penaarte)] font-bold text-[30px] ml-7 flex flex-row items-center justify-center">O casaco oco do Isaac</span>
    </div>
    <ul className="flex flex-wrap mt-3 ml-5">
      <li className="bg-[var(--laranjalaranja-default)] text-[var(--branco-penaarte)] text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm">Livro</li>
      <li className="bg-[var(--amareloamarelo-default)] text-[var(--branco-penaarte)] text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm">Literatura infantil</li>
    </ul>
    <p className="text-[var(--branco-penaarte)] mt-3 p-3">Os atributos de importação estão incluídos, você não terá custos extras.</p>
    <Select />
    <ul className="flex flex-col justify-between place-items-start space-y-10 mt-10 ml-8 ">
      <li className="text-[var(--azulazul-dark)] font-bold">Vendido por:</li>
      <li className="text-[var(--azulazul-dark)] font-bold">Enviado por:</li>
      <li className="text-[var(--azulazul-dark)] font-bold">Pagamento:</li>
    </ul>
    <div className="flex flex-col justify-between p-3 mt-10">
      <button type="button" className="text-[var(--azulazul-light)] bg-[var(--amareloamarelo-default)] hover:bg-[var(--amareloamarelo-light)] focus:outline-none focus:ring-4font-medium rounded-full font-poppins text-xl font-semibold px-5 py-2.5 text-center me-2 mb-2">Comprar</button>
      <button type="button" className="text-[var(--amareloamarelo-default)] bg-transparent border-2 border-[var(--amareloamarelo-default)] focus:outline-none hover:bg-[var(--azulazul-halflight)] focus:ring-4 focus:ring-gray-100 font-semibold font-poppins rounded-full text-xl px-5 py-2.5 me-2 mb-2">Negociar</button></div>
</div>
    )
}