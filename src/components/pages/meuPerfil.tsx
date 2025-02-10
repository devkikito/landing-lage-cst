"use client";

import { scrollToSection } from "@/utils/scrollToSection";
import Button from "../button/Button";
import { BackgroundImageWithTheme } from "../image/BackgroundImageWithTheme";
import { TitleDefault } from "../texts/TitleDefault";
import React from "react";
import { DialogComponent } from "../ui/DialogComponent";
import RedirectsPostForm from "../forms/redirects";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { getUserDetailsAction } from "@/app/actions/userActions";
import { User } from "@/@types/types";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const MeuPerfilPage = () => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [userDetails, setUserDetails] = React.useState<User | undefined>(undefined);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    async function fetch() {
      try {
        const res = await getUserDetailsAction();
        setUserDetails(res);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetch();
  }, []);

  if (isLoading) {
    return (
      <div className="h-[80vh] w-screen flex items-center justify-center">
        <Loader2 className={cn("h-12 w-12 animate-spin")} />
      </div>
    );
  }

  if (userDetails) {
    return (
      <div className="w-full flex flex-col py-[7.938rem]">
        <div className="my-10 max-w-[46rem] mx-auto px-3" id="inscricao">
          <TitleDefault
            title="Meu Perfil"
            subtitle="Acompanhe seus cursos adquiridos"
            description="Gerencie seus cursos e pagamentos. Caso haja uma pendência, selecione a opção correspondente para concluir a transação pelo Mercado Pago."
            alignment="text-center"
          />
        </div>

        <div className=" py-12 sm:px-6 mb-[4rem]">
          {userDetails.products.map((product) => (
            <div
              key={product.id}
              className="max-w-[82.125rem] sm:px-3 flex flex-col md:grid md:grid-cols-2 items-center mx-auto"
            >
              <div className="p-6 sm:p-10 h-full flex justify-center items-center bg-cinza-900 ">
                <div className="flex flex-col justify-center items-center text-start gap-4 mb-4">
                  <p className="text-base items-center  text-branco-100 justify-center text-start">
                    {product.product.title}
                  </p>
                  <div className="mx-auto pt-4 w-full gap-1 ">
                    <span className="p-4 border border-branco-100 rounded-lg text-center  text-branco-100">
                      {product.product.description}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-branco-cinza-escuro p-6 sm:p-10 text-center md:text-left">
                <div className="max-w-[30.438rem] mx-auto">
                  <p className="text-3xl mb-8 text-cinza-900-branco">Status do pagamento:</p>
                  <div className="flex justify-between items-center mb-8 gap-2 sm:flex-nowrap flex-wrap">
                    <div>
                      <p className="text-xl text-cinza-900-branco">{product.status}</p>
                      <p className="text-5xl font-semibold text-cinza-900-branco">R$ 2.300</p>
                    </div>
                  </div>

                  <Button
                    text={product.status == "pendente" ? "Finalizar pagamento" : "Acessar curso"}
                    extraClassName="w-full"
                    variant="default"
                    onClick={() => {
                      {
                        product.status == "pendente"
                          ? (window.location.href = product.linkToPayment)
                          : (window.location.href = product.product.link!);
                      }
                    }}
                  />

                  <p className="mt-4 text-base text-center text-cinza-900-branco">
                    Caso tenha algum problema ao finalizar a transação basta entrar em contato conosco pela seção de{" "}
                    <Link className="underline font-bold" href={"/contato"}>
                      Contato
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
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
  }
};
