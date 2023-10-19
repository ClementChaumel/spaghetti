import React from "react";
import ArrowRight from "../assets/arrow-right";

export interface IconProps {
  /** Variante du bouton */
  name: "arrowLeft" | "arrowRight" | "arrowUp" | "arrowDown";
  /** Couleur de l'icone */
  color?: string;
  /** Extra class names */
  className?: string;
}
/** Super Icone trop géniale */
export const Icon = ({ name, color = "black", className }: IconProps) => {
  switch (name) {
    case "arrowLeft":
      return <ArrowRight color={color} className={`rotate-180 ${className}`} />;
    case "arrowUp":
      return <ArrowRight color={color} className={`-rotate-90 ${className}`} />;
    case "arrowDown":
      return <ArrowRight color={color} className={`rotate-90 ${className}`} />;
    case "arrowRight":
    default:
      return <ArrowRight color={color} className={className} />;
  }
};
