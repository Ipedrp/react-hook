import axios from "axios"
import { useState, useEffect } from "react"
import Header from "../../components/Header";
import SeletorCor from "../../components/SeletorCor";

export default function Consulta() {

    const [url, setUrl] = useState(null);

    useEffect(() => {
        console.log("Foto Atualizada!");

        getDog();
    }, [])
    //O array vazio, só faz a requisição quando o componente é montado.

    async function getDog() {
        try {
            const response = await axios.get("https://dog.ceo/api/breeds/image/random");

            setUrl(response.data.message);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Header title="Requisição à API" subtitle="Requerindo dados">
                <SeletorCor />
            </Header>
            <div className="flex justify-center flex-col items-center h-[90%]">
                <img
                    className="max-w-sm"
                    src={url}
                    alt="imagens de cachorros" />
            </div>
        </>
    )
}