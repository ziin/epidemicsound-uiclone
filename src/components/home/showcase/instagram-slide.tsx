import { Instagrams } from "./instagrams";

export function InstagramSlide() {
  return (
    <div className="pt-5 md:pt-10">
      <div className="relative flex w-full h-[340px] gap-8 md:h-[506px] overflow-hidden max-w-[2750px] mx-auto">
        <Instagrams />
        <Instagrams />
      </div>
    </div>
  );
}
