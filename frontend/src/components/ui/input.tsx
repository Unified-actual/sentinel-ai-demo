// components/ui/input.tsx
import React from "react";

interface InputProps {
  type?: string;
  accept?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const Input: React.FC<InputProps> = ({ type = "text", accept, onChange, className = "" }) => {
  return (
      <input
      type={type}
      accept={accept}
      onChange={onChange}
      className={`w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      placeholder="Enter text"
    />
  );
};
