import { HeroSection } from "~/components/home/hero";
import { ShowcaseSection } from "~/components/home/showcase";
import { MusicCategorySection } from "~/components/home/music-category";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ShowcaseSection />
      <MusicCategorySection />
    </main>
  );
}
