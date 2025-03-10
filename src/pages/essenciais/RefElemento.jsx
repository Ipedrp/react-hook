import { useState, useRef } from "react"
import { FaArrowLeft } from "react-icons/fa";

export default function RefElemento() {

    const referencia = useRef()

    console.log("Rendereizei!");
    //Esse console só irá aparecer uma vez, pois é apenas quando o componente é montado. 
    //Dessa forma, mesmo modificando a DOM diminuindo o texto, a rederização só acontece uma vez, não afetando ela.

    const DiminuirCaracter = () => {
        referencia.current.innerText = referencia.current.innerText.slice(0, -1);
    }
    //Não é recomendado utilizar o useRef para manipular dados que estão relacionados a re-renderização, como a manipulação da DOM.

    return (
        <>
            <h1 className="text-gray-200 font-extrabold text-4xl">Referenciando um elemento</h1>
            <p className="text-gray-400">Usando referencias na DOM</p>
            <div className="flex justify-center flex-col items-center h-[90%]">
                <p
                    ref={referencia}
                    className="text-white text-5xl">
                    Texto legal!
                </p>
                <div className="mt-5 text-white">
                    <button
                        onClick={DiminuirCaracter}
                        className="ml-2 w-[50px] h-[50px] bg-pink-500 rounded-4xl hover:cursor-pointer flex justify-center items-center">
                        <FaArrowLeft />
                    </button>
                </div>
            </div>
        </>
    )
}
