import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { SiteConfig } from "@/theme/ThemeConfig";
import { ScreenText } from "@/constants/ScreenText";
import { ButtonLabels } from "@/constants/ButtonLabels";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-foreground py-20 text-background sm:py-24">
      <div className="absolute inset-0 bg-gradient-gold opacity-10" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="font-serif text-3xl font-semibold text-balance sm:text-4xl md:text-5xl">
          {ScreenText.Home.finalCtaTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-background/75 sm:text-lg">
          {ScreenText.Home.finalCtaSubtitle}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={SiteConfig.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-105"
          >
            <Phone className="h-4 w-4" />
            {ButtonLabels.Home.primaryCTA}: {SiteConfig.phone}
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-background/30 px-7 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-background/10"
          >
            {ButtonLabels.Generic.bookNow}
          </Link>
        </div>
      </div>
    </section>
  );
}
