"use client";

import { IoMdMenu } from "react-icons/io";

export const MobileButton = () => {
  return (
    <button aria-label="Abrir menu" className="hidden text-branco-100 max-2sm:flex items-center">
      <IoMdMenu className="text-[2rem]" />
    </button>
  );
};
