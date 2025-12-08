import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  variant?: "solid" | "outline";
  onClick?: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ children, type = "button", variant = "solid", onClick }) => {
  const styles = variant === "solid" 
    ? "bg-[#e05641] hover:bg-[#c94a36] text-white px-6 py-2 rounded-md font-semibold transition-all duration-200"
    : "w-full border-2 border-white bg-transparent hover:bg-white hover:text-[#2d2d2d] py-3.5 rounded-lg text-xl font-bold transition-all duration-300 mt-6 active:scale-[0.98]";

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
};

export default CustomButton;