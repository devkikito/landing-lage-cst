import { AxiosResponse } from "axios";
import api from "../axiosNodeApi";
import { User } from "@/@types/types";

interface userWithPaymentType {
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
    createdAt: string;
  };
  paymentUrl: string;
}

type verifyOneAccessTokenType = {
  userId: string;
  oneTimeId: string;
  iat: number;
};

export async function registerUserService(formData: any): Promise<AxiosResponse<userWithPaymentType>> {
  return await api.post("/user/register-with-payment", formData);
}

export async function findFormStatusService(tokenId: string): Promise<AxiosResponse<User>> {
  return await api.get("/user/details/form-complete", {
    headers: {
      Authorization: `Bearer ${tokenId}`,
    },
  });
}

export async function findUserDetails(): Promise<AxiosResponse<User>> {
  return api.get("/user/details");
}

export async function findCourseLinkByUserProductId(userProductId: string): Promise<AxiosResponse<{ link: string }>> {
  return await api.get(`/user-product/${userProductId}/link`);
}

export async function editUserDetaild(formData: any, tokenId: string): Promise<AxiosResponse<User>> {
  return await api.put("/user/userId/health-professional-info", formData, {
    headers: {
      Authorization: `Bearer ${tokenId}`,
    },
  });
}

export async function verifyOneAccessTokenService(
  oneTimeAccessToken: string
): Promise<AxiosResponse<verifyOneAccessTokenType>> {
  return await api.post("/auth/verify-one-access-token", {
    oneTimeAccessToken,
  });
}
