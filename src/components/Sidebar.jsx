import React, { useState, useEffect } from 'react';
import {
    FaChevronDown,
    FaUserFriends,
    FaRegFolder,
    FaTimes,
    FaChevronUp,
    FaExchangeAlt,
    FaChevronRight,
    FaAmilia
} from 'react-icons/fa';
import { GoNumber } from "react-icons/go";
import { BsWindowX } from "react-icons/bs";
import { CgDockWindow } from "react-icons/cg";
import { RiRefreshLine } from "react-icons/ri";
import { TbPasswordFingerprint } from "react-icons/tb";
import { CgSmartphoneRam } from "react-icons/cg";
import { Link, useLocation } from 'react-router';
import useToggle from '../hooks/useToggle';
import useTamanhoJanela from '../hooks/useTamanhoJanela';

const Sidebar = () => {
    const { largura, obterInfoDimensao } = useTamanhoJanela();
    const [isOpen, toggleOpen] = useToggle(true)
    const [dropdowns, setDropdowns] = useState({
        essenciais: false,
        personalizados: false,
    });

    const location = useLocation();

    const toggleDropdown = (key) => {
        setDropdowns((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    useEffect(() => {
        const { rotulo } = obterInfoDimensao();
        if (rotulo === "XS") {
            toggleOpen(false);
        }
    }, [largura]);



    return (
        <div className={`flex ${isOpen ? 'w-84' : 'w-20'} h-screen bg-black text-white transition-all duration-600`}>
            <div className="flex flex-col w-full">
                {/* Header */}
                <div className="p-4 flex items-center justify-between">
                    <span onClick={toggleOpen} className="text-lg font-semibold hover:cursor-pointer">
                        Hooks
                    </span>
                    {isOpen ? (
                        <button onClick={toggleOpen} className="text-white hover:cursor-pointer">
                            <FaTimes size={20} />
                        </button>
                    ) : null}
                </div>

                {/* Menu */}
                <div className="flex flex-col p-4 ">
                    {/* Essenciais */}
                    <ul className="space-y-4 ">
                        {/* Item de Dropdown */}
                        <li >
                            <button
                                onClick={() => toggleDropdown('essenciais')}
                                className={`flex items-center w-full text-left bg-transparent text-white focus:outline-none 
                                ${isOpen && "space-x-4"}`}
                            >
                                <FaRegFolder size={20} /> {/* Ícone fixo */}
                                {isOpen && <span className='text-sm font-bold'>ESSENCIAIS</span>}
                                {isOpen ? (
                                    dropdowns.essenciais ? <FaChevronDown size={16} /> : <FaChevronUp size={16} />
                                ) : null}
                            </button>

                            {/* Dropdown */}
                            <ul
                                className={` text-white rounded-md mt-2 w-full 
                                transition-all duration-500 ease-in-out overflow-hidden 
                                ${dropdowns.essenciais && isOpen ? "max-h-120 opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <Link to="/contador/useStates">
                                    <li
                                        className={`mb-2 py-2 px-2 rounded-md cursor-pointer flex items-center justify-start space-x-4
                                        ${location.pathname === "/contador/useStates" && "text-sky-400 bg-stone-600"}`}
                                    >
                                        <GoNumber size={15} />
                                        {isOpen && (
                                            <p>
                                                Contador
                                                <span
                                                    className={`text-xs bg-neutral-700 px-2 py-0 rounded-xl ml-2
                                                    ${location.pathname === "/contador/useStates" && "text-white bg-sky-500"}`}
                                                >
                                                    useStates
                                                </span>
                                            </p>
                                        )}
                                    </li>
                                </Link>
                                <Link to="/votacao/useStates">
                                    <li
                                        className={`mb-2 py-2 px-2 rounded-md cursor-pointer flex items-center justify-start space-x-4
                                        ${location.pathname === "/votacao/useStates" && "text-sky-400 bg-stone-600"}`}
                                    >
                                        <FaUserFriends size={15} />
                                        {isOpen && (
                                            <p>
                                                Votação
                                                <span
                                                    className={`text-xs bg-neutral-700 px-2 py-0 rounded-xl ml-2 
                                                    ${location.pathname === "/votacao/useStates" && "text-white bg-sky-500"}`}
                                                >
                                                    useStates
                                                </span>
                                            </p>
                                        )}
                                    </li>
                                </Link>
                                <Link to="/consulta/useEffect" >
                                    <li
                                        className={`mb-2 py-2 px-2 rounded-md cursor-pointer flex items-center justify-start space-x-4
                                        ${location.pathname === "/consulta/useEffect" && "text-sky-400 bg-stone-600"}`}
                                    >
                                        <FaExchangeAlt size={15} />
                                        {isOpen && (
                                            <p>
                                                Consumo API
                                                <span
                                                    className={`text-xs bg-neutral-700 px-2 py-0 rounded-xl ml-2 
                                                    ${location.pathname === "/consulta/useEffect" && "text-white bg-sky-500"}`}
                                                >
                                                    useEffect
                                                </span>
                                            </p>
                                        )}
                                    </li>
                                </Link>
                                <Link to="/maior/useEffect" >
                                    <li
                                        className={`mb-2 py-2 px-2 rounded-md cursor-pointer flex items-center justify-start space-x-4
                                        ${location.pathname === "/maior/useEffect" && "text-sky-400 bg-stone-600 "}`}
                                    >
                                        <FaChevronRight size={15} />
                                        {isOpen && (
                                            <p>
                                                Maior
                                                <span
                                                    className={`text-xs bg-neutral-700 px-2 py-0 rounded-xl ml-2 
                                                    ${location.pathname === "/maior/useEffect" && "text-white bg-sky-500"}`}
                                                >
                                                    useEffect
                                                </span>
                                            </p>
                                        )}
                                    </li>
                                </Link>
                                <Link to="/caracter/useEffect" >
                                    <li
                                        className={`mb-2 py-2 px-2 rounded-md cursor-pointer flex items-center justify-start space-x-4
                                        ${location.pathname === "/caracter/useEffect" && "text-sky-400 bg-stone-600 "}`}
                                    >
                                        <FaAmilia size={15} />
                                        {isOpen && (
                                            <p>
                                                Contagem Caracteres
                                                <span
                                                    className={`text-xs bg-neutral-700 px-2 py-0 rounded-xl ml-2 
                                                    ${location.pathname === "/caracter/useEffect" && "text-white bg-sky-500"}`}
                                                >
                                                    useEffect
                                                </span>
                                            </p>
                                        )}
                                    </li>
                                </Link>
                                <Link to="/stateVSref/useRef" >
                                    <li
                                        className={`mb-2 py-2 px-2 rounded-md cursor-pointer flex items-center justify-start space-x-4
                                        ${location.pathname === "/stateVSref/useRef" && "text-sky-400 bg-stone-600 "}`}
                                    >
                                        <RiRefreshLine size={15} />
                                        {isOpen && (
                                            <p>
                                                Estado Vs Referência
                                                <span
                                                    className={`text-xs bg-neutral-700 px-2 py-0 rounded-xl ml-2 
                                                    ${location.pathname === "/stateVSref/useRef" && "text-white bg-sky-500"}`}
                                                >
                                                    useRef
                                                </span>
                                            </p>
                                        )}
                                    </li>
                                </Link>
                                <Link to="/elemento/useRef" >
                                    <li
                                        className={`mb-2 py-2 px-2 rounded-md cursor-pointer flex items-center justify-start space-x-4
                                        ${location.pathname === "/elemento/useRef" && "text-sky-400 bg-stone-600 "}`}
                                    >
                                        <CgSmartphoneRam size={15} />
                                        {isOpen && (
                                            <p>
                                                Referenciando Elemento
                                                <span
                                                    className={`text-xs bg-neutral-700 px-2 py-0 rounded-xl ml-2 
                                                    ${location.pathname === "/elemento/useRef" && "text-white bg-sky-500"}`}
                                                >
                                                    useRef
                                                </span>
                                            </p>
                                        )}
                                    </li>
                                </Link>
                                <Link to="/caracter/useRef" >
                                    <li
                                        className={`mb-2 py-2 px-2 rounded-md cursor-pointer flex items-center justify-start space-x-4
                                        ${location.pathname === "/caracter/useRef" && "text-sky-400 bg-stone-600 "}`}
                                    >
                                        <FaAmilia size={15} />
                                        {isOpen && (
                                            <p>
                                                Contagem Caracteres
                                                <span
                                                    className={`text-xs bg-neutral-700 px-2 py-0 rounded-xl ml-2 
                                                    ${location.pathname === "/caracter/useRef" && "text-white bg-sky-500"}`}
                                                >
                                                    useRef
                                                </span>
                                            </p>
                                        )}
                                    </li>
                                </Link>
                            </ul>
                        </li>
                    </ul>
                    {/* Personalizados */}
                    <ul className="space-y-4 my-4">
                        <li>
                            <button
                                onClick={() => toggleDropdown('personalizados')}
                                className={`flex items-center w-full text-left bg-transparent text-white focus:outline-none 
                                ${isOpen && "space-x-4"}`}
                            >
                                <FaRegFolder size={20} /> {/* Ícone fixo */}
                                {isOpen && <span className='text-sm font-bold'>PERSONALIZADOS</span>}
                                {isOpen ? (
                                    dropdowns.personalizados ? <FaChevronDown size={16} /> : <FaChevronUp size={16} />
                                ) : null}
                            </button>
                            <ul className={` text-white rounded-md mt-2 w-full 
                                transition-all duration-500 ease-in-out overflow-hidden 
                                ${dropdowns.personalizados && isOpen ? "max-h-120 opacity-100" : "max-h-0 opacity-0"}`}>
                                <Link to="/useToogle/useHook">
                                    <li
                                        className={`mb-2 py-2 px-2 rounded-md cursor-pointer flex items-center justify-start space-x-4
                                        ${location.pathname === "/useToogle/useHook" && "text-sky-400 bg-stone-600"}`}
                                    >
                                        <BsWindowX size={15} />
                                        {isOpen && (
                                            <p>
                                                Modal
                                                <span
                                                    className={`text-xs bg-neutral-700 px-2 py-0 rounded-xl ml-2
                                                    ${location.pathname === "/useToogle/useHook" && "text-white bg-sky-500"}`}
                                                >
                                                    useHook
                                                </span>
                                            </p>
                                        )}
                                    </li>
                                </Link>
                                <Link to="/useTamanhoJanela/useHook">
                                    <li
                                        className={`mb-2 py-2 px-2 rounded-md cursor-pointer flex items-center justify-start space-x-4
                                        ${location.pathname === "/useTamanhoJanela/useHook" && "text-sky-400 bg-stone-600"}`}
                                    >
                                        <CgDockWindow size={15} />
                                        {isOpen && (
                                            <p>
                                                Tamanho da Janela
                                                <span
                                                    className={`text-xs bg-neutral-700 px-2 py-0 rounded-xl ml-2
                                                    ${location.pathname === "/useTamanhoJanela/useHook" && "text-white bg-sky-500"}`}
                                                >
                                                    useHook
                                                </span>
                                            </p>
                                        )}
                                    </li>
                                </Link>
                                <Link to="/useStatesValidado/useHook">
                                    <li
                                        className={`mb-2 py-2 px-2 rounded-md cursor-pointer flex items-center justify-start space-x-4
                                        ${location.pathname === "/useStatesValidado/useHook" && "text-sky-400 bg-stone-600"}`}
                                    >
                                        <TbPasswordFingerprint size={15} />
                                        {isOpen && (
                                            <p>
                                                Senha
                                                <span
                                                    className={`text-xs bg-neutral-700 px-2 py-0 rounded-xl ml-2
                                                    ${location.pathname === "/useStatesValidado/useHook" && "text-white bg-sky-500"}`}
                                                >
                                                    useHook
                                                </span>
                                            </p>
                                        )}
                                    </li>
                                </Link>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
