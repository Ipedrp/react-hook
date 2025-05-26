import { useId } from "react";
import Header from "../../components/Header";
import SeletorCor from "../../components/SeletorCor";

export default function FormularioUseId1() {
    let id = useId();

    return (
        <>
            <Header title="Formulário useId 1" subtitle="Usando useId em um formulário 1">
                <SeletorCor />
            </Header>
            <div className="flex justify-center flex-col items-center h-[90%]">
                <div className="flex flex-row gap-3 my-3">
                    <label className="text-white py-3" htmlFor={`nome-${id}`}>
                        Nome:
                    </label>
                    <input id={`nome-${id}`} className="bg-white border-none rounded-md" />
                </div>
                <div className="flex flex-row gap-3 my-3">
                    <label className="text-white py-3" htmlFor={`sobrenome-${id}`}>
                        Sobrenome:
                    </label>
                    <input id={`sobrenome-${id}`} className="bg-white border-none rounded-md" />
                </div>
            </div>
        </>
    )
}