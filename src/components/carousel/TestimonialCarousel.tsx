import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const testimonials = [
  {
    title: "Roberta Silva, Cuidadora ",
    text: "“Eu estava muito irritada, muito nervosa, e comecei a ficar com muita raiva porque meus irmãos não participam, mas aí eu comecei a me desprender, com este tratamento me deu uma sensação boa de eu poder fazer alguma coisa por mim, comecei a fazer exercícios, cuidar da minha coluna.”",
  },
  {
    title: "Maria José",
    text: "“O que as pessoas ao redor, minha sobrinha, a faxineira, disseram [é] que ele está mais receptivo, está falando mais (...) conversando melhor, conversando [por] mais tempo, porque antes mais resmungava. Ele desenvolve mais os assuntos.”",
  },
  {
    title: "Renato Araújo da Silva",
    text: "“A gente percebeu como [CST] era muito interessante, muito bom para ela, como ela estava conversando com todo mundo, o quanto ela gostava. Então, para nós, vê-la feliz e como tudo aconteceu nos deixou satisfeitos, também achamos interessante.”",
  },
  {
    title: "Renato Araújo da Silva",
    text: "“Era um descanso que eu tinha aquele horário, então, automaticamente, (...) você fica mais bem-humorada, então melhora a gente.”",
  },

  {
    title: "Renato Araújo da Silva",
    text: "“Me deu uma sensação boa de saber que eu era capaz de fazer algo para ajudá-la, para melhorar a sua qualidade de vida.”",
  },
  {
    title: "Renato Araújo da Silva",
    text: "“Eu tava mais alegre, tava fazendo alguma coisa, uma atividade, você tá se alegrando. Anima, né?”",
  },
  {
    title: "Renato Araújo da Silva",
    text: "“Ótima. Faz relembrar, movimenta a memória, muito interessante. Muito bom. Porque desperta a memória. Força a lembrança também.”",
  },
  {
    title: "Renato Araújo da Silva",
    text: "“Ela está mais focada, os episódios em que ela pergunta 'O que que eu ia falar mesmo?’, porque ela tinha esquecido, têm sido menos frequentes. A palavra vem mais rápido na sua cabeça, e ela não fica tão nervosa como costumava ficar. Isso a deixa mais calma.”",
  },
  {
    title: "Renato Araújo da Silva",
    text: "“Ele gostou tanto de participar do grupo que perguntou se poderia vir mais vezes”",
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
              <p className="text-cinza-900-branco text-center text-2xl font-bold">
                {testimonial.title}
              </p>
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
            className={`w-3 h-3 mx-1 rounded-full ${
              index === selectedIndex ? "bg-amarelo-100" : "bg-gray-500"
            }`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            aria-label={`Ir para o slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;