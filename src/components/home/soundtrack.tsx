import Image from "next/image";
import Link from "next/link";

import { Heading } from "~/components/ui/heading";
import { MaxWidthWrapper } from "~/components/max-w-wrapper";

const items = [
  {
    name: "YouTube",
    desc: "Elevate your content with sound",
    url: "/youtube",
  },
  {
    name: "Twitch",
    desc: "Epic tracks for your stream",
    url: "/twitch",
  },
  {
    name: "Films",
    desc: "Soundtrack your world",
    url: "/filmmaking",
  },
  {
    name: "Facebook",
    desc: "Make your stories pop",
    url: "/facebook",
  },
  {
    name: "Instagram",
    desc: "Stand out in the feed",
    url: "/instagram",
  },
  {
    name: "Advertising",
    desc: "Amplify your brand",
    url: "/advertising",
  },
];

export function SoundtrackSection() {
  return (
    <MaxWidthWrapper
      className="flex flex-col xl:items-center gap-6 p-4 md:p-8 xl:py-20"
      asChild
    >
      <section>
        <Heading as="h2" className="xl:text-center">
          Soundtrack everywhere
        </Heading>
        <p className="text-foreground-muted text-xl leading-6 xl:text-center max-w-[60ch]">
          Soundtracking with Epidemic Sound means that you can publish your
          content anywhere online, worry-free.
        </p>
        <div className="grid gap-y-6 gap-x-8 xl:grid-rows-2 xl:grid-cols-3">
          {items.map((item) => (
            <Link
              href={`${item.url}`}
              key={item.name}
              className="group relative pt-2"
            >
              <Image
                className="max-h-72 object-center object-cover aspect-[1080/740]"
                src={`/soundtrack/${item.name.toLowerCase()}.webp`}
                alt=""
                width={1080}
                height={740}
              />
              <div className="absolute bg-black/20 inset-0 flex flex-col justify-end p-6">
                <Heading as="h3" className="text-[2rem] md:text-[2rem]">
                  {item.name}
                </Heading>
                <p className="text-xl leading-4">
                  {item.desc.substring(0, item.desc.lastIndexOf(" "))}&nbsp;
                  <span className="whitespace-nowrap">
                    {item.desc.split(" ").pop()}&nbsp;
                    <span className="inline-block overflow-hidden top-[0.30rem] relative h-6">
                      <svg
                        className="-translate-x-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 group-hover:translate-x-0 duration-300 transition"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M17.916 11L2 11L2 13L17.9112 13L13 17.5299L14.356 19L21.1507 12.7328L21.9476 11.9978L21.1507 11.2627L14.356 4.99554L13 6.46567L17.916 11Z"></path>
                      </svg>
                    </span>
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
