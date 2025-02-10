"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const SecondRegisterPage = () => {
  const searchParams = useSearchParams();
  const externalReference = searchParams.get("external_reference");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [linkToRedirect, setLinkToRedirect] = React.useState<string>("");

  React.useEffect(() => {
    async function fetch() {
      try {
      } catch (error) {
        console.error("Erro ao verificar o token ou buscar dados do usuário:", error);
        setIsLoading(false);
      }
    }
    fetch();
  }, [externalReference]);

  if (isLoading) {
    return (
      <div className="h-[80vh] w-screen flex items-center justify-center">
        <Loader2 className={cn("h-12 w-12 animate-spin")} />
      </div>
    );
  }
};
