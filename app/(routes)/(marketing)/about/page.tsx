import { MainNav } from "@/components/marketing/main-nav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  Code,
  Focus,
  Github,
  Mail,
  MessageSquare,
  Shield,
  Sparkles,
  X,
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      <MainNav />
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            About DevTime
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We&apos;re building the future of calendar management for
            developers, helping teams protect their focus time and work more
            effectively.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                DevTime was born from a simple observation: developers need
                uninterrupted focus time to do their best work, but traditional
                calendars don&apos;t protect this essential resource.
              </p>
              <p className="text-lg text-muted-foreground">
                We&apos;re on a mission to help developers reclaim their time
                and maintain their flow state, leading to better code and
                happier teams.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <Card
                  key={stat.label}
                  className="flex flex-col items-center p-6"
                >
                  <stat.icon className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-20">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Why Choose DevTime?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="flex flex-col">
                <CardContent className="flex flex-1 flex-col p-6">
                  <feature.icon className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                  <p className="flex-1 text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="mb-6 text-3xl font-bold">Get in Touch</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Have questions or feedback? We&apos;d love to hear from you.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="gap-2">
              <Mail className="h-4 w-4" />
              Contact Us
            </Button>
            <Button variant="outline" className="gap-2">
              <Github className="h-4 w-4" />
              GitHub
            </Button>
            <Button variant="outline" className="gap-2">
              <X className="h-4 w-4" />
              Twitter
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}

const stats = [
  {
    label: "Active Users",
    value: "10K+",
    icon: Focus,
  },
  {
    label: "Focus Hours Saved",
    value: "100K+",
    icon: Clock,
  },
  {
    label: "Team Members",
    value: "12",
    icon: MessageSquare,
  },
  {
    label: "Countries",
    value: "20+",
    icon: Sparkles,
  },
];

const features = [
  {
    title: "AI-Powered Scheduling",
    description:
      "Smart algorithms that understand your work patterns and automatically suggest the best times for meetings and focus blocks.",
    icon: Sparkles,
  },
  {
    title: "Developer-First Design",
    description:
      "Built specifically for developers, with features that protect your flow state and maximize productivity.",
    icon: Code,
  },
  {
    title: "Team Integration",
    description:
      "Seamlessly integrates with your existing tools and team workflows, including GitHub, Slack, and more.",
    icon: Calendar,
  },
  {
    title: "Focus Time Protection",
    description:
      "Automatically blocks out focus time and prevents meeting overload, helping you maintain your flow state.",
    icon: Focus,
  },
  {
    title: "Privacy First",
    description:
      "Your calendar data is encrypted and secure. We never share your information with third parties.",
    icon: Shield,
  },
  {
    title: "24/7 Support",
    description:
      "Our dedicated support team is always here to help you get the most out of DevTime.",
    icon: MessageSquare,
  },
];
