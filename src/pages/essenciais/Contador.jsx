// Contador.jsx
import { useState } from "react";
import Header from "../../components/Header";
import SeletorCor from "../../components/SeletorCor";

export default function Contador() {
  const [value, setValue] = useState(0);

  return (
    <>
      <Header title="Contador" subtitle="Entendendo o que é um estado">
        <SeletorCor />
      </Header>
      <div className="flex justify-center flex-col items-center h-[90%]">
        <p className="text-white text-5xl">{value}</p>
        <div className="mt-5 text-white">
          <button
            onClick={() => setValue(value - 1)}
            className="ml-2 w-[50px] h-[50px] bg-sky-900 rounded-full hover:cursor-pointer"
          >
            -
          </button>
          <button
            onClick={() => setValue(0)}
            className="ml-2 w-[50px] h-[50px] bg-red-900 rounded-full hover:cursor-pointer"
          >
            0
          </button>
          <button
            onClick={() => setValue(value + 1)}
            className="ml-2 w-[50px] h-[50px] bg-green-900 rounded-full hover:cursor-pointer"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}