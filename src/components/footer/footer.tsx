"use client";

import React, { useState, useEffect } from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaArrowUp, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import logoCSTdark from "../../../public/img/logoCSTdark.png";
import logoCSTlight from "../../../public/img/logoCSTlight.png";
import { useTheme } from "next-themes";
import Link from "next/link";

const Footer = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isMounted) {
    return null;
  }

  return (
    <footer className="bg-azul-500 text-branco-100 py-5">
      <div className="relative max-w-[82.125rem] mx-auto px-3 2sm:px-8 flex flex-col gap-2 items-center justify-between">
        <Image src="/img/logoLightLumen.png" alt="Logo LUMEN" width={74} height={74} />

        <div className="flex items-center justify-center gap-4">
          <Link
            href="https://www.instagram.com/cst.brasil"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da CST Brasil"
            className="bg-branco-100 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-azul-200"
          >
            <IoLogoInstagram className="text-base text-azul-200 hover:text-azul-100" aria-hidden="true" />
          </Link>

          <Link
            href="https://www.cstbrasil.com.br"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Acesse o site da CST Brasil"
            className="focus:outline-none focus:ring-2 focus:ring-azul-200"
          >
            <Image src={theme === "dark" ? logoCSTdark : logoCSTlight} alt="Logo CST" width={70} height={50} />
          </Link>
        </div>
        <p className="text-cinza-900-branco">Site desenvolvido pela Biomob - Soluções Inovadoras em Acessibilidade</p>
        <button
          onClick={scrollToTop}
          className="absolute bottom-6 right-6 bg-amarelo-100 text-cinza-900 rounded-full p-2 shadow-lg hover:bg-cinza-900 hover:text-amarelo-100 transition-colors duration-300"
          aria-label="Voltar ao topo"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
