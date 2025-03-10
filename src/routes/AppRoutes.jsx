import { Routes, Route } from 'react-router'; 
import Home from '../pages/Home';
import DefaultLayout from "../layout/DefaultLayout";
import Contador from '../pages/essenciais/contador';
import Votacao from '../pages/essenciais/Votacao';
import Consulta from '../pages/essenciais/Consulta';
import Maior from '../pages/essenciais/Maior';
import ContagemCaracter  from '../pages/essenciais/ContagemCaracteres'
import StateVsRef from '../pages/essenciais/StateVsRef';
import RefElemento from '../pages/essenciais/refElemento';
import ContagemCaracterUseRef from '../pages/essenciais/ContagemCaracteresUseRef';

export const AppRoutes = () => (
    <Routes>
        <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contador/useStates" element={<Contador />} />
            <Route path="/votacao/useStates" element={<Votacao />} />
            <Route path="/consulta/useEffect" element={<Consulta />} />
            <Route path="/maior/useEffect" element={<Maior />} />
            <Route path="/caracter/useEffect" element={<ContagemCaracter />} />
            <Route path="/stateVSref/useRef" element={<StateVsRef />} />
            <Route path="/elemento/useRef" element={<RefElemento />} />
            <Route path="/caracter/useRef" element={<ContagemCaracterUseRef />} />
        </Route>
    </Routes>
);