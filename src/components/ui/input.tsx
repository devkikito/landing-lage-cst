import * as React from "react";
import { cn } from "@/lib/utils";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  format?: (value: string) => string; // Função para formatação
  value?: string; // Permite controlar o valor do input
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Função onChange personalizada
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, format, value, onChange, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

    const togglePasswordVisibility = () => {
      setIsPasswordVisible((prev) => !prev);
    };

    // Função para formatar e chamar onChange se fornecido
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let newValue = e.target.value;

      if (format) {
        newValue = format(newValue); // Aplica a formatação
      }

      // Chama o onChange original (do react-hook-form ou outro)
      if (onChange) {
        onChange({ ...e, target: { ...e.target, value: newValue } });
      }
    };

    return (
      <div className="relative w-full">
        <input
          type={isPasswordVisible ? "text" : type}
          className={cn(
            "w-full border border-var-border-color placeholder:text-var-text-color-paragraph rounded-lg title-card-regular placeholder:title-card-regular focus:outline-none focus:border-[.0625rem] focus:border-white block px-3 placeholder:opacity-50 h-[2.375rem] bg-var-background-principal autofill:bg-var-background-principal focus:bg-var-background-principal",
            className
          )}
          ref={ref}
          value={value} // Controla o valor do input
          onChange={handleChange} // Aplica o onChange com formatação
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500 focus:outline-none"
          >
            <div className="relative">
              <EyeOffIcon
                className={cn(
                  "h-5 w-5 transition-opacity transform duration-300 ease-in-out",
                  isPasswordVisible ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                )}
              />
              <EyeIcon
                className={cn(
                  "absolute inset-0 h-5 w-5 transition-opacity transform duration-300 ease-in-out",
                  isPasswordVisible ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                )}
              />
            </div>
          </button>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
