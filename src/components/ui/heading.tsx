import React from "react";
import { cn } from "./utils";

type Tag = "h1" | "h2" | "h3";

type HeadingProps = {
  children: React.ReactNode;
  as?: Tag;
  className?: string;
};

const variants: Record<Tag, string> = {
  h1: "text-[2.5rem] md:text-[3.5rem] leading-[3rem] md:leading-[4rem]",
  h2: "text-[2rem] md:text-5xl leading-9 md:leading-12",
  h3: "text-2xl md:text-[2.5rem] leading-7 md:leading-[3rem]",
};

function Heading({ children, as: Tag = "h1", className }: HeadingProps) {
  return (
    <Tag
      className={cn("font-semibold tracking-tight", variants[Tag], className)}
    >
      {children}
    </Tag>
  );
}

Heading.displayName = "Heading";

export { Heading };
