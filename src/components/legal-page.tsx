import type { ReactNode } from "react";

export function LegalPage({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: {updatedAt}
        </p>

        <div
          className="mt-10 space-y-6 text-[15px] leading-relaxed text-muted-foreground
            [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground
            [&_h2:first-child]:mt-0
            [&_p]:leading-relaxed
            [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5
            [&_strong]:text-foreground"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
