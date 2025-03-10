import { Routes, Route } from 'react-router'; 
import Home from '../pages/Home';
import DefaultLayout from "../layout/DefaultLayout";
import Contador from '../pages/essenciais/contador';
import Votacao from '../pages/essenciais/Votacao';
import Consulta from '../pages/essenciais/Consulta';
import Maior from '../pages/essenciais/Maior';
import ContagemCaracter  from '../pages/essenciais/ContagemCaracteres'

export const AppRoutes = () => (
    <Routes>
        <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contador/useStates" element={<Contador />} />
            <Route path="/votacao/useStates" element={<Votacao />} />
            <Route path="/consulta/useEffect" element={<Consulta />} />
            <Route path="/maior/useEffect" element={<Maior />} />
            <Route path="/caracter/useEffect" element={<ContagemCaracter />} />
        </Route>
    </Routes>
);