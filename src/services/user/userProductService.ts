import { AxiosResponse } from "axios";
import api from "../axiosNodeApi";
import { Product } from "@/@types/types";

export async function findUserProductById(userProductId: string): Promise<AxiosResponse<Product>> {
  return api.get(`/product/user-product/userProducId/${userProductId}`);
}

export async function findProductByUserProducId(
  userProductId: string,
  tokenId: string
): Promise<AxiosResponse<Product>> {
  return api.get(`/product/userProducId/${userProductId}`, {
    headers: {
      "X-One-Access-Token": tokenId,
    },
  });
}
