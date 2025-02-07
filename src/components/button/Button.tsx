import Link from "next/link";
import { HTMLAttributes } from "react";
import { FiArrowRight, FiPhone } from "react-icons/fi";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  text: string;
  extraClassName?: string;
  variant: "outlined" | "contact" | "default";
  href?: string;
  type?: "button" | "submit" | "reset";
}

export const Button = ({ text, extraClassName, variant, href, type, ...props }: ButtonProps) => {
  const baseClass = `
    transition-colors duration-300 text-base
    px-[0.75rem] py-[0.5rem] flex items-center justify-center gap-2
  `;

  const variantClass = {
    outlined: `
      bg-transparent text-amarelo-100 border border-amarelo-100 rounded-[1rem]
      hover:bg-amarelo-100 hover:text-cinza-900
    `,
    contact: `
       bg-transparent text-amarelo-100 border border-amarelo-100 rounded-[1rem]
      hover:bg-amarelo-100 hover:text-cinza-900 flex items-center
    `,
    default: `
    bg-amarelo-100 text-cinza-900 rounded-[1rem]
    hover:bg-cinza-900 hover:text-amarelo-100 hover:border hover:border-amarelo-100
    border border-transparent 
  `,
  };

  const iconClass = variant !== "contact" ? <FiArrowRight className="text-xl" /> : null;

  if (href) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        type={type}
        className={`${baseClass} ${variantClass[variant]} ${extraClassName}`}
        {...(props as HTMLAttributes<HTMLAnchorElement>)}
      >
        {variant === "contact" && <FiPhone className="text-xl" />}
        {text}
        {iconClass}
      </Link>
    );
  }

  return (
    <button className={`${baseClass} ${variantClass[variant]} ${extraClassName}`} {...props}>
      {variant === "contact" && <FiPhone className="text-xl" />}
      {text}
      {iconClass}
    </button>
  );
};

export default Button;
