import { useState } from "react"

export default function Contador() {

    const [value, setValue] = useState(0)

    return (
        <>
            <h1 className="text-gray-200 font-extrabold text-4xl">Contador</h1>
            <p className="text-gray-400">Entendendo o que é o um estado</p>
            <div className="flex justify-center flex-col items-center h-[90%]">
                <p className="text-white text-5xl">{value}</p>
                <div className="mt-5 text-white">
                    <button 
                        onClick={() => setValue(value-1)}
                        className="ml-2 w-[50px] h-[50px] bg-sky-900 rounded-4xl hover:cursor-pointer">-</button>
                    <button 
                        onClick={() => setValue(0)}  
                        className="ml-2 w-[50px] h-[50px] bg-red-900 rounded-4xl hover:cursor-pointer">0</button>
                    <button 
                        onClick={() => setValue(value+1)}  
                        className="ml-2 w-[50px] h-[50px] bg-green-900 rounded-4xl hover:cursor-pointer">+</button>
                </div>
            </div>
        </>
    )
}