"use client";
import React from "react";
import * as z from "zod";
import { nodeLogin } from "@/app/actions/loginAction";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { setCookie } from "nookies";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { parseJwt } from "@/utils/parseJwt";
import { useAuth } from "@/context/AuthContext";

const formSchema = z.object({
  email: z.string().min(1, { message: "This field has to be filled." }).email("This is not a valid email."),
});

type FormData = z.infer<typeof formSchema>;

export default function ForgotPasswordAuthForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const searchParams = useSearchParams();
  const { setAuthData } = useAuth();

  const defaultValues = {
    email: searchParams.get("email") || "",
  };

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema as any),
    defaultValues,
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Insira seu email" disabled={isLoading} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={isLoading} className="ml-auto w-full mt-4" type="submit">
          Enviar código
        </Button>
      </form>
    </Form>
  );
}
