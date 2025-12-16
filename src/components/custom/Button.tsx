import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}

const Button = ({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles = "font-semibold rounded-xl transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",
    secondary: "bg-neutral-600 text-white hover:bg-neutral-700 active:bg-neutral-800",
    danger: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm btn-sm h-[2rem]",
    md: "px-6 py-2 text-base btn-md h-[2.5rem]",
    lg: "px-8 py-3 text-lg btn-lg h-[3rem]",
    xl: "px-8 py-4 text-lg btn-xl h-[4rem]",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
};

export default Button;