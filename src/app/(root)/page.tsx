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
      imageUrl: "/img/resultados_icone_1.png",
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
      imageUrl: "/img/resultados_icone_2.png",
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
      imageUrl: "/img/resultados_icone_3.png",
      altImage: "Módulo 03",
      ariaLabel: "Icone do Módulo 03",
      sizes: "100vw",
    },
    texts: {
      title: "Módulo 03",
      description: "Apresentação detalhada sobre o modelo",
    },
  },
  {
    image: {
      imageUrl: "/img/resultados_icone_4.png",
      altImage: "Módulo 04",
      ariaLabel: "Icone do Módulo 04",
      sizes: "100vw",
    },
    texts: {
      title: "Módulo 04",
      description: "Apresentação detalhada sobre o modelo",
    },
  },
];

const advantagesData = [
  {
    image: "/img/resultados_icone_1.png",
    title: "Utilizado em mais de 35 países pelo mundo",
  },
  {
    image: "/img/resultados_icone_2.png",
    title: "Resultados comprovados por evidências científicas",
  },
  {
    image: "/img/resultados_icone_3.png",
    title: "14 sessões temáticas e divertidas que estimulam",
  },
  {
    image: "/img/resultados_icone_4.png",
    title: "Efeitos comparáveis aos dos medicamentos",
  },
];

export default function HomePage() {
  return (
    <div>
      <BackgroundImageWithTheme
        lightImage="/img/Banner.png"
        darkImage="/img/Banner.png"
        className="bg-no-repeat bg-cover min-h-[21.75rem] flex justify-center items-center mb-20"
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
          <div className="flex gap-2">
            <div className="mt-4 mb-4 max-w-[21.938rem] min-w-[14.063rem]">
              <TitleDefault
                title="Venha conhecer"
                subtitle="CST - Terapia de estimulação Cognitiva"
                alignment="text-left"
              />
            </div>
            <div className="mb-8 max-w-[44.125rem]">
              <p className="mb-4">
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
        <div className="flex justify-between items-center mb-10">
          <div className="mt-4 max-w-[30rem]">
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
              <Image src={advantage.image} alt={advantage.title} width={64} height={64} className="mb-4" />
              <p className="text-lg">{advantage.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[82.125rem] mx-auto px-3 2sm:px-8 flex justify-between items-center mb-10">
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
      <div className="bg-cover text-branco-100 mb-[4.5rem] py-12 min-h-[33.75rem] bg-[url('/img/bg-depoimentos.png')] content-center">
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

      <div className="my-10 max-w-[46rem] mx-auto">
        <TitleDefault
          title="Investimento"
          subtitle="Garanta sua vaga hoje mesmo!"
          description="O treinamento será apresentado pelo grupo de pesquisadores da PUC - Rio que trouxe a CST para o Brasil."
          alignment="text-center"
        />
      </div>

      <div className="bg-dark-900 text-branco-100 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Image src="/img/LOGO-ABERTALIGHT.png" alt="Logo CST" width={50} height={50} />
              <h3 className="ml-4 text-xl font-semibold">Inicie sua jornada dentro da metodologia CST</h3>
            </div>
            <p className="mb-4">Mais de 1.000 alunas e alunos. Junte-se hoje mesmo!</p>
            <div className="flex -space-x-4">
              <Image
                src="/img/resultados_icone_1.png"
                alt="Aluna 1"
                width={40}
                height={40}
                className="rounded-full border-2 border-branco-100"
              />
              <Image
                src="/img/resultados_icone_2.png"
                alt="Aluno 2"
                width={40}
                height={40}
                className="rounded-full border-2 border-branco-100"
              />
              <Image
                src="/img/resultados_icone_3.png"
                alt="Aluna 3"
                width={40}
                height={40}
                className="rounded-full border-2 border-branco-100"
              />
              <Image
                src="/img/resultados_icone_4.png"
                alt="Aluno 4"
                width={40}
                height={40}
                className="rounded-full border-2 border-branco-100"
              />
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Seu investimento</h3>
            <p className="text-lg mb-2">De R$ 3.500 por</p>
            <p className="text-3xl font-bold text-amarelo-100 mb-4">R$ 2.300</p>
            <p className="text-lg mb-6">Ou em até 5x de R$ xx no cartão</p>
            <Button text="Garantir minha vaga" variant="default" />
            <p className="mt-4 text-sm">Pagamento por boleto, à vista por favor consultar a secretaria pelo WhatsApp</p>
          </div>
        </div>
      </div>
    </div>
  );
}
