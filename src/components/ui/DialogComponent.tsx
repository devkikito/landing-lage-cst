import React, { ElementType } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./dialog";
import Button from "../button/Button";

type DialogFormType = {
  buttonTitle: string;
  title: string;
  subTitle: string;
  Form: ElementType;
  row?: any;
  notButton?: boolean;
  open: boolean;
  setOpen: any;
  maxWidth?: string;
};

export const DialogComponent: React.FC<DialogFormType> = ({
  buttonTitle,
  subTitle,
  title,
  Form,
  notButton,
  open,
  setOpen,
  maxWidth,
}) => {
  const Content = Form;

  function closeDialog() {
    setOpen((prev: any) => !prev);
  }

  return (
    <Dialog open={open} onOpenChange={closeDialog}>
      {!notButton && (
        <DialogTrigger asChild>
          <Button onClick={(state) => setOpen(!state)} variant="default" text={buttonTitle} />
        </DialogTrigger>
      )}
      <DialogContent className={`${maxWidth} max-h-[80vh] overflow-y-auto`}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{subTitle}</DialogDescription>
        </DialogHeader>
        <Content setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};
