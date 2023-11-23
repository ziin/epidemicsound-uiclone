import { HeroSection } from "~/components/home/hero";
import { ShowcaseSection } from "~/components/home/showcase";
import { MusicCategorySection } from "~/components/home/music-category";
import { SoundtrackSection } from "~/components/home/soundtrack";
import { CalloutSection } from "~/components/home/callout";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ShowcaseSection />
      <MusicCategorySection />
      <SoundtrackSection />
      <CalloutSection />
    </main>
  );
}
