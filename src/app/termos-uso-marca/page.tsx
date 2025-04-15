"use client";
import React from "react";
import { BackgroundImageWithTheme } from "@/components/image/BackgroundImageWithTheme";
import { TitleDefault } from "@/components/texts/TitleDefault";
import { Button } from "@/components/button/Button";
import { scrollToSection } from "@/utils/scrollToSection";
import { useRouter, useSearchParams } from "next/navigation";

export default function TermsPage() {
  const router = useRouter();
  const [isMounted, setIsMounted] = React.useState<boolean>(false);
  const searchParams = useSearchParams();

  React.useEffect(() => {
    setIsMounted(true);

    const hash = searchParams.get("hash") || window.location.hash.slice(1);
    if (hash) {
      scrollToSection(hash);
    }
  }, []);

  React.useEffect(() => {
    const hash = searchParams.get("hash") || window.location.hash.slice(1);
    if (hash) {
      scrollToSection(hash);
    }
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <BackgroundImageWithTheme
        lightImage="/img/Banner.png"
        darkImage="/img/Banner.png"
        className="bg-no-repeat bg-cover min-h-[21.75rem] flex justify-center items-center bg-right  lg:grid md:grid-cols-2"
      >
        <div className="max-w-[82.125rem] mx-auto 2sm:px-8 flex flex-col justify-center gap-6 py-[7.938rem]">
          <div className="flex flex-col basis-full bg-var-branco-100 rounded-bl-lg justify-center">
            <h1 className="flex flex-col mt-10 sm:text-6xl text-4xl leading-tight text-branco-100">
              Termos de Uso do Manual CST
              <span className="font-bold"> Atenção, usuário!</span>
            </h1>
            <h2 className="mt-2 mb-4 text-base text-branco-100 font-normal leading-7 tracking-wide max-w-[30rem]">
              Leia este termo cuidadosamente antes de utilizar o manual da Terapia de Estimulação Cognitiva (CST).
            </h2>
            <div>
              <Button text="Voltar à Home" variant="outlined" onClick={() => router.push("/")} />
            </div>
          </div>
        </div>
      </BackgroundImageWithTheme>

      <div id="termos" className="max-w-[82.125rem] mx-auto px-3 2sm:px-8 py-12">
        <div className="mb-[2.375rem]">
          <TitleDefault
            title="TERMOS DE USO"
            subtitle="Condições para o uso do Manual da CST"
            alignment="text-center"
          />
        </div>

        <div className="bg-branco-cinza-escuro p-6 sm:p-10 rounded-lg">
          <p className="text-lg text-cinza-900-branco mb-6 font-bold text-center">
            ATENÇÃO, USUÁRIO, LEIA ESTE TERMO CUIDADOSAMENTE!
          </p>

          <div className="space-y-6 text-cinza-900-branco text-base">
            <p>
              Este manual é destinado exclusivamente a profissionais de saúde devidamente capacitados pela empresa LUMEN
              Ciência e Saúde Ltda (CNPJ: 46.474.737/0001-47), por meio do treinamento para habilitação na aplicação da
              Terapia de Estimulação Cognitiva (CST).
            </p>

            <p>
              As informações aqui contidas têm caráter educativo e informativo, não se configurando como serviço
              profissional, consulta especializada, segunda opinião ou orientação médica direcionada a casos
              individuais.
            </p>

            <p>
              O uso do conteúdo deste manual deve ser realizado com responsabilidade, respeitando os princípios éticos e
              técnicos da prática profissional. Os autores e a LUMEN Ciência e Saúde Ltda não se responsabilizam por
              eventuais danos decorrentes da utilização inadequada das informações disponibilizadas.
            </p>

            <p className="font-semibold">
              A reprodução, modificação, digitalização, comercialização, publicação ou distribuição, total ou parcial,
              deste conteúdo não é permitida sem a autorização expressa da equipe responsável. Isso inclui, mas não se
              limita a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Redistribuição do conteúdo ou de qualquer serviço baseado neste material;</li>
              <li>
                Remoção de marcas registradas ou avisos de direitos autorais associados à CST-Brasil ou à LUMEN Ciência
                e Saúde Ltda;
              </li>
              <li>Criação de novos materiais com base na propriedade intelectual contida neste manual.</li>
            </ul>

            <p>
              A aquisição deste material não autoriza a realização de cursos, treinamentos ou formações voltadas à
              capacitação de terceiros na aplicação da CST, atividade que é de responsabilidade exclusiva da LUMEN
              Ciência e Saúde Ltda. Caso haja interesse em atuar como instrutor(a) em nossos cursos de formação, pedimos
              que entre em contato diretamente com nossa equipe.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              text="Entre em Contato"
              variant="default"
              onClick={() => window.open("mailto:treinamento@cstbrasil.com.br", "_blank")}
            />
          </div>
        </div>
      </div>

      <div className="bg-dark-900 text-branco-100 py-12">
        <div className="max-w-[82.125rem] mx-auto px-3 2sm:px-8 text-center">
          <p className="text-base">© 2025 CST Brasil</p>
        </div>
      </div>
    </div>
  );
}
