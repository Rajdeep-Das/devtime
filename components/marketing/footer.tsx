// components/marketing/footer.tsx
import { Clock } from "lucide-react";

export function MarketingFooter() {
  return (
    <footer className="border-t">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Clock className="h-5 w-5" />
          <span className="text-sm font-medium">DevTime</span>
        </div>
        <div className="text-sm text-muted-foreground">
          Built with ❤️ for developers
        </div>
      </div>
    </footer>
  );
}
