import { Routes, Route } from 'react-router'; 
import Home from '../pages/Home';
import DefaultLayout from "../layout/DefaultLayout";
import Contador from '../pages/essenciais/contador';
import Votacao from '../pages/essenciais/Votacao';
export const AppRoutes = () => (
    <Routes>
        <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contador/useStates" element={<Contador />} />
            <Route path="/votacao/useStates" element={<Votacao />} />
        </Route>
    </Routes>
);