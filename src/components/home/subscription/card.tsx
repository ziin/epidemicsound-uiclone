import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "~/components/ui/utils";

type CardProps = {
  category: string;
  children: ReactNode;
};

function CardRoot({ category, children }: CardProps) {
  return (
    <div className="flex flex-1 gap-6 bg-card p-4 lg:p-6 flex-col">
      <span className="text-xl">{category}</span>
      {children}
    </div>
  );
}

type CardChildrenProps = HTMLAttributes<HTMLDivElement>;

function CardHeader({ children, className }: CardChildrenProps) {
  return <div className={cn("", className)}>{children}</div>;
}

function CardContent({ children, className }: CardChildrenProps) {
  return (
    <div className={cn("flex flex-col leading-7", className)}>{children}</div>
  );
}

function CardFooter({ children, className }: CardChildrenProps) {
  return (
    <div className={cn("mt-auto pt-4 lg:pt-12", className)}>{children}</div>
  );
}

type CardListItemProps = HTMLAttributes<HTMLUListElement>;

function CardListItem({ children, className }: CardListItemProps) {
  return (
    <li className={cn("flex gap-2 leading-6 [&>svg]:shrink-0", className)}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <path d="M9 15.5858L19.2934 5.29245L20.7067 6.70758L9 18.4142L3.29332 12.7076L4.70661 11.2924L9 15.5858Z"></path>
      </svg>
      {children}
    </li>
  );
}

export const Card = {
  Root: CardRoot,
  Header: CardHeader,
  Content: CardContent,
  Footer: CardFooter,
  ListItem: CardListItem,
};
