import { useContext, useState } from "react";
import { Contexto } from "../../pages/contexto/Loja";

export default function AdicionarProduto() {
    const { carrinho, setCarrinho } = useContext(Contexto);
    const [produto, setProduto] = useState("");
    const [preco, setPreco] = useState("");

    const handleAdicionarProduto = (e) => {
        e.preventDefault();
        
        if (!produto || !preco) return;
        
        const novoProduto = {
            nome: produto,
            preco: parseFloat(preco),
            quantidade: 1
        };

        setCarrinho(prevCarrinho => {
            const produtoExistente = prevCarrinho.find(item => item.nome === novoProduto.nome);
            
            if (produtoExistente) {
                return prevCarrinho.map(item =>
                    item.nome === novoProduto.nome
                        ? { ...item, quantidade: item.quantidade + 1 }
                        : item
                );
            } else {
                return [...prevCarrinho, novoProduto];
            }
        });

        setProduto("");
        setPreco("");
    };

    return (
        <div className="sm:col-span-2 rounded-lg flex flex-col h-full">
            <div className="bg-purple-700 h-1/4 flex items-center justify-center rounded-tl-lg rounded-tr-lg">
                <h2 className="text-white text-center text-sm font-semibold">Adicionar produto</h2>
            </div>
            <form onSubmit={handleAdicionarProduto} className="flex flex-wrap items-center justify-center gap-4 p-4 bg-purple-500 h-3/4 rounded-bl-lg rounded-br-lg w-full">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full sm:w-auto">
                    <label htmlFor="produto" className="text-white text-sm font-semibold">Produto</label>
                    <input 
                        type="text" 
                        id="produto" 
                        placeholder="Nome do produto" 
                        className="bg-amber-50 border-none p-2 rounded-lg w-full sm:w-40" 
                        value={produto}
                        onChange={(e) => setProduto(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full sm:w-auto">
                    <label htmlFor="preco" className="text-white text-sm font-semibold">Preço</label>
                    <input 
                        type="number" 
                        id="preco" 
                        placeholder="Preço" 
                        step="0.01"
                        min="0"
                        className="bg-amber-50 border-none p-2 rounded-lg w-full sm:w-40" 
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="bg-green-700 p-2 rounded-lg text-white text-sm font-semibold w-full sm:w-auto">
                    Adicionar
                </button>
            </form>
        </div>
    );
}