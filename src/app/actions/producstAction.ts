"use server";
import { Product } from "@/@types/types";
import { findProducts } from "@/services/user/userProductService";

export async function getProductsAction(): Promise<Product[]> {
  try {
    const res: any = await findProducts();
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
