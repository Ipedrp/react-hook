// components/ColorPicker.jsx
import useToggle from "../hooks/useToggle";

export default function SeletorCor() {
  const [ativo, toggleAtivo] = useToggle(false);
  const cores = [
    "bg-red-400",
    "bg-blue-500",
    "bg-pink-500",
    "bg-orange-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-600"
  ];

  return (
    <div className="relative">
      <button
        onClick={toggleAtivo}
        className="p-2 text-gray-400 hover:text-white transition-colors"
        aria-label="Seletor de cores"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      </button>

      {ativo && (
        <div className="absolute right-0 mt-2 p-2 bg-gray-800 rounded-lg shadow-lg flex gap-1 z-10">
          {cores.map((cor, index) => (
            <button
              key={index}
              className={`w-6 h-6 rounded ${cor} hover:opacity-80 transition-opacity`}
              aria-label={`Cor ${cor.replace('bg-', '')}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}