import React from "react";
import ImageWithTheme from "@/components/image/ImageWithTheme";

const data = [
  {
    image: "/img/resultados_icone_1.png",
    imageLight: "/img/resultados_icone_1-light.png",
    title: "Utilizado em mais de 35 países pelo mundo",
  },
  {
    image: "/img/iconHumanDark.png",
    imageLight: "/img/iconHumanLight.png",
    title: "Resultados apoiados em evidências científicas",
  },
  {
    image: "/img/resultados_icone_3.png",
    imageLight: "/img/resultados_icone_3-light.png",
    title: "14 sessões temáticas e divertidas que estimulam diferentes domínios cognitivos e funcionais ",
  },
  {
    image: "/img/resultados_icone_2.png",
    imageLight: "/img/resultados_icone_2-light.png",
    title: "Tratamento centrado na pessoa, baseado em respeito e inclusão",
  },
];

const ResultsSection = () => {
  return (
    <div className="text-center pb-12 max-w-[82.125rem] mx-auto px-3 2sm:px-8">
      <div className="mb-6 max-w-[26.563rem] mx-auto"></div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-4">
              <ImageWithTheme lightSrc={item.imageLight} darkSrc={item.image} alt={item.title} width={64} height={64} />
            </div>
            <p className="text-cinza-900-branco text-center">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsSection;
