import { HTMLAttributes } from "react";
import { FiArrowRight, FiPhone } from "react-icons/fi";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  extraClassName?: string;
  variant: "outlined" | "contact" | "default";
}

export const Button = ({ text, extraClassName, variant, ...props }: ButtonProps) => {
  const baseClass = `
    transition-colors duration-300 text-base
    p-[0.75rem] flex items-center justify-center gap-2
  `;

  const variantClass = {
    outlined: `
      bg-transparent text-yellow-400 border border-yellow-400 rounded-[1rem]
      hover:bg-yellow-400 hover:text-black
    `,
    contact: `
      bg-transparent text-yellow-400 border border-yellow-400 rounded-[1rem]
      hover:bg-yellow-400 hover:text-black flex items-center
    `,
    default: `
      bg-yellow-400 text-black rounded-[1rem]
      hover:bg-yellow-500
    `,
  };

  const iconClass = variant !== "contact" ? <FiArrowRight className="text-xl" /> : null;

  return (
    <button className={`${baseClass} ${variantClass[variant]} ${extraClassName}`} {...props}>
      {variant === "contact" && <FiPhone className="text-xl" />}
      {text}
      {iconClass}
    </button>
  );
};

export default Button;
