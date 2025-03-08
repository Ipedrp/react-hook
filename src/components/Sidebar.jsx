import React, { useState } from 'react';
import { FaUser, FaChevronDown, FaCogs, FaChartBar, FaSignOutAlt, FaRegFolder, FaTimes, FaChevronUp } from 'react-icons/fa';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className={`flex ${isOpen ? 'w-64' : 'w-20'} h-screen bg-gray-800 text-white transition-all duration-600`}>
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
                <div className="flex flex-col p-4">
                    <ul className="space-y-4">
                        <li className="flex items-center space-x-4">
                            <FaUser size={24} />
                            {isOpen && <span>Usuário</span>}
                        </li>
                        <li className=" flex items-center space-x-4">
                            <FaSignOutAlt size={20} />
                            {isOpen && <span>Logout</span>}
                        </li>
                        <li className=" flex items-center space-x-4">
                            <FaChartBar size={20} />
                            {isOpen && <span>Gráficos</span>}
                        </li>
                        <li className=" flex items-center space-x-4">
                            <FaRegFolder size={20} />
                            {isOpen && <span>Formulários</span>}
                        </li>

                        {/* Item de Dropdown */}
                        <li className="relative">
                            <button
                                onClick={toggleDropdown}
                                className={`flex items-center w-full text-left bg-transparent text-white focus:outline-none 
        ${isOpen && "space-x-4"}`}
                            >
                                <FaRegFolder size={20} /> {/* Mantenha um tamanho fixo */}
                                {isOpen && <span>Opções</span>}
                                {isOpen ? (
                                    isDropdownOpen ? <FaChevronDown size={16} /> : <FaChevronUp size={16} />
                                ) : null}
                            </button>


                            {/* Dropdown */}
                            <ul
                                className={`absolute bg-gray-700 text-white rounded-md mt-2 p-2 w-full 
  transition-all duration-500 ease-in-out overflow-hidden 
  ${isDropdownOpen && isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <li className="py-2 px-4 hover:bg-gray-600 cursor-pointer flex items-center space-x-4">
                                    <FaCogs size={20} />
                                    {isOpen && <span>Configurações</span>}
                                </li>
                                <li className="py-2 px-4 hover:bg-gray-600 cursor-pointer flex items-center space-x-4">
                                    <FaCogs size={20} />
                                    {isOpen && <span>Opção 2</span>}
                                </li>
                            </ul>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
