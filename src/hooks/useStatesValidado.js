// Importa o hook useState do React
import { useState } from "react"

// Hook personalizado que gerencia um valor e sua validação
export default function useStatesValidado(valorInicial, funcaoValidacao) {
    const [valor, setValor] = useState(valorInicial); // Estado para armazenar o valor atual
    const [validado, setValidado] = useState(false); // Estado para armazenar se o valor é válido ou não

    // Função para atualizar o valor e validar o novo valor
    const setValorValidado = (novoValor) => {
        setValor(novoValor); // Atualiza o valor do estado
        setValidado(funcaoValidacao(novoValor)); // Valida o novo valor usando a função de validação e atualiza o estado 'validado'
    }

    // Retorna uma tupla com:
    // - valor: o valor atual
    // - setValorValidado: função para atualizar e validar o valor
    // - validado: booleano indicando se o valor é válido
    return [valor, setValorValidado, validado];
}
