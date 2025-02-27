import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import { SelectedSnapDisplay, useSelectedSnapDisplay } from "./EmblaCarouselSelectedSnapDisplay";
import { ItemCarouselType1, ItemCarouselType2 } from "../ui/Carousel";

type PropType = {
  type?: string;
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options, type } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  return (
    <section className="embla2 relative">
      <div className="embla__viewport2" ref={emblaRef}>
        <div className="embla__container2">
          {images.map((image, index) => {
            if (type === "1" || !type) {
              return (
                <div
                  key={index}
                  className="flex-shrink-0 embla__slide2"
                  style={{ flexBasis: "calc(100% / 3)", maxWidth: "calc(100% / 3)" }}
                >
                  <ItemCarouselType1 {...image} />
                </div>
              );
            } else {
              return (
                <div key={index} className="embla__slide2 flex-shrink-0 w-full sm:w-1/3 lg:w-1/3 md:w-[20rem]">
                  <ItemCarouselType2 {...image} />
                </div>
              );
            }
          })}
        </div>
      </div>

      <button
        aria-label="Avançar para esquerda"
        onClick={onPrevButtonClick}
        className="absolute left-0 z-10 p-2 transform -translate-y-1/2 top-1/2 bg-[rgb(29,44,70,0.5)] rounded-full text-branco-100"
        type="button"
      >
        <svg className="w-8 h-8" viewBox="0 0 532 532">
          <path
            fill="currentColor"
            d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
          />
        </svg>
      </button>

      <button
        aria-label="Avançar para direita"
        onClick={onNextButtonClick}
        className="absolute right-0 z-10 p-2 transform -translate-y-1/2 top-1/2 bg-[rgb(29,44,70,0.5)] rounded-full text-branco-100"
        type="button"
      >
        <svg className="w-8 h-8" viewBox="0 0 532 532">
          <path
            fill="currentColor"
            d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
          />
        </svg>
      </button>

      <div className="embla__controls2">
        <SelectedSnapDisplay selectedSnap={selectedSnap} snapCount={snapCount} />
      </div>
    </section>
  );
};

export default EmblaCarousel;

export const images = [
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
        "Introdução - Panorama atual da demência, modelos de demência e tratamentos disponíveis para a condição;",
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
        "Visão geral do tratamento - O desenvolvimento da CST no Reino Unido e no mundo e o processo de adaptação e validação da CST no Brasil;",
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
        "Vantagens e benefícios da CST – Estudos científicos brasileiros e internacionais que indicam a eficácia do tratamento, seus benefícios e vantagens econômicas e sociais;",
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
      description: "Apresentação detalhada do tratamento - Princípios gerais do tratamento e apresentação das sessões;",
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
