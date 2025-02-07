"use client";

import React from "react";
import { getUserDetailsAction, verifyOneAccessTokenAction } from "@/app/actions/userActions";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import MultiStepForm from "../forms/secondRegister/multiStepForm";

export const SecondRegisterPage = () => {
  const searchParams = useSearchParams();
  const userProductId = searchParams.get("userProductId");
  const tokenId = searchParams.get("id");
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [linkToRedirect, setLinkToRedirect] = React.useState<string>("");

  React.useEffect(() => {
    async function fetch() {
      if (!userProductId || !tokenId) {
        return (window.location.href = "/");
      }

      try {
        const verifyToken = await verifyOneAccessTokenAction(tokenId);
        const tokenIsValid = verifyToken.success == true;

        const res = await getUserDetailsAction(userProductId, tokenId);

        if (res.formComplete && res.linkToRedirect) {
          window.location.href = res.linkToRedirect;
        } else {
          if (!tokenIsValid) {
            return (window.location.href = "/");
          }

          setLinkToRedirect(res.linkToRedirect!);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Erro ao verificar o token ou buscar dados do usuário:", error);
        setIsLoading(false);
      }
    }
    fetch();
  }, [userProductId, tokenId]);

  if (isLoading) {
    return (
      <div className="h-[80vh] w-screen flex items-center justify-center">
        <Loader2 className={cn("h-12 w-12 animate-spin")} />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col py-32 px-4 md:px-40">
      <MultiStepForm linkToRedirect={linkToRedirect} />
    </div>
  );
};
