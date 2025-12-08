import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from './assets/componentes/Button';
import CustomInput from './assets/componentes/Input';

const GameVerseLogin: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Iniciando sesión con:', formData);
    // Aquí iría tu lógica de autenticación
  };

  return (
    <div className="min-h-screen bg-[#2d2d2d] text-white font-sans flex flex-col">
      {/* Header */}
      <header className="p-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/login')}>
          <div className="bg-[#48daff] p-1.5 rounded-lg shadow-sm">
            <svg className="w-6 h-6 text-[#2d2d2d]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3-3c-.83 0-1.5-.67-1.5-1.5S17.67 9 18.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
            </svg>
          </div>
          <span className="font-bold text-xl tracking-wide">GameVerse</span>
        </div>

        <div className="flex gap-4">
          <CustomButton variant="solid" onClick={() => navigate('/registro')}>
            Crear Cuenta
          </CustomButton>
          <CustomButton variant="solid" onClick={() => navigate('/login')}>
            Iniciar Sesion
          </CustomButton>
        </div>
      </header>

      {/* Login Main Container */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 -mt-20">
        <h1 className="text-4xl font-bold mb-14 tracking-tight">Iniciar Sesión</h1>

        <form onSubmit={handleSubmit} className="w-full max-w-[450px] space-y-7 flex flex-col items-center">
          
          <CustomInput 
            required
            type="email" 
            name="email"
            placeholder="Correo Electrónico"
            value={formData.email}
            onChange={handleChange}
          />

          <CustomInput 
            required
            type="password" 
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
          />

          <CustomButton type="submit" variant="outline">
            Iniciar Sesión
          </CustomButton>

          <div className="mt-10 text-center">
            <p className="text-lg text-gray-200">
              ¿No tienes cuenta?{' '}
              <span 
                className="cursor-pointer hover:underline font-medium text-white" 
                onClick={() => navigate('/registro')}
              >
                Regístrate gratis
              </span>
            </p>
            <p className="mt-2 text-sm text-[#48daff] cursor-pointer hover:text-white transition-colors">
              ¿Olvidaste tu contraseña?
            </p>
          </div>
        </form>
      </main>
    </div>
  );
};

export default GameVerseLogin;