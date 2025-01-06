"use client";
import React from "react";
import Image from "next/image";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import ImageWithTheme from "@/components/image/ImageWithTheme";
import InstructorCarousel from "@/components/carousel/InstructorCarousel";
import ResultsSection from "@/components/section/ResultSection";
import TestimonialCarousel from "@/components/carousel/TestimonialCarousel";
import { BackgroundImageWithTheme } from "@/components/image/BackgroundImageWithTheme";
import { Button } from "@/components/button/Button";
import { EmblaOptionsType } from "embla-carousel";
import { TitleDefault } from "@/components/texts/TitleDefault";
import { scrollToSection } from "@/utils/scrollToSection";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useRouter } from "next/navigation";
import FaqItem from "@/components/ui/FaqItem";

const faqData = [
  {
    question: "O que é a capacitação em CST?",
    answer:
      "A capacitação em Terapia de Estimulação Cognitiva (CST) é um treinamento destinado a profissionais da saúde que desejam se especializar na aplicação dessa intervenção, reconhecida globalmente como um tratamento eficaz e baseado em evidências para pessoas com demência.",
  },
  {
    question: "Quem pode participar do curso?",
    answer:
      "Este curso é direcionado a profissionais de saúde de todos os níveis, como psicólogos, terapeutas ocupacionais, enfermeiros, entre outros e alunos de graduação que estejam cursando o 8º período ou períodos mais avançados. Experiência com idosos é desejável, mas não obrigatória para participar.",
  },
  {
    question: "Como o curso é estruturado?",
    answer:
      "A capacitação é realizada em um dia, com duração de 8 horas. Durante o curso, você aprenderá sobre modelos e tipos de demência, as pesquisas e a base de evidências da CST, os princípios, suas aplicações e sessões e terá uma oportunidade prática de simular sessões em um roleplay supervisionado.",
  },
  {
    question: "O curso é oferecido presencialmente ou online?",
    answer:
      "Oferecemos o curso na modalidade online, realizada via videoconferência, com link enviado aos participantes. O formato presencial é ofertado de forma exclusiva em parceria com empresas e ocorre em local e data a serem estabelecidos.",
  },
  {
    question: "Como faço para me inscrever?",
    answer:
      "Para se inscrever, basta acessar nosso site e seguir as instruções de cadastro. Você precisará fornecer algumas informações pessoais para garantir seu acesso ao curso.",
  },
  {
    question: "Receberei algum certificado ao concluir o curso?",
    answer:
      "Sim, todos os participantes que completarem o treinamento recebem um certificado da formação de facilitadores da CST, emitido pela Lumen Ciência e Saúde, reconhecendo sua qualificação para aplicar a CST. Lembramos que a conclusão do curso não garante a aplicação do conteúdo como um curso derivado.",
  },
  {
    question: "Terei acesso ao manual da CST?",
    answer:
      "Sim, após a conclusão do treinamento, uma cópia do manual será enviada para o endereço que você preferir. Ressaltamos que o manual da CST é de uso pessoal, com conteúdo protegido por direitos autorais e destinado exclusivamente ao uso pessoal e profissional do participante. O participante não pode gravar, reproduzir, distribuir, comercializar ou modificar qualquer conteúdo do manual sem permissão prévia da empresa.",
  },
  {
    question: "Posso gravar as aulas ou compartilhar o conteúdo do curso?",
    answer:
      "Não. Todo o conteúdo do curso é protegido por direitos autorais e é destinado exclusivamente ao uso pessoal e profissional do participante. A gravação, reprodução ou compartilhamento do material sem autorização é proibida.",
  },
  {
    question: "Quais são os benefícios de fazer essa capacitação?",
    answer:
      "Além de aprender uma intervenção eficaz e humanizada para o tratamento de demência, você estará habilitado a aplicá-la com base em um protocolo estruturado e cientificamente validado, que é amplamente recomendado por diretrizes internacionais.",
  },
  {
    question: "Após a conclusão do treinamento, posso oferecer cursos de capacitação da CST?",
    answer:
      "Não. O conhecimento adquirido é destinado exclusivamente ao uso profissional direto do participante e não autoriza a criação de cursos derivados ou a formação de terceiros com base no conteúdo CST.",
  },
  {
    question: "O que acontece se eu precisar cancelar minha inscrição?",
    answer:
      "Se precisar cancelar sua inscrição, entre em contato conosco. Lembramos que o cancelamento pode estar sujeito a uma multa, conforme especificado em nossos Termos de Uso.",
  },
  {
    question: "Preciso de material específico para o curso?",
    answer:
      "Para a versão online, é importante estar em um ambiente silencioso, com uma boa conexão de internet para acompanhar as atividades, além de papel e caneta para anotações.",
  },
  {
    question: "Como posso obter mais informações?",
    answer:
      "Se tiver outras dúvidas ou precisar de mais detalhes sobre o curso, entre em contato com nossa equipe pelo e-mail treinamento@cstbrasil.com.br. Teremos o prazer em ajudá-lo!",
  },
];

export default function HomePage() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const [preferenceId, setPreferenceId] = React.useState<string>("");
  const [isMounted, setIsMouted] = React.useState<boolean>(false);
  const router = useRouter();

  React.useEffect(() => {
    setIsMouted(true);
  }, []);

  React.useEffect(() => {
    initMercadoPago(process.env.NEXT_PUBLIC_KEY!, { locale: "pt-BR" });

    fetch("http://localhost:3001/create_preference", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: 1,
      }),
    })
      .then((response) => response.json())
      .then((data) => setPreferenceId(data.preferenceId))
      .catch((error) => console.error("Erro ao buscar o preferenceIds: ", error));
  }, []);

  return (
    <div>
      <BackgroundImageWithTheme
        lightImage="/img/Banner.png"
        darkImage="/img/Banner.png"
        className="bg-no-repeat bg-cover min-h-[21.75rem] flex justify-center items-center mb-20 bg-right"
      >
        <div className="max-w-[82.125rem] mx-auto px-3 2sm:px-8 flex flex-col lg:flex-row justify-center gap-6 mt-10 py-[7.938rem]">
          <div className="flex flex-col basis-full lg:basis-1/2 bg-var-branco-100 rounded-bl-lg justify-center">
            <h1 className="mt-10 sm:text-6xl text-4xl  leading-tight text-branco-100">
              CST - TERAPIA DE ESTIMULAÇÃO COGNITIVA
              <span className="font-bold">Treinamento completo para estudantes e profissionais da saúde!</span>
            </h1>
            <h2 className="mt-2 mb-4 text-base text-branco-100 font-normal leading-7 tracking-wide max-w-[30rem]">
              Primeiro tratamento para demência não medicamentoso, protocolizado e baseado em evidências científicas
            </h2>
            <div className="flex flex-col text-start gap-4 mb-4">
              <p className="text-base  text-branco-100 justify-end">
                Já temos as datas para o primeiro semestre de 2025:
              </p>
              <div className="flex flex-wrap justify-start w-full gap-1 ">
                <span className="p-4 border border-branco-100 rounded-lg text-center  text-branco-100">21/02</span>
                <span className="p-4 border border-branco-100 rounded-lg text-center  text-branco-100">29/03</span>
                <span className="p-4 border border-branco-100 rounded-lg text-center  text-branco-100">12/04</span>
                <span className="p-4 border border-branco-100 rounded-lg text-center  text-branco-100">31/05</span>
                <span className="p-4 border border-branco-100 rounded-lg text-center  text-branco-100">28/06</span>
                <span className="p-4 border border-branco-100 rounded-lg text-center  text-branco-100">26/07</span>
              </div>
            </div>
            <div>
              <Button text="Inscreva-se" variant="outlined" onClick={() => scrollToSection("inscricao")} />
            </div>
          </div>
          <div className="flex flex-col basis-full lg:basis-1/2 mt-6 lg:mt-16"></div>
        </div>
      </BackgroundImageWithTheme>
      <div id="sobre">
        <div className="mb-[2.375rem]">
          <div className="max-w-[70rem] mx-auto">
            <TitleDefault title="SOBRE A CST" subtitle="" alignment="text-center" />
          </div>
        </div>
        <ResultsSection />
      </div>

      <div className="bg-dark-900 text-branco-100 py-12">
        <div className="max-w-[82.125rem] mx-auto px-3 2sm:px-8">
          <div className="flex gap-2 sm:flex-nowrap flex-wrap">
            <div className="mt-4 mb-4 max-w-[21.938rem] min-w-[14.063rem]">
              <TitleDefault
                title="Venha conhecer"
                subtitle="CST - Terapia de estimulação Cognitiva"
                alignment="text-left"
                textColor="text-cinza-900-branco"
              />
            </div>
            <div className="mb-8 max-w-[44.125rem]">
              <p className="mb-4 text-cinza-900-branco">
                A CST é um tratamento desenvolvido no Reino Unido, com base em evidências científicas e validado em
                vários países, incluindo o Brasil. Consiste em um protocolo com 14 sessões temáticas e divertidas para
                estimular memória, linguagem, orientação e outros aspectos. Estudos mostram evidências de seus efeitos
                benéficos para o quadro dos pacientes e redução dos níveis de sobrecarga dos cuidadores
              </p>
              <div className="flex flex-row justify-start gap-5">
                <Button text="Saiba mais" variant="default" href="https://cstbrasil.com.br/web/index.php/projeto" />
                <Button text="Fazer inscrição" variant="default" onClick={() => scrollToSection("inscricao")} />
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/img/img-terapia.png"
              alt="Terapia de estimulação Cognitiva"
              height={408}
              width={1298}
              className="rounded-lg w-full object-cover h-auto aspect-[1440/500]"
            />
          </div>
        </div>
      </div>
      <div id="modulos" className="bg-azul-40/50">
        <div className="mb-[2.375rem]">
          <div className="max-w-[39.938rem] mx-auto">
            <TitleDefault
              title="Capacitação para CST"
              subtitle="Treinamento para se tornar um facilitador(a) da CST"
              alignment="text-center"
              extraClassName="sm:hidden"
            />

            <TitleDefault
              title="CURSO DE CAPACITAÇÃO PARA CST"
              subtitle="Treinamento para se tornar um facilitador(a) da CST"
              alignment="text-center"
              extraClassName="hidden sm:block s"
            />
          </div>
          <p className="px-5 lg:max-w-[65rem] mx-auto text-base text-center">
            Treinamento realizado inteiramente online, oferecendo flexibilidade para se ajustar à sua agenda. Os
            participantes receberão, através do serviço postal, o manual da CST para apoio adicional e certificado de
            conclusão do curso.
            <br />
            <br />
            Oferecemos pacotes diferenciados para empresas interessadas na implementação da CST em seu serviço. Entre em
            contato por mensagem.{" "}
          </p>
        </div>
        <div className="max-w-[82.125rem] mx-auto px-3 2sm:px-8">
          <EmblaCarousel type="2" options={OPTIONS} />
        </div>
      </div>

      <div id="vantagens" className="max-w-[82.125rem] mx-auto px-3 2sm:px-8 pb-12 mt-[4.5rem]">
        <div className="flex justify-between items-center mb-10 sm:flex-nowrap flex-wrap">
          <div className="mt-4 max-w-[26rem]">
            <TitleDefault
              title="Vantagens"
              subtitle="Por que se tornar um profissional treinado da CST?"
              alignment="text-left"
            />
          </div>
          <div>
            <Button text="Fazer inscrição" variant="default" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-4 sm:px-8 md:px-24 lg:px-48 items-start">
          {advantagesData.slice(0, 2).map((advantage) => (
            <div key={advantage.id} className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center lg:min-h-[80px]">
                <ImageWithTheme
                  lightSrc={advantage.imageLight}
                  darkSrc={advantage.image}
                  alt={advantage.title}
                  width={64}
                  height={64}
                />
              </div>
              <p className="text-lg mt-2 min-h-[3rem]">{advantage.title}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start mt-8">
          {advantagesData.slice(2).map((advantage, index) => (
            <div key={advantage.id} className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center min-h-[80px]">
                <ImageWithTheme
                  lightSrc={advantage.imageLight}
                  darkSrc={advantage.image}
                  alt={advantage.title}
                  width={64}
                  height={64}
                />
              </div>
              <p className="text-lg mt-2 min-h-[3rem]">{advantage.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[82.125rem] mx-auto pt-12 px-3 2sm:px-8 flex justify-between items-center mb-10 gap-4  sm:flex-nowrap flex-wrap">
        <div id="depoimentos">
          <TitleDefault
            title="Depoimentos"
            subtitle="Histórias de sucesso"
            description="Confira alguns depoimentos de pacientes e familiares sobre a participação na CST e de profissionais da área da saúde que atuam como facilitadores."
            alignment="text-left"
          />
        </div>
        <div className="flex">
          <p className="text-xl max-w-[14rem]">O próximo depoimento pode ser o seu!</p>
        </div>
      </div>

      <div className="bg-cover mb-[4.5rem] py-12 min-h-[33.75rem] bg-[url('/img/bg-depoimentos.png')] content-center">
        <div className="max-w-[82.125rem] mx-auto sm:px-3 2sm:px-8">
          <div className="text-center mb-6">
            <div className="max-w-[50rem] mx-auto px-3 2sm:px-8 rounded-lg bg-[rgba(255,255,255,0.75)] dark:bg-[rgba(0,0,0,0.75)] select-none">
              <TestimonialCarousel />
            </div>
          </div>
        </div>
      </div>

      <div id="equipe" className="max-w-[82.125rem] mx-auto px-3 2sm:px-8">
        <InstructorCarousel options={OPTIONS} />
      </div>

      <div className="my-10 max-w-[46rem] mx-auto px-3" id="inscricao">
        <TitleDefault
          title="Investimento"
          subtitle="Garanta sua vaga hoje mesmo!"
          description="O treinamento será apresentado pelo grupo de pesquisadores que trouxe a CST para o Brasil."
          alignment="text-center"
        />
      </div>

      <div className=" py-12 sm:px-6 mb-[4rem]">
        <div className="max-w-[82.125rem] sm:px-3 flex flex-col md:grid md:grid-cols-2 items-center mx-auto">
          <div className="p-6 sm:p-10 h-full bg-cinza-900 ">
            <div className=" flex flex-col  justify-between h-full gap-8">
              <p className="text-3xl max-w-[27rem] text-branco-100 flex items-center my-16">
                Inicie sua jornada e junte-se hoje mesmo ao nosso time de facilitadores da CST! Este não é um curso
                gravado. As aulas são ministradas ao vivo por especialistas altamente capacitados, garantindo uma
                experiência de aprendizado interativa e personalizada para você. Não perca a oportunidade de aprender
                diretamente com quem entende do assunto!
              </p>
            </div>
          </div>
          <div className="bg-branco-cinza-escuro p-6 sm:p-10 text-center md:text-left">
            <div className="max-w-[30.438rem] mx-auto">
              <p className="text-3xl mb-8 text-cinza-900-branco">Seu investimento</p>
              <div className="flex justify-between items-center mb-8 gap-2 sm:flex-nowrap flex-wrap">
                <div>
                  <p className="text-xl text-cinza-900-branco">De R$ 3.500 por</p>
                  <p className="text-5xl font-semibold text-cinza-900-branco">R$ 2.300</p>
                </div>
                <p className="text-base text-cinza-900-branco justify-end">
                  Ou em até 05x de R$460,00 <br />
                  no cartão de crédito
                </p>
              </div>
              <div className="flex flex-col text-center gap-4">
                <p className="text-base text-cinza-900-branco justify-end">
                  Já temos as datas para o primeiro semestre de 2025:
                </p>
                <div className="flex flex-wrap justify-center w-full gap-1 [&>span]:cursor-pointer">
                  <span className="p-4 border border-black rounded-lg text-center text-cinza-900-branco">21/02</span>
                  <span className="p-4 border border-black rounded-lg text-center text-cinza-900-branco">29/03</span>
                  <span className="p-4 border border-black rounded-lg text-center text-cinza-900-branco">12/04</span>
                  <span className="p-4 border border-black rounded-lg text-center text-cinza-900-branco">31/05</span>
                  <span className="p-4 border border-black rounded-lg text-center text-cinza-900-branco">28/06</span>
                  <span className="p-4 border border-black rounded-lg text-center text-cinza-900-branco">26/07</span>
                </div>
                <Button text="Quero fazer parte" variant="default" />
              </div>
              {/* Pagamento com mercado pago */}
              {/* <div className="flex justify-center mb-[3.25rem]" id="wallet_container">
                <Wallet initialization={{ preferenceId: preferenceId }} />
              </div> */}
              <p className="mt-4 text-base text-center text-cinza-900-branco">
                Pagamento por boleto, à vista por favor consultar a secretaria pelo WhatsApp
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8 items-center justify-center py-12 mt-8 w-full col-span-2">
            <div id="faq">
              <TitleDefault title="Perguntas Frequentes (FAQ)" alignment="text-left" />
            </div>
            <div className="space-y-4 w-full">
              {faqData.map((item, index) => (
                <FaqItem key={index} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>

          <div
            id="contato"
            className="flex flex-col gap-8 items-start justify-center px-4 py-12 mt-8 w-full col-span-2"
          >
            <TitleDefault
              title="Contato"
              subtitle="Estamos aqui para oferecer o melhor atendimento possível"
              description="Confira alguns depoimentos de pacientes e familiares sobre a participação na CST e de profissionais da área da saúde que atuam como facilitadores."
              alignment="text-left"
            />
            <div className="flex gap-4 flex-wrap">
              <Button
                text="Email"
                variant="default"
                onClick={() => window.open("mailto:treinamento@cstbrasil.com.br", "_blank")}
              />
              <Button
                text="Whatsapp"
                variant="default"
                onClick={() =>
                  window.open("https://wa.me/552498192132?text=Olá, gostaria de entrar em contato!", "_blank")
                }
              />
              <Button
                text="Instagram"
                variant="default"
                onClick={() => window.open("https://www.instagram.com/cst.brasil/", "_blank")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const advantagesData = [
  {
    id: 1,
    image: "/img/iconComunityDark.png",
    imageLight: "/img/iconComunityLight.png",
    title: "Utilize tratamentos baseados em evidências na sua prática clínica",
  },

  {
    id: 2,
    image: "/img/iconReconhecimentoDark.png",
    imageLight: "/img/iconReconhecimentoLight.png",
    title: "Seja um dos primeiros a ofertar um tratamento inovador e mundialmente reconhecido no Brasil",
  },
  {
    id: 3,
    image: "/img/iconDiplomaDark.png",
    imageLight: "/img/iconDiplomalight.png",
    title: "Ajude a cuidar de pessoas com demência através de um tratamento eficaz, protocolizado e sistematizado",
  },
  {
    id: 4,
    image: "/img/IconDark.png",
    imageLight: "/img/IconLight.png",
    title: "Tenha acesso a um plano supervisões e certificações após a conclusão do curso",
  },
  {
    id: 5,
    image: "/img/iconScienceDark.png",
    imageLight: "/img/iconSciencelight.png",
    title: "Faça parte de uma comunidade digital com facilitadores da CST de todo o Brasil",
  },
];
