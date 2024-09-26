"use client";

import React, { useState, useEffect } from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import Button from "../button/Button";
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

  if (!isMounted) {
    return null;
  }

  return (
    <footer className="bg-cinza-900 text-branco-100 py-10">
      <div className="max-w-[82.125rem] mx-auto px-3 2sm:px-8 flex flex-col sm:flex-row gap-6 sm:gap-4 items-center justify-between">
        
        <div className="flex flex-col items-center sm:items-start gap-6">
          <div className="mb-4 sm:mb-10">
            <Image src="/img/LOGO-ABERTA.png" alt="Logo LUMI" width={74} height={74} />
          </div>

          {/* Ajuste para manter os links lado a lado em telas pequenas */}
          <div className="flex items-center justify-center gap-4">
            <Link
              href="https://www.instagram.com/biomobguia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da CST Brasil"
              className="bg-branco-100 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-azul-200"
            >
              <IoLogoInstagram
                className="text-base text-azul-200 hover:text-azul-100"
                aria-hidden="true"  
              />
            </Link>

            <Link
              href="https://www.linkedin.com/company/biomob/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn da CST Brasil"
              className="bg-branco-100 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-azul-200"
            >
              <FaLinkedinIn
                className="text-base text-azul-200 hover:text-azul-100"
                aria-hidden="true" 
              />
            </Link>

            <Link
              href="https://www.cstbrasil.com.br"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Acesse o site da CST Brasil"
              className="focus:outline-none focus:ring-2 focus:ring-azul-200"
            >
              <Image
                src={theme === "dark" ? logoCSTdark : logoCSTlight}
                alt="Logo CST"
                width={70}
                height={50}
              />
            </Link>
          </div>
        </div>

        <nav className="hidden sm:flex space-x-8 text-center" aria-label="Menu do rodapé">
          <a href="#" className="text-base text-branco-100 hover:text-branco-100">
            MOBILITY & SHOW
          </a>
          <a href="#" className="text-base text-branco-100 hover:text-branco-100">
            ISENÇÃO DE IMPOSTOS
          </a>
          <a href="#" className="text-base text-branco-100 hover:text-branco-100">
            TEST - DRIVE
          </a>
        </nav>

        <div className="flex flex-col items-center gap-4">
          <p className="text-base text-center">
            INSCREVA-SE <br /> AGORA MESMO
          </p>
          <Button text="Garantir agora" variant="outlined" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
