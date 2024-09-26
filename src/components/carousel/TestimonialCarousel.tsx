import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { TitleDefault } from "../texts/TitleDefault";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const testimonials = [
  {
    title: "Depoimento 1",
    text: "“Eu estava muito irritada, muito nervosa, e comecei a ficar com muita raiva porque meus irmãos não participam, mas aí eu comecei a me desprender, com este tratamento me deu uma sensação boa de eu poder fazer alguma coisa por mim, comecei a fazer exercícios, cuidar da minha coluna.”",
  },
  {
    title: "Depoimento 2",
    text: "“O que as pessoas ao redor, minha sobrinha, a faxineira, disseram [é] que ele está mais receptivo, está falando mais (...) conversando melhor, conversando [por] mais tempo, porque antes mais resmungava. Ele desenvolve mais os assuntos.”",
  },
  {
    title: "Depoimento 3",
    text: "“A gente percebeu como [CST] era muito interessante, muito bom para ela, como ela estava conversando com todo mundo, o quanto ela gostava. Então, para nós, vê-la feliz e como tudo aconteceu nos deixou satisfeitos, também achamos interessante.”",
  },
  {
    title: "Depoimento 4",
    text: "“Era um descanso que eu tinha aquele horário, então, automaticamente, (...) você fica mais bem-humorada, então melhora a gente.”",
  },

  {
    title: "Depoimento 5",
    text: "“Me deu uma sensação boa de saber que eu era capaz de fazer algo para ajudá-la, para melhorar a sua qualidade de vida.”",
  },
  {
    title: "PvcD",
    text: "“Eu tava mais alegre, tava fazendo alguma coisa, uma atividade, você tá se alegrando. Anima, né?”",
  },
  {
    title: "PvcD",
    text: "“Ótima. Faz relembrar, movimenta a memória, muito interessante. Muito bom. Porque desperta a memória. Força a lembrança também.”",
  },
  {
    title: "Cuidadores",
    text: "“Ela está mais focada, os episódios em que ela pergunta 'O que que eu ia falar mesmo?’, porque ela tinha esquecido, têm sido menos frequentes. A palavra vem mais rápido na sua cabeça, e ela não fica tão nervosa como costumava ficar. Isso a deixa mais calma.”",
  },
  {
    title: "Cuidadores",
    text: "“Ele gostou tanto de participar do grupo que perguntou se poderia vir mais vezes”",
  },
];

const TestimonialCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    const autoplay = setInterval(() => {
      scrollNext();
    }, 5000);

    return () => clearInterval(autoplay);
  }, [scrollNext]);

  return (
    <div className="relative bg-dark-900 text-branco-100 p-10 pb-2 rounded-lg">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center min-w-full gap-6 p-4">
              <TitleDefault title={testimonial.title} alignment="text-center" textColor="text-branco-100" />
              <p className="text-cinza-900-branco text-center text-xl">{testimonial.text}</p>
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
    </div>
  );
};

export default TestimonialCarousel;
