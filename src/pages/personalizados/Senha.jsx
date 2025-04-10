import useStatesValidado from "../../hooks/useStatesValidado"
import Header from "../../components/Header";
import SeletorCor from "../../components/SeletorCor";

export default function Senha() {

    // Função de validação de senha
    const validaSenha = (senha) => {
        // Verifica se a senha contém pelo menos 8 caracteres 
        let correspondencia = senha.match(/^.{8,}$/);
        // Retorna true se a correspondência existir e se o comprimento da correspondência for igual ao comprimento da senha inteira
        return correspondencia?.[0].length === senha.length;
    }

    // Utiliza o hook personalizado
    // senha: valor atual do input
    // setSenha: função para atualizar o valor do input
    // senhaEhValida: booleano que indica se a senha atual é válida
    const [senha, setSenha, senhaEhValida] = useStatesValidado("", validaSenha)

    let borda;
    if (senha === "") {
        borda = "border-none";
    } else if (senhaEhValida) {
        borda = "border-green-600";
    } else {
        borda = "border-red-600";
    }

    return (
        <>
            <Header title="Validando senha" subtitle="Usando hook personalizado para validação">
                <SeletorCor />
            </Header>
            <div className="flex justify-center flex-col items-center h-[90%]">
                <p className="text-white text-3xl ">Input</p>
                <input
                    type="text"
                    value={senha}
                    className={`${borda} border-3 w-40 flex bg-white rounded-md my-4`}
                    onChange={(e) => setSenha(e.target.value)}
                />
            </div>
        </>
    )
}
