import { useContext } from "react";
import { Contexto } from "../../pages/contexto/Loja";

export default function FinalizarCompra() {
    const { carrinho, setCarrinho } = useContext(Contexto);

    const handleFinalizarCompra = () => {
        setCarrinho([]);
    };

    const calcularTotal = () => {
        return carrinho.reduce((total, produto) => total + (produto.preco * produto.quantidade), 0);
    };

    return (
        <div className="bg-amber-300 rounded-lg flex flex-col h-full">
            <div className="bg-red-700 h-1/4 flex items-center justify-center rounded-tl-lg rounded-tr-lg">
                <h2 className="text-white text-center text-sm font-semibold">Finalizar</h2>
            </div>
            <div className="bg-red-500 h-3/4 flex flex-col items-center justify-center rounded-bl-lg rounded-br-lg">
                <h3 className="text-white text-center text-lg font-normal">
                    Total: <span>R$ {calcularTotal().toFixed(2)}</span>
                </h3>
                <div className="flex items-center justify-center ">
                    <button 
                        onClick={handleFinalizarCompra}
                        className="bg-white p-1 rounded-lg text-red-700 text-sm font-semibold w-full sm:w-auto"
                    >
                        Finalizar Compra
                    </button>
                </div>
            </div>
        </div>
    );
}