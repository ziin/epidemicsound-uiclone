import Image from "next/image";

import { Heading } from "~/components/ui/heading";

const instagrams = [
  {
    name: "@CorridorCrew",
    desc: "Backflips and frontflips simultaneously",
    subs: "6M",
  },
  {
    name: "@LinhTruong",
    desc: "The crazy life of Linh",
    subs: "1M",
  },
  {
    name: "@urmomashley",
    desc: "Fashion and sneaker hauls",
    subs: "1.5M",
  },
  {
    name: "@JoeHaTTab",
    desc: "Documentary filmmaker",
    subs: "11M",
  },
  {
    name: "@ybsyoungbloods",
    desc: "Lifestyle vlogger in the deep blue",
    subs: "4.6M",
  },
  {
    name: "@Giuligartner",
    desc: "Lifestyle and travel photographer",
    subs: "6.3K",
  },
];

export function Instagrams() {
  return (
    <ul className="flex shrink-0 h-full gap-8 animate-instagram">
      {instagrams.map((insta) => (
        <li
          key={insta.name}
          className="relative w-auto aspect-[658/800] rounded-md overflow-hidden after:bg-gradient-to-t after:to-30% after:from-black/50 after:to-transparent after:absolute after:inset-0"
        >
          <Image
            src={`/instagram/${insta.name}.webp`}
            alt=""
            width={658}
            height={800}
            priority
          />
          <div className="absolute inset-4 md:inset-8 flex justify-end flex-col z-10 gap-1 tracking-tight">
            <Heading as="h3" className="md:py-2">
              {insta.name}
            </Heading>
            <p className="text-sm">–– {insta.desc}</p>
            <p className="text-sm">–– {insta.subs} subscribers</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
