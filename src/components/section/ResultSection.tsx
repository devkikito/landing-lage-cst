import React from "react";
import Image from "next/image";

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
        <span className="text-sm font-bold uppercase tracking-wide border border-blue-500 rounded-full px-4 py-1 text-blue-500">
          Resultados
        </span>
      </div>
      <h2 className="text-3xl font-semibold mb-4 text-white">Os resultados e dados comprovados falam por si mesmos</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-4">
              <Image src={item.image} alt={item.title} width={64} height={64} />
            </div>
            <p className="text-white text-center">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsSection;
