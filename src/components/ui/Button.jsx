import React from 'react';
import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary', // 'primary', 'secondary', 'outline', 'gold', 'light'
  size = 'md', // 'sm', 'md', 'lg'
  href,
  onClick,
  type = 'button',
  icon: Icon,
  className = '',
  disabled = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer shadow-sm hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed';

  const sizes = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-2.5 font-semibold'
  };

  const variants = {
    primary: 'bg-[#B90124] hover:bg-[#90011c] text-white focus:ring-[#B90124]',
    secondary: 'bg-[#60BAB1] hover:bg-[#4ea299] text-gray-900 focus:ring-[#60BAB1]',
    gold: 'bg-[#C09D59] hover:bg-[#a68442] text-white focus:ring-[#C09D59]',
    outline: 'border-2 border-[#B90124] text-[#B90124] hover:bg-[#B90124] hover:text-white focus:ring-[#B90124]',
    light: 'bg-white/90 backdrop-blur-md hover:bg-white text-gray-900 border border-gray-200 focus:ring-gray-300'
  };

  const combinedClasses = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        href={href}
        className={combinedClasses}
        {...props}
      >
        {children}
        {Icon && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {children}
      {Icon && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </motion.button>
  );
}
