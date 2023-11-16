import type { HTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "./ui/utils";

type MaxWidthWrapperProps = HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean;
};

export function MaxWidthWrapper({
  children,
  className,
  asChild,
  ...props
}: MaxWidthWrapperProps) {
  const Component = asChild ? Slot : "div";
  return (
    <Component
      className={cn("max-w-[1440px] mx-auto px-4 md:px-8 xl:px-16", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
