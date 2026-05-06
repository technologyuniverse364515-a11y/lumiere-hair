import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Award, Sparkles, BadgeCheck, Star, ArrowRight, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-salon.jpg";
import { Section, SectionHeader } from "@/components/Section";
import { TestimonialCard } from "@/components/TestimonialCard";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CTASection } from "@/components/CTASection";
import { ScreenText } from "@/constants/ScreenText";
import { ButtonLabels } from "@/constants/ButtonLabels";
import { SiteConfig } from "@/theme/ThemeConfig";
import { ServiceCategories, Testimonials, WhyChooseUs, GalleryImages } from "@/constants/SiteData";

const iconMap = { Award, Sparkles, BadgeCheck, Star };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SiteConfig.salonName} — Premium Hair Salon in ${SiteConfig.city}` },
      {
        name: "description",
        content: `${SiteConfig.salonName} is ${SiteConfig.city}'s premier salon for cuts, color, balayage, and men's grooming. Book your appointment today.`,
      },
      { property: "og:title", content: `${SiteConfig.salonName} — Premium Hair Salon` },
      { property: "og:description", content: ScreenText.Home.subText },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Modern luxury hair salon interior with warm lighting"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/55 to-foreground/85" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-background">
            <p className="mb-4 inline-block rounded-full border border-background/30 bg-background/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur">
              {ScreenText.Home.eyebrow}
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
              {ScreenText.Home.headline}
            </h1>
            <p className="mt-5 max-w-xl text-base text-background/85 sm:text-lg">
              {ScreenText.Home.subText}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={SiteConfig.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-105"
              >
                <Phone className="h-4 w-4" />
                {ButtonLabels.Home.primaryCTA}
              </a>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-background/40 bg-background/10 px-7 py-3.5 text-sm font-semibold text-background backdrop-blur transition-colors hover:bg-background/20"
              >
                {ButtonLabels.Home.secondaryCTA}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-background/80">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <span>300+ five-star reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                <span>Award-winning stylists</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <Section className="bg-background">
        <SectionHeader eyebrow="Why Choose Us" title={ScreenText.Home.whyTitle} subtitle={ScreenText.Home.whySubtitle} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WhyChooseUs.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-7 text-center shadow-card transition-all hover:shadow-elegant">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-gold">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-5 font-serif text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Services Preview */}
      <Section className="bg-secondary">
        <SectionHeader
          eyebrow="Services"
          title={ScreenText.Home.servicesPreviewTitle}
          subtitle={ScreenText.Home.servicesPreviewSubtitle}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ServiceCategories.map((s) => (
            <Link
              to="/services"
              key={s.id}
              className="group overflow-hidden rounded-2xl bg-card shadow-card transition-all hover:shadow-elegant"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border border-foreground px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            {ButtonLabels.Home.exploreServices}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Testimonials Preview */}
      <Section className="bg-background">
        <SectionHeader
          eyebrow="Reviews"
          title={ScreenText.Home.testimonialsTitle}
          subtitle={ScreenText.Home.testimonialsSubtitle}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {Testimonials.slice(0, 3).map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 rounded-full border border-foreground px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            {ButtonLabels.Home.readReviews}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Gallery Preview */}
      <Section className="bg-secondary">
        <SectionHeader
          eyebrow="Gallery"
          title={ScreenText.Home.galleryPreviewTitle}
          subtitle={ScreenText.Home.galleryPreviewSubtitle}
        />
        <GalleryGrid images={GalleryImages.slice(0, 6)} />
        <div className="mt-10 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 rounded-full border border-foreground px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            {ButtonLabels.Home.seeGallery}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Location preview */}
      <Section className="bg-background">
        <SectionHeader
          eyebrow="Location"
          title={ScreenText.Home.locationTitle}
          subtitle={ScreenText.Home.locationSubtitle}
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border shadow-card">
            <iframe
              src={SiteConfig.mapsEmbed}
              width="100%"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Salon location map"
              className="h-full min-h-[360px] w-full"
            />
          </div>
          <div className="flex flex-col justify-center gap-5 rounded-2xl bg-card p-8 shadow-card">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-primary" />
              <div>
                <p className="font-serif text-lg font-semibold">Address</p>
                <p className="text-muted-foreground">{SiteConfig.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 text-primary" />
              <div>
                <p className="font-serif text-lg font-semibold">Phone</p>
                <a href={SiteConfig.phoneHref} className="text-muted-foreground hover:text-primary">{SiteConfig.phone}</a>
              </div>
            </div>
            <div className="rounded-xl bg-secondary p-5">
              <p className="font-serif text-base font-semibold">Hours</p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {SiteConfig.hours.map((h) => (
                  <li key={h.day} className="flex justify-between">
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
