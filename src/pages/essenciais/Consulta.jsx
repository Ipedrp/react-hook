import axios from "axios"
import { useState, useEffect } from "react"

export default function Consulta() {

    const [url, setUrl] = useState(null);

    useEffect(() =>{
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
            <h1 className="text-gray-200 font-extrabold text-4xl">Requisição à API</h1>
            <p className="text-gray-400">Requerindo dados</p>
            <div className="flex justify-center flex-col items-center h-[90%]">
                <img 
                    className="max-w-sm" 
                    src={url} 
                    alt="imagens de cachorros" />
            </div>
        </>
    )
}