import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "./Button";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-[100] flex">
      <div className="w-72 bg-[#2d2d2d] h-full p-6 shadow-2xl flex flex-col justify-between border-r border-[#48daff]/20 animate-fade-in-left">
        <div>
          <button onClick={onClose} className="text-2xl mb-10 hover:text-[#48daff] transition-colors font-bold">✕ Cerrar</button>
          <nav className="flex flex-col gap-6 text-xl">
            {["Inicio", "Descargas", "Deseados", "Contacto"].map((item) => (
              <button key={item} onClick={() => { navigate(`/${item.toLowerCase()}`); onClose(); }} className="text-left hover:text-[#48daff] transition-colors">{item}</button>
            ))}
          </nav>
        </div>
        <div className="mb-6 pt-6 border-t border-gray-700 flex justify-center">
          <CustomButton variant="solid" onClick={() => { navigate("/perfil"); onClose(); }}>MI CUENTA</CustomButton>
        </div>
      </div>
      <div className="flex-grow" onClick={onClose}></div>
    </div>
  );
};

export default Sidebar;