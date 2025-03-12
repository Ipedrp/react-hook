import { useState, useEffect } from "react";

// Hook personalizado para obter o tamanho da janela e detalhes da dimensão
export default function useTamanhoJanela() {
  const [tamanho, setTamanho] = useState({ largura: window.innerWidth, altura: window.innerHeight });

  const dimensoes = {
    sm: { min: 640, max: 767 },
    md: { min: 768, max: 1023 },
    lg: { min: 1024, max: 1279 },
    xl: { min: 1280, max: 1535 },
    '2xl': { min: 1536, max: Infinity },
  };

  useEffect(() => {
    const aoRedimensionar = () => {
      setTamanho({ largura: window.innerWidth, altura: window.innerHeight });
    };

    window.addEventListener("resize", aoRedimensionar);
    return () => window.removeEventListener("resize", aoRedimensionar);
  }, []);

  const obterInfoDimensao = () => {
    const dimensaoAtual = Object.entries(dimensoes).filter(([_, valor]) => tamanho.largura >= valor.min && tamanho.largura <= valor.max);
    const tamanhoAtual = dimensaoAtual[0]?.[0] || "XS";

    const mapaDeCores = {
      sm: "bg-red-500",
      md: "bg-orange-500",
      lg: "bg-yellow-500",
      xl: "bg-green-500",
      '2xl': "bg-blue-500",
      XS: "bg-gray-500"
    };

    return { cor: mapaDeCores[tamanhoAtual], rotulo: tamanhoAtual.toUpperCase() };
  };

  return { ...tamanho, obterInfoDimensao };
}
