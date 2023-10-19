import React from "react";
import { Icon, IconProps } from "./Icon";

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
  /** Icone Prefixe */
  prefix?: IconProps["name"];
  /** Icone Suffixe */
  suffix?: IconProps["name"];
}
/** Super bouton trop génial */
export const Button = ({
  variant = "primary",
  isOutline = false,
  size = "medium",
  label,
  onClick,
  prefix,
  suffix,
  ...props
}: ButtonProps) => {
  const color = {
    primary: "orange",
    secondary: "blue",
    positive: "green",
  };

  const buttonClasses = isOutline
    ? `text-${color[variant]}-600 bg-transparent border-2 border-${color[variant]}-600 hover:bg-${color[variant]}-50 focus:bg-${color[variant]}-50 active:bg-${color[variant]}-100`
    : `text-white bg-${color[variant]}-600 hover:bg-${color[variant]}-500 focus:bg-${color[variant]}-500 active:bg-${color[variant]}-500`;

  const iconClass = isOutline ? `stroke-${color[variant]}-600` : "stroke-white";

  const sizeClasses = {
    small: "py-2 px-3 text-sm",
    medium: "py-3 px-5 text-base",
    large: "py-4 px-6 text-lg",
  };

  return (
    <button
      type="button"
      className={`flex transition-colors transition-shadows shadow-sm hover:shadow-md focus:shadow-md active:shadow-sm rounded-md ${buttonClasses} ${sizeClasses[size]}`}
      onClick={onClick}
      {...props}
    >
      {prefix ? (
        <Icon name={prefix} className="mr-2" color={iconClass} />
      ) : null}
      {label}
      {suffix ? (
        <Icon name={suffix} className="ml-2" color={iconClass} />
      ) : null}
    </button>
  );
};
