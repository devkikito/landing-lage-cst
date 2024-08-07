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
        <span className="text-sm font-bold uppercase tracking-wide border border-blue-500 rounded-full px-4 py-1 text-blue-500">
          {title}
        </span>
      </div>
      <h2 className={`text-3xl font-semibold mb-4 ${textColor}`}>{subtitle}</h2>
      <p className={`text-lg ${textColor}`}>{description}</p>
    </div>
  );
};
