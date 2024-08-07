import React from "react";
import Image from "next/image";
import { TitleDefault } from "../texts/TitleDefault";

const data = [
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

const ResultsSection = () => {
  return (
    <div className="text-center py-12">
      <div className="mb-6">
        <TitleDefault
          title="Resultados"
          subtitle="Os resultados e dados comprovados falam por si mesmos"
          alignment="text-center"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-4">
              <Image src={item.image} alt={item.title} width={64} height={64} />
            </div>
            <p className="text-branco-100 text-center">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsSection;
