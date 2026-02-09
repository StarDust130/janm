"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "success" | "secondary";
  children: React.ReactNode;
}

export const BharatButton = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  ...props
}: ButtonProps) => {
  const baseStyle =
    "font-bold px-6 py-4 rounded-2xl transition-all active:scale-95 flex items-center justify-center gap-2 shadow-xl text-sm md:text-base tracking-wide select-none";

  const variants = {
    // Saffron Gradient
    primary:
      "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-orange-500/20 border-b-4 border-orange-800 hover:brightness-110",
    // Green Gradient
    success:
      "bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-green-500/20 border-b-4 border-green-800 hover:brightness-110",
    // Clean White
    secondary:
      "bg-white hover:bg-gray-50 text-slate-900 border-2 border-gray-100 shadow-sm",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
