"use client";

import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa";
import Button from "../button/Button";

const Footer = () => {
  function openInNewTab(url: string): void {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <footer className="bg-dark-900 text-branco-100 py-6">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="/img/LOGO-ABERTALIGHT.png" alt="Logo" className="w-12 h-12" />
          <div className="flex space-x-4">
            <button onClick={() => openInNewTab("https://www.instagram.com/biomobguia/")}>
              <IoLogoInstagram className="text-2xl text-gray-400 hover:text-branco-100" />
            </button>
            <button onClick={() => openInNewTab("https://www.linkedin.com/company/biomob/")}>
              <FaLinkedinIn className="text-2xl text-gray-400 hover:text-branco-100" />
            </button>
            <button onClick={() => openInNewTab("https://pt-br.facebook.com/biomobguia/")}>
              <FaFacebookF className="text-2xl text-gray-400 hover:text-branco-100" />
            </button>
            <button onClick={() => openInNewTab("https://www.youtube.com/@biomobguia")}>
              <FaYoutube className="text-2xl text-gray-400 hover:text-branco-100" />
            </button>
          </div>
        </div>
        <div className="flex space-x-8">
          <a href="#" className="text-lg text-gray-400 hover:text-branco-100">
            MOBILITY & SHOW
          </a>
          <a href="#" className="text-lg text-gray-400 hover:text-branco-100">
            ISENÇÃO DE IMPOSTOS
          </a>
          <a href="#" className="text-lg text-gray-400 hover:text-branco-100">
            TEST - DRIVE
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-lg">INSCREVER-SE</p>
            <p className="text-lg">AGORA MESMO</p>
          </div>
          <Button text="Garantir agora" variant="subscribe" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
