"use server";

import { cookies } from "next/headers";

export async function getAcessTokenServerAction() {
  const token = cookies().get("biomob-pd.token");
  console.log("meu getAcessTokenServerAction", token?.value);
  return token;
}
