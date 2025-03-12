import useStatesValidado from "../../hooks/useStatesValidado"

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
            <h1 className="text-gray-200 font-extrabold text-4xl">Validando senha</h1>
            <p className="text-gray-400">Usando hook personalizado para validação</p>
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
