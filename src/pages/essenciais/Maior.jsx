import { useEffect, useState } from "react"
import Header from "../../components/Header";
import SeletorCor from "../../components/SeletorCor";

export default function Maior() {

    const [N1, setN1] = useState(0)
    const [N2, setN2] = useState(0)
    const [maior, setMaior] = useState(0)

    const CalculaMaior = () => {
        return (N1 > N2) ? N1 : N2;

    }

    useEffect(() => {
        let m = CalculaMaior()
        setMaior(m)
    }, [N1, N2])
    //Esse efeito só acontece quando o valor de N1 muda ou o de N2 muda!

    useEffect(() => {
        console.log(`N1: ${N1}, N2: ${N2}, maior: ${maior}   `);

    }, [N1, N2, maior])
    //Esse efeito acontece quando o N1 ou N2 ou MAIOR muda! Se N1 ou N2 junto com o MAIOR mudar, Aparece dois console.log(); 

    useEffect(() => {
        if (maior > 5) {
            window.alert("Os números estão ficando altos!")
        }
    }, [maior])
    //Esse efeito acontece toda vez que o valor de MAIOR é maior que 5!

    return (
        <>
            <Header title="Maior" subtitle="Usando múltiplos estados">
                <SeletorCor />
            </Header>
            <h1 className="text-gray-200 font-extrabold text-4xl">Maior</h1>
            <p className="text-gray-400"></p>
            <div className="flex justify-center flex-col items-center h-[90%]">
                <p className="text-white text-5xl mb-3">N1: {N1} | N2: {N2}</p>
                <p className="text-white text-3xl">O maior número é: {maior}</p>
                <div className="mt-5 text-white">
                    <button
                        onClick={() => setN1(N1 + 1)}
                        className="ml-2 w-[50px] h-[50px] bg-red-900 rounded-4xl hover:cursor-pointer">N1
                    </button>
                    <button
                        onClick={() => setN2(N2 + 1)}
                        className="ml-2 w-[50px] h-[50px] bg-blue-900 rounded-4xl hover:cursor-pointer">N2
                    </button>
                </div>
            </div>
        </>
    )
}