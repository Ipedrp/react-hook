import { useMemo, useState } from "react";
import Header from "../../components/Header";
import SeletorCor from "../../components/SeletorCor";

export default function Memoizando() {

    const [numero1, setNumero1] = useState(1);
    const [numero2, setNumero2] = useState(1);
    const [numero3, setNumero3] = useState(1);
    const [numero4, setNumero4] = useState(1);

    // function potencia(){
    //    let future = Date.now() + 3000;
    //     while(Date.now() < future);
    //     return numero1 ** numero2;
    // }

    let potencia = useMemo(() => {
        let future = Date.now() + 3000;
        while (Date.now() < future); // Loop bloqueante de 3 segundos
        return numero1 ** numero2;
    }, [numero1, numero2]); // Dependências: só recalcula quando `numero1` ou `numero2` mudam

    let soma = numero3 + numero4;

    return (
        <>

            <Header title="Memoização 1" subtitle="Memoizando elementos">
                <SeletorCor />
            </Header>
            <div className="flex justify-center flex-col items-center h-[90%]">
                <h3 className="text-white font-semibold text-4xl"><span>{numero1}</span> <sup>{numero2}</sup> = <span>{potencia}</span></h3>
                <div className="flex gap-1.5 mt-3 mb-3">
                    <input onInput={(e) => { setNumero1(+e.target.value) }} value={numero1} type="number" name="" id="" className="bg-white border-none p-2  rounded-lg" />
                    <input onInput={(e) => { setNumero2(+e.target.value) }} value={numero2} type="number" name="" id="" className="bg-white border-none p-2  rounded-lg" />
                </div>
                <h3 className="text-white font-semibold text-4xl"><span>{numero3}</span> + <span>{numero4}</span> = <span>{soma}</span></h3>
                <div className="flex gap-1.5 mt-3">
                    <input onInput={(e) => { setNumero3(+e.target.value) }} value={numero3} type="number" name="" id="" className="bg-white border-none p-2  rounded-lg" />
                    <input onInput={(e) => { setNumero4(+e.target.value) }} value={numero4} type="number" name="" id="" className="bg-white border-none p-2  rounded-lg" />
                </div>
            </div>
        </>
    );
}
