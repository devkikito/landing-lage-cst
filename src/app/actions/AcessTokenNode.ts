"use client";

import { parseCookies } from "nookies";

export async function getAcessTokenCookieNodeApi() {
  let cookies = parseCookies();
  const { "biomob-pd.token": token } = cookies;
  return token;
}
