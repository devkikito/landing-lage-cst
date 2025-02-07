"use client";
import { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import UserAuthForm from "./user-auth-form";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function SignInViewPage() {
  return (
    <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/examples/authentication"
        className={cn(buttonVariants({ variant: "ghost" }), "absolute right-4 top-4 hidden md:right-8 md:top-8")}
      >
        Login
      </Link>
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Image
            width={300}
            height={300}
            className="w-full max-w-32 h-auto"
            quality={100}
            src={"/img/logoMeninasSTEM.png"}
            alt="Logo da Meninas STEM"
          />
          Meninas STEM
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;O projeto que busca reduzir a desigualdade de gênero e ampliar a participação feminina em ciência,
              tecnologia, engenharia e matemática (STEM). Esta iniciativa foca no letramento tecnológico e na promoção
              da inclusão feminina na cidade de Petrópolis, no Rio de Janeiro. &rdquo;
            </p>
            <footer className="paragraph_01">Meninas STEM</footer>
          </blockquote>
        </div>
      </div>
      <div className="flex h-full items-center p-4 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Entrar </h1>
            <p className="paragraph_01 text-muted-foreground">Insire seus dados para logar-se no sistema</p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center paragraph_01 text-muted-foreground">
            Ao clicar em continue você estará aceitando nossos{" "}
            <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
              Termos de serviço
            </Link>{" "}
            e{" "}
            <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
              Políticas de privacidade
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
