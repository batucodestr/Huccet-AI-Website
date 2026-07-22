import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { StoreBadges } from "@/components/store-badges";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-brand-950 text-white">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/images/logo-192.png"
                alt={siteConfig.name}
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-base font-semibold">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              {siteConfig.description}
            </p>
            <div className="mt-6">
              <StoreBadges />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/90">Legal</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/90">Explore</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>
                <Link href="#features" className="hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="max-w-md text-center sm:text-right">
            Huccet AI is not a religious authority or a source of fatwas; it is
            a tool that helps you research Islamic sources.
          </p>
        </div>
      </div>
    </footer>
  );
}
