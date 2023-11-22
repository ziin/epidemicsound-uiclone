import Image from "next/image";

import { MaxWidthWrapper } from "~/components/max-w-wrapper";
import { Heading } from "~/components/ui/heading";

const categories = [
  {
    name: "Electronica & Dance",
    fileName: "electronica",
  },
  {
    name: "Film",
    fileName: "film",
  },
  {
    name: "Pop",
    fileName: "pop",
  },
  {
    name: "Hip Hop",
    fileName: "hiphop",
  },
  {
    name: "Classical",
    fileName: "classical",
  },
  {
    name: "Acoustic",
    fileName: "acoustic",
  },
];
export function MusicCategorySection() {
  return (
    <MaxWidthWrapper className="flex flex-col gap-6 p-4 md:p-8 xl:p-16" asChild>
      <section>
        <Heading as="h2" className="text-center">
          Real music, real impact.
        </Heading>
        <p className="text-foreground-muted text-xl text-center max-w-[60ch] mx-auto leading-6">
          We work with leading music creators from around the world to bring you
          exclusive, authentic new tracks on a daily basis.
        </p>
        <div className="grid grid-rows-3 mt-2 grid-cols-2 gap-4 md:gap-8 lg:grid-rows-2 xl:grid-rows-1 xl:grid-cols-6 lg:grid-cols-3 mx-auto">
          {categories.map((cat) => (
            <div key={cat.fileName}>
              <div className="relative">
                <Image
                  className="rounded-md"
                  src={`/music/${cat.fileName}.webp`}
                  width={385}
                  height={385}
                  alt={cat.name}
                />
                <div className="group absolute hover:bg-black/20 transition-colors duration-500 inset-0 grid place-items-center">
                  <button
                    title="Play the Music"
                    className="group-hover:opacity-100 transition-opacity duration-500 opacity-0 bg-foreground text-background aspect-square w-12 rounded-full flex items-center justify-center"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                    >
                      <path d="M20 12L8 5V19L20 12Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <p className="text-center mt-2 text-xl leading-6">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
