"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io";
import { scrollToSection } from "@/utils/scrollToSection";

export default function Footer() {
  return (
    <footer className="bg-azul-500 text-branco-100 py-12">
      <div className="max-w-[82.125rem] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sobre Nós */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre Nós</h3>
            <p className="text-sm text-cinza-400">
              Somos especialistas em Terapia de Estimulação Cognitiva, oferecendo capacitação de alta qualidade para
              profissionais da saúde. Nosso objetivo é promover um cuidado humanizado e baseado em evidências.
            </p>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="text-sm text-cinza-400 space-y-2">
              <li>
                <button
                  onClick={() => (window.location.href = "/termos-uso-curso")}
                  className="hover:text-branco-100 transition"
                >
                  Termos de Uso do Curso CST Formação de Facilitadores
                </button>
              </li>
              <li>
                <button
                  onClick={() => (window.location.href = "/termos-uso-marca")}
                  className="hover:text-branco-100 transition"
                >
                  Termos de Uso do Manual CST
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Fale Conosco</h3>
            <p className="text-sm text-cinza-400">
              <strong>Email:</strong> treinamento@cstbrasil.com.br
            </p>
            <p className="text-sm text-cinza-400 mt-2">
              <strong>Telefone:</strong> (21) 99886-6511
            </p>
            <div className="flex mt-4 space-x-4">
              <Link
                href="https://www.instagram.com/cst.brasil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da CST Brasil"
                className="bg-branco-100 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-azul-200"
              >
                <IoLogoInstagram className="text-base text-azul-200 hover:text-azul-100" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-cinza-700 mt-8 pt-4 text-sm text-center text-cinza-400">
          &copy; 2025 CST Brasil. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
