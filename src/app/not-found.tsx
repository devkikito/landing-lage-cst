import React from "react";
import { Button } from "@/components/button/Button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full bg-bg-principal overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-amarelo-100 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-azul-100 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-azul-200 blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
        <div className="flex flex-col items-center text-center max-w-2xl">
          <div className="relative">
            <h1 className="text-[10rem] font-black text-amarelo-100 opacity-20 leading-none select-none md:text-[15rem]">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-amarelo-100">Página não encontrada</h2>
            </div>
          </div>

          <p className="mt-8 text-lg text-var-cinza-600 max-w-md">
            A página que você está procurando pode ter sido removida, teve seu nome alterado ou está temporariamente
            indisponível.
          </p>

          <div className="my-12 relative w-48 h-48">
            <div className="absolute inset-0 bg-amarelo-100 rounded-lg rotate-12 opacity-20"></div>
            <div className="absolute inset-4 bg-amarelo-100 rounded-lg -rotate-12 opacity-40"></div>
            <div className="absolute inset-8 flex items-center justify-center">
              <span className="text-7xl">🧠</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/">
              <Button text="Voltar para o início" variant="default" />
            </Link>
            <Link href="/contato">
              <Button text="Fale conosco" variant="outlined" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
