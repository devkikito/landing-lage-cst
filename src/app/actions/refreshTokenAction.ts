"use server";

import { RefreshToken } from "@/services/user/refreshTokenService";
import { cookies } from "next/headers";

export async function actionRefreshToken() {
  try {
    const data = await RefreshToken();
    const tokens = await data.json();

    const setCookieHeader = data.headers.get("Set-Cookie");

    const accessTokenOptions = {
      path: "/",
      secure: true,
      httpOnly: true,
      sameSite: "none" as const,
    };

    const refreshTokenOptions = {
      path: "/",
      secure: true,
      httpOnly: true,
      sameSite: "none" as const,
    };

    cookies().set("biomob-pd.token", tokens.accessToken, accessTokenOptions);
    cookies().set("biomob-pd.refresh-token", tokens.refreshToken, refreshTokenOptions);

    if (setCookieHeader) {
      const cookieParts = setCookieHeader.split(";");
      const [name, value] = cookieParts[0].split("=");

      cookies().set(name, value, refreshTokenOptions);
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Erro ao rodar o refreshToken:", error);

    return {
      success: false,
      error: (error as any).message,
    };
  }
}
