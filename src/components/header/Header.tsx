"use client";

import React, { useState, useEffect } from "react";
import { LogoWithTheme } from "../button/LogoWithTheme";
import Button from "../button/Button";

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
    >
      <div className="max-w-[82.125rem] mx-auto px-3 2sm:px-8 overflow-visible my-0 flex items-center justify-between w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <LogoWithTheme
              img="/img/LOGO-ABERTA.png"
              imgDark="/img/LOGO-ABERTA.png"
              imgAlt="Logo do portal da demência"
            />
          </div>
          <nav className="flex items-center justify-center gap-6 flex-grow">
            <a href="#sobre" className="text-branco-100">
              Sobre
            </a>
            <a href="#modulos" className="text-branco-100">
              Módulos
            </a>
            <a href="#vantagens" className="text-branco-100">
              Vantagens
            </a>
            <a href="#depoimentos" className="text-branco-100">
              Depoimentos
            </a>
            <a href="#equipe" className="text-branco-100">
              Equipe
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button text="Entrar em contato" variant="contact" />
            <Button text="Fazer inscrição" variant="default" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
