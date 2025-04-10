import { useContext } from "react";
import ContextoTema from "../contexts/ThemeProvider";

export default function useThema(){
    return useContext(ContextoTema);
}