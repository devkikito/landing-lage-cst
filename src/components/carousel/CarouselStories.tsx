"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { FaPause, FaPlay } from "react-icons/fa";
import { useRouter } from "next/navigation";

export const CarouselStories: React.FC<{ stories: any[] }> = ({ stories }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const startX = useRef<number | null>(null);
  const diffX = useRef(0);

  const router = useRouter();

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  }, [stories.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + stories.length) % stories.length);
  }, [stories.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (startX.current !== null) {
      diffX.current = e.touches[0].clientX - startX.current;
    }
  };

  const handleTouchEnd = () => {
    if (startX.current !== null) {
      if (diffX.current > 50) {
        handlePrev();
      } else if (diffX.current < -50) {
        handleNext();
      }
    }
    startX.current = null;
    diffX.current = 0;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    startX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (startX.current !== null) {
      diffX.current = e.clientX - startX.current;
    }
  };

  const handleMouseUp = () => {
    if (startX.current !== null) {
      if (diffX.current > 50) {
        handlePrev();
      } else if (diffX.current < -50) {
        handleNext();
      }
    }
    startX.current = null;
    diffX.current = 0;
  };

  // Auto slide
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(handleNext, 7500);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <div
      className="relative w-full min-h-[calc(100vh-120px)] sm:min-h-[45rem] overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {stories.map((story, index) => (
        <div
          key={story.id}
          className={cn(
            "absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out",
            {
              "translate-x-0": index === currentIndex,
              "translate-x-full": index > currentIndex,
              "-translate-x-full": index < currentIndex,
            }
          )}
        >
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={story.imagem!}
              alt={story.titulo}
              layout="fill"
              objectFit="cover"
              draggable={false}
              className="absolute inset-0 w-full h-full object-cover blur-xl "
              style={{
                transform: "scale(1.1)",
                transformOrigin: "center center",
              }}
            />
            <div className=" block sm:hidden absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute inset-0 sm:bg-opacity-80 flex mx-auto w-full items-center justify-center  sm:py-12 text-white sm:px-4">
              <button
                aria-label="Anterior"
                onClick={handlePrev}
                className="max-sm:absolute left-2 z-50 bg-none p-2 rounded-full h-full select-none"
              >
                <span title="Ir para a notícia anterior" className="px-2 py-1 bg-white/45 rounded-lg text-white">
                  {"<"}
                </span>
              </button>

              <div
                className=" relative flex flex-col gap-4 w-full sm:max-w-[28.5rem] h-full sm:h-full sm:aspect-[9/16] rounded-lg justify-end "
                style={{ backgroundImage: `url(${story.imagem})`, backgroundSize: "cover" }}
              >
                <div className="relative flex flex-col gap-4 w-auto h-full aspect-[9/16] rounded-lg justify-end">
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black to-transparent sm:rounded-lg"
                    style={{ zIndex: 1 }}
                  />
                  <div
                    className="absolute sm:hidden inset-0 top-0 left-0 w-full h-16 bg-gradient-to-b from-black to-transparent "
                    style={{ zIndex: 1 }}
                  />
                  <div className="relative z-10 flex flex-col gap-1 text-center items-center justify-center select-none p-4">
                    <h2 className="h2-semibold text-[1.125rem] leading-none">{story.titulo}</h2>
                    <p>{story.resumo}</p>
                  </div>
                </div>
              </div>

              <button
                aria-label="Posterior"
                onClick={handleNext}
                className="max-sm:absolute right-2 z-50 bg-none p-2 rounded-full h-full select-none"
              >
                <span title="Ir para a próxima notícia" className="px-2 py-1 bg-white/45 rounded-lg text-white">
                  {">"}
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute top-0 left-0 w-full flex gap-4 justify-center mt-4 mx-auto">
        <div className="w-min flex justify-center items-center">
          {stories.map((_, index) => (
            <button
              aria-label="Barra de stories"
              onClick={() => {
                setCurrentIndex(index);
                setIsPaused(true);
              }}
              key={index}
              className={cn("h-1 mx-1 transition-all cursor-pointer", {
                "w-8 bg-var-verde-300 rounded-lg": index === currentIndex,
                "w-4 bg-white rounded-lg": index !== currentIndex,
              })}
            ></button>
          ))}
        </div>
        <button
          aria-label="Pausar e continuar"
          onClick={togglePause}
          className="text-white h-4 -mt-1 flex justify-center items-center"
        >
          {isPaused ? <FaPlay /> : <FaPause />}
        </button>
      </div>
    </div>
  );
};
