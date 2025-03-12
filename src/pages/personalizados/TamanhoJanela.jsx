import useTamanhoJanela from "../../hooks/useTamanhoJanela";

export default function TamanhoJanela() {

    const { obterInfoDimensao } = useTamanhoJanela();
    const { cor, rotulo } = obterInfoDimensao();

    return (
        <>
            <h1 className="text-gray-200 font-extrabold text-4xl">Qual o tamanho da janela?</h1>
            <p className="text-gray-400">Usando hook personalizado para descobrir tamanho da janela</p>
            <div className="flex justify-center flex-col items-center h-[90%]">
                <div className={`w-64 h-64 ${cor} flex items-center mx-auto my-10 justify-center rounded-2xl shadow-lg transition-all`}>
                    <p className="text-white text-3xl font-bold">{rotulo}</p>
                </div>
            </div>
        </>
    );
} 