import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroButtons() {
  return (
    <div className="flex justify-center gap-4">
      <Button
        size="lg"
        className="h-12 px-6 bg-[hsl(221,83%,53%)] text-white hover:bg-[hsl(221,83%,48%)] transition-colors"
      >
        Get Started
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="h-12 px-6 bg-white hover:bg-[hsl(221,83%,97%)] border-[#E5E7EB] text-gray-600 hover:text-gray-900 hover:border-[#E5E7EB] transition-colors"
      >
        View Demo
      </Button>
    </div>
  );
}
