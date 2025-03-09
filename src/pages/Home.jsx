import { FaUser, FaChevronDown, FaCogs, FaChartBar, FaSignOutAlt, FaRegFolder, FaTimes, FaChevronUp } from 'react-icons/fa';

export default function Home() {
    return (
        <div className="flex flex-wrap gap-5 bg-amber-300 text-center py-2">
            <div className="bg-red-600 rounded-xl p-8 w-full sm:w-[48%] md:w-[32%] flex flex-row items-center justify-center">
                <FaUser size={22}/> 
                <p>User</p>
            </div>
            <div className="bg-green-600 rounded-xl p-8 w-full sm:w-[48%] md:w-[32%]">
                <p>Texto 2</p>
            </div>
            <div className="bg-yellow-600 rounded-xl p-8 w-full sm:w-[48%] md:w-[32%]">
                <p>Texto 3</p>
            </div>
            <div className="bg-green-600 rounded-xl p-8 w-full sm:w-[48%] md:w-[32%]">
                <p>Texto 4</p>
            </div>
            <div className="bg-purple-600 rounded-xl p-8 w-full sm:w-[48%] md:w-[32%]">
                <p>Texto 5</p>
            </div>
            <div className="bg-red-600 rounded-xl p-8 w-full sm:w-[48%] md:w-[32%]">
                <p>Texto 6</p>
            </div>
            <div className="bg-green-600 rounded-xl p-8 w-full sm:w-[48%] md:w-[32%]">
                <p>Texto 7</p>
            </div>
            <div className="bg-gray-600 rounded-xl p-8 w-full sm:w-[48%] md:w-[32%]">
                <p>Texto 8</p>
            </div>
        </div>
    );
}
