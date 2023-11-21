import { BrandsSlide } from "./brands-slide";
import { SoundTracking } from "./sound-tracking";
import { InstagramSlide } from "./instagram-slide";
import { BrandsStatic } from "./brands-static";

export function ShowcaseSection() {
  return (
    <section className="pt-8 pb-10 xl:py-20">
      <BrandsSlide />
      <SoundTracking />
      <InstagramSlide />
      <BrandsStatic />
    </section>
  );
}
