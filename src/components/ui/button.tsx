import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "transition-colors duration-300 text-base px-[0.75rem] py-[0.5rem] flex items-center justify-center gap-2",
  {
    variants: {
      variant: {
        default:
          "bg-amarelo-100 text-cinza-900 rounded-[1rem] hover:bg-cinza-900 hover:text-amarelo-100 hover:border hover:border-amarelo-100 border border-transparent ",
        destructive:
          "bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
        outline:
          "w-full border border-var-border-color placeholder:text-var-text-color-paragraph rounded-lg title-card-regular placeholder:title-card-regular  focus:outline-none focus:border-[.0625rem] focus:border-white block px-3 placeholder:opacity-50 h-[2.375rem] bg-var-background-principal autofill:bg-var-background-principal focus:bg-var-background-principal",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
        ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
        dropdownMenuContent:
          "hover:bg-var-selected-hover-color w-full text-start  cursor-pointer relative flex cursor-default select-none items-start justify-start rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-var-selected-hover-color  data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ",
      },
      size: {
        default: "h-10 px-4 py-2",
        none: "",
        sm: "h-7 rounded-lg px-2",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading, children, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot ref={ref} {...props}>
          <>
            {React.Children.map(children as React.ReactElement, (child: React.ReactElement) => {
              return React.cloneElement(child, {
                className: cn(buttonVariants({ variant, size }), className),
                children: (
                  <>
                    {loading && <Loader2 className={cn("h-4 w-4 animate-spin", children && "mr-2")} />}
                    {child.props.children}
                  </>
                ),
              });
            })}
          </>
        </Slot>
      );
    }

    return (
      <button className={cn(buttonVariants({ variant, size, className }))} disabled={loading} ref={ref} {...props}>
        {loading && <Loader2 className={cn("h-4 w-4 animate-spin", children && "mr-2")} />}
        {children}
      </button>
    );
  }
);
Button.displayName = "LoadingButton";

export { Button, buttonVariants };
