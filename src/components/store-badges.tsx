import Link from "next/link";
import { Apple } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function StoreBadges({ className }: { className?: string }) {
  return (
    <div className={className ? className : "flex flex-wrap items-center gap-3"}>
      <Link
        href='https://apps.apple.com/tr/app/h%C3%BCccet-ai/id6802028938?l=tr'
        aria-label="App Store'dan indirin"
        className="group flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-white transition-colors hover:bg-white/10"
      >
        <Apple className="h-6 w-6" />
        <span className="text-left leading-tight">
          <span className="block text-[10px] text-white/60">İndirin</span>
          <span className="block text-sm font-semibold">App Store</span>
        </span>
      </Link>
    </div>
  );
}
