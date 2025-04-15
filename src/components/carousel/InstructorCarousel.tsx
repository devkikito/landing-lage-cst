import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { TitleDefault } from "../texts/TitleDefault";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

type PropType = {
  options?: EmblaOptionsType;
};

const InstructorCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container select-none">
          {profiles.map((profile, index) => (
            <div key={index} className=" embla__slide flex flex-col md:flex-row items-center min-w-full gap-10">
              <div className="w-full md:w-2/3">
                <div className="mt-4">
                  <TitleDefault
                    title={profile.topTitle}
                    subtitle={profile.name}
                    alignment="text-left"
                    textColor="text-cinza-900-branco"
                  />
                </div>
                <p className="mb-4 text-cinza-900-branco text-2xl">{profile.description}</p>
                <ul className="list-disc pl-5">
                  {profile.awards.map((award, idx) => (
                    <li key={idx} className="mb-2 text-cinza-900-branco text-lg">
                      {award}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <Image src={profile.image} alt={profile.name} width={479} height={496} className="rounded-lg h-full" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute md:-left-6 left-0 z-10 p-2 transform -translate-y-1/2 top-1/2 bg-gray-700 rounded-full text-branco-100 -ml-5"
        onClick={onPrevButtonClick}
        aria-label="Voltar para o ultimo instrutor"
      >
        <FiArrowLeft className="text-xl" aria-hidden="true" />
      </button>
      <button
        className="absolute md:-right-6 right-0 z-10 -mr-5 p-2 transform -translate-y-1/2 top-1/2 bg-gray-700 rounded-full text-branco-100"
        onClick={onNextButtonClick}
        aria-label="Avançar para o próximo instrutor"
      >
        <FiArrowRight className="text-xl" aria-hidden="true" />
      </button>
    </section>
  );
};

export default InstructorCarousel;

export const profiles = [
  {
    topTitle: "Instrutor",
    name: "Daniel Mograbi",
    image: "/img/profile-daniel.png",
    description: `Psicólogo formado pela Universidade Federal do Rio de Janeiro (UFRJ), PhD em Psicologia e Neurociências pelo Institute of Psychiatry, King's College London. Sócio da Lumen, coordenador do projeto da CST e autor do manual da CST.`,
    awards: [
      "Recebeu o Early Career Award da International Neuropsychological Society em 2019.",
      "Reconhecimento por suas contribuições no entendimento da relação entre cérebro e comportamento no início de sua carreira acadêmica.",
    ],
  },
  {
    topTitle: "Instrutora",
    name: "Iris Bomilcar",
    image: "/img/profile-iris.jpg",
    description: `Neurocientista formada pela Universidade de Colônia, Alemanha e Doutora em Saúde Mental pelo Programa de Pós-graduação em Psiquiatria e Saúde Mental (PROPSAM) do Instituto de Psiquiatria da Universidade Federal do Rio de Janeiro (IPUB - UFRJ). Sócia da Lumen e especialista em CST.`,
    awards: ["Coordena a implementação comercial da CST no Brasil. "],
  },
  {
    topTitle: "Instrutora",
    name: "Renata Naylor",
    image: "/img/profile-renata.png",
    description: `Psicóloga e Mestre em Psicologia e Neurociências, ambos pela PUC-Rio. Certificada em Terapia de Estimulação Cognitiva pela Aimee Spector via Dementia Pathfinders UK, participou dos estudos de validação e adaptação da CST no Brasil e é uma das coautoras do manual da versão brasileira do protocolo. Na clínica, trabalha com psicoterapia e reabilitação neuropsicológica exclusivamente para pessoas idosas.`,
    awards: ["Uma das autoras do manual brasileiro da CST."],
  },
  {
    topTitle: "Instrutora",
    name: "Raquel Santos de Carvalho",
    image: "/img/profile-raquel.jpg",
    description: `Psicóloga graduada pela UFRJ e Doutora em Saúde Mental pelo Programa de Pós-graduação em Psiquiatria e Saúde Mental (PROPSAM) do Instituto de Psiquiatria da Universidade Federal do Rio de Janeiro (IPUB - UFRJ). Especialista em CST e professora do treinamento.`,
    awards: [
      "Trabalha no projeto de implementação da CST no Brasil, coordenando o desenvolvimento de grupos da CST e de cursos de conscientização para demência no país. ",
    ],
  },
  {
    topTitle: "Instrutora",
    name: "Vitória Velloso",
    image: "/img/profile-vitoria.jpg",
    description: `Psicóloga formada pela Universidade Federal do Rio de Janeiro (UFRJ) e Mestre em Psicologia Clínica e Neurociências pela Pontifícia Universidade Católica do Rio de Janeiro (PUC-Rio). Especialista em CST e professora do treinamento.`,
    awards: [
      "Participou como co-facilitadora na pesquisa de adaptação e validação da CST para o meio virtual, na PUC-Rio",
    ],
  },
];
