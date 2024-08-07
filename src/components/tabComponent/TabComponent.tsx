import React, { useState } from "react";
import Image from "next/image";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("Mobilidade");

  const tabs = [
    {
      label: "Mobilidade",
      content:
        "Autonomia é a palavra-chave. O T.I.N.A. transforma a experiência de pessoas com diversidade funcional, oferecendo uma navegação precisa em diversos ambientes, ajudando-as a deslocarem-se com confiança e independência.",
      imgSrc: "/img/mobilidadeCard.jpg",
    },
    {
      label: "Cultura",
      content:
        "O T.I.N.A. oferece descrições detalhadas de exposições de arte e exposições, permitindo que pessoas cegas ou com baixa visão acessem informações enriquecedoras e detalhadas em eventos culturais. A ferramenta de interpretação e tradução do aplicativo também ajuda a superar barreiras linguísticas e de comunicação.",
      imgSrc: "/img/culturaCard.jpg",
    },
    {
      label: "Varejo",
      content:
        "Promover a acessibilidade no varejo não é apenas uma questão de cumprir regulamentações, mas de valorizar a diversidade e proporcionar um serviço de excelência a todos os clientes. A implementação do T.I.N.A. demonstra um compromisso com a inclusão e a responsabilidade social",
      imgSrc: "/img/varejoCard.jpg",
    },
  ];

  const activeTabContent = tabs.find((tab) => tab.label === activeTab);

  return (
    <div className="flex flex-col lg:flex-row justify-center mt-14 pt-10 pb-20 max-w-[73.125rem] mx-auto px-3 2sm:px-8">
      <div className="w-full lg:w-1/5 border-r-2 border-gray-300 mb-3 mr-0 lg:mr-8 mt-4">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`p-4 w-full text-left text-cinza-800 ${
              activeTab === tab.label ? "bg-azul-40-2 font-bold border-r-2 border-azul-150" : "bg-branco-150"
            }`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {activeTabContent && (
        <div className="w-full lg:w-3/4 p-4 bg-azul-40-2 flex flex-col lg:flex-row items-start rounded-lg">
          <div className="flex-1">
            <h2 className="font-semibold text-cinza-800 text-2xl mb-4 pt-14 ml-3">{activeTabContent.label}</h2>
            <p className="text-base mb-4 text-cinza-800 ml-3">{activeTabContent.content}</p>
          </div>
          <div className="flex-shrink-0 ml-0 lg:ml-16 w-full lg:w-96 h-64 sm:h-80 lg:h-auto">
            <div className="relative w-full h-full lg:w-96 lg:h-96 rounded-lg overflow-hidden">
              <Image
                src={activeTabContent.imgSrc}
                alt={`Imagem de ${activeTabContent.label}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TabComponent;
