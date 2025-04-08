import { createContext, useState } from "react";
import AdicionarProduto from "../../components/loja/AdicionarProduto";
import FinalizarCompra from "../../components/loja/FinalizarCompra";
import CarrinhoTabela from "../../components/loja/CarrinhoTabela";

export const Contexto = createContext();

export default function Loja() {

    const [carrinho, setCarrinho] = useState([]);

    const ctx = { carrinho, setCarrinho }

    return (
        <>
            <Contexto.Provider value={ctx}>
                <h1 className="text-gray-200 font-extrabold text-4xl text-start">Loja</h1>
                <p className="text-gray-400 text-start">Compartilhando informações entre múltiplos componentes com contexto</p>
                <div className="flex justify-center flex-col items-center h-auto min-h-screen p-4 ">
                    <div className="grid grid-cols-1 sm:grid-cols-3 grid-rows-3 gap-4 h-auto w-full max-w-[80%]">
                        <AdicionarProduto />
                        <FinalizarCompra />
                        <CarrinhoTabela />
                    </div>
                </div>
            </Contexto.Provider>
        </>
    );
}
