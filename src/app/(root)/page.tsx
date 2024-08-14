"use client";
import { Button } from "@/components/button/Button";
import { TitleDefault } from "@/components/texts/TitleDefault";
import React from "react";
import Image from "next/image";
import { BackgroundImageWithTheme } from "@/components/image/BackgroundImageWithTheme";
import ResultsSection from "@/components/section/ResultSection";
import { Carousel } from "@/components/ui/Carousel";
import PartnerCarousel from "@/components/carousel/PartnerCarousel";
import InstructorCarousel from "@/components/carousel/InstructorCarousel";
import ImageWithTheme from "@/components/image/ImageWithTheme";

const carousel = [
  {
    image: {
      imageUrl: "/img/modulo_1.png",
      altImage: "Módulo 01",
      ariaLabel: "Icone do Módulo 01",
      sizes: "100vw",
    },
    texts: {
      title: "Módulo 01",
      description: "Desenvolvimento e modelos de demência",
    },
  },
  {
    image: {
      imageUrl: "/img/modulo_2.png",
      altImage: "Módulo 02",
      ariaLabel: "Icone do Módulo 02",
      sizes: "100vw",
    },
    texts: {
      title: "Módulo 02",
      description: "Visão geral do Método CST",
    },
  },
  {
    image: {
      imageUrl: "/img/modulo_3.png",
      altImage: "Módulo 03",
      ariaLabel: "Icone do Módulo 03",
      sizes: "100vw",
    },
    texts: {
      title: "Módulo 03",
      description: "Apresentação detalhada sobre o modelo",
    },
  },
];

const advantagesData = [
  {
    image: "/img/resultados_icone_1.png",
    imageLight: "/img/resultados_icone_1-light.png",
    title: "Utilizado em mais de 35 países pelo mundo",
  },
  {
    image: "/img/resultados_icone_2.png",
    imageLight: "/img/resultados_icone_2-light.png",
    title: "Resultados comprovados por evidências científicas",
  },
  {
    image: "/img/resultados_icone_3.png",
    imageLight: "/img/resultados_icone_3-light.png",
    title: "14 sessões temáticas e divertidas que estimulam",
  },
  {
    image: "/img/resultados_icone_4.png",
    imageLight: "/img/resultados_icone_4-light.png",
    title: "Efeitos comparáveis aos dos medicamentos",
  },
];

export default function HomePage() {
  return (
    <div>
      <BackgroundImageWithTheme
        lightImage="/img/Banner.png"
        darkImage="/img/Banner.png"
        className="bg-no-repeat bg-cover min-h-[21.75rem] flex justify-center items-center mb-20 bg-right"
      >
        <div className="max-w-[82.125rem] mx-auto px-3 2sm:px-8 flex flex-col lg:flex-row justify-center gap-6 mt-10 py-[7.938rem]">
          <div className="flex flex-col basis-full lg:basis-1/2 bg-var-branco-100 rounded-bl-lg justify-center">
            <h1 className="mt-10 text-6xl  leading-tight text-branco-100">
              Método CST, treinamento completo para{" "}
              <span className="font-bold">estudantes e profissionais da saúde!</span>
            </h1>
            <div className="mt-2 mb-4 text-base text-branco-100 font-normal leading-7 tracking-wide max-w-[30rem]">
              Primeiro tratamento para demência não medicamentoso e baseado na ciência brasileira.
            </div>
            <div>
              <Button text="Inscreva-se" variant="outlined" />
            </div>
          </div>
          <div className="flex flex-col basis-full lg:basis-1/2 mt-6 lg:mt-16"></div>
        </div>
      </BackgroundImageWithTheme>
      <div>
        <ResultsSection />
      </div>

      <div className="bg-dark-900 text-branco-100 py-12">
        <div className="max-w-[82.125rem] mx-auto px-3 2sm:px-8">
          <div className="flex gap-2 sm:flex-nowrap flex-wrap">
            <div className="mt-4 mb-4 max-w-[21.938rem] min-w-[14.063rem]">
              <TitleDefault
                title="Venha conhecer"
                subtitle="CST - Terapia de estimulação Cognitiva"
                alignment="text-left"
                textColor="text-cinza-900-branco"
              />
            </div>
            <div className="mb-8 max-w-[44.125rem]">
              <p className="mb-4 text-cinza-900-branco">
                A CST é um tratamento desenvolvido no Reino Unido, com base em evidências científicas e validado em
                vários países. Consiste em um protocolo com 14 sessões temáticas e divertidas para estimular memória,
                linguagem, orientação e outros aspectos. Estudos mostram que seus efeitos são comparáveis aos dos
                medicamentos para demência.
              </p>
              <Button text="Fazer inscrição" variant="default" />
            </div>
          </div>
          <div>
            <Image
              src="/img/img-terapia.png"
              alt="Terapia de estimulação Cognitiva"
              height={408}
              width={1298}
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </div>
      <div className="bg-azul-40/50">
        <div className="mb-[2.375rem]">
          <div className="max-w-[39.938rem] mx-auto">
            <TitleDefault
              title="módulos"
              subtitle="Treinamento completo para se tornar um especialista na metodologia CST"
              alignment="text-center"
            />
          </div>
          <p className="max-w-[42rem] mx-auto text-base text-center">
            Treinamento abrangente realizado inteiramente online, oferecendo flexibilidade para se ajustar à sua agenda.
            Os participantes receberão o manual da CST através do serviço postal para apoio adicional.
          </p>
        </div>
        <div className="max-w-[82.125rem] mx-auto px-3 2sm:px-8">
          <Carousel images={carousel} type="2" />
        </div>
      </div>

      <div className="max-w-[82.125rem] mx-auto px-3 2sm:px-8 my-[4.5rem]">
        <div className="flex justify-between items-center mb-10 sm:flex-nowrap flex-wrap">
          <div className="mt-4 max-w-[26rem]">
            <TitleDefault
              title="Vantagens"
              subtitle="Por que se tornar um profissional especializado na metodologia CST?"
              alignment="text-left"
            />
          </div>
          <div>
            <Button text="Fazer inscrição" variant="default" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          {advantagesData.map((advantage, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <ImageWithTheme
                lightSrc={advantage.imageLight}
                darkSrc={advantage.image}
                alt={advantage.title}
                width={64}
                height={64}
              />
              <p className="text-lg">{advantage.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[82.125rem] mx-auto px-3 2sm:px-8 flex justify-between items-center mb-10 gap-4  sm:flex-nowrap flex-wrap">
        <div>
          <TitleDefault
            title="Depoimentos"
            subtitle="Histórias de sucesso"
            description="Confira alguns depoimentos de quem já estudou essa metodologia."
            alignment="text-left"
          />
        </div>
        <div className="flex">
          <p className="text-xl max-w-[14rem]">O próximo depoimento pode ser o seu!</p>
          <ImageWithTheme
            lightSrc="/img/arrow_down.svg"
            darkSrc="/img/arrow_down-dark.svg"
            alt="Ícone de seta para baixo"
            width={32}
            height={32}
          />
        </div>
      </div>
      <div className="bg-cover mb-[4.5rem] py-12 min-h-[33.75rem] bg-[url('/img/bg-depoimentos.png')] content-center">
        <div className="max-w-[82.125rem] mx-auto px-3 2sm:px-8">
          <div className="text-center mb-6">
            <h3 className="text-4xl font-semibold">+1.000 depoimentos positivos</h3>
            <div className="flex justify-center mt-8">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <svg key={index} className="w-6 h-6 text-amarelo-100" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .288l2.833 8.718H24l-7.667 5.575L19.333 24 12 18.431 4.667 24l1.167-9.419L0 9.006h9.167L12 .288z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <Button text="Ver depoimentos" variant="default" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[82.125rem] mx-auto px-3 2sm:px-8">
        <PartnerCarousel />
      </div>

      <div className="max-w-[82.125rem] mx-auto px-3 2sm:px-8">
        <InstructorCarousel />
      </div>

      <div className="my-10 max-w-[46rem] mx-auto px-3">
        <TitleDefault
          title="Investimento"
          subtitle="Garanta sua vaga hoje mesmo!"
          description="O treinamento será apresentado pelo grupo de pesquisadores da PUC - Rio que trouxe a CST para o Brasil."
          alignment="text-center"
        />
      </div>

      <div className="text-branco-100-2 py-12 px-6 mb-[4rem]">
        <div className="max-w-[82.125rem] mx-auto px-3 2sm:px-8 grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="p-6 sm:p-10 h-full bg-cinza-900">
            <div className=" flex flex-col max-w-[30.875rem] justify-between h-full gap-8">
              <ImageWithTheme
                lightSrc="/img/LOGO-ABERTA.png"
                darkSrc="/img/LOGO-ABERTA.png"
                alt="Ícone de seta para baixo"
                width={74}
                height={74}
              />
              <p className="mb-0 text-3xl max-w-[27rem] text-branco-100">
                Inicie sua jornada dentro da metodologia CST
              </p>

              <div className="flex gap-4 items-center  sm:flex-nowrap flex-wrap">
                <Image src="/img/fotos_alunos.svg" alt="Aluna 1" width={210} height={46} />
                <p className="mb-0 text-branco-100">
                  Mais de 1.000 alunas e alunos. <br />
                  Junte-se hoje mesmo!
                </p>
              </div>
            </div>
          </div>
          <div className="bg-branco-cinza-escuro p-6 sm:p-10 text-center md:text-left">
            <div className="max-w-[30.438rem]">
              <h3 className="text-3xl mb-8 text-cinza-900-branco">Seu investimento</h3>
              <div className="flex justify-between mb-8 gap-2 sm:flex-nowrap flex-wrap">
                <div>
                  <p className="text-xl text-cinza-900-branco">De R$ 3.500 por</p>
                  <p className="text-5xl font-semibold text-cinza-900-branco">R$ 2.300</p>
                </div>
                <p className="text-base text-cinza-900-branco">
                  Ou em até 5x de <br /> R$ xx no cartão
                </p>
              </div>
              <div className="flex justify-center mb-[3.25rem]">
                <Button text="Garantir minha vaga" variant="default" />
              </div>
              <p className="mt-4 text-base text-center text-cinza-900-branco">
                Pagamento por boleto, à vista por favor consultar a secretaria pelo WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
