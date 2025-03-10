import React, { useState } from 'react';
import { FaChevronDown, FaUserFriends, FaRegFolder, FaTimes, FaChevronUp, FaExchangeAlt, FaChevronRight, FaAmilia} from 'react-icons/fa';
import { GoNumber } from "react-icons/go";
import { Link, useLocation } from 'react-router';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const location = useLocation(); // Hook para pegar a URL atual

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className={`flex ${isOpen ? 'w-64' : 'w-30'} h-screen bg-black text-white transition-all duration-600`}>
            <div className="flex flex-col w-full">
                {/* Header */}
                <div className="p-4 flex items-center justify-between">
                    <span onClick={toggleSidebar} className="text-lg font-semibold hover:cursor-pointer">
                        Hooks
                    </span>
                    {isOpen ? (
                        <button onClick={toggleSidebar} className="text-white hover:cursor-pointer">
                            <FaTimes size={20} />
                        </button>
                    ) : null}
                </div>

                {/* Menu */}
                <div className="flex flex-col p-4 ">
                    <ul className="space-y-4 ">
                        {/* Item de Dropdown */}
                        <li className="relative">
                            <button
                                onClick={toggleDropdown}
                                className={`flex items-center w-full text-left bg-transparent text-white focus:outline-none 
                                ${isOpen && "space-x-4"}`}
                            >
                                <FaRegFolder size={20} /> {/* Ícone fixo */}
                                {isOpen && <span>Essenciais</span>}
                                {isOpen ? (
                                    isDropdownOpen ? <FaChevronDown size={16} /> : <FaChevronUp size={16} />
                                ) : null}
                            </button>

                            {/* Dropdown */}
                            <ul
                                className={`absolute text-white rounded-md mt-2 w-full 
                                transition-all duration-500 ease-in-out overflow-hidden 
                                ${isDropdownOpen && isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <Link to="/contador/useStates">
                                    <li 
                                        className={`mb-2 py-2 px-2 bg-stone-600 rounded-md cursor-pointer flex items-center justify-start space-x-4
                                        ${location.pathname === "/contador/useStates" && "text-sky-400"}`}
                                    >
                                        <GoNumber size={20} />
                                        {isOpen && (
                                            <p>
                                                Contador
                                                <span 
                                                    className={`bg-neutral-700 px-2 py-0 rounded-xl ml-2
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
                                        className={`mb-2 py-2 px-2 bg-stone-600 rounded-md cursor-pointer flex items-center justify-start space-x-4
                                        ${location.pathname === "/votacao/useStates" && "text-sky-400"}`}
                                    >
                                        <FaUserFriends size={20} />
                                        {isOpen && (
                                            <p>
                                                Votação
                                                <span 
                                                    className={`bg-neutral-700 px-2 py-0 rounded-xl ml-2 
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
                                        className={`mb-2 py-2 px-2 bg-stone-600 rounded-md cursor-pointer flex items-center justify-start space-x-4
                                        ${location.pathname === "/consulta/useEffect" && "text-sky-400"}`}
                                    >
                                        <FaExchangeAlt  size={20} />
                                        {isOpen && (
                                            <p>
                                                API
                                                <span 
                                                    className={`bg-neutral-700 px-2 py-0 rounded-xl ml-2 
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
                                        className={`mb-2 py-2 px-2 bg-stone-600 rounded-md cursor-pointer flex items-center justify-start space-x-4
                                        ${location.pathname === "/maior/useEffect" && "text-sky-400"}`}
                                    >
                                        <FaChevronRight   size={20} />
                                        {isOpen && (
                                            <p>
                                                Maior
                                                <span 
                                                    className={`bg-neutral-700 px-2 py-0 rounded-xl ml-2 
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
                                        className={`mb-2 py-2 px-2 bg-stone-600 rounded-md cursor-pointer flex items-center justify-start space-x-4
                                        ${location.pathname === "/caracter/useEffect" && "text-sky-400"}`}
                                    >
                                        <FaAmilia   size={20} />
                                        {isOpen && (
                                            <p>
                                                Caracteres
                                                <span 
                                                    className={`bg-neutral-700 px-2 py-0 rounded-xl ml-2 
                                                    ${location.pathname === "/caracter/useEffect" && "text-white bg-sky-500"}`}
                                                    >
                                                    useEffect
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
