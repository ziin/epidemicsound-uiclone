import Image from "next/image";
import { MaxWidthWrapper } from "~/components/max-w-wrapper";
import { Heading } from "~/components/ui/heading";
import { cn } from "~/components/ui/utils";

const tracks = [
  "Creative skills",
  "Deep focus",
  "Uplifting workout",
  "Cinematic scores",
  "Indie gaming",
  "Kitchen soundbeds",
  "Clothing haul",
  "Crime podcast",
  "Feelgood trailers",
];

export function UnlimitedSection() {
  return (
    <MaxWidthWrapper asChild>
      <section className="flex flex-col xl:flex-row gap-12 xl:items-center py-10 md:py-16">
        <div className="xl:w-3/5 grid gap-4 lg:gap-8 lg:gap-y-6 grid-rows-2 grid-cols-2 md:grid-cols-3 md:grid-rows-2 xl:grid-rows-3">
          {tracks.map((track, i) => (
            <div
              key={track}
              className={cn(
                "flex flex-col gap-2",
                i >= 4 && "sm:hidden md:flex",
                i >= 6 && "md:hidden xl:flex",
              )}
            >
              <Image
                alt=""
                src={`/unlimited/${track
                  .split(" ")
                  .join("-")
                  .toLowerCase()}.jpg`}
                width={360}
                height={360}
              />
              <span className="leading-5 tracking-tight">{track}</span>
            </div>
          ))}
        </div>
        <div className="xl:w-2/5">
          <Heading as="h2">
            Royalty-free music to download or stream - Get unlimited access to
            over 40,000 tracks & 90,000 sound effects
          </Heading>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
