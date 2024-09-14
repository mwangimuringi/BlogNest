import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import { SubmitButton } from "../dashboard/SubmitButtons";

interface PricingProps {
  id: number;
  cardTitle: string;
  cardDescription: string;
  priceTitle: string;
  benefits: string[];
}

export const PricingPlans: PricingProps[] = [
  {
    id: 0,
    cardTitle: "Freelancer",
    cardDescription: "Get started with BlogNest",
    priceTitle: "0",
    benefits: ["1 Site", "10 posts", "Basic support", "Up to 10 users"],
  },
  {
    id: 1,
    cardTitle: "Startup",
    cardDescription: "BlogNest pricing plan for startups",
    priceTitle: "1999",
    benefits: ["Unlimited posts", "No ads", "Basic support", "Up to 10 users"],
  },
  {
    id: 2,
    cardTitle: "Enterprise",
    cardDescription: "Get started with BlogNest",
    priceTitle: "2999",
    benefits: ["Unlimited posts", "No ads", "Basic support", "Up to 100 users"],
  },
];

export function PricingTable() {
  return (
    <>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary font-semibold mb-4">Pricing</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          Pricing Plans for BlogNest!
        </h1>
      </div>

      <p className="max-w-2xl text-center mt-6 mx-auto leading-tight text-muted-foreground">
        Choose a plan that suits your needs and start blogging like a pro!
      </p>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PricingPlans.map((item) => (
          <Card
            key={item.id}
            className={item.id === 0 ? "border-primary" : " "}
          >
            <CardHeader>
              <CardTitle>
                {item.id === 0 ? (
                  <div className="flex items-center justify-between">
                    <h3 className="text-primary">Startup</h3>
                    <p className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold leading-5">
                      Most Popular
                    </p>
                  </div>
                ) : (
                  <>{item.cardTitle}</>
                )}
              </CardTitle>
              <CardDescription>{item.cardDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold tracking-tight">
                Ksh {item.priceTitle}
              </p>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground">
                {/* used index as a key since benefit is not unique */}
                {item.benefits.map((benefit, index) => (
                  <li key={index} className="flex gap-x-3">
                    <Check className="size-5 flex-none text-primary" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              {item.id === 0 ? (
              <form className="w-full">
                <SubmitButton text="Buy plan" className="w-full mt-5" />
              </form>
              ) : (
                <Button variant="outline" className="mt-5 w-full">
                  Try free trial
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
