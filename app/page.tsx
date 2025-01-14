// app/page.tsx
//import DashboardMockup from "@/components/dashboard-mockup";
import InteractiveDashboardMockup from "@/components/dashboard-mockup-interactive";
import { MainNav } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Clock, Code, Focus } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <MainNav />
      <main className="flex flex-col items-center">
        {/* Hero Section */}
        <section className="flex flex-col items-center px-4 pt-24">
          <div className="w-full max-w-7xl space-y-24">
            <div className="space-y-8">
              <div className="flex justify-center">
                <div className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1">
                  🚀 <span className="ml-2 text-sm">Now in Beta</span>
                </div>
              </div>

              <div className="space-y-10 text-center">
                <h1 className="px-6 text-6xl font-medium tracking-tight">
                  Smart Calendar Assistant
                  <br />
                  Built for Developers
                </h1>

                <p className="mx-auto max-w-2xl text-xl text-gray-500">
                  Take control of your time. AI-powered calendar that protects
                  your focus time and manages meetings intelligently.
                </p>

                <div className="flex justify-center gap-4">
                  <Button size="lg" className="h-12 px-6">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="h-12 px-6">
                    View Demo
                  </Button>
                </div>
              </div>

              <div className="pt-8">
                {/* <div className="w-full max-w-6xl mx-auto px-4">
                  <div className="relative">
                   
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                    <DashboardMockup />
                  </div>
                </div> */}
                <div className="w-full max-w-6xl mx-auto px-4">
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                    <div className="transform transition-all duration-500 hover:scale-[1.01]">
                      <InteractiveDashboardMockup />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full px-4 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                Features
              </h2>
              <p className="mt-4 text-xl text-gray-500">
                Built by developers, for developers. Everything you need to
                manage your time effectively.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <Card key={feature.title} className="border-2">
                  <CardHeader>
                    <feature.icon className="h-12 w-12 text-primary" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full border-t bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-24 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to Reclaim Your Time?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500">
              Start your 14-day free trial. No credit card required.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" className="h-12 px-6">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-6">
                View Pricing
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const features = [
  {
    title: "Smart Focus Blocks",
    description:
      "AI-powered focus time protection that adapts to your work style",
    icon: Clock,
  },
  {
    title: "Teams Integration",
    description: "Seamless integration with Microsoft Teams calendar",
    icon: Code,
  },
  {
    title: "Time Analytics",
    description:
      "Understand and optimize your time usage with powerful insights",
    icon: Focus,
  },
];
