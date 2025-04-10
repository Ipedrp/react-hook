import { createContext, useState } from "react";
import AdicionarProduto from "../../components/loja/AdicionarProduto";
import FinalizarCompra from "../../components/loja/FinalizarCompra";
import CarrinhoTabela from "../../components/loja/CarrinhoTabela";
import Header from "../../components/Header";
import SeletorCor from "../../components/SeletorCor";

export const Contexto = createContext();

export default function Loja() {

    const [carrinho, setCarrinho] = useState([]);

    const ctx = { carrinho, setCarrinho }

    return (
        <>
            <Contexto.Provider value={ctx}>
                <Header title="Loja" subtitle="Compartilhando informações entre múltiplos componentes com contexto">
                    <SeletorCor />
                </Header>
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
