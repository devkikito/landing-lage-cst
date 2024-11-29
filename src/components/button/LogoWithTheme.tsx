"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { NextImage } from "../ui/NextImage";

interface LogoWithThemeProps {
  img: string;
  imgAlt?: string;
  imgDark?: string;
}

export const LogoWithTheme: React.FC<LogoWithThemeProps> = ({ img, imgAlt = "Logo da LUMI", imgDark }) => {
  const [mounted, setMounted] = React.useState(false);
  const { theme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Link href="/" className="relative w-100%">
        <NextImage imageUrl={img} altImage={imgAlt} ariaLabel={imgAlt} sizes="100vw" className="w-[2.671rem]" />
      </Link>
    );
  }

  return (
    <Link href="/" className="relative w-100%">
      {theme == "light" ? (
        <NextImage imageUrl={img} altImage={imgAlt} ariaLabel={imgAlt} sizes="100vw" className="w-[2.671rem]" />
      ) : (
        <NextImage
          imageUrl={imgDark || img}
          altImage={imgAlt}
          ariaLabel={imgAlt}
          sizes="100vw"
          className="w-[2.671rem]"
        />
      )}
    </Link>
  );
};
