import { getAcessTokenServerAction } from "@/app/actions/acessTokenServerAction";
import { actionRefreshToken } from "@/app/actions/refreshTokenAction";
import axios, { AxiosInstance } from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const URL_API: string = process.env.BASE_URL || "";

const api: AxiosInstance = axios.create({
  withCredentials: true,
  withXSRFToken: true,
  baseURL: URL_API,
  timeout: 10000, // 10 segundos de timeout
  validateStatus: function (status) {
    return status >= 200 && status < 500; // Rejeita apenas se o status for >= 500
  },
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
    "X-API-Key": process.env.X_API_KEY,
    Connection: "keep-alive",
    "Keep-Alive": "timeout=5, max=1000",
  },
});

// Adiciona contador de tentativas
api.interceptors.request.use((config: any) => {
  config.retryCount = config.retryCount || 0;
  return config;
});

api.interceptors.request.use(
  async (config: any) => {
    // Verifica se a requisição não requer o Bearer Token
    if (!config.headers["X-One-Access-Token"]) {
      console.log("teste1");
      if (!config.headers["No-Auth"]) {
        const token = await getAcessTokenServerAction();
        if (token) {
          config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token.value}`,
          };
        }
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

let isRefreshing = false;
let failedQueue: (() => void)[] = [];

api.interceptors.response.use(
  (res: any) => res,
  async (error) => {
    // Verifica se é erro de timeout/conexão
    if (!error.response) {
      console.error("Erro de conexão:", error.message);
      if (error.config.retryCount < 3) {
        error.config.retryCount += 1;
        return await new Promise((resolve) =>
          setTimeout(() => resolve(api(error.config)), 1000 * error.config.retryCount)
        );
      }
    }

    // Verifica se é erro de timeout
    if (error.code === "ECONNABORTED" || error.message.includes("timeout")) {
      console.error("Timeout da requisição");
      if (error.config.retryCount < 3) {
        error.config.retryCount += 1;
        return await new Promise((resolve) =>
          setTimeout(() => resolve(api(error.config)), 1000 * error.config.retryCount)
        );
      }
    }

    const originalConfig = error.config;

    if (error?.response) {
      if (error?.response?.status === 401 && !originalConfig._retry) {
        if (error?.response?.data?.message === "Invalid credentials") {
          return Promise.reject(error);
        }
        originalConfig._retry = true;

        if (!isRefreshing) {
          isRefreshing = true;
          try {
            cookies().delete("biomob-pd.token");
            await actionRefreshToken();

            failedQueue.forEach((callback) => callback());
            failedQueue = [];

            return api(originalConfig);
          } catch (_error: any) {
            if (
              _error?.response?.data?.message === "No refresh token found" ||
              _error?.response?.data?.message === "Token is not active"
            ) {
              console.log("No refresh token found");
              cookies().delete("biomob-pd.token");

              if (typeof window !== "undefined") {
                alert("Você foi deslogado por inatividade.");
                redirect("/login");
              } else {
                redirect("/login");
              }
            }

            return Promise.reject(_error);
          } finally {
            isRefreshing = false;
          }
        } else {
          return new Promise((resolve, reject) => {
            failedQueue.push(() => {
              resolve(api(originalConfig));
            });
          });
        }
      }
    }

    return Promise.reject(error);
  }
);

export default api;
