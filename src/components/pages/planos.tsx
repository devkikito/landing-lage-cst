"use client";

import { scrollToSection } from "@/utils/scrollToSection";
import Button from "../button/Button";
import { BackgroundImageWithTheme } from "../image/BackgroundImageWithTheme";
import { TitleDefault } from "../texts/TitleDefault";
import React from "react";
import { DialogComponent } from "../ui/DialogComponent";
import RedirectsPostForm from "../forms/redirects";

export const PlanosPage = () => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);

  return (
    <div className="w-full flex flex-col">
      <BackgroundImageWithTheme
        lightImage="/img/Banner.png"
        darkImage="/img/Banner.png"
        className="bg-no-repeat bg-cover min-h-[21.75rem] flex justify-center items-center mb-20 bg-right"
      >
        <div className="max-w-[82.125rem] mx-auto px-3 2sm:px-8 flex flex-col lg:flex-row justify-center gap-6 mt-10 py-[7.938rem]">
          <div className="flex flex-col basis-full lg:basis-1/2 bg-var-branco-100 rounded-bl-lg justify-center">
            <h1 className="mt-10 sm:text-6xl text-4xl  leading-tight text-branco-100">
              Inicie sua jornada dentro da {"  "}
              <span className="font-bold"> Metodologia CST</span>
            </h1>
            <h2 className="mt-2 mb-4 text-base text-branco-100 font-normal leading-7 tracking-wide max-w-[30rem]">
              Escolha a turma ideal para você, preencha seus dados, crie seu login e garanta sua vaga na opção que
              melhor atende às suas necessidades.
            </h2>

            <div>
              <Button text="Escolher turma" variant="outlined" onClick={() => scrollToSection("inscricao")} />
            </div>
          </div>
          <div className="flex flex-col basis-full lg:basis-1/2 mt-6 lg:mt-16"></div>
        </div>
      </BackgroundImageWithTheme>
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
          <div className="p-6 sm:p-10 h-full flex justify-center items-center bg-cinza-900 ">
            <div className="flex flex-col justify-center items-center text-start gap-4 mb-4">
              <p className="text-base items-center  text-branco-100 justify-center text-start">
                Já temos as datas para o primeiro semestre de 2025:
              </p>
              <div className="grid grid-cols-3 w-full gap-1 ">
                <span className="p-4 border border-branco-100 rounded-lg text-center  text-branco-100">21/02</span>
                <span className="p-4 border border-branco-100 rounded-lg text-center  text-branco-100">29/03</span>
                <span className="p-4 border border-branco-100 rounded-lg text-center  text-branco-100">12/04</span>
                <span className="p-4 border border-branco-100 rounded-lg text-center  text-branco-100">31/05</span>
                <span className="p-4 border border-branco-100 rounded-lg text-center  text-branco-100">28/06</span>
                <span className="p-4 border border-branco-100 rounded-lg text-center  text-branco-100">26/07</span>
              </div>
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

              <Button text="Prosseguir" extraClassName="w-full" variant="default" onClick={() => setModalOpen(true)} />

              <p className="mt-4 text-base text-center text-cinza-900-branco">
                Pagamento por boleto, à vista por favor consultar a secretaria pelo WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>

      <DialogComponent
        open={modalOpen}
        setOpen={setModalOpen}
        Form={RedirectsPostForm}
        buttonTitle="Cadastrar"
        subTitle="Ao finalizar o cadastro e pagamento, você receberá em seu e-mail sua senha e o acesso ao curso adquirido."
        title="Preencha os campos para finalizar o cadastro do curso."
        notButton
        maxWidth="max-w-[50rem]"
      />
    </div>
  );
};
