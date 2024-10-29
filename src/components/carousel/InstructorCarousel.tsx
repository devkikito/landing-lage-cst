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
                    title="instrutor"
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
    name: "Daniel Mograbi",
    image: "/img/profile-daniel.png",
    description: `Psicólogo formado pela UFRJ, PhD em Psicologia e Neurociências pelo Institute of Psychiatry, King's College London. Professor adjunto do Departamento de Psicologia da PUC-Rio, pesquisador-visitante de King's College London e professor-colaborador do Programa de Pós-Graduação em Psiquiatria e Saúde Mental do IPUB-UFRJ. É Jovem Cientista do Nosso Estado pela FAPERJ desde 2016 e foi Newton Advanced Fellow pela Royal Society e Academy of Medical Sciences, UK, entre 2016 e 2019. Em 2019, tornou-se o primeiro pesquisador latino-americano a receber o Early Career Award da International Neuropsychological Society por suas contribuições para a compreensão da relação entre cérebro e comportamento no início de sua trajetória acadêmica. Coordenador do projeto de adaptação e validação da CST para a população Brasileira.`,
    awards: [
      "Recebeu o Early Career Award da International Neuropsychological Society em 2019.",
      "Reconhecimento por suas contribuições no entendimento da relação entre cérebro e comportamento no início de sua carreira acadêmica.",
    ],
  },
  {
    name: "Iris Bomilcar",
    image: "/img/profile-iris.jpg",
    description: `Neurocientista e Mestre em Neurociência Clínica e Experimental pela Universidade de Colônia, Alemanha. Nutricionista formada pela Faculdade Arthur Sá Earp Neto (FASE, Petrópolis, RJ). Doutora em Saúde Mental pelo Instituto de Psiquiatria UFRJ. Formada em Terapia Sistêmica e Terapia Centrada no Cliente pela Universidade de Colônia. Formada em Terapia de Estimulação Cognitiva (CST) pela Dementia Pathfinders Community Interest Company. Coordena a implementação comercial da CST no Brasil. .`,
    awards: ["Coordena a implementação comercial da CST no Brasil. "],
  },
  {
    name: "Renata Naylor",
    image: "/img/profile-renata.png",
    description: `Psicóloga e mestre em Psicologia Clínica e Neurociências, ambos pela PUC-Rio. Formada em Terapia de Estimulação Cognitiva (CST) pela University College of London, em Terapia Cognitivo-Comportamental pela Ação Cognitiva e formanda em Terapia do Esquema pelo Insere. Uma das autoras do manual brasileiro da CST.`,
    awards: ["Uma das autoras do manual brasileiro da CST."],
  },
  {
    name: "Raquel Santos de Carvalho",
    image: "/img/profile-raquel.jpg",
    description: `Psicóloga graduada pela UFRJ, Mestra e Doutora Saúde Mental pelo Instituto de Psiquiatria da UFRJ. Atualmente, é pesquisadora de pós-doutorado na PUC-Rio. Formada em Terapia de Estimulação Cognitiva (CST) pela University College of London. Trabalha no projeto de implementação da CST no Brasil, coordenando o desenvolvimento de grupos da CST e de cursos de conscientização para demência no país. `,
    awards: [
      "Trabalha no projeto de implementação da CST no Brasil, coordenando o desenvolvimento de grupos da CST e de cursos de conscientização para demência no país. ",
    ],
  },
  {
    name: "Vitória Velloso",
    image: "/img/profile-vitoria.jpg",
    description: `Psicóloga formada pela UFRJ. Mestre em Psicologia Clínica e Neurociências pela Pontifícia Universidade Católica do Rio de Janeiro (PUC-Rio). Formada em Terapia de Estimulação Cognitiva (CST) pela PUC-Rio, onde participou como co-facilitadora na pesquisa de adaptação e validação da CST para o meio virtual. `,
    awards: [
      "Participou como co-facilitadora na pesquisa de adaptação e validação da CST para o meio virtual, na PUC-Rio",
    ],
  },
];
