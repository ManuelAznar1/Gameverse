import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from './assets/componentes/Button';

const PaginaPerfil: React.FC = () => {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('storedEmail') || 'No registrado';

  const handleLogout = () => {
    if (window.confirm("¿Seguro que quieres cerrar sesión?")) {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen bg-[#2d2d2d] text-white p-8">
      {/* HEADER: Botón a la izquierda y título centrado */}
      <header className="relative flex items-center justify-center mb-12 h-10">
        <button 
          onClick={() => navigate('/home')} 
          className="absolute left-0 text-[#48daff] hover:text-white transition-colors font-bold flex items-center gap-2"
        >
          ❮ Volver al Inicio
        </button>
        <h1 className="text-3xl font-bold tracking-widest uppercase text-[#48daff]">
          Mi Perfil
        </h1>
      </header>

      <main className="max-w-2xl mx-auto bg-[#1d1d1d] p-10 rounded-2xl shadow-2xl border border-gray-800 animate-fade-in">
        <div className="flex items-center gap-6 mb-10">
          <div className="w-20 h-20 bg-[#48daff] rounded-full flex items-center justify-center text-3xl font-bold text-[#2d2d2d]">
            {userEmail[0].toUpperCase()}
          </div>
          <div>
            <h2 className="text-3xl font-bold">{userEmail.split('@')[0]}</h2>
            <p className="text-gray-400">{userEmail}</p>
          </div>
        </div>

        <section className="space-y-6">
          <div className="border-b border-gray-700 pb-4">
            <p className="text-gray-500 text-sm uppercase font-bold tracking-tighter">Estado de la cuenta</p>
            <p className="text-green-400 font-medium italic">Sesion Iniciada</p>
          </div>
          <div className="border-b border-gray-700 pb-4">
            <p className="text-gray-500 text-sm uppercase font-bold tracking-tighter">Último acceso</p>
            <p>Hoy, hace unos minutos</p>
          </div>
        </section>

        <div className="mt-12">
          <CustomButton variant="solid" onClick={handleLogout}>
            Cerrar Sesión
          </CustomButton>
        </div>
      </main>
    </div>
  );
};

export default PaginaPerfil;