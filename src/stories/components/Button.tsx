import React from "react";

export interface ButtonProps {
  /** Variante du bouton */
  variant?: "primary" | "secondary" | "positive";
  /** Définit si le bouton est outline ou pas */
  isOutline?: boolean;
  /** Taille du bouton */
  size?: "small" | "medium" | "large";
  /** Label du bouton */
  label: string;
  /** Fonction appelée au clic */
  onClick?: () => void;
}
/** Super bouton trop génial */
export const Button = ({
  variant = "primary",
  isOutline = false,
  size = "medium",
  label,
  onClick,
  ...props
}: ButtonProps) => {
  const variantClasses = {
    primary: {
      solid:
        "text-white bg-orange-600 hover:bg-orange-500 focus:bg-orange-500 active:bg-orange-500",
      outline:
        "shadow-border text-orange-600 bg-transparent border-2 border-orange-600 hover:bg-orange-50 focus:bg-orange-50 active:bg-orange-100",
    },
    secondary: {
      solid:
        "text-white bg-blue-950 hover:bg-blue-900 focus:bg-blue-900 active:bg-blue-900",
      outline:
        "text-blue-600 bg-transparent border-2 border-blue-600 hover:bg-blue-50 focus:bg-blue-50 active:bg-blue-100",
    },
    positive: {
      solid:
        "text-white bg-green-500 hover:bg-green-400 focus:bg-green-400 active:bg-green-400",
      outline:
        "text-green-600 bg-transparent border-2 border-green-600 hover:bg-green-50 focus:bg-green-50 active:bg-green-100",
    },
  };

  const sizeClasses = {
    small: "py-2 px-3 text-sm",
    medium: "py-3 px-5 text-base",
    large: "py-4 px-6 text-lg",
  };

  return (
    <button
      type="button"
      className={`transition-colors transition-shadows shadow-sm hover:shadow-md focus:shadow-md active:shadow-sm ${
        variantClasses[variant][isOutline ? "outline" : "solid"]
      } ${sizeClasses[size]} rounded-md`}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};
