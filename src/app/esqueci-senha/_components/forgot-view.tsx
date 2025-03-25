"use client";
import { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ForgotPasswordAuthForm from "./user-auth-form";
import { useSearchParams } from "next/navigation";
import React from "react";
import { Loader2 } from "lucide-react";
import RecorverAccessAuthForm from "./user-recover-form";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function ForgotViewPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [isMounted, setIsMounted] = React.useState<boolean>(false);
  const [tokenLoading, setTokenLloading] = React.useState<boolean>(false);
  const [tokenIsValid, setTokenIsValid] = React.useState<boolean>(true);

  // React.useEffect(() => {
  //   if (token) {
  //     setTokenLloading(true);
  //   }
  // }, [token]);

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
              &ldquo;A CST é um tratamento desenvolvido no Reino Unido, com base em evidências científicas e validado em
              vários países, incluindo o Brasil. Consiste em um protocolo com 14 sessões temáticas e divertidas para
              estimular memória, linguagem, orientação e outros aspectos. Estudos mostram evidências de seus efeitos
              benéficos para o quadro dos pacientes e redução dos níveis de sobrecarga dos cuidadores&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
      {tokenLoading && (
        <div className="h-full w-full flex items-center justify-center">
          <Loader2 className={cn("h-12 w-12 animate-spin")} />
        </div>
      )}
      {!tokenLoading && !token && (
        <div className="flex h-full items-center p-4 lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Recuperar senha </h1>
              <p className="paragraph_01 text-muted-foreground">Insira seu e-mail para enviarmos um código de acesso</p>
            </div>
            <ForgotPasswordAuthForm />

            <p className="px-8 text-center paragraph_01 text-muted-foreground">
              Ao clicar em continue você estará aceitando nossos{" "}
              <Link href="/termos-uso-curso" className="underline underline-offset-4 hover:text-primary">
                Termos de Uso do Curso CST Formação de Facilitadores
              </Link>{" "}
              e{" "}
              <Link href="/termos-uso-marca" className="underline underline-offset-4 hover:text-primary">
                Termos de Uso do Manual CST
              </Link>
              .
            </p>
          </div>
        </div>
      )}
      {!tokenLoading && tokenIsValid && (
        <div className="flex h-full items-center p-4 lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Recuperar senha </h1>
              <p className="paragraph_01 text-muted-foreground">Insira sua nova senha para recuperar seu acesso</p>
            </div>
            <RecorverAccessAuthForm />

            <p className="px-8 text-center paragraph_01 text-muted-foreground">
              Ao clicar em continue você estará aceitando nossos{" "}
              <Link href="/termos-uso-curso" className="underline underline-offset-4 hover:text-primary">
                Termos de Uso do Curso CST Formação de Facilitadores
              </Link>{" "}
              e{" "}
              <Link href="/termos-uso-marca" className="underline underline-offset-4 hover:text-primary">
                Termos de Uso do Manual CST
              </Link>
              .
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
