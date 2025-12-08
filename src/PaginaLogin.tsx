import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from './assets/componentes/Button';
import CustomInput from './assets/componentes/Input';

const GameVerseLogin: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formData;

    // LEER DATOS GUARDADOS
    const savedEmail = localStorage.getItem('storedEmail');
    const savedPassword = localStorage.getItem('storedPassword');

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailRegex.test(email)) {
      alert("❌ Error: Formato de correo inválido.");
      return;
    }

    // COMPARAR DATOS INGRESADOS CON LOS GUARDADOS
    if (email === savedEmail && password === savedPassword) {
      alert("✅ Acceso concedido.");
      navigate('/home'); 
    } else {
      alert("❌ Error: Correo o contraseña incorrectos. ¿Ya te registraste?");
    }
  };

  return (
    <div className="min-h-screen bg-[#2d2d2d] text-white font-sans flex flex-col">
      <header className="p-6 flex justify-between items-center">
        <span className="font-bold text-xl tracking-wide text-[#48daff]">GameVerse</span>
        <div className="flex gap-4">
          <CustomButton variant="solid" onClick={() => navigate('/register')}>Crear Cuenta</CustomButton>
          <CustomButton variant="solid" onClick={() => navigate('/login')}>Iniciar Sesión</CustomButton>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-4 -mt-20">
        <h1 className="text-4xl font-bold mb-10 text-center">Iniciar Sesión</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-[450px] space-y-6">
          <CustomInput 
            label="Introduce tu correo:"
            name="email"
            placeholder="tu@correo.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <CustomInput 
            label="Introduce tu contraseña:"
            name="password"
            type="password"
            placeholder="Tu contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <CustomButton type="submit" variant="outline">Entrar</CustomButton>
        </form>
      </main>
    </div>
  );
};

export default GameVerseLogin;