import { useState, useRef } from "react"
import { FaArrowLeft } from "react-icons/fa";
import Header from "../../components/Header";
import SeletorCor from "../../components/SeletorCor";

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
            <Header title="Referenciando um elemento" subtitle="Usando referencias na DOM">
                <SeletorCor />
            </Header>
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
