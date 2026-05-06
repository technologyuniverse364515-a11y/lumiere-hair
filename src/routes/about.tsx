import { createFileRoute } from "@tanstack/react-router";
import { Award, Heart, Scissors, Users } from "lucide-react";
import ownerImg from "@/assets/owner.jpg";
import { Section, SectionHeader } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { ScreenText } from "@/constants/ScreenText";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Lumière Hair Studio" },
      { name: "description", content: "Meet the team behind Austin's premier hair salon. Master stylists, premium products, and a passion for transformation." },
      { property: "og:title", content: "About Lumière Hair Studio" },
      { property: "og:description", content: ScreenText.About.intro },
      { property: "og:image", content: ownerImg },
      { name: "twitter:image", content: ownerImg },
    ],
  }),
  component: AboutPage,
});

const highlights = [
  { icon: Award, title: "15+ Years of Mastery", desc: "Decades of combined experience across our team." },
  { icon: Scissors, title: "Certified Education", desc: "Vidal Sassoon, Redken, Aveda, and Olaplex trained." },
  { icon: Heart, title: "Guest-First Approach", desc: "Every appointment starts with a real conversation." },
  { icon: Users, title: "300+ Happy Regulars", desc: "Building relationships, not just appointments." },
];

function AboutPage() {
  return (
    <>
      <Section className="bg-background">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {ScreenText.About.eyebrow}
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-tight text-balance sm:text-5xl">
              {ScreenText.About.title}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">{ScreenText.About.intro}</p>
            <div className="mt-8 rounded-2xl bg-secondary p-7">
              <h2 className="font-serif text-2xl font-semibold">{ScreenText.About.storyTitle}</h2>
              <p className="mt-3 text-muted-foreground">{ScreenText.About.story}</p>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={ownerImg}
                alt={`${ScreenText.About.ownerName}, ${ScreenText.About.ownerRole}`}
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-gradient-gold p-5 shadow-elegant sm:block">
              <p className="font-serif text-2xl font-bold text-primary-foreground">15+</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-foreground">Years experience</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-secondary">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-2xl shadow-card">
            <img src={ownerImg} alt={ScreenText.About.ownerName} loading="lazy" width={1024} height={1280} className="aspect-square w-full object-cover" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Meet the Founder</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">{ScreenText.About.ownerName}</h2>
            <p className="mt-1 text-base text-muted-foreground">{ScreenText.About.ownerRole}</p>
            <p className="mt-5 text-base leading-relaxed text-foreground">{ScreenText.About.ownerBio}</p>
          </div>
        </div>
      </Section>

      <Section className="bg-background">
        <SectionHeader eyebrow="What Sets Us Apart" title={ScreenText.About.highlightsTitle} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.title} className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-gold">
                <h.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-5 font-serif text-lg font-semibold">{h.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
