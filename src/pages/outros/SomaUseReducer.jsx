import { useEffect, useReducer, useState } from "react";
import Header from "../../components/Header";
import SeletorCor from "../../components/SeletorCor";

function mudaDados(estadoAtual, acao) {
    switch (acao.type) {
        case "ALTERA_NUM1":
            return { ...estadoAtual, num1: acao.novoValor, validoNum1: acao.novoValor > 0 };
            break;
        case "ALTERA_NUM2":
            return { ...estadoAtual, num2: acao.novoValor, validoNum2: acao.novoValor > 0 };
            break;
        case "SOMA":
            if (estadoAtual.validoNum1 && estadoAtual.validoNum2) {
                let soma = estadoAtual.num1 + estadoAtual.num2;
                return { ...estadoAtual, soma };
            } else {
                return { ...estadoAtual, soma: -99999 }
            }
            break;
        default:
            break;
    }
}

export default function SomaUseReducer() {

    const [dados, dispatchDados] = useReducer(mudaDados, {
        num1: 0,
        num2: 0,
        validoNum1: false,
        validoNum2: false,
        soma: 0
    })

    // const [num1, setNum1] = useState(0);
    // const [num2, setNum2] = useState(0);

    // const [soma, setSoma] = useState(0);

    // const [validoNum1, setValidoNum1] = useState(false);
    // const [validoNum2, setValidoNum2] = useState(false);

    // useEffect(()=>{
    //     setValidoNum1(num1 > 0);
    // }, [num1])

    // useEffect(()=>{
    //     setValidoNum2(num2 > 0);
    // }, [num2])

    // function handleSoma(){

    //     if(validoNum1 && validoNum2){
    //         setSoma(num1 + num2);
    //     } else{
    //         setSoma(-9999999);
    //     }
    // }

    return (
        <>

            <Header title="Soma com useReducer" subtitle="Exemplo de soma com useReducer">
                <SeletorCor />
            </Header>
            <div className="flex justify-center flex-col items-center h-[90%]">
                <h3 className="text-white text-4xl">Faça uma soma</h3>
                <div className="flex gap-1 mt-4 mb-3">
                    <input
                        onInput={(e) => { dispatchDados({ type: "ALTERA_NUM1", novoValor: +e.target.value }) }}
                        value={dados.num1}
                        type="number"
                        name=""
                        id=""
                        className="bg-white border-none p-2  rounded-lg" />
                    <div
                        className="text-white text-4xl">+</div>
                    <input
                        onInput={(e) => { dispatchDados({ type: "ALTERA_NUM2", novoValor: +e.target.value }) }}
                        value={dados.num2}
                        type="number"
                        name=""
                        id=""
                        className="bg-white border-none p-2  rounded-lg" />
                    <div
                        className="flex justify-center bg-orange-700 w-10 h-10 rounded-md cursor-pointer"
                        onClick={() => { dispatchDados({ type: "SOMA" }) }}>
                        <span className="text-white text-2xl font-bold ">=</span>
                    </div>
                </div>
                <h3 className="text-white font-semibold text-4xl">{dados.soma}</h3>
            </div>
        </>
    );
}
