import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const testimonials = [
  {
    title: "Participante do grupo da CST",
    text: "“Estava muito irritada e nervosa, com raiva porque meus irmãos não participavam. Com o tratamento, comecei a me desprender, senti uma sensação boa de poder fazer algo por mim. Comecei a fazer exercícios e a cuidar da minha coluna.”",
  },
  {
    title: "Cuidador familiar de membro do grupo da CST",
    text: "“As pessoas ao redor, como minha sobrinha e a faxineira, notaram que ele está mais receptivo e fala mais. Agora, ele conversa melhor, por mais tempo, desenvolvendo melhor os assuntos. Antes, ele mais resmungava.”",
  },
  {
    title: "Cuidador familiar de membro do grupo da CST",
    text: "“Percebemos como o CST foi interessante e benéfico para ela. Ela conversava com todos, demonstrava gostar muito. Ver sua felicidade e o progresso nos deixou muito satisfeitos.”",
  },
  {
    title: "Participante do grupo da CST",
    text: "“Aquele horário era um momento de descanso para mim. Isso me deixava mais bem-humorada, o que melhorava meu dia.”",
  },
  {
    title: "Cuidador familiar de membro do grupo da CST",
    text: "“Senti uma sensação boa ao saber que eu era capaz de fazer algo para ajudá-la, melhorando sua qualidade de vida.”",
  },
  {
    title: "Participante do grupo da CST",
    text: "“Eu estava mais alegre, fazendo uma atividade que me animava. Isso trazia ânimo, não é?”",
  },
  {
    title: "Participante do grupo da CST",
    text: "“Foi ótimo. A atividade estimula a memória, é muito interessante. Desperta lembranças e força a recordação.”",
  },
  {
    title: "Cuidador familiar de membro do grupo da CST",
    text: "“Ela está mais focada. Os momentos em que pergunta ‘O que eu ia falar mesmo?’ têm sido menos frequentes. As palavras vêm mais rápido, e ela fica menos nervosa, o que a deixa mais calma.”",
  },
  {
    title: "Cuidador familiar de membro do grupo da CST",
    text: "“Ele gostou tanto de participar do grupo que perguntou se poderia voltar mais vezes.”",
  },
];

const TestimonialCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      onSelect();
      setScrollSnaps(emblaApi.scrollSnapList());
      emblaApi.on("select", onSelect);
    }
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const autoplay = setInterval(() => {
      if (emblaApi) scrollNext();
    }, 5000);

    return () => clearInterval(autoplay);
  }, [scrollNext, emblaApi]);

  return (
    <div className="relative bg-dark-900 text-branco-100 p-10 pb-2 rounded-lg ">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center min-w-full gap-6 p-4  ">
              <p className="text-cinza-900-branco text-center text-2xl mt-20">{testimonial.text}</p>
              <p className="text-cinza-900-branco text-center text-2xl font-bold">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute left-0 z-10 p-2 transform -translate-y-1/2 top-1/2 bg-gray-700 rounded-full text-branco-100"
        onClick={scrollPrev}
        aria-label="Ir para o depoimento anterior"
        tabIndex={0}
      >
        <FiArrowLeft className="text-xl" />
      </button>
      <button
        className="absolute right-0 z-10 p-2 transform -translate-y-1/2 top-1/2 bg-gray-700 rounded-full text-branco-100"
        onClick={scrollNext}
        aria-label="Ir para o próximo depoimento"
        tabIndex={0}
      >
        <FiArrowRight className="text-xl" />
      </button>

      <div className="flex justify-center mt-5 mb-8">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${index === selectedIndex ? "bg-amarelo-100" : "bg-gray-500"}`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            aria-label={`Ir para o slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
