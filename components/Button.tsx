import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '',
  onClick 
}) => {
  const baseStyles = "px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 focus:outline-none flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-gold-gradient text-dark-900 hover:shadow-[0_0_20px_rgba(214,178,94,0.5)]",
    secondary: "bg-transparent border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-dark-900",
    outline: "border border-white/20 text-white hover:border-gold-500 hover:text-gold-500",
    dark: "bg-dark-900 text-gold-500 border border-gold-500 hover:bg-gold-500 hover:text-dark-900"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;