import { useState, useEffect } from "react";
import useToggle from "../../hooks/useToggle";

export default function Modal() {
    const [mudar, toggleAtivo] = useToggle(false);

    return (
        <>
            <h1 className="text-gray-200 font-extrabold text-4xl">Modal</h1>
            <p className="text-gray-400">Usando hook personalizado para abrir modal</p>
            <div className="flex justify-center flex-col items-center h-[90%]">
                <button 
                    onClick={toggleAtivo} 
                    className="text-white bg-green-800 rounded-md py-3 px-6 hover:cursor-pointer">
                    Abrir
                </button>

                <div
                    className={`flex justify-center items-center w-[200px] bg-amber-50 my-4 
                    overflow-hidden transition-all duration-500 ease-in-out ${
                        mudar ? "max-h-[200px] h-[200px] opacity-100" : "max-h-0 h-0 opacity-0"
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
