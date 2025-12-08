import React from "react";

// CustomInput.tsx
interface InputProps {
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
}

const CustomInput: React.FC<InputProps> = ({ name, type = "text", value, onChange, placeholder, required }) => (
  <div className="w-full">
    <input 
      required={required}
      type={type} 
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder} 
      className="w-full p-4 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-4 focus:ring-[#48daff]/40 placeholder-gray-500 text-lg"
    />
  </div>
);

export default CustomInput;
