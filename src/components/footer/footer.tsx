"use client";

import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa";
import Button from "../button/Button";
import Image from "next/image";

const Footer = () => {
  function openInNewTab(url: string): void {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <footer className="bg-cinza-900 text-branco-100 py-10">
      <div className="max-w-[82.125rem] mx-auto px-3 2sm:px-8  flex flex-wrap gap-4 items-center justify-between">
        <div>
          <div className="mb-10">
            <Image src="/img/LOGO-ABERTA.png" alt="Aluna 1" width={74} height={74} />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-4">
              <button
                onClick={() => openInNewTab("https://www.instagram.com/biomobguia/")}
                className="bg-branco-100 rounded-full p-2"
              >
                <IoLogoInstagram className="text-base text-azul-200 hover:text-azul-100" />
              </button>
              <button
                onClick={() => openInNewTab("https://www.linkedin.com/company/biomob/")}
                className="bg-branco-100 rounded-full p-2"
              >
                <FaLinkedinIn className="text-base text-azul-200 hover:text-azul-100" />
              </button>
              <button
                onClick={() => openInNewTab("https://pt-br.facebook.com/biomobguia/")}
                className="bg-branco-100 rounded-full p-2"
              >
                <FaFacebookF className="text-base text-azul-200 hover:text-azul-100" />
              </button>
              <button
                onClick={() => openInNewTab("https://www.youtube.com/@biomobguia")}
                className="bg-branco-100 rounded-full p-2"
              >
                <FaYoutube className="text-base text-azul-200 hover:text-azul-100" />
              </button>
            </div>
          </div>
        </div>
        <div className="space-x-8 hidden laptop:flex">
          <a href="#" className="text-base text-branco-100 hover:text-branco-100">
            MOBILITY & SHOW
          </a>
          <a href="#" className="text-base text-branco-100 hover:text-branco-100">
            ISENÇÃO DE IMPOSTOS
          </a>
          <a href="#" className="text-base text-branco-100 hover:text-branco-100">
            TEST - DRIVE
          </a>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-base text-center">
            INSCREVER-SE <br /> AGORA MESMO
          </p>
          <Button text="Garantir agora" variant="outlined" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
