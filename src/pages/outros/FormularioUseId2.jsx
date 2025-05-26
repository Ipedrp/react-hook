import { useId } from "react";
import Header from "../../components/Header";
import SeletorCor from "../../components/SeletorCor";
import InputUseId from "../../components/InputUseId";

export default function FormularioUseId2() {
    let id = useId();

    return (
        <>
            <Header title="Formulário useId 2" subtitle="Usando useId em um formulário 2">
                <SeletorCor />
            </Header>
            <div className="flex justify-center flex-col items-center h-[90%]">
                <InputUseId label={"Nome"}/>
                <InputUseId label={"Sobrenome"}/>
            </div>
        </>
    )
}