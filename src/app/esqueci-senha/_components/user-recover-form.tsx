"use client";
import React from "react";
import * as z from "zod";
import { nodeLogin } from "@/app/actions/loginAction";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { setCookie } from "nookies";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { parseJwt } from "@/utils/parseJwt";
import { useAuth } from "@/context/AuthContext";

const passwordSchema = z
  .string()
  .min(8, "A senha deve ter no mínimo 8 caracteres.")
  .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula.")
  .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula.")
  .regex(/[0-9]/, "A senha deve conter pelo menos um número.")
  .regex(/[^A-Za-z0-9]/, "A senha deve conter pelo menos um caractere especial.");

const formSchema = z
  .object({
    password: passwordSchema,
    confirmPassword: z.string().min(1, "A confirmação de senha é obrigatória."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem.",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof formSchema>;

export default function RecorverAccessAuthForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { setAuthData } = useAuth();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema as any),
  });

  function handleApiResponse(apiName: string, apiResponse: { success: boolean; message: string }) {
    if (!apiResponse.success) {
      toast(`Erro ao logar no sistema (${apiName})`, {
        description: apiResponse.message,
      });
    }
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    try {
      const [noderesponse] = await Promise.all([nodeLogin(values as any)]);
      handleApiResponse("API NODE", noderesponse);
      console.log(noderesponse);
      if (noderesponse.success) {
        setCookie(undefined, "biomob-pd.token", noderesponse.data.accessToken, {
          maxAge: 60 * 60 * 24,
          path: "/",
        });
        setCookie(undefined, "biomob-pd.refresh-token", noderesponse.data.refreshToken, {
          maxAge: 60 * 60 * 24,
          path: "/",
        });
      }
      setAuthData(noderesponse.data.accessToken);
      const claims = parseJwt(noderesponse.data.accessToken);
      console.log(claims);

      window.location.href = `/meu-perfil`;
    } catch (error: any) {
      console.error("Erro ao submeter o formulário:", error);
      toast("Erro inesperado ao processar a solicitação", {
        description: error.message || "Verifique os detalhes e tente novamente.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-2">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Insira sua senha" disabled={isLoading} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirme sua senha</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Confirme sua senha" disabled={isLoading} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={isLoading} className="ml-auto w-full mt-4" type="submit">
          Confirmar
        </Button>
      </form>
    </Form>
  );
}
