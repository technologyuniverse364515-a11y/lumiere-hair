import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { SiteConfig } from "@/theme/ThemeConfig";
import { ScreenText } from "@/constants/ScreenText";
import { ButtonLabels } from "@/constants/ButtonLabels";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-gold font-serif text-lg font-bold text-primary-foreground">
                L
              </span>
              <span className="font-serif text-xl font-semibold">{SiteConfig.salonName}</span>
            </div>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">{ScreenText.Footer.tagline}</p>
            <div className="mt-5 flex gap-3">
              <a href={SiteConfig.social.instagram} aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-background">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={SiteConfig.social.facebook} aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-background">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold">Explore</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary">{ButtonLabels.Generic.headerOptions.AboutUs}</Link></li>
              <li><Link to="/services" className="hover:text-primary">{ButtonLabels.Generic.headerOptions.Services}</Link></li>
              <li><Link to="/gallery" className="hover:text-primary">{ButtonLabels.Generic.headerOptions.Gallery}</Link></li>
              <li><Link to="/testimonials" className="hover:text-primary">{ButtonLabels.Generic.headerOptions.Testimonials}</Link></li>
              <li><Link to="/contact" className="hover:text-primary">{ButtonLabels.Generic.headerOptions.Contact}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold">Visit</h4>
            <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" />{SiteConfig.address}</li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-primary" /><a href={SiteConfig.phoneHref} className="hover:text-primary">{SiteConfig.phone}</a></li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-primary" /><a href={`mailto:${SiteConfig.email}`} className="hover:text-primary">{SiteConfig.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          {ScreenText.Footer.rights}
        </div>
      </div>
    </footer>
  );
}
