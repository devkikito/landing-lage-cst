"use client";
import React, { useRef } from "react";
import { InnovationInMovieSectionType, ItemCarouselType } from "@/@types/types";
import Image from "next/image";
import useDraggableScroll from "@/hooks/useDraggableScroll";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { truncateText } from "@/utils/truncateText";

export const ItemCarouselType1: React.FC<ItemCarouselType> = ({ image, texts }) => {
  return (
    <div
      unselectable="on"
      onDragStart={(e) => e.preventDefault()}
      className="relative flex justify-center flex-shrink-0 w-full max-w-[23.875rem] h-full"
    >
      <Image
        src={image.imageUrl}
        alt={image.altImage}
        sizes={image.sizes}
        aria-label={image.ariaLabel}
        className="w-full h-full rounded-lg object-cover relative"
        width={400}
        height={400}
      />
      <div className="2sm:mb-6 px-6 py-3 gap-8 rounded-lg absolute bottom-0 flex 2sm:w-[22rem] h-[15.625rem] justify-start backdrop-blur-sm bg-[#1A8772]/80 text-start select-none">
        <div className="flex gap-1 flex-col justify-start">
          <h3 className="title-card-medium text-branco-100">{texts.title}</h3>
          <p className="paragraph-card text-branco-100">{texts.description}</p>
        </div>
      </div>
    </div>
  );
};

export const ItemCarouselType2: React.FC<ItemCarouselType> = ({ image, texts }) => {
  const truncatedDescription = truncateText(texts.description!, 140);
  return (
    <div
      unselectable="on"
      onDragStart={(e) => e.preventDefault()}
      className="relative flex justify-center flex-shrink-0 w-full max-w-[23.875rem] h-full"
    >
      <Image
        src={image.imageUrl}
        alt={image.altImage}
        sizes={image.sizes}
        aria-label={image.ariaLabel}
        className="w-full h-full rounded-lg object-cover relative"
        width={400}
        height={400}
      />
      <div className="flex flex-col 2sm:mb-6 px-6 py-3 gap-2 rounded-lg absolute bottom-0  2sm:w-[22rem] h-[10rem] justify-start backdrop-blur-sm bg-[#1A8772]/80 text-start select-none">
        <div className="flex gap-1 flex-col justify-start">
          <h3 className="title-card-medium text-branco-100">{texts.title}</h3>
        </div>
        <div className="grid grid-cols-[calc(100%_-_32px)_32px] gap-3 items-center">
          <p className="paragraph-card text-branco-100">{truncatedDescription}</p>
          <FaRegArrowAltCircleRight className="w-5 h-5 text-branco-100" />
        </div>
      </div>
    </div>
  );
};

export const Carousel: React.FC<InnovationInMovieSectionType> = ({ images, link, texts, type }) => {
  const scrollRef = useDraggableScroll();
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex justify-center mt-4">
      <button
        aria-label="Avançar para esquerda"
        onClick={scrollLeft}
        className="absolute left-0 z-10 p-2 transform -translate-y-1/2 top-1/2 bg-[rgb(0,255,200,0.5)] rounded-full text-branco-100"
        type="button"
      >
        <svg className="w-8 h-8" viewBox="0 0 532 532">
          <path
            fill="currentColor"
            d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
          />
        </svg>
      </button>
      <div className=" w-full overflow-y-hidden scrollbar-hide">
        <div
          ref={scrollRef}
          className="flex space-x-4 max-h-[29rem] overflow-x-auto scrollbar-hide h-full cursor-grab active:cursor-grabbing"
        >
          {images.map((image, index) => {
            if (type === "1" || !type) {
              return <ItemCarouselType1 key={index} {...image} />;
            } else {
              return <ItemCarouselType2 key={index} {...image} />;
            }
          })}
        </div>
      </div>
      <button
        aria-label="Avançar para direita"
        onClick={scrollRight}
        className="absolute right-0 z-10 p-2 transform -translate-y-1/2 top-1/2 bg-[rgb(0,255,200,0.5)] rounded-full text-branco-100"
        type="button"
      >
        <svg className="w-8 h-8" viewBox="0 0 532 532">
          <path
            fill="currentColor"
            d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
          />
        </svg>
      </button>
    </div>
  );
};
