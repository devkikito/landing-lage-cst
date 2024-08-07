"use client";
import { Button } from "@/components/button/Button";
import { TitleDefault } from "@/components/texts/TitleDefault";
import React from "react";
import Image from "next/image";
import { BackgroundImageWithTheme } from "@/components/image/BackgroundImageWithTheme";
import ResultsSection from "@/components/section/ResultSection";
import { Carousel } from "@/components/ui/Carousel";
import ProfileCarousel from "@/components/carousel/ProfileCarousel";

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

      <div className="bg-dark-900 text-branco-100 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="mb-4">
              <TitleDefault
                title="Venha conhecer"
                subtitle="CST - Terapia de estimulação Cognitiva"
                alignment="text-left"
              />
            </div>
            <p className="mb-6">
              A CST é um tratamento desenvolvido no Reino Unido, com base em evidências científicas e validado em vários
              países. Consiste em um protocolo com 14 sessões temáticas e divertidas para estimular memória, linguagem,
              orientação e outros aspectos. Estudos mostram que seus efeitos são comparáveis aos dos medicamentos para
              demência.
            </p>
            <Button text="Fazer inscrição" variant="default" />
          </div>
          <div>
            <Image
              src="/img/img-terapia.png"
              alt="Terapia de estimulação Cognitiva"
              width={800}
              height={450}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="mb-[2.375rem]">
          <TitleDefault
            title="módulos"
            subtitle="Treinamento completo para se tornar um especialista na metodologia CST"
            description="Treinamento abrangente realizado inteiramente online, oferecendo flexibilidade para se ajustar à sua agenda. Os participantes receberão o manual da CST através do serviço postal para apoio adicional."
            alignment="text-center"
          />
        </div>
        <Carousel images={carousel} type="2" />
      </div>

      <div>
        <TitleDefault
          title="Vantagens"
          subtitle="Por que se tornar um profissional especializado na metodologia CST?"
          alignment="text-left"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
        {advantagesData.map((advantage, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <Image src={advantage.image} alt={advantage.title} width={64} height={64} className="mb-4" />
            <p className="text-lg">{advantage.title}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button text="Fazer inscrição" variant="default" />
      </div>

      <div
        className="bg-cover bg-center text-branco-100 py-12 px-6 relative"
        style={{ backgroundImage: "url('/img/bg-depoimentos.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div>
            <TitleDefault
              title="Depoimentos"
              subtitle="Histórias de sucesso"
              description="Confira alguns depoimentos de quem já estudou essa metodologia."
              alignment="text-center"
            />
          </div>
          <div className="flex justify-center mb-6">
            <div className="flex flex-wrap justify-center gap-6">
              <div className="relative w-24 h-24">
                <Image src="/img/resultados_icone_1.png" alt="Depoimento 1" layout="fill" className="rounded-full" />
              </div>
              <div className="relative w-24 h-24">
                <Image src="/img/resultados_icone_2.png" alt="Depoimento 2" layout="fill" className="rounded-full" />
              </div>
              <div className="relative w-24 h-24">
                <Image src="/img/resultados_icone_3.png" alt="Depoimento 3" layout="fill" className="rounded-full" />
              </div>
              <div className="relative w-24 h-24">
                <Image src="/img/resultados_icone_4.png" alt="Depoimento 4" layout="fill" className="rounded-full" />
              </div>
              {/* Adicione mais imagens conforme necessário */}
            </div>
          </div>
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold">+1.000 depoimentos positivos</h3>
            <div className="flex justify-center mt-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <svg key={index} className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .288l2.833 8.718H24l-7.667 5.575L19.333 24 12 18.431 4.667 24l1.167-9.419L0 9.006h9.167L12 .288z" />
                  </svg>
                ))}
              </div>
            </div>
            <Button text="Ver depoimentos" variant="default" />
          </div>
          <div className="text-center">
            <p>O próximo depoimento pode ser o seu!</p>
          </div>
        </div>
      </div>

      <div>
        <ProfileCarousel />
      </div>

      <div className="my-10">
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
            <p className="text-3xl font-bold text-yellow-500 mb-4">R$ 2.300</p>
            <p className="text-lg mb-6">Ou em até 5x de R$ xx no cartão</p>
            <Button text="Garantir minha vaga" variant="default" />
            <p className="mt-4 text-sm">Pagamento por boleto, à vista por favor consultar a secretaria pelo WhatsApp</p>
          </div>
        </div>
      </div>
    </div>
  );
}
