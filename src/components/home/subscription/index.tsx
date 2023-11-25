"use client";

import { useState } from "react";
import { MaxWidthWrapper } from "~/components/max-w-wrapper";
import { Heading } from "~/components/ui/heading";
import { cn } from "~/components/ui/utils";
import { Card } from "./card";
import { Button } from "~/components/ui/button";

const prices = {
  personal: {
    yearly: 39,
    monthly: 59,
  },
  commercial: {
    yearly: 79,
    monthly: 179,
  },
};

export function SubscriptionSection() {
  const [isYearly, setIsYearly] = useState(true);

  const { personal, commercial } = prices;
  const personalPrice = personal[isYearly ? "yearly" : "monthly"];
  const personalTotalPrice = personalPrice * 12;
  const personalYearlyDiscount = calculateDiscountPercentage(
    personal.monthly * 12,
    personal.yearly * 12,
  );

  const commercialPrice = commercial[isYearly ? "yearly" : "monthly"];
  const commercialTotalPrice = commercialPrice * 12;
  const commercialYearlyDiscount = calculateDiscountPercentage(
    commercial.monthly * 12,
    commercial.yearly * 12,
  );

  return (
    <MaxWidthWrapper asChild>
      <section className="flex flex-col gap-6 py-10 lg:py-20">
        <header className="flex justify-between items-center w-full gap-6 flex-wrap">
          <Heading
            as="h2"
            className="md:text-[2rem] leading-10 lg:text-[2.5rem] xl:text-5xl"
          >
            Our Subscriptions
          </Heading>
          {/* Tabs */}
          <div className="flex h-10 bg-card p-1 rounded-sm w-fit tracking-tight whitespace-nowrap">
            <button
              className={cn(
                `px-4 flex items-center rounded-sm`,
                isYearly && "bg-foreground text-background",
              )}
              onClick={() => setIsYearly(true)}
            >
              Pay Yearly
            </button>
            <button
              className={cn(
                `px-4 flex items-center rounded-sm`,
                !isYearly && "bg-foreground text-background",
              )}
              onClick={() => setIsYearly(false)}
            >
              Pay Monthly
            </button>
          </div>
        </header>
        <div className="grid gap-8 grid-rows-3 grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 xl:grid-rows-1 xl:grid-cols-3">
          {/* Personal Card */}
          <Card.Root category="Personal">
            <Card.Header>
              <h1 className="text-[2.5rem] font-semibold leading-10 tracking-tight">
                R${personalPrice}
              </h1>
              <span>/month</span>
            </Card.Header>
            <Card.Content>
              <ul className="flex flex-col gap-2">
                <Card.ListItem>Publish anywhere online</Card.ListItem>
                <Card.ListItem>Monetize 1 channel per platform</Card.ListItem>
                <Card.ListItem>Unlimited downloads</Card.ListItem>
                <Card.ListItem>
                  Access to Epidemic Sound mobile app
                </Card.ListItem>
              </ul>
            </Card.Content>
            <Card.Footer className="flex flex-col gap-3">
              <span className="text-foreground-muted text-xs text-center mb-2">
                {isYearly ? (
                  <span>*Billed annually (R${personalTotalPrice}/year).</span>
                ) : (
                  <span>
                    Save up to {personalYearlyDiscount}% by paying yearly
                  </span>
                )}
              </span>
              <Button variant="accent">Start free trial</Button>
              <Button variant="brighter">Read more</Button>
            </Card.Footer>
          </Card.Root>

          {/* Commercial Card */}
          <Card.Root category="Commercial">
            <Card.Header>
              <h1 className="text-[2.5rem] font-semibold leading-10 tracking-tight">
                R${commercialPrice}
              </h1>
              <span>/month</span>
            </Card.Header>
            <Card.Content>
              <span>Everything in Personal, plus:</span>
              <ul className="flex flex-col gap-2">
                <Card.ListItem>
                  Monetize up to 3 channels per platform
                </Card.ListItem>
                <Card.ListItem>
                  Publish content for clients and businesses
                </Card.ListItem>
                <Card.ListItem>Unlimited use in digital ads</Card.ListItem>
              </ul>
            </Card.Content>
            <Card.Footer className="flex flex-col gap-3">
              <span className="text-foreground-muted text-xs text-center mb-2">
                {isYearly ? (
                  <span>*Billed annually (R${commercialTotalPrice}/year).</span>
                ) : (
                  <span>
                    Save up to {commercialYearlyDiscount}% by paying yearly
                  </span>
                )}
              </span>
              <Button variant="accent">Start free trial</Button>
              <Button variant="brighter">Read more</Button>
            </Card.Footer>
          </Card.Root>

          {/* Enterprise Card */}
          <Card.Root category="Enterprise">
            <Card.Header>
              <h1 className="text-[2rem] font-semibold leading-10 tracking-tight">
                Request a quote
              </h1>
            </Card.Header>
            <Card.Content>
              <span>Everything in Commercial, plus:</span>
              <ul className="flex flex-col gap-2">
                <Card.ListItem>Multiple user accounts</Card.ListItem>
                <Card.ListItem>
                  All rights covered for TV shows and ads
                </Card.ListItem>
                <Card.ListItem>
                  Customer Success manager and music curation
                </Card.ListItem>
                <Card.ListItem>Customized deal terms</Card.ListItem>
              </ul>
            </Card.Content>
            <Card.Footer className="flex flex-col gap-3">
              <Button variant="accent">Start free trial</Button>
              <Button variant="brighter">Read more</Button>
            </Card.Footer>
          </Card.Root>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}

function calculateDiscountPercentage(
  monthlyPrice: number,
  yearlyPrice: number,
) {
  return Math.ceil(((monthlyPrice - yearlyPrice) / monthlyPrice) * 100);
}
