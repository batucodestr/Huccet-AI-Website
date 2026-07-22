"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#why", label: "Why Huccet?" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/logo-192.png"
            alt={siteConfig.name}
            width={32}
            height={32}
            className="rounded-full"
            priority
          />
          <span className="text-base font-semibold tracking-tight text-white">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            render={<Link href="#hero" />}
            nativeButton={false}
            className="bg-brand-500 text-brand-950 hover:bg-brand-400"
          >
            Download the App
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-white md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-brand-950 px-5 pb-5 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Button
              render={<Link href="#hero" onClick={() => setOpen(false)} />}
              nativeButton={false}
              className="mt-2 w-full bg-brand-500 text-brand-950 hover:bg-brand-400"
            >
              Download the App
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
