import Image from "next/image";

import { MaxWidthWrapper } from "~/components/max-w-wrapper";
import { Heading } from "~/components/ui/heading";
import { Button } from "~/components/ui/button";

export function CalloutSection() {
  return (
    <MaxWidthWrapper
      className="flex flex-col xl:flex-row gap-8 py-10 md:py-16 lg:py-20"
      asChild
    >
      <section>
        {/* Image */}
        <div className="w-full relative min-h-full flex items-end flex-col aspect-square md:aspect-auto">
          <Image
            src="/callout/callout.jpg"
            width={540}
            height={591}
            alt=""
            className="object-cover w-full md:w-4/5 xl:w-full xl:pl-20 object-center h-full"
          />
          <Heading
            as="h2"
            className="absolute left-4 bottom-4 md:top-[60%] xl:left-0 xl:top-[45%] drop-shadow-sm"
          >
            Ready, set,
            <br /> soundtrack
          </Heading>
        </div>
        {/* Content */}
        <div className="w-full flex flex-col gap-10">
          <div>
            <Heading as="h3" className="mb-3">
              Try for free
            </Heading>
            <p className="text-foreground-muted">
              Explore our music and try it out for 30 days – free of charge, no
              strings attached. During your free trial you can download and
              publish as many tracks you like in both videos or podcasts.
            </p>
            <Button variant="accent" className="mt-6">
              Start free trial
            </Button>
          </div>
          <div>
            <Heading as="h3" className="mb-3">
              Pick a subscription
            </Heading>
            <p className="text-foreground-muted">
              A subscription is most beneficial if you publish videos regularly.
              All subscriptions give you full access to 40,000 tracks and 90,000
              sound effects. Unlimited downloads and use.
            </p>
            <Button className="mt-6">See pricing</Button>
          </div>
          <div>
            <Heading as="h3" className="mb-3">
              Connect your channels
            </Heading>
            <p className="text-foreground-muted">
              After signing up, you&apos;ll be able to connect your social media
              channels. All connected channels will be cleared, which means you
              can publish content with our music without worrying about
              copyright.
            </p>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
