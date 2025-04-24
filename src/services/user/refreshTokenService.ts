import { cookies } from "next/headers";

export async function RefreshToken(): Promise<any> {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get("biomob-pd.refresh-token")?.value;
  if (!refreshToken) {
    throw new Error("Refresh token não encontrado");
  }

  return await fetch(`${process.env.BASE_URL}/auth/refresh-token`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({ refreshToken }),
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": process.env.X_API_KEY!,
    },
  });
}
