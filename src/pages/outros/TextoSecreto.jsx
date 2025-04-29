import React, { useState, useLayoutEffect } from "react";
import Header from "../../components/Header";
import SeletorCor from "../../components/SeletorCor";

export default function TextoSecreto() {

    const [texto, setTexto] = useState("TEXTO SECRETO!!!!!!!!!!!!!!!!");

    useLayoutEffect(() => {
        setTexto("Olá, Mundo!")
    }, []);

    return (
        <>
            <Header title="Texto secreto" subtitle="Resolvendo problema do useEffect">
                <SeletorCor />
            </Header>
            <div className="flex justify-center flex-col items-center h-[90%]">
                <p className="text-white text-5xl mb-3">{texto}</p>
            </div>
        </>
    )
} 