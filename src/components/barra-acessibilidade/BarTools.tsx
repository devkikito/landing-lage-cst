"use client";

import { useHtmlFontSize } from "@/context/HtmlFontSizeContext";
import { fontSize } from "@/utils/fontSize";
import { VLibras } from "@/utils/vLibras";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn, FaFacebookF, FaYoutube, FaGooglePlay, FaApple } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import React from "react";
import { LibrasButton } from "../button/LibrasButton";
import { ChangeThemeButton } from "../button/ChangeThemeButton";

export const BarTools = () => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const { setHtmlFontSize } = useHtmlFontSize();

  function openInNewTab(url: string) {
    window.open(url, "_blank");
  }

  if (!isMounted) {
    return null;
  }
  return (
    <div className="bg-azul-20 fixed w-full z-50">
      <div className="max-w-[82.125rem] mx-auto px-3 2sm:px-8 flex items-center justify-between py-2 my-0">
        <div className="flex items-center justify-center h-[1.925rem] border border-cinza-900-azul px-2 rounded-md ">
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
            <button onClick={() => openInNewTab("https://www.instagram.com/biomobguia/")}>
              <IoLogoInstagram className="text-lg text-cinza-900-azul" />
            </button>
            <button onClick={() => openInNewTab("https://www.linkedin.com/company/biomob/")}>
              <FaLinkedinIn className="text-lg text-cinza-900-azul" />
            </button>
            <button onClick={() => openInNewTab("https://pt-br.facebook.com/biomobguia/")}>
              <FaFacebookF className="text-lg text-cinza-900-azul" />
            </button>
            <button onClick={() => openInNewTab("https://google.com.br/")}>
              <FaXTwitter className="text-lg text-cinza-900-azul" />
            </button>
            <button onClick={() => openInNewTab("https://www.youtube.com/@biomobguia")}>
              <FaYoutube className="text-lg text-cinza-900-azul" />
            </button>
            <p className="max-sm:hidden text-lg text-cinza-900-azul">|</p>
            <p className="max-sm:hidden t1 roboto-font text-cinza-900-azul">Baixe o app</p>
          </div>
          <div className="max-sm:hidden flex items-center justify-center h-[1.925rem] gap-x-4">
            <button onClick={() => openInNewTab("https://apps.apple.com/br/app/biomob/id1090156739")}>
              <FaApple className="text-lg text-cinza-900-azul" />
            </button>
            <button onClick={() => openInNewTab("https://play.google.com/store/apps/details?id=com.biomob.bioplus")}>
              <FaGooglePlay className="text-lg text-cinza-900-azul" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
