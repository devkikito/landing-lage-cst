"use client";
import Button from "@/components/button/Button";
import { TitleDefault } from "@/components/texts/TitleDefault";

export default function page() {
  return (
    <div
      id="contato"
      className="container min-h-screen py-12 flex flex-col gap-8 items-start justify-center px-4 w-full col-span-2"
    >
      <TitleDefault
        title="Contato"
        subtitle="Estamos aqui para oferecer o melhor atendimento possível"
        description="Confira alguns depoimentos de pacientes e familiares sobre a participação na CST e de profissionais da área da saúde que atuam como facilitadores."
        alignment="text-left"
      />
      <div className="flex gap-4 flex-wrap">
        <Button
          text="Email"
          variant="default"
          onClick={() => window.open("mailto:treinamento@cstbrasil.com.br", "_blank")}
        />
        <Button
          text="Whatsapp"
          variant="default"
          onClick={() => window.open("https://wa.me/21998866511?text=Olá, gostaria de entrar em contato!", "_blank")}
        />
        <Button
          text="Instagram"
          variant="default"
          onClick={() => window.open("https://www.instagram.com/cst.brasil/", "_blank")}
        />
      </div>
    </div>
  );
}
