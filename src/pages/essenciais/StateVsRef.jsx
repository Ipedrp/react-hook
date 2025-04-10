import { useState, useRef } from "react"
import Header from "../../components/Header";
import SeletorCor from "../../components/SeletorCor";

export default function StateVsRef() {

    // useState cria uma variável de estado que, ao ser atualizada, dispara uma re-renderização do componente.
    const [estado, setEstado] = useState(0);

    // useRef cria uma referência mutável que persiste durante o ciclo de vida do componente,
    // mas sua atualização NÃO causa re-renderização.
    const referencia = useRef(0);

    // Função para incrementar o valor da referência.
    // Atualizar referencia.current NÃO dispara uma nova renderização.
    const IncrementaReferencia = ()=>{
        referencia.current = referencia.current + 1;
    }

    return (
        <>

            <Header title="Referência vs Estado" subtitle="Entendendo useRef">
                <SeletorCor />
            </Header>
            <div className="flex justify-center flex-col items-center h-[90%]">
                <p className="text-white text-5xl">
                    R: {referencia.current} | S: {estado}
                </p>
                <div className="mt-5 text-white">
                    <button 
                        onClick={IncrementaReferencia}  
                        className="ml-2 w-[50px] h-[50px] bg-pink-500 rounded-4xl hover:cursor-pointer">
                        R+
                    </button>
                    <button 
                        onClick={() => setEstado(estado+1)}
                        className="ml-2 w-[50px] h-[50px] bg-green-400 rounded-4xl hover:cursor-pointer">
                        S+
                    </button>
                </div>
            </div>
        </>
    )
}
