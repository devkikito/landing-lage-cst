"use client";
import { useTheme } from "next-themes";
import React from "react";
import Image from "next/image";

interface ImageWithThemeProps {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const ImageWithTheme: React.FC<ImageWithThemeProps> = ({ lightSrc, darkSrc, alt, width, height, className }) => {
  const [mounted, setMounted] = React.useState(false);
  const { theme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const src = theme === "light" ? lightSrc : darkSrc;

  return <Image src={src} alt={alt} width={width} height={height} className={className} />;
};

export default ImageWithTheme;
