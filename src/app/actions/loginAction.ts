"use server";
interface loginInterface {
  email: string;
  password: string;
}

type FormState = {
  message: string;
  success: boolean;
  fields?: Record<string, FormDataEntryValue>;
  data?: any;
};

export async function nodeLogin(loginProps: loginInterface): Promise<FormState> {
  const response = await fetch(`${process.env.BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": process.env.X_API_KEY!,
    },
    body: JSON.stringify(loginProps),
  });

  console.log(response);

  if (!response.ok) {
    return {
      success: false,
      message: `Erro na requisição: ${response.statusText}`,
    };
  }

  const data = await response.json();
  console.log(data);
  return {
    message: "Login realizado com sucesso. Aguarde o redirecionamento.",
    success: true,
    data: data,
  };
}
