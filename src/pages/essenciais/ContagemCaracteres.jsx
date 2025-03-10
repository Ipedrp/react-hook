import axios from "axios"
import { useState, useEffect } from "react"

export default function Consulta() {

    const quantidadeCaracter = 400;
    const [caracterRestante, setCaracterRestante] = useState(quantidadeCaracter);
    const [texto, setTexto] = useState("")

    useEffect(() => {
        let timer = setTimeout(() => {

            let aux = quantidadeCaracter - texto.length;
            setCaracterRestante(aux);
            console.log("Atualizei!");
            
        }, 1000)
        return ()=>{clearTimeout(timer)}

    }, [texto])

    return (
        <>
            <h1 className="text-gray-200 font-extrabold text-4xl">Contagem de caracteres</h1>
            <p className="text-gray-400">Entendendo as funções de limpeza</p>
            <div className="flex justify-center flex-col items-center h-[90%]">
                <h2 className="text-white text-5xl mb-4 font-semibold">Digite o texto</h2>
                <p className="text-white text-2xl my-8 ">{caracterRestante} Caracteres restantes</p>
                <textarea
                    name="text0"
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                    id="text0"
                    className="border border-white text-white rounded-xl bg-gray-700 w-[500px] h-[300px] ">
                </textarea>
            </div>
        </>
    )
}