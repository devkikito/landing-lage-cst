import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { StepIndicator } from "@/components/ui/stepIndicator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { genders, nationalities } from "./_selectedDatas";
import { formatPhoneNumber } from "@/utils/formatPhoneNumber";
import { formatCEP } from "@/utils/formatCEP";
import { useFormState } from "react-dom";
import { postSubmitSecondFormAction } from "@/app/actions/userActions";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

const schema = z.object({
  fullName: z.string().min(8, "Este campo é obrigatório"),
  dateOfBirth: z.string().min(1, "Este campo é obrigatório"),
  gender: z.string().min(1, "Este campo é obrigatório"),
  nationality: z.string().min(1, "Este campo é obrigatório"),
  phoneNumber: z.string().min(14, "Este campo é obrigatório"),
  neighborhood: z.string().min(1, "Este campo é obrigatório"),
  number: z.string().min(1, "Este campo é obrigatório"),
  street: z.string().min(1, "Este campo é obrigatório"),
  city: z.string().min(1, "Este campo é obrigatório"),
  state: z.string().min(1, "Este campo é obrigatório"),
  zipCode: z.string().min(1, "Este campo é obrigatório"),
  contactEmail: z.string().min(1, "Este campo é obrigatório").email("Email inválido"),
  professionalCouncil: z.string().optional(),
  specialization: z.string().optional(),
  institution: z.string().min(1, "Este campo é obrigatório"),
  availability: z.string().min(1, "Este campo é obrigatório"),
  expectations: z.string().min(1, "Este campo é obrigatório"),
});

type FormData = z.infer<typeof schema>;

interface MultiStepFormProps {
  linkToRedirect: string;
}

const MultiStepForm: React.FC<MultiStepFormProps> = ({ linkToRedirect }) => {
  const [step, setStep] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);
  const [sendSuccess, setSendSuccess] = React.useState(false);
  const multiStepFormRef = React.useRef<HTMLFormElement>(null);
  const searchParams = useSearchParams();
  const [state, formAction] = useFormState(postSubmitSecondFormAction, {
    message: "",
    paymentUrl: "",
    success: false,
  });
  const tokenId = searchParams.get("id");
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {},
    mode: "onSubmit",
  });

  const { watch, trigger } = form;

  React.useEffect(() => {
    setIsLoading(false);
    if (state.success) {
      setSendSuccess(true);
      toast("Perfeito", {
        description: "Formulário enviado com sucesso. Você será redirecionado para a tela de login.",
      });
      setTimeout(() => {
        window.location.href = "/login";
      }, 5000);
    }

    if (!state.success && state.message) {
      toast("Ops, tivemos um erro", {
        description: state.issues?.map((issue) => (
          <span key={issue} className="flex gap-1">
            {issue}
          </span>
        )),
      });
    }
  }, [state]);

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name) {
        trigger(name);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, trigger]);

  // React.useEffect(() => {
  //   form.setValue("fullName", "Juan Marcos");
  //   form.setValue("dateOfBirth", "2002-01-20");
  //   form.setValue("gender", "masculino");
  //   form.setValue("nationality", "brazilian");
  //   form.setValue("phoneNumber", "(24) 98131-9462");
  //   form.setValue("commercialPhone", "(24) 98131-9462");
  //   form.setValue("neighborhood", "Centro");
  //   form.setValue("number", "123");
  //   form.setValue("street", "Rua Principal");
  //   form.setValue("city", "Petrópolis");
  //   form.setValue("state", "RJ");
  //   form.setValue("zipCode", "25675-160");
  //   form.setValue("contactEmail", "jncontatojn@gmail.com");
  //   form.setValue("professionalCouncil", "Sem conselhos");
  //   form.setValue("specialization", "Programador FullStack");
  //   form.setValue("institution", "Biomob");
  //   form.setValue("graduationYear", "2022");
  //   form.setValue("expectations", "Sem expectativas.");
  //   form.setValue("availability", "Nenhuma");
  // }, [form.setValue]);

  const validateCurrentStep = async () => {
    let fieldsToValidate: (keyof FormData)[] = [];

    switch (step) {
      case 1:
        fieldsToValidate = ["fullName", "dateOfBirth", "gender", "nationality", "contactEmail", "phoneNumber"];
        break;
      case 2:
        fieldsToValidate = ["neighborhood", "number", "street", "city", "state", "zipCode"];
        break;
      case 3:
        fieldsToValidate = ["professionalCouncil", "specialization", "institution", "availability", "expectations"];
        break;
      default:
        break;
    }

    // Nas etapas 1, 2 e 3, apenas verifica se os campos estão preenchidos
    if (step < 4) {
      const values = form.getValues(fieldsToValidate);
      const allFieldsFilled = Object.values(values).every((value) => value !== undefined && value !== "");

      // Se os campos não estiverem preenchidos, exibe os erros
      if (!allFieldsFilled) {
        fieldsToValidate.forEach((field) => {
          const value = form.getValues(field);
          if (!value) {
            form.setError(field, {
              type: "manual",
              message: "Este campo é obrigatório",
            });
          }
        });
      }

      return allFieldsFilled;
    }

    // Na última etapa, não faz validação aqui
    return true;
  };

  const nextStep = async () => {
    const isValid = await validateCurrentStep();
    if (isValid) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const showFormErrors = () => {
    const { errors } = form.formState;
    if (Object.keys(errors).length > 0) {
      console.error("Erros de validação encontrados:");
      Object.keys(errors).forEach((fieldName) => {
        console.error(`Campo: ${fieldName}, Erro: ${errors[fieldName as keyof typeof errors]?.message}`);
      });
    } else {
      console.log("Nenhum erro de validação encontrado.");
    }
  };

  const fetchCEP = async (cep: string) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        console.error("CEP não encontrado.");
        return;
      }

      form.setValue("street", data.logradouro);
      form.setValue("neighborhood", data.bairro);
      form.setValue("city", data.localidade);
      form.setValue("state", data.uf);
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    // Na última etapa, faz a validação completa
    const isValid = await trigger();
    if (!isValid) {
      setIsLoading(false);
      return;
    }

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, value.toString());
      }
    });
    formData.append("tokenId", tokenId!);

    formAction(formData);
  };

  return (
    <Form {...form}>
      <form ref={multiStepFormRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <StepIndicator currentStep={step} />

        {step === 1 && (
          <>
            <span className="text-3xl font-semibold">Informações básicas</span>

            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome Completo</FormLabel>
                  <Input {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email de Contato</FormLabel>
                  <Input {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Data de Nascimento</FormLabel>
                  <Input type="date" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gênero</FormLabel>
                  <Select
                    onValueChange={(value: string) => {
                      form.setValue("gender", value);
                      trigger("gender"); // Revalida o campo após a seleção
                    }}
                    {...field}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Selecione seu gênero" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Selecione seu gênero</SelectLabel>
                        {genders.map((item) => (
                          <SelectItem key={item.id} value={item.id}>
                            {item.value}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nationality"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nacionalidade</FormLabel>
                  <Select
                    onValueChange={(value: string) => {
                      form.setValue("nationality", value);
                      trigger("nationality"); // Revalida o campo após a seleção
                    }}
                    {...field}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Selecione sua nacionalidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Selecione sua nacionalidade</SelectLabel>
                        {nationalities.map((item) => (
                          <SelectItem key={item.id} value={item.id}>
                            {item.value}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Celular</FormLabel>
                  <Input format={formatPhoneNumber} {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        {step === 2 && (
          <>
            <span className="text-3xl font-semibold">Informações residenciais</span>
            <FormField
              control={form.control}
              name="zipCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CEP</FormLabel>
                  <Input
                    {...field}
                    format={formatCEP}
                    onBlur={(e) => {
                      const cep = e.target.value.replace(/\D/g, "");
                      fetchCEP(cep);
                    }}
                  />

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estado</FormLabel>
                  <Input {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cidade</FormLabel>
                  <Input {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="neighborhood"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bairro</FormLabel>
                  <Input {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="street"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rua</FormLabel>
                  <Input {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Número</FormLabel>
                  <Input {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        {step === 3 && (
          <>
            <span className="text-3xl font-semibold">Informações profisionais</span>
            <FormField
              control={form.control}
              name="institution"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Qual a sua profissão?</FormLabel>
                  <Input {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="specialization"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tem alguma especialização? Se sim, qual?</FormLabel>
                  <Input {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="availability"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Trabalha ou já trabalhou com pessoas idosas?</FormLabel>
                  <Input {...field} type="text" />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="professionalCouncil"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Faz parte de algum conselho? Se sim, qual?</FormLabel>
                  <Input {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="expectations"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Em qual contexto pretende aplicar a CST?</FormLabel>
                  <Input
                    {...field}
                    placeholder="Exemplo: Clínica privada, serviço de saúde público, consultório particular, etc."
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        {step === 4 && (
          <div className="flex flex-col items-center justify-center space-y-6 py-8">
            <span className="text-3xl font-semibold text-center">Obrigado por se inscrever!</span>
            <p className="text-center text-lg">
              Agora que você preencheu todas as informações necessárias nosso sistema irá computar seu cadastro. Você
              irá ser redirecionado para a página de acesso em alguns instantes.
            </p>
          </div>
        )}

        <div className="flex justify-between">
          {step > 1 && step != 4 && (
            <Button type="button" onClick={prevStep}>
              Anterior
            </Button>
          )}
          {step < 4 ? (
            <Button type="button" onClick={nextStep}>
              Próximo
            </Button>
          ) : (
            <Button type="submit" loading={isLoading} disabled={sendSuccess}>
              {sendSuccess ? "Cadastro Finalizado" : "Enviar Cadastro"}
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
};

export default MultiStepForm;
