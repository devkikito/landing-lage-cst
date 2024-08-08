import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { TitleDefault } from "../texts/TitleDefault";

const profiles = [
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

const InstructorCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative bg-dark-900 text-branco-100 p-6 rounded-lg">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {profiles.map((profile, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center min-w-full">
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
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <Image src={profile.image} alt={profile.name} width={200} height={200} className="rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute left-0 z-10 p-2 transform -translate-y-1/2 top-1/2 bg-gray-700 rounded-full text-branco-100"
        onClick={scrollPrev}
      >
        &#8249;
      </button>
      <button
        className="absolute right-0 z-10 p-2 transform -translate-y-1/2 top-1/2 bg-gray-700 rounded-full text-branco-100"
        onClick={scrollNext}
      >
        &#8250;
      </button>
    </div>
  );
};

export default InstructorCarousel;
