"use client";

import React, { useState, useEffect } from "react";
import { LogoWithTheme } from "../button/LogoWithTheme";
import Button from "../button/Button";
import logoLumenLight from "../../../public/img/logoLumenLight.png";
import Image from "next/image";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header w-full ${
        isScrolled ? "bg-azul-500" : ""
      } flex items-center justify-center max-sm:px-2 max-2sm:flex-col-reverse py-2 fixed top-[2.813rem] z-50`}
      aria-label="Cabeçalho principal"
    >
      <div className="max-w-[82.125rem] mx-auto px-3 2sm:px-8 overflow-visible my-0 flex items-center justify-between w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <LogoWithTheme
              img="/img/LOGO-LUMEN-LIGHT.png"
              imgDark="/img/LOGO-LUMEN-LIGHT.png"
              imgAlt="Logo da Lumen"
            />
          </div>
          <nav className="items-center justify-center gap-6 flex-grow hidden laptop:flex" aria-label="Menu principal">
            <a href="#sobre" className="px-3 py-2 rounded-lg text-branco-100 hover:bg-amarelo-100 hover:text-cinza-900" aria-label="Ir para a seção Sobre">
              Sobre
            </a>
            <a href="#modulos" className="px-3 py-2 rounded-lg text-branco-100 hover:bg-amarelo-100 hover:text-cinza-900" aria-label="Ir para a seção Módulos">
              Módulos
            </a>
            <a href="#vantagens" className="px-3 py-2 rounded-lg text-branco-100 hover:bg-amarelo-100 hover:text-cinza-900" aria-label="Ir para a seção Vantagens">
              Vantagens
            </a>
            <a href="#depoimentos" className="px-3 py-2 rounded-lg text-branco-100 hover:bg-amarelo-100 hover:text-cinza-900" aria-label="Ir para a seção Depoimentos">
              Depoimentos
            </a>
            <a href="#equipe" className="px-3 py-2 rounded-lg text-branco-100 hover:bg-amarelo-100 hover:text-cinza-900" aria-label="Ir para a seção Equipe">
              Equipe
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <Button text="Entrar em contato" variant="contact" aria-label="Entrar em contato" />
            </div>
            <Button text="Fazer inscrição" variant="default" aria-label="Fazer inscrição" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
