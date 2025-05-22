import { useEffect, useState } from "react";
import Header from "../../components/Header";
import SeletorCor from "../../components/SeletorCor";

export default function SomaUseStates() {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const [soma, setSoma] = useState(0);

    const [validoNum1, setValidoNum1] = useState(false);
    const [validoNum2, setValidoNum2] = useState(false);

    useEffect(()=>{
        setValidoNum1(num1 > 0);
    }, [num1])

    useEffect(()=>{
        setValidoNum2(num2 > 0);
    }, [num2])

    function handleSoma(){

        if(validoNum1 && validoNum2){
            setSoma(num1 + num2);
        } else{
            setSoma(-9999999);
        }

    }


    return (
        <>

            <Header title="Soma com useStates" subtitle="Exemplo de soma com useStates">
                <SeletorCor />
            </Header>
            <div className="flex justify-center flex-col items-center h-[90%]">
                <h3 className="text-white text-4xl">Faça uma soma</h3>
                <div className="flex gap-1 mt-4 mb-3">
                    <input onInput={(e) => {setNum1(+e.target.value) }} value={num1} type="number" name="" id="" className="bg-white border-none p-2  rounded-lg" />
                    <div className="text-white text-4xl">+</div>
                    <input onInput={(e) => {setNum2(+e.target.value) }} value={num2} type="number" name="" id="" className="bg-white border-none p-2  rounded-lg" />
                    <div className="flex justify-center bg-orange-700 w-10 h-10 rounded-md cursor-pointer" onClick={handleSoma}>
                        <span className="text-white text-2xl font-bold ">=</span>
                    </div>
                </div>
                <h3 className="text-white font-semibold text-4xl">{soma}</h3>
            </div>
        </>
    );
}
