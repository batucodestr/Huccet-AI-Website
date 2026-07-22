import Link from "next/link";
import { Apple, PlayCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function StoreBadges({ className }: { className?: string }) {
  return (
    <div className={className ? className : "flex flex-wrap items-center gap-3"}>
      <Link
        href={siteConfig.links.appStore}
        aria-label="Download on the App Store"
        className="group flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-white transition-colors hover:bg-white/10"
      >
        <Apple className="h-6 w-6" />
        <span className="text-left leading-tight">
          <span className="block text-[10px] text-white/60">Download on the</span>
          <span className="block text-sm font-semibold">App Store</span>
        </span>
      </Link>
      <Link
        href={siteConfig.links.googlePlay}
        aria-label="Get it on Google Play"
        className="group flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-white transition-colors hover:bg-white/10"
      >
        <PlayCircle className="h-6 w-6" />
        <span className="text-left leading-tight">
          <span className="block text-[10px] text-white/60">Get it on</span>
          <span className="block text-sm font-semibold">Google Play</span>
        </span>
      </Link>
    </div>
  );
}
