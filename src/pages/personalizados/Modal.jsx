import { useState, useEffect } from "react";
import useToggle from "../../hooks/useToggle";
import Header from "../../components/Header";
import SeletorCor from "../../components/SeletorCor";

export default function Modal() {
    const [mudar, toggleAtivo] = useToggle(false);

    return (
        <>
            <Header title="Modal" subtitle="Usando hook personalizado para abrir modal">
                <SeletorCor />
            </Header>
            <div className="flex justify-center flex-col items-center h-[90%]">
                <button
                    onClick={toggleAtivo}
                    className="text-white bg-green-800 rounded-md py-3 px-6 hover:cursor-pointer">
                    Abrir
                </button>

                <div
                    className={`flex justify-center items-center w-[200px] bg-amber-50 my-4 
                    overflow-hidden transition-all duration-500 ease-in-out ${mudar ? "max-h-[200px] h-[200px] opacity-100" : "max-h-0 h-0 opacity-0"
                        }`}
                >
                    <button
                        onClick={toggleAtivo}
                        className="text-white bg-red-900 rounded-md py-2 px-4 hover:cursor-pointer">
                        Fechar
                    </button>
                </div>
            </div>
        </>
    );
}
