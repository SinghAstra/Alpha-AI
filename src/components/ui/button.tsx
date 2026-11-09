import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-bold transition-all outline-none focus-visible:ring-[3px] focus-visible:ring-brand/30 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-ink text-white shadow-[0_7px_16px_rgba(23,33,30,0.16)] hover:-translate-y-px hover:bg-ink-2 active:translate-y-0",
        brand:
          "bg-brand text-white hover:-translate-y-px hover:bg-brand-dark active:translate-y-0",
        secondary:
          "border border-line bg-surface text-ink hover:-translate-y-px hover:border-ink/25 hover:bg-paper-2 active:translate-y-0",
        lime: "bg-lime text-brand-dark hover:-translate-y-px hover:brightness-95 active:translate-y-0",
        ghost: "text-ink hover:bg-paper-2",
        link: "text-brand underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
