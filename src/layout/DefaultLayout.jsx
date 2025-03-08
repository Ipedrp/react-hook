import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router';

export default function DefaultLayout() {
  return (
    <div className="min-h-screen flex flex-row bg-gray-900">
      {/* Sidebar sempre na esquerda */}
      <Sidebar />

      <main className="flex-1 px-4">
        <Outlet />
      </main>
    </div>
  );
}
