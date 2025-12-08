import React from "react";

interface InputProps {
  label?: string; // Propiedad label opcional
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
}

const CustomInput: React.FC<InputProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}) => (
  <div className="w-full flex flex-col gap-2">
    {label && (
      <label htmlFor={name} className="text-gray-300 text-sm font-medium ml-1">
        {label}
      </label>
    )}
    <input
      id={name}
      required={required}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-4 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-4 focus:ring-[#48daff]/40 placeholder-gray-500 text-lg border border-transparent shadow-sm"
    />
  </div>
);

export default CustomInput;
