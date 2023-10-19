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
  const variantClasses = {
    primary: {
      solid: {
        buttonClasses:
          "text-white bg-orange-600 hover:bg-orange-500 focus:bg-orange-500 active:bg-orange-500",
        iconColor: "stroke-white",
      },
      outline: {
        buttonClasses:
          "text-orange-600 bg-transparent border-2 border-orange-600 hover:bg-orange-50 focus:bg-orange-50 active:bg-orange-100",
        iconColor: "stroke-orange-600",
      },
    },
    secondary: {
      solid: {
        buttonClasses:
          "text-white bg-blue-600 hover:bg-blue-500 focus:bg-blue-500 active:bg-blue-500",
        iconColor: "stroke-white",
      },
      outline: {
        buttonClasses:
          "text-blue-600 bg-transparent border-2 border-blue-600 hover:bg-blue-50 focus:bg-blue-50 active:bg-blue-100",
        iconColor: "stroke-blue-600",
      },
    },
    positive: {
      solid: {
        buttonClasses:
          "text-white bg-green-600 hover:bg-green-500 focus:bg-green-500 active:bg-green-500",
        iconColor: "stroke-white",
      },
      outline: {
        buttonClasses:
          "text-green-600 bg-transparent border-2 border-green-600 hover:bg-green-50 focus:bg-green-50 active:bg-green-100",
        iconColor: "stroke-green-600",
      },
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
      className={`flex transition-colors transition-shadows shadow-sm hover:shadow-md focus:shadow-md active:shadow-sm ${
        variantClasses[variant][isOutline ? "outline" : "solid"].buttonClasses
      } ${sizeClasses[size]} rounded-md`}
      onClick={onClick}
      {...props}
    >
      {prefix ? (
        <Icon
          name={prefix}
          className="mr-2"
          color={
            variantClasses[variant][isOutline ? "outline" : "solid"].iconColor
          }
        />
      ) : null}
      {label}
      {suffix ? (
        <Icon
          name={suffix}
          className="ml-2"
          color={
            variantClasses[variant][isOutline ? "outline" : "solid"].iconColor
          }
        />
      ) : null}
    </button>
  );
};
