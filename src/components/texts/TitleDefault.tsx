import { TitleDefaultType } from "@/@types/types";
import React from "react";

interface TitleDefaultProps extends TitleDefaultType {
  alignment?: "text-left" | "text-center";
}

export const TitleDefault: React.FC<TitleDefaultProps> = ({
  title,
  subtitle,
  description,
  extraClassName,
  textColor,
  alignment = "text-left",
}) => {
  return (
    <div className={`${alignment} ${extraClassName}`}>
      <div className="flex items-center mb-2 justify-center">
        <span className="text-base uppercase tracking-[0.28rem] border border-azul-100 rounded-[0.75rem] px-3 py-2 text-cinza-900-2 bg-azul-30">
          {title}
        </span>
      </div>
      <h2 className={`text-3xl font-semibold mb-4 ${textColor}`}>{subtitle}</h2>
      <p className={`text-lg ${textColor}`}>{description}</p>
    </div>
  );
};
