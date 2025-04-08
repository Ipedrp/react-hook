import { useContext } from "react";
import { Contexto } from "../../pages/contexto/Loja";

export default function CarrinhoTabela() {
    const { carrinho, setCarrinho } = useContext(Contexto);

    const handleIncrementarQuantidade = (nomeProduto) => {
        setCarrinho(prevCarrinho =>
            prevCarrinho.map(item =>
                item.nome === nomeProduto
                    ? { ...item, quantidade: item.quantidade + 1 }
                    : item
            )
        );
    };

    const calcularSubtotal = (item) => {
        return item.preco * item.quantidade;
    };

    const calcularTotal = () => {
        return carrinho.reduce((total, produto) => total + calcularSubtotal(produto), 0);
    };

    return (
        <div className="col-span-1 sm:col-span-3 row-span-2 flex flex-col h-full w-full">
            <div className="flex items-center justify-center bg-green-700 h-1/4 w-full rounded-tl-lg rounded-tr-lg">
                <h2 className="text-white text-center text-sm font-semibold">Carrinho</h2>
            </div>
            <div className="bg-green-500 h-2/4 p-4 w-full overflow-auto">
                <table className="table-auto w-full h-full text-center border-collapse">
                    <thead>
                        <tr>
                            <th className="text-white text-sm text-center p-2">Produto</th>
                            <th className="text-white text-sm text-center p-2">Quantidade</th>
                            <th className="text-white text-sm text-center p-2">Preço Unitário</th>
                            <th className="text-white text-sm text-center p-2">Subtotal</th>
                            <th className="text-white text-sm text-center p-2">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carrinho.map((item, index) => (
                            <tr key={index}>
                                <td className="text-white p-2">{item.nome}</td>
                                <td className="text-white p-2">{item.quantidade}</td>
                                <td className="text-white p-2">R$ {item.preco.toFixed(2)}</td>
                                <td className="text-white p-2">R$ {calcularSubtotal(item).toFixed(2)}</td>
                                <td className="text-white p-2">
                                    <button 
                                        onClick={() => handleIncrementarQuantidade(item.nome)}
                                        className="bg-blue-500 px-2 py-1 rounded text-white"
                                    >
                                        +
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex items-center justify-center bg-green-700 h-1/4 w-full rounded-bl-lg rounded-br-lg">
                <h2 className="text-white text-center text-sm font-semibold">
                    Total: R$ {calcularTotal().toFixed(2)}
                </h2>
            </div>
        </div>
    );
}