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
  password: z.string(),
});

type FormData = z.infer<typeof formSchema>;

export default function UserAuthForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const searchParams = useSearchParams();
  const { setAuthData } = useAuth();

  const defaultValues = {
    email: searchParams.get("email") || "",
  };

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
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
      const [noderesponse] = await Promise.all([nodeLogin(values)]);
      handleApiResponse("API NODE", noderesponse);
      console.log(noderesponse);
      if (noderesponse.success) {
        setCookie(undefined, "biomob-node-admin.token", noderesponse.data.accessToken, {
          path: "/",
        });
        setCookie(undefined, "biomob-node-admin.refresh-token", noderesponse.data.refreshToken, {
          path: "/",
        });
      }
      setAuthData(noderesponse.data.accessToken);
      const claims = parseJwt(noderesponse.data.accessToken);
      console.log(claims);

      window.location.href = `/`;
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
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-2">
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
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Insira sua senha" disabled={isLoading} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={isLoading} className="ml-auto w-full" type="submit">
            Continue com Email
          </Button>
        </form>
      </Form>
    </>
  );
}
