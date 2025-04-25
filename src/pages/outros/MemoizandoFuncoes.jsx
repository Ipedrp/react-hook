import { useCallback, useMemo, useState } from "react";
import Header from "../../components/Header";
import SeletorCor from "../../components/SeletorCor";
import ButtonMemoizado from "../../components/ButtonMemoizado";
export default function MemoizandoFuncoes() {

    const [quantidade, setQuantidade] = useState(0);

    const Finalizar = useCallback(function(e){
        e.preventDefault();
        window.alert("Compra finalizada com sucesso!");
        // window.alert(`${quantidade} no TOTAL`);
        setQuantidade(0);
    }, [])

    return (
        <>
            <Header title="Memoização funções" subtitle="Entendendo o useCallback">
                <SeletorCor />
            </Header>
            <div className="flex justify-center flex-col items-center h-[90%]">
                <h3 className="text-white font-semibold text-4xl">Quanto produtos você quer?</h3>
                <form className="flex flex-col gap-3 mt-3">
                    <input type="number" value={quantidade} onInput={(e) => setQuantidade(+e.target.value)} className="bg-white border-none p-2  rounded-lg" />
                    <ButtonMemoizado onClick={Finalizar}>Confirmar</ButtonMemoizado>
                </form>
            </div>
        </>
    );
}
