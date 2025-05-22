import { useLayoutEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import SeletorCor from "../../components/SeletorCor";

export default function GeradorDeCorAleatoria() {

    const [mostrarCor, setMostrarCor] = useState(false);
    const [texto, setTexto] = useState("Clique em sortear")

    const ref = useRef();

    function geraCorAleatoria() {
        const numeroAleatorioHexadecimal = Math.floor(Math.random() * 0xffffff);
        const cor = numeroAleatorioHexadecimal.toString(16);
        return cor;
    }

    function sortearCor() {
        setMostrarCor(true);
    }

    function apagarCor() {
        setMostrarCor(false);
    }

    useLayoutEffect(() => {

        if (mostrarCor) {
            const cor = geraCorAleatoria();
            setTexto(`#${cor}`);
            ref.current.style.backgroundColor = `#${cor}`;
        } else {
            setTexto("Clique em sortear");
        }
    }, [mostrarCor])


    return (
        <>
            <Header title="Gerador de Cor" subtitle="Criando exemplos mais complexos com useLayoutEffect">
                <SeletorCor />
            </Header>
            <div className="flex justify-center flex-col items-center h-[90%]">
                <h3 className="text-white font-semibold text-4xl">{texto}</h3>
                <div className="flex flex-row gap-3 my-3">
                    <button className="bg-sky-700 text-white rounded-md border-none px-5 py-3 cursor-pointer" onClick={sortearCor}>
                        Sortear Cor
                    </button>
                    <button className="bg-sky-700 text-white rounded-md border-none px-5 py-3 cursor-pointer" onClick={apagarCor}>
                        Apagar Cor
                    </button>
                </div>
                {
                    mostrarCor && <div ref={ref} className="w-32 h-32 rounded-sm"></div>
                }
            </div>
        </>
    );
}
