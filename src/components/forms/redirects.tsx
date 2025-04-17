"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useUpdate } from "@/context/UpdateContext";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { MdOutlinePayment } from "react-icons/md";
import { postSubmitFormAction } from "@/app/actions/selectedPlanAction";
import { useFormState } from "react-dom";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { Product } from "@/@types/types";
import { getProductsAction } from "@/app/actions/producstAction";
import Link from "next/link";
import { Checkbox } from "../ui/checkbox";

const schema = z
  .object({
    name: z.string().min(1, "Este campo é obrigatório"),
    email: z.string().min(1, "Este campo é obrigatório"),
    productId: z.string().min(1, "Este campo é obrigatório"),
    password: z
      .string()
      .min(6, "A senha precisa ter pelo menos 6 caracteres")
      .regex(/[A-Z]/, "A senha deve ter pelo menos uma letra maiúscula")
      .regex(/[a-z]/, "A senha deve ter pelo menos uma letra minúscula")
      .regex(/[0-9]/, "A senha deve ter pelo menos um número"),
    confirmPassword: z.string().min(6, "A confirmação de senha precisa ter pelo menos 6 caracteres"),
    acceptCourseTerms: z.boolean().refine((val) => val === true, {
      message: "Você deve aceitar os Termos de Uso do Curso",
    }),
    acceptManualTerms: z.boolean().refine((val) => val === true, {
      message: "Você deve aceitar os Termos de Uso do Manual",
    }),
    couponCode: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

const RedirectsPostForm: React.FC<{ setOpen: any }> = ({ setOpen }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = React.useState<"pix_ticket" | "credit_card" | undefined>(
    undefined
  );
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [state, formAction] = useFormState(postSubmitFormAction, {
    message: "",
    paymentUrl: "",
    success: false,
    fields: {},
    issues: [],
    requestDTO: {},
  });
  const { triggerUpdate } = useUpdate();
  const formRef = React.useRef<HTMLFormElement>(null);
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      productId: "",
      password: "",
      confirmPassword: "",
      couponCode: "",
      acceptCourseTerms: false,
      acceptManualTerms: false,
    },
  });
  const [products, setProducts] = React.useState<Product[] | []>([]);

  React.useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await getProductsAction();
        setProducts(res);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);

  React.useEffect(() => {
    setIsLoading(false);
    console.log("Estado atual:", state);

    if (state.success && state.paymentUrl) {
      console.log("state.paymentUrl", state.paymentUrl);
      window.location.href = state.paymentUrl;
      triggerUpdate();
      setOpen(false);
    }

    // Verificar se há erro
    if (!state.success && state.message) {
      console.log("Erro detectado:", state.message, state.issues);

      // Exibir toast de erro
      toast.error("Ops, tivemos um erro", {
        description: state.message,
      });
    }
  }, [setOpen, state, triggerUpdate]);

  const onSubmit = async () => {
    setIsLoading(true);
    if (!selectedPaymentMethod) {
      setErrorMessage("Selecione uma forma de pagamento");
      setIsLoading(false);
      return;
    }

    if (errorMessage === "") {
      const formData = new FormData(formRef.current!);
      formData.append("paymentMethod", selectedPaymentMethod);
      console.log("FormData antes do envio:", Array.from(formData.entries()));
      formAction(formData);
    }
  };

  return (
    <Form {...form}>
      <form
        ref={formRef}
        className=""
        action={formAction}
        onSubmit={(evt: React.FormEvent<HTMLFormElement>) => {
          evt.preventDefault();
          form.handleSubmit(() => {
            onSubmit();
          })(evt);
        }}
      >
        <div className="grid gap-4 mt-4">
          {inputs.map((item) => (
            <FormField
              key={item.id}
              control={form.control as any}
              name={item.id as keyof FormData}
              render={({ field }) => (
                <FormItem className="w-full flex flex-col gap-2 items-start">
                  <FormLabel>{item.label}</FormLabel>
                  <Input placeholder={item.placeholder} {...field} type={item.type} />
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full flex flex-col gap-2 items-start">
                <FormLabel>Senha</FormLabel>
                <Input type="password" placeholder="Digite sua senha" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="w-full flex flex-col gap-2 items-start">
                <FormLabel>Confirmar Senha</FormLabel>
                <Input type="password" placeholder="Confirme sua senha" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="productId"
            render={({ field }) => (
              <FormItem className="w-full flex flex-col gap-2 items-start">
                <FormLabel>Selecione sua turma</FormLabel>
                <Select
                  onValueChange={(value: string) => {
                    form.setValue("productId", value);
                  }}
                  {...field}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Selecione uma turma" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Selecione uma turma</SelectLabel>
                      {products.map((item) => (
                        <SelectItem key={item.id} value={item.id}>
                          {item.title}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col gap-2 col-span-3">
            <FormLabel>Forma de pagamento</FormLabel>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                className={`px-4 py-6 flex gap-1 items-center border rounded-lg w-full transition-all ${
                  selectedPaymentMethod === "pix_ticket" ? "border-amarelo-100" : "border-border"
                }`}
                onClick={() => setSelectedPaymentMethod("pix_ticket")}
              >
                <MdOutlinePayment /> Pagar com pix/boleto
              </button>
              <button
                type="button"
                className={`px-4 py-6 flex gap-1 items-center border rounded-lg w-full transition-all ${
                  selectedPaymentMethod === "credit_card" ? "border-amarelo-100" : "border-border"
                }`}
                onClick={() => setSelectedPaymentMethod("credit_card")}
              >
                <MdOutlinePayment /> Pagar com cartão de crédito/débito
              </button>
            </div>
          </div>

          {/* <FormField
            control={form.control}
            name="couponCode"
            render={({ field }) => (
              <FormItem className="w-full flex flex-col gap-2 items-start">
                <FormLabel>Código do cupom (Opcional)</FormLabel>
                <Input type="text" placeholder="Digite seu código do cupom aqui. Exemplo: CUPOM10" {...field} />
                <FormMessage />
              </FormItem>
            )}
          /> */}

          {/* Checkbox para Termos de Uso do Curso */}
          <FormField
            control={form.control}
            name="acceptCourseTerms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center gap-2">
                <Checkbox checked={field.value} onCheckedChange={field.onChange} id="acceptCourseTerms" />
                <FormLabel htmlFor="acceptCourseTerms" className="text-sm">
                  Eu li e aceito os{" "}
                  <Link href="/termos-uso-curso" target="_blank" className="text-blue-500 underline">
                    Termos de Uso do Curso CST Formação de Facilitadores
                  </Link>
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Checkbox para Termos de Uso do Manual */}
          <FormField
            control={form.control}
            name="acceptManualTerms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center gap-2">
                <Checkbox checked={field.value} onCheckedChange={field.onChange} id="acceptManualTerms" />
                <FormLabel htmlFor="acceptManualTerms" className="text-sm">
                  Eu li e aceito os{" "}
                  <Link href="/termos-uso-marca" target="_blank" className="text-blue-500 underline">
                    Termos de Uso do Manual CST
                  </Link>
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="mt-8 w-full" loading={isLoading}>
          Salvar alterações
        </Button>

        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      </form>
    </Form>
  );
};

export default RedirectsPostForm;

const inputs = [
  {
    id: "name",
    label: "Nome completo",
    type: "text",
    placeholder: "Digite seu nome aqui. Exemplo: Juan Marcos de Souza",
  },
  {
    id: "email",
    label: "Seu email principal (Atenção! Para este e-mail enviaremos seu acesso ao curso)",
    type: "text",
    placeholder: "Digite seu email aqui. Exemplo: juanmarcos@email.com",
  },
];
