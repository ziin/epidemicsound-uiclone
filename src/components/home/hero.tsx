import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/heading";

export function HeroSection() {
  return (
    <section className="xl:py-20 xl:px-16 py-10 px-4 text-center flex flex-col">
      <Heading>Royalty-free music for your videos</Heading>
      <p className="text-xl py-8 max-w-[60ch] mx-auto leading-6">
        Get unlimited access to our music and sound effects catalog for your
        videos, streams and podcasts. Our license comes with all necessary
        rights included.
      </p>
      <div className="space-x-4">
        <Button variant="accent">Start free trial</Button>
        <Button>Read more</Button>
      </div>
      <span className="mt-4">30-day free trial. Cancel anytime.</span>
    </section>
  );
}
