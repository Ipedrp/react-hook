import useTamanhoJanela from "../../hooks/useTamanhoJanela";
import Header from "../../components/Header";
import SeletorCor from "../../components/SeletorCor";

export default function TamanhoJanela() {

    const { obterInfoDimensao } = useTamanhoJanela();
    const { cor, rotulo } = obterInfoDimensao();

    return (
        <>
            <Header title="Qual o tamanho da janela?" subtitle="Usando hook personalizado para descobrir tamanho da janela">
                <SeletorCor />
            </Header>
            <div className="flex justify-center flex-col items-center h-[90%]">
                <div className={`w-64 h-64 ${cor} flex items-center mx-auto my-10 justify-center rounded-2xl shadow-lg transition-all`}>
                    <p className="text-white text-3xl font-bold">{rotulo}</p>
                </div>
            </div>
        </>
    );
} 