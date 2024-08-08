import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { TitleDefault } from "../texts/TitleDefault";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const profiles = [
  {
    name: "Daniel Mograbi",
    image: "/img/profile-daniel.png",
    description: `Psicólogo formado pela Universidade Federal do Rio de Janeiro (UFRJ), PhD em Psicologia e Neurociências pelo Institute of Psychiatry, King's College London, atualmente é professor adjunto do Departamento de Psicologia da Pontifícia Universidade Católica do Rio de Janeiro (PUC-Rio), pesquisador-visitante de King's College London e professor-colaborador do Programa de Pós-Graduação em Psiquiatria e Saúde Mental do IPUB-UFRJ`,
    awards: [
      "Recebeu o Early Career Award da International Neuropsychological Society em 2019.",
      "Reconhecimento por suas contribuições no entendimento da relação entre cérebro e comportamento no início de sua carreira acadêmica.",
    ],
  },
  {
    name: "Renata Naylor",
    image: "/img/profile-renata.png",
    description: `Psicóloga e mestre em Psicologia Clínica e Neurociências, ambos pela Pontifícia Universidade Católica do Rio de Janeiro (PUC-Rio). Formada em Terapia de Estimulação Cognitiva (CST) pela University College of London, em Terapia Cognitivo-Comportamental pela Ação Cognitiva e formanda em Terapia do Esquema pelo Insere. É professora do treinamento, para profissionais e estudantes, em Terapia de Estimulação Cognitiva (CST) para pessoas vivendo com demência na PUC-Rio e uma das autoras do manual brasileiro da CST.`,
    awards: [
      "Abordagem clínica utilizando psicologia baseada em evidências.",
      "Princípios do tratamento centrado na pessoa.",
    ],
  },
];

const PartnerCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative bg-dark-900 text-branco-100 p-10 rounded-lg">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {profiles.map((profile, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center min-w-full gap-10">
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <Image src={profile.image} alt={profile.name} width={479} height={496} className="rounded-lg" />
              </div>
              <div className="w-full md:w-2/3">
                <div className="mt-4">
                  <TitleDefault title="Sócios" subtitle={profile.name} alignment="text-left" />
                </div>
                <p className="mb-4">{profile.description}</p>
                <ul className="list-disc pl-5">
                  {profile.awards.map((award, idx) => (
                    <li key={idx} className="mb-2">
                      {award}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute left-0 z-10 p-2 transform -translate-y-1/2 top-1/2 bg-gray-700 rounded-full text-branco-100"
        onClick={scrollPrev}
      >
        <FiArrowLeft className="text-xl" />
      </button>
      <button
        className="absolute right-0 z-10 p-2 transform -translate-y-1/2 top-1/2 bg-gray-700 rounded-full text-branco-100"
        onClick={scrollNext}
      >
        <FiArrowRight className="text-xl" />
      </button>
    </div>
  );
};

export default PartnerCarousel;
