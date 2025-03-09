import { useState } from "react"

export default function Votacao() {

    const [data, setData] = useState({
        votePurple: 0,
        voteGreen: 0
    })

    const votePurple = () => {
        setData((dateCurrent) => {
            return {
                votePurple: dateCurrent.votePurple + 1,
                voteGreen: dateCurrent.voteGreen
            }
        })
    }

    const voteGreen = () => {
        setData((dateCurrent) => {
            return {
                votePurple: dateCurrent.votePurple,
                voteGreen: dateCurrent.voteGreen + 1
            }
        })
    }

    const Restart = () => {
        setData((dateCurrent) => {
            return {
                votePurple: dateCurrent.votePurple = 0,
                voteGreen: dateCurrent.voteGreen = 0
            }
        })
    }

    return (
        <>
            <h1 className="text-gray-200 font-extrabold text-4xl">Votação</h1>
            <p className="text-gray-400">Usando estado com objeto</p>
            <div className="flex justify-center flex-col items-center h-[90%]">
                <p className="text-white text-5xl mb-3">Qual a melhor cor ?</p>
                <p className="text-white text-3xl">Verde: {data.voteGreen} | Roxo: {data.votePurple}</p>
                <div className="mt-5 text-white">
                    <button
                        onClick={voteGreen}
                        className="ml-2 w-[50px] h-[50px] bg-green-900 rounded-4xl hover:cursor-pointer"></button>
                    <button
                        onClick={votePurple}
                        className="ml-2 w-[50px] h-[50px] bg-purple-900 rounded-4xl hover:cursor-pointer"></button>
                </div>
                <button onClick={Restart} className="text-white bg-gray-800 px-5 py-2 mt-3 rounded-2xl hover:cursor-pointer">Zerar</button>
            </div>
        </>
    )
}