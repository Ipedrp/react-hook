import { useRef } from "react";
import Header from "../../components/Header";
import SeletorCor from "../../components/SeletorCor";
import InputComReferencia from "../../components/InputComReferencia";

export default function FormularioImperativeHandle() {
    const referencia = useRef();

    // No componente pai:
    function Apagar() {
        referencia.current.apagar();
    }

    // No componente pai:
    function Padrao() {
        referencia.current.padrao();
    }

    return (
        <>
            <Header title="Formulário 1" subtitle="Utilizando useRef com useImperativeHandle">
                <SeletorCor />
            </Header>
            <div className="flex justify-center flex-col items-center h-[90%]">
                <h3 className="text-white font-semibold text-4xl mb-3">Digite abaixo</h3>
                <div className="flex flex-col gap-2 mb-3">
                    <InputComReferencia ref={referencia} />
                    <div className="flex justify-center gap-2">
                        <button
                            className="bg-red-700 rounded border-none px-3 py-1 text-white cursor-pointer"
                            onClick={Apagar}
                        >
                            Apagar
                        </button>
                        <button
                            className="bg-sky-700 rounded border-none px-3 py-1 text-white cursor-pointer"
                            onClick={Padrao}
                        >
                            Padrão
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}