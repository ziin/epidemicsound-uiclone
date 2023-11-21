import { brands } from "./brands";

export function BrandsSlide() {
  return (
    <div className="pb-16 md:hidden">
      <div className="flex items-center h-14 w-full relative overflow-hidden after:right-0 after:h-full after:w-36 after:z-10 after:bg-gradient-to-l after:from-background after:to-transparent after:absolute before:h-full  before:w-36 before:z-10 before:bg-gradient-to-r before:from-background before:to-transparent before:absolute">
        <div className="h-14 flex w-[1800px] justify-around absolute animate-slideleft">
          <Brands />
        </div>
        <div className="h-14 left-[1800px] flex w-[1800px] justify-around absolute animate-slideleft">
          <Brands />
        </div>
      </div>
    </div>
  );
}

function Brands() {
  return Object.keys(brands).map((brand) => (
    <span
      className="flex items-center justify-around [&>svg]:max-w-[130px] [&>svg]:max-h-[24px]"
      key={brand}
    >
      {brands[brand as keyof typeof brands]}
    </span>
  ));
}
