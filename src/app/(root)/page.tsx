"use client";
import { Button } from "@/components/button/Button";
import { TitleDefault } from "@/components/texts/TitleDefault";
import React from "react";
import Image from "next/image";
import { BackgroundImageWithTheme } from "@/components/image/BackgroundImageWithTheme";
import ResultsSection from "@/components/section/ResultSection";
import { Carousel } from "@/components/ui/Carousel";
import InstructorCarousel from "@/components/carousel/InstructorCarousel";
import ImageWithTheme from "@/components/image/ImageWithTheme";
import TestimonialCarousel from "@/components/carousel/TestimonialCarousel";

const carousel = [
  {
    image: {
      id: "1",
      imageUrl: "/img/modulo_1.png",
      altImage: "Módulo 01",
      ariaLabel: "Icone do Módulo 01",
      sizes: "100vw",
    },
    texts: {
      title: "Módulo 01",
      description:
        "Introdução - Panorama atual da demência, modelos de demência e tratamentos disponíveis para a condição.",
    },
  },
  {
    image: {
      id: "2",
      imageUrl: "/img/modulo_2.png",
      altImage: "Módulo 02",
      ariaLabel: "Icone do Módulo 02",
      sizes: "100vw",
    },
    texts: {
      title: "Módulo 02",
      description:
        "Vantagens e benefícios da CST – Estudos científicos brasileiros e internacionais que indicam a eficácia do tratamento",
    },
  },
  {
    image: {
      id: "3",
      imageUrl: "/img/modulo_3.png",
      altImage: "Módulo 03",
      ariaLabel: "Icone do Módulo 03",
      sizes: "100vw",
    },
    texts: {
      title: "Módulo 03",
      description:
        "Visão geral do tratamento - O desenvolvimento da CST no Reino Unido e no mundo e o processo de adaptação ",
    },
  },
  {
    image: {
      id: "4",
      imageUrl: "/img/modulo_4.jpg",
      altImage: "Módulo 04",
      ariaLabel: "Icone do Módulo 04",
      sizes: "100vw",
    },
    texts: {
      title: "Módulo 04",
      description: "Apresentação detalhada do tratamento - Princípios gerais do tratamento e apresentação das sessões.",
    },
  },
  {
    image: {
      id: "5",
      imageUrl: "/img/modulo_5.jpg",
      altImage: "Módulo 05",
      ariaLabel: "Icone do Módulo 05",
      sizes: "100vw",
    },
    texts: {
      title: "Módulo 05",
      description: "Roleplay - Os participantes podem experienciar, na prática, como é ser um facilitador da CST.",
    },
  },
];

const advantagesData = [
  {
    id: 1,
    image: "/img/iconComunityDark.png",
    imageLight: "/img/iconComunityLight.png",
    title: "Faça parte de uma comunidade digital com facilitadores da CST de todo o Brasil",
  },

  {
    id: 2,
    image: "/img/iconReconhecimentoDark.png",
    imageLight: "/img/iconReconhecimentoLight.png",
    title: "Seja um dos primeiros a ofertar um tratamento inovador e mundialmente reconhecido no Brasil",
  },
  {
    id: 3,
    image: "/img/iconDiplomaDark.png",
    imageLight: "/img/iconDiplomalight.png",
    title: "Tenha acesso a um plano supervisões e certificações após a conclusão do curso",
  },
  {
    id: 4,
    image: "/img/iconDark.png",
    imageLight: "/img/iconLight.png",
    title: "Ajude a cuidar de pessoas com demência através de um tratamento eficaz, protocolizado e sistematizado",
  },
  {
    id: 5,
    image: "/img/iconScienceDark.png",
    imageLight: "/img/iconSciencelight.png",
    title: "Utilize tratamentos baseados em evidências na sua prática clínica",
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
              CST - TERAPIA DE ESTIMULAÇÃO COGNITIVA{" "}
              <span className="font-bold">para estudantes e profissionais da saúde!</span>
            </h1>
            <h2 className="mt-2 mb-4 text-base text-branco-100 font-normal leading-7 tracking-wide max-w-[30rem]">
              Primeiro tratamento para demência não medicamentoso, protocolizado e baseado em evidências científicas
            </h2>
            <div>
              <Button text="Inscreva-se" variant="outlined" />
            </div>
          </div>
          <div className="flex flex-col basis-full lg:basis-1/2 mt-6 lg:mt-16"></div>
        </div>
      </BackgroundImageWithTheme>
      <div>
        <div className="mb-[2.375rem]">
          <div className="max-w-[70rem] mx-auto">
            <TitleDefault
              title="SOBRE A CST"
              subtitle=""
              alignment="text-center"
            />
            
          </div>
        </div>
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
                vários países, incluindo o Brasil. Consiste em um protocolo com 14 sessões temáticas e divertidas para
                estimular memória, linguagem, orientação e outros aspectos. Estudos mostram evidências de seus efeitos
                benéficos para o quadro dos pacientes e redução dos níveis de sobrecarga dos cuidadores
              </p>
              <div className="flex flex-row justify-start gap-5">
                <Button text="Saiba mais" variant="default" href="https://cstbrasil.com.br" />
                <Button text="Fazer inscrição" variant="default" href="https://cstbrasil.com.br" />
              </div>
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
            title="Capacitação para CST"
            subtitle="Treinamento para se tornar um facilitador(a) da CST"
            alignment="text-center"
            extraClassName="sm:hidden" 
          />
             
          <TitleDefault
            title="CURSO DE CAPACITAÇÃO PARA CST"
            subtitle="Treinamento para se tornar um facilitador(a) da CST"
            alignment="text-center"
            extraClassName="hidden sm:block s" 
          />
        </div>  
          <p className="px-5 lg:max-w-[65rem] mx-auto text-base text-center">
            Treinamento realizado inteiramente online, oferecendo flexibilidade para se ajustar à sua agenda. Os
            participantes receberão, através do serviço postal, o manual da CST para apoio adicional e certificado de
            conclusão do curso.
            <br />
            <br />
            
              Oferecemos pacotes diferenciados para empresas interessadas na implementação da CST em seu serviço. Entre
              em contato por mensagem.{" "}
            </p>
          
        </div>
        <div className="max-w-[82.125rem] mx-auto px-3 2sm:px-8">
          <Carousel images={carousel} type="2" />
        </div>
      </div>

      <div className="max-w-[82.125rem] mx-auto px-3 2sm:px-8 pb-12 mt-[4.5rem]">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-4 sm:px-8 md:px-24 lg:px-48 items-start">
          {advantagesData.slice(0, 2).map((advantage) => (
            <div key={advantage.id} className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center lg:min-h-[80px]">
                <ImageWithTheme
                  lightSrc={advantage.imageLight}
                  darkSrc={advantage.image}
                  alt={advantage.title}
                  width={64}
                  height={64}
                />
              </div>
              <p className="text-lg mt-2 min-h-[3rem]">{advantage.title}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start mt-8">
          {advantagesData.slice(2).map((advantage, index) => (
            <div key={advantage.id} className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center min-h-[80px]">
                <ImageWithTheme
                  lightSrc={advantage.imageLight}
                  darkSrc={advantage.image}
                  alt={advantage.title}
                  width={64}
                  height={64}
                />
              </div>
              <p className="text-lg mt-2 min-h-[3rem]">{advantage.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[82.125rem] mx-auto pt-12 px-3 2sm:px-8 flex justify-between items-center mb-10 gap-4  sm:flex-nowrap flex-wrap">
        <div>
          <TitleDefault
            title="Depoimentos"
            subtitle="Histórias de sucesso"
            description="Confira alguns depoimentos de pacientes e familiares sobre a participação na CST e de profissionais da área da saúde que atuam como facilitadores."
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
            <div className="max-w-[50rem] mx-auto px-3 2sm:px-8 rounded-lg bg-[rgba(255,255,255,0.75)] dark:bg-[rgba(0,0,0,0.75)]">
              <TestimonialCarousel />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[82.125rem] mx-auto px-3 2sm:px-8">
        <InstructorCarousel />
      </div>

      <div className="my-10 max-w-[46rem] mx-auto px-3">
        <TitleDefault
          title="Investimento"
          subtitle="Garanta sua vaga hoje mesmo!"
          description="O treinamento será apresentado pelo grupo de pesquisadores que trouxe a CST para o Brasil."
          alignment="text-center"
        />
      </div>

      <div className="text-branco-100-2 py-12 px-6 mb-[4rem]">
        <div className="max-w-[82.125rem] mx-auto px-3 2sm:px-8 grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="p-6 sm:p-10 h-full bg-cinza-900">
            <div className=" flex flex-col max-w-[30.875rem] justify-between h-full gap-8">
              <p className="mb-0 text-3xl max-w-[27rem] text-branco-100">
                Inicie sua jornada dentro da metodologia CST</p>
                <div className="pt-32">
                  
                </div>
              
            </div>
          </div>
          <div className="bg-branco-cinza-escuro p-6 sm:p-10 text-center md:text-left">
            <div className="max-w-[30.438rem]">
              <p className="text-3xl mb-8 text-cinza-900-branco">Seu investimento</p>
              <div className="flex justify-between mb-8 gap-2 sm:flex-nowrap flex-wrap">
                <div>
                  <p className="text-xl text-cinza-900-branco">De R$ 3.500 por</p>
                  <p className="text-5xl font-semibold text-cinza-900-branco">R$ 2.300</p>
                </div>
                <p className="text-base text-cinza-900-branco justify-end">
                  Ou em até 05x <br />
                  no cartão de crédito
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
