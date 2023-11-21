import { MaxWidthWrapper } from "~/components/max-w-wrapper";
import { brands } from "./brands";

export function BrandsStatic() {
  return (
    <MaxWidthWrapper className="hidden md:grid mx-auto grid-rows-3 xl:grid-rows-2 grid-cols-4 xl:grid-cols-6 gap-x-8 gap-y-8 py-8">
      <Brands />
    </MaxWidthWrapper>
  );
}

function Brands() {
  return Object.keys(brands).map((brand) => (
    <span
      className="flex items-center justify-around [&>svg]:max-w-[164px] [&>svg]:max-h-[32px]"
      key={brand}
    >
      {brands[brand as keyof typeof brands]}
    </span>
  ));
}
