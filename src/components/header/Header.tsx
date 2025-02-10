"use client";

import React, { useState, useEffect } from "react";
import { LogoWithTheme } from "../button/LogoWithTheme";
import Button from "../button/Button";
import { scrollToSection } from "@/utils/scrollToSection";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathName = usePathname();
  const { user, logout } = useAuth();

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
      className={`header w-full bg-azul-500 
      flex items-center justify-center max-sm:px-2 max-2sm:flex-col-reverse py-2 fixed top-[2.813rem] z-50`}
      aria-label="Cabeçalho principal"
    >
      <div className="max-w-[82.125rem] mx-auto px-3 2sm:px-8 overflow-visible my-0 flex items-center justify-between w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <LogoWithTheme img="/img/logoLightLumen.png" imgDark="/img/logoDarkLumen.png" imgAlt="Logo da Lumen" />
          </div>
          <nav
            className={`items-center justify-center gap-6 flex-grow ${pathName.includes("redirecionamento-final") ? "hidden" : "hidden laptop:flex"}`}
            aria-label="Menu principal"
          >
            <button
              onClick={() => scrollToSection("sobre")}
              className="px-3 py-2 rounded-lg text-branco-100 hover:bg-amarelo-100 hover:text-cinza-900"
              aria-label="Ir para a seção Sobre"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("modulos")}
              className="px-3 py-2 rounded-lg text-branco-100 hover:bg-amarelo-100 hover:text-cinza-900"
              aria-label="Ir para a seção Módulos"
            >
              Módulos
            </button>
            <button
              onClick={() => scrollToSection("vantagens")}
              className="px-3 py-2 rounded-lg text-branco-100 hover:bg-amarelo-100 hover:text-cinza-900"
              aria-label="Ir para a seção Vantagens"
            >
              Vantagens
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="px-3 py-2 rounded-lg text-branco-100 hover:bg-amarelo-100 hover:text-cinza-900"
              aria-label="Ir para a seção Depoimentos"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("equipe")}
              className="px-3 py-2 rounded-lg text-branco-100 hover:bg-amarelo-100 hover:text-cinza-900"
              aria-label="Ir para a seção Equipe"
            >
              Equipe
            </button>
          </nav>
          <div className="flex items-center gap-4">
            <div
              className={`hidden lg:block ${pathName.includes("redirecionamento-final") && "[&>*:first-child]:hidden"}`}
            >
              <Button
                text="Entrar em contato"
                onClick={() => scrollToSection("contato")}
                variant="contact"
                aria-label="Entrar em contato"
              />
            </div>

            {!user ? (
              <>
                <Button
                  text="Fazer inscrição"
                  variant="default"
                  aria-label="Fazer inscrição"
                  onClick={() => scrollToSection("inscricao")}
                />
                <Button
                  text="Login"
                  variant="default"
                  aria-label="Login"
                  onClick={() => (window.location.href = "/login")}
                />
              </>
            ) : (
              <>
                <Button
                  text="Meu perfil"
                  variant="default"
                  aria-label="Meu Perfil"
                  onClick={() => (window.location.href = "/meu-perfil")}
                />
                <Button
                  text="Sair"
                  variant="outlined"
                  aria-label="Sair"
                  onClick={() => {
                    logout();
                    window.location.href = "/";
                  }}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
