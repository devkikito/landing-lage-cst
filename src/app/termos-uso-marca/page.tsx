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
              A utilização deste manual é destinada exclusivamente a profissionais de saúde capacitados pela empresa{" "}
              <strong>LUMEN CIENCIA E SAUDE LTDA</strong> (CNPJ: 46.474.737/0001-47) através do treinamento para
              habilitação da entrega da <strong>Terapia de Estimulação Cognitiva (CST)</strong>.
            </p>

            <p>
              Os autores do Manual e a empresa <strong>LUMEN CIENCIA E SAUDE LTDA</strong> não serão responsáveis por
              quaisquer danos sofridos por usuários ou terceiros que utilizem as informações contidas neste manual. O
              usuário assume integralmente a responsabilidade pelo uso que fizer das informações contidas no manual.
            </p>

            <p>
              O usuário pode utilizar os dados disponíveis neste manual para uso pessoal, não sendo permitido
              reproduzir, digitalizar, modificar, comercializar, publicar ou distribuir parte ou totalidade do conteúdo,
              sem prévia e expressa autorização da equipe.
            </p>

            <p className="font-semibold">Em particular, não é permitido em hipótese alguma:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Redistribuir conteúdo (incluindo o uso de partes ou totalidade do conteúdo ou serviço similar);</li>
              <li>
                Remover os sinais distintivos da marca <strong>CST-Brasil</strong> ou da empresa{" "}
                <strong>LUMEN CIENCIA E SAUDE LTDA</strong> e os avisos de direitos autorais das páginas;
              </li>
              <li>Criar conteúdo através do conteúdo e/ou da propriedade intelectual do manual da CST Brasil;</li>
            </ul>

            <p>
              A aquisição deste manual não permite a oferta de qualquer tipo de curso que reproduza o conteúdo e/ou a
              propriedade intelectual do mesmo, particularmente cursos que tenham o intuito de formar pessoas para a
              entrega da CST. Sendo este, direito exclusivo da empresa <strong>LUMEN CIENCIA E SAUDE LTDA</strong>. Caso
              haja interesse por parte do usuário deste manual em se tornar um treinador nos cursos de capacitação
              ofertados pela nossa empresa, entre em contato conosco.
            </p>

            <p>
              Toda informação contida neste manual é oferecida com propósitos informativos e educacionais e não é
              fornecida como um serviço profissional, segunda opinião, consulta ou como conselho médico para pacientes
              específicos.
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
