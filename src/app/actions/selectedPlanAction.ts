"use server";
import { registerUserService } from "@/services/user/userService";

type FormState = {
  message: string;
  success: boolean;
  paymentUrl?: string;
  fields?: Record<string, FormDataEntryValue>;
  issues?: string[];
  requestDTO?: any;
};

type FormDataEntries = Record<string, string | number | boolean>;

export async function postSubmitFormAction(prevState: FormState, data: FormData): Promise<FormState> {
  const formData = Object.fromEntries(data.entries()) as FormDataEntries;
  const dto = {
    name: formData.name,
    email: formData.email,
    password: formData.password,
    paymentMethod: formData.paymentMethod,
    productId: formData.productId,
  };

  try {
    const res = await registerUserService(dto);
    console.log(res);
    return {
      message: `Notícia cadastrada com sucesso.`,
      success: true,
      paymentUrl: res.data.paymentUrl,
    };
  } catch (error: any) {
    console.log("error>: ", error);
    if (error.response) {
      const status = error.response.status;
      const message = error.response.data?.error || error.response.data?.message || "Erro desconhecido";

      console.error("Erro no cadastro: ", message);

      return {
        message: `Erro ${status}: ${message}`,
        success: false,
        issues: error.response.data?.issues || [message],
      };
    } else {
      console.error("Erro desconhecido: ", error.message);
      return {
        message: `Erro desconhecido: ${error.message}`,
        success: false,
        issues: ["Erro desconhecido"],
      };
    }
  }
}
