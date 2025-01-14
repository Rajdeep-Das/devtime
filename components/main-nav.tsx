import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MainNav() {
  return (
    <div className="flex h-16 items-center justify-between border-b px-4">
      <div className="flex items-center gap-2">
        <Clock className="h-6 w-6" />
        <span className="text-xl font-semibold">DevTime</span>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost">Sign In</Button>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}
