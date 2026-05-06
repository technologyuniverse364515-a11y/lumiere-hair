import { Link, useRouterState } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { ButtonLabels } from "@/constants/ButtonLabels";
import { SiteConfig } from "@/theme/ThemeConfig";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: ButtonLabels.Generic.headerOptions.Home },
  { to: "/about", label: ButtonLabels.Generic.headerOptions.AboutUs },
  { to: "/services", label: ButtonLabels.Generic.headerOptions.Services },
  { to: "/gallery", label: ButtonLabels.Generic.headerOptions.Gallery },
  { to: "/testimonials", label: ButtonLabels.Generic.headerOptions.Testimonials },
  { to: "/contact", label: ButtonLabels.Generic.headerOptions.Contact },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-gold font-serif text-lg font-bold text-primary-foreground">
            L
          </span>
          <span className="font-serif text-xl font-semibold tracking-tight">
            {SiteConfig.salonName}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                path === l.to ? "text-primary" : "text-foreground"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={SiteConfig.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:scale-105"
          >
            <Phone className="h-4 w-4" />
            {SiteConfig.phone}
          </a>
        </div>

        <button
          className="rounded-md p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-3 text-base font-medium",
                  path === l.to ? "bg-secondary text-primary" : "text-foreground"
                )}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={SiteConfig.phoneHref}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              {SiteConfig.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
