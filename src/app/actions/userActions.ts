"use server";

import { findProductByUserProducId } from "@/services/user/userProductService";
import {
  editUserDetaild,
  findFormStatusService,
  findUserDetails,
  verifyOneAccessTokenService,
} from "@/services/user/userService";

type UserDetailsType = {
  message: string;
  sucess: boolean;
  formComplete?: boolean;
  linkToRedirect?: string;
};

type FormState = {
  message: string;
  success: boolean;
  paymentUrl?: string;
  fields?: Record<string, FormDataEntryValue>;
  issues?: string[];
  requestDTO?: any;
};

type verifyOneAccessTokenType = {
  userId: string;
  oneTimeId: string;
  iat: number;
};

type VerifyActionType = {
  decoded?: verifyOneAccessTokenType;
  success: boolean;
};

type FormDataEntries = Record<string, string | number | boolean>;

export async function getLinkToRedirectAction(userProductId: string, tokenId: string): Promise<UserDetailsType> {
  try {
    const res = await findFormStatusService(tokenId);
    const data = res.data;
    console.log("minha data: ", data);

    const productRes = await findProductByUserProducId(userProductId, tokenId);
    console.log("meu productRes", productRes.data);
    if (data) {
      console.log("meu productRes", productRes.data);

      return {
        message: "Usuário encontrado com sucesso",
        sucess: true,
        formComplete: true,
        linkToRedirect: productRes.data.link,
      };
    }
    return {
      message: "Usuário encontrado com sucesso, porém formulário está incompleto.",
      sucess: true,
      formComplete: false,
      linkToRedirect: productRes.data.link,
    };
  } catch (error) {
    console.log(error);

    return {
      message: "Erro ao buscar usuário",
      sucess: false,
    };
  }
}

export async function getUserDetailsAction(): Promise<any> {
  try {
    const res: any = await findUserDetails();
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function postSubmitSecondFormAction(prevState: FormState, data: FormData): Promise<FormState> {
  const formData = Object.fromEntries(data.entries()) as FormDataEntries;
  console.log("Meu tokenId", formData.tokenId);
  const dto = {
    fullName: formData.fullName,
    dateOfBirth: formData.dateOfBirth,
    gender: formData.gender,
    nationality: formData.nationality,
    phoneNumber: formData.phoneNumber,
    neighborhood: formData.neighborhood,
    number: formData.number,
    street: formData.street,
    city: formData.city,
    state: formData.state,
    zipCode: formData.zipCode,
    contactEmail: formData.contactEmail,
    professionalCouncil: formData.professionalCouncil,
    specialization: formData.specialization,
    institution: formData.institution,
    graduationYear: Number(formData.graduationYear),
    expectations: formData.expectations,
    availability: formData.availability,
    formComplete: true,
  };

  try {
    const res = await editUserDetaild(dto, formData.tokenId as string);
    console.log(res);
    return {
      message: `Usuário atualizado com sucesso.`,
      success: true,
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

export async function verifyOneAccessTokenAction(tokenId: string): Promise<VerifyActionType> {
  try {
    const res = await verifyOneAccessTokenService(tokenId);
    console.log("res.data", res.data);
    return {
      decoded: res.data,
      success: true,
    };
  } catch (error) {
    console.log(`Erro ao verificar o oneAccessToken ${tokenId}`, error);
    return {
      success: false,
    };
  }
}
