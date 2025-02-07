"use client";

import { parseCookies } from "nookies";

export async function getAcessTokenCookieNodeApi() {
  let cookies = parseCookies();
  const { "biomob-node-admin.token": token } = cookies;
  return token;
}
