import axios from "axios"
import { useState, useRef } from "react"
import Header from "../../components/Header";
import SeletorCor from "../../components/SeletorCor";

export default function ContagemCaracterUseRef() {

    const quantidadeCaracter = 400;
    const [caracterRestante, setCaracterRestante] = useState(quantidadeCaracter);
    const refTexto = useRef();
    const contador = useRef();

    const IniciaContador = () => {
        clearTimeout(contador.current)
        contador.current = setTimeout(() => {
            let quantidadeCaraceterDigitados = refTexto.current.value.length;
            setCaracterRestante(quantidadeCaracter - quantidadeCaraceterDigitados);
        }, 1000)
    }

    return (
        <>
            <Header title="Contagem de caracteres" subtitle="Usando um referência para contar o tempo">
                <SeletorCor />
            </Header>
            <div className="flex justify-center flex-col items-center h-[90%]">
                <h2 className="text-white text-5xl mb-4 font-semibold">Digite o texto</h2>
                <p className="text-white text-2xl my-8 ">{caracterRestante} Caracteres restantes</p>
                <textarea
                    ref={refTexto}
                    name="text"
                    id="text"
                    onChange={IniciaContador}
                    className="border border-white text-white rounded-xl bg-gray-700 w-[500px] h-[300px] p-3 ">
                </textarea>
            </div>
        </>
    )
}