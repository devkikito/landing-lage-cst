"use client";

import Button from "../button/Button";
import { TitleDefault } from "../texts/TitleDefault";
import React from "react";
import { DialogComponent } from "../ui/DialogComponent";
import RedirectsPostForm from "../forms/redirects";
import Link from "next/link";
import { getUserDetailsAction } from "@/app/actions/userActions";
import { User } from "@/@types/types";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";

export const MeuPerfilPage = () => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [userDetails, setUserDetails] = React.useState<User | undefined>(undefined);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const { user, logout } = useAuth();

  React.useEffect(() => {
    async function fetch() {
      try {
        const res = await getUserDetailsAction();
        if (res.sucess) {
          setUserDetails(res.data);
        } else {
          logout();
          window.location.href = "/";
        }
      } catch (error) {
        console.log(error);
        logout();
        window.location.href = "/";
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
              className="w-full rounded-xl overflow-hidden shadow-lg mb-8 bg-gradient-to-br from-var-branco-100-2 to-var-branco-100-3 dark:from-branco-cinza-escuro dark:to-cinza-900 transition-all duration-300 hover:shadow-2xl "
            >
              <div className="relative">
                {/* Faixa decorativa no topo */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amarelo-100 to-azul-100"></div>

                {/* Conteúdo do curso */}
                <div className="p-8 sm:p-10">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* Lado esquerdo - Informações do curso */}
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-amarelo-100 bg-opacity-20 mr-4">
                          <span className="text-2xl">🧠</span>
                        </div>
                        <h3 className="text-xl font-medium text-var-cinza-900-branco">Meu curso</h3>
                      </div>

                      <h2 className="text-3xl font-bold mb-4 text-amarelo-100">{product.product.title}</h2>

                      <p className="text-lg mb-6 text-var-cinza-900-branco">{product.product.description}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-azul-100 bg-opacity-20 flex items-center justify-center mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div>
                            <span className="text-sm text-var-cinza-900-branco opacity-70">Data de início</span>
                            <p className="text-var-cinza-900-branco">
                              {new Date(product.product.startDate).toLocaleDateString("pt-BR", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                              })}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-azul-200 bg-opacity-20 flex items-center justify-center mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <span className="text-sm text-var-cinza-900-branco opacity-70">Turma</span>
                            <p className="text-var-cinza-900-branco">
                              {product.product.title.includes("Turma")
                                ? product.product.title.split("Turma")[1]
                                : "CST"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Lado direito - Status e ações */}
                    <div className="flex-1 flex flex-col">
                      <div className="bg-var-azul-30 dark:bg-cinza-900 dark:bg-opacity-50 p-6 rounded-xl mb-6 border border-border">
                        <h3 className="text-xl font-medium text-var-cinza-900-branco mb-4">Status do pagamento</h3>

                        <div className="flex items-center mb-4">
                          {/* Usando toLowerCase() para garantir compatibilidade independente de como o status vem do backend */}
                          <div
                            className={`w-3 h-3 rounded-full mr-2 ${product.status.toLowerCase() === "pendente" ? "bg-amarelo-100" : "bg-green-500"}`}
                          ></div>
                          <span className="text-lg font-medium text-var-cinza-900-branco">
                            {product.status.toLowerCase() === "pendente" ? "Pagamento pendente" : "Aprovado"}
                          </span>
                        </div>

                        <div className="flex items-center mb-6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-var-cinza-900-branco mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="text-sm text-var-cinza-900-branco">
                            {product.status.toLowerCase() === "pendente"
                              ? "Finalize o pagamento para liberar o acesso"
                              : `Seu acesso já está liberado. Use a senha ${product.password} para acessar o curso. `}
                          </span>
                        </div>

                        <Button
                          text={
                            product.status.toLowerCase() === "pendente"
                              ? "Finalizar pagamento"
                              : userDetails.formComplete
                                ? "Acessar curso"
                                : "Finalizar cadastro e acessar curso"
                          }
                          extraClassName="w-full"
                          variant="default"
                          onClick={() => {
                            {
                              product.status.toLowerCase() === "pendente"
                                ? (window.location.href = product.paymentLink)
                                : (window.location.href = `/redirecionamento-final?userProductId=${product.id}&id=${product.successLink}`);
                            }
                          }}
                        />
                      </div>

                      <div className="bg-var-azul-20 dark:bg-cinza-900 dark:bg-opacity-30 p-6 rounded-xl border border-border">
                        <h3 className="text-xl font-medium text-var-cinza-900-branco mb-4">Suas informações</h3>

                        <div className="grid grid-cols-1 gap-3">
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-amarelo-100 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                            <span className="text-var-cinza-900-branco">
                              {userDetails.fullName || userDetails.name}
                            </span>
                          </div>

                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-amarelo-100 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                            <span className="text-var-cinza-900-branco">
                              {userDetails.contactEmail || userDetails.email}
                            </span>
                          </div>

                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-amarelo-100 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              />
                            </svg>
                            <span className="text-var-cinza-900-branco">{userDetails.phoneNumber}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rodapé do card */}
                <div className="bg-var-azul-40 bg-opacity-10 dark:bg-cinza-900 dark:bg-opacity-60 p-4 text-center">
                  <p className="text-sm text-var-cinza-900-branco">
                    Caso tenha algum problema, entre em contato conosco pela seção de{" "}
                    <Link className="text-amarelo-100 hover:underline font-medium" href="/contato">
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
