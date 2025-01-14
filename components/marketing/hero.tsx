// components/marketing/hero.tsx
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-20 pb-8 md:pb-12 lg:pt-32 lg:pb-24">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <div className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium">
          🚀 Now in Beta
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Smart Calendar Assistant <br /> Built for Developers
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Take control of your time. AI-powered calendar that protects your
          focus time and manages meetings intelligently.
        </p>
        <div className="flex gap-4">
          <Button size="lg">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            View Demo
          </Button>
        </div>
        <div className="w-full max-w-5xl pt-8">
          <img
            src="/api/placeholder/1200/630"
            alt="DevTime Dashboard"
            className="w-full rounded-lg border bg-background shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
