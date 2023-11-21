import Link from "next/link";
import { MaxWidthWrapper } from "./max-w-wrapper";
import { Logo } from "./logo";
import { Button } from "./ui/button";

export function NavBar() {
  return (
    <header className="h-16">
      <div className="h-16 fixed z-10 top-0 left-0 right-0 bg-background">
        <MaxWidthWrapper className="h-16 flex items-center justify-between fixed z-10 top-0 left-0 right-0 bg-background">
          <Link href="/">
            <Logo />
          </Link>
          <div className="flex gap-2">
            <Button asChild>
              <Link href="/">Log in</Link>
            </Button>
            <Button asChild variant="accent" className="tracking-tight">
              <Link href="/">Start free trial</Link>
            </Button>
          </div>
        </MaxWidthWrapper>
      </div>
    </header>
  );
}
