import Image from "next/image";
import Link from "next/link";
import { MaxWidthWrapper } from "~/components/max-w-wrapper";
import { Heading } from "~/components/ui/heading";

export function RightsIncludedSection() {
  return (
    <MaxWidthWrapper asChild>
      <section className="flex flex-col xl:flex-row relative py-10 md:py-16">
        <div className="xl:w-10/12 ml-auto">
          <Image
            src="/rights/rights-included.jpg"
            width={2160}
            height={1214}
            alt=""
            className="object-cover h-[300px] xl:h-[620px]"
          />
        </div>
        <div className="xl:absolute xl:inset-16 flex flex-col justify-center gap-4">
          <Heading as="h2">
            Never worry about
            <br />
            royalty fees again
          </Heading>
          <span className="text-accent hover:border-b-current border-b-transparent pb-0.5 border-b-2 w-fit">
            <Link href="/" className="text-4xl">
              All rights are{" "}
              <span className="whitespace-pre">
                included{" "}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-8 h-8 inline mb-1"
                >
                  <path d="M17.916 11L2 11L2 13L17.9112 13L13 17.5299L14.356 19L21.1507 12.7328L21.9476 11.9978L21.1507 11.2627L14.356 4.99554L13 6.46567L17.916 11Z"></path>
                </svg>
              </span>
            </Link>
          </span>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
