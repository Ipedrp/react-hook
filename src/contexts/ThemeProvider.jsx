import { createContext, useState } from "react";

const ContextoTema = createContext();

export const ThemeProvider = ({ children }) => {
    const cores = [
        "bg-blue-500",
        "bg-red-400",
        "bg-pink-500",
        "bg-orange-500",
        "bg-green-500",
        "bg-yellow-500",
        "bg-purple-600"
    ];
    
    const [corDestaque, setCorDestaque] = useState(cores[0]);

    const ctx = {cores, corDestaque, setCorDestaque};
    return(
        <ContextoTema.Provider value={ctx}>
            {children}
        </ContextoTema.Provider>
    )
}

export default ContextoTema;