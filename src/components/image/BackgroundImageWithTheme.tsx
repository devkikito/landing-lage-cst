"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

interface BackgroundImageWithThemeProps {
  lightImage: string;
  darkImage: string;
  className?: string;
  children?: React.ReactNode;
}

export const BackgroundImageWithTheme: React.FC<BackgroundImageWithThemeProps> = ({
  lightImage,
  darkImage,
  className = "",
  children,
}) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={className} style={{ backgroundImage: `url(${lightImage})` }}>
        {children}
      </div>
    );
  }

  const backgroundImage = theme === "light" ? lightImage : darkImage;

  return (
    <div className={className} style={{ backgroundImage: `url(${backgroundImage})` }}>
      {children}
    </div>
  );
};
