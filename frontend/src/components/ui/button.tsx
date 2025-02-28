// components/ui/button.tsx
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, disabled, className = "" }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md transition-all duration-200 font-semibold 
        ${disabled ? "bg-gray-600 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"} 
        ${className}`}
    >
      {children}
    </button>
  );
};
