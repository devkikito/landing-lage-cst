"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useHtmlFontSize } from "@/context/HtmlFontSizeContext";
import { fontSize } from "@/utils/fontSize";
import { VLibras } from "@/utils/vLibras";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { LibrasButton } from "../button/LibrasButton";
import { ChangeThemeButton } from "../button/ChangeThemeButton";
import { useTheme } from "next-themes";
import logoCSTdark from "../../../public/img/logoCSTdark.png";
import logoCSTlight from "../../../public/img/logoCSTlight.png";
import { IoMdMail } from "react-icons/io";

export const BarTools = () => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false);
  const { theme } = useTheme();
  const { setHtmlFontSize } = useHtmlFontSize();

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-azul-20 fixed w-full z-50">
      <div className="max-w-[82.125rem] mx-auto px-3 2sm:px-8 flex items-center justify-between py-2 my-0">
        <div className="flex items-center justify-center h-[1.925rem] border border-cinza-900-azul px-2 rounded-md">
          <VLibras />
          <p className="t0 text-cinza-900-azul pr-1 max-sm:sr-only">Acessibilidade</p>

          <div className="w-[1px] h-[70%] bg-cinza-900-azul max-sm:hidden" />
          <button
            onClick={() => fontSize.decrease(setHtmlFontSize)}
            aria-label="Diminuir tamanho da fonte"
            className="text-cinza-900-azul t2 px-1"
          >
            <span aria-hidden="true">A-</span>
          </button>
          <button
            onClick={() => fontSize.normalize(setHtmlFontSize)}
            aria-label="Normalizar tamanho da fonte"
            className="text-cinza-900-azul t2 px-1"
          >
            <span aria-hidden="true">aA</span>
          </button>
          <button
            onClick={() => fontSize.increase(setHtmlFontSize)}
            aria-label="Aumentar tamanho da fonte"
            className="text-cinza-900-azul t2 px-1"
          >
            <span aria-hidden="true">A+</span>
          </button>
          <div className="w-[1px] h-[70%] bg-cinza-900-azul" />
          <ChangeThemeButton />
          <div className="w-[1px] h-[70%] bg-cinza-900-azul" />
          <LibrasButton />
        </div>
        <div className="flex items-center justify-center h-[1.925rem] pl-2 gap-x-4">
          <div className="flex items-center justify-center h-[1.925rem] gap-x-2 2sm:gap-x-4">
            <Link
              href="mailto:treinamento@cstbrasil.com.br"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enviar email para treinamento@cstbrasil.com.br"
            >
              <IoMdMail className="text-cinza-900-azul" />
            </Link>

            <Link
              href="https://wa.me/21998866511?text=Olá, gostaria de entrar em contato!"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir WhatsApp para entrar em contato com CST Brasil em uma nova aba"
            >
              <IoLogoWhatsapp className="text-cinza-900-azul" />
            </Link>

            <Link
              href="https://www.instagram.com/cst.brasil"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir Instagram do Portal da demência em uma nova aba"
            >
              <IoLogoInstagram className="text-cinza-900-azul" />
            </Link>

            <p className="max-sm:hidden text-lg text-cinza-900-azul">|</p>

            <Link
              href="https://www.cstbrasil.com.br"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Acesse o site da CST Brasil"
              className="max-sm:hidden t1 roboto-font text-cinza-900-azul"
            >
              Acesse nosso site
            </Link>
          </div>
          <Link
            href="https://www.cstbrasil.com.br"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Acesse o site da CST Brasil"
          >
            <Image src={theme === "dark" ? logoCSTdark : logoCSTlight} alt="Logo CST" width={70} height={50} />
          </Link>
        </div>
      </div>
    </div>
  );
};
