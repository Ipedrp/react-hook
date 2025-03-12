import { useState } from "react";

export default function useToggle(value){

    const [ativo, setAtivo] = useState(value ?? false);

    const toggleAtivo = () => {
        setAtivo(!ativo);
    }

    return [ativo, toggleAtivo];
}