// components/ui/alert.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface AlertProps {
  message: string;
  type?: "success" | "error" | "warning";
}

export const Alert: React.FC<AlertProps> = ({ message, type = "success" }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const typeStyles = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`p-4 text-white rounded-md shadow-lg flex justify-between items-center ${typeStyles[type]}`}
    >
      <span>{message}</span>
      <button onClick={() => setVisible(false)} title="Close alert">
        <X className="w-5 h-5" />
      </button>
    </motion.div>
  );
};