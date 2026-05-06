import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/Section";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTASection } from "@/components/CTASection";
import { ScreenText } from "@/constants/ScreenText";
import { Testimonials } from "@/constants/SiteData";
import { Star } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Reviews — Lumière Hair Studio" },
      { name: "description", content: "Read what our clients say. 300+ five-star reviews from guests across Austin, TX." },
      { property: "og:title", content: "Client Reviews — Lumière Hair Studio" },
      { property: "og:description", content: ScreenText.Testimonials.subtitle },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <Section className="bg-background">
        <SectionHeader
          eyebrow={ScreenText.Testimonials.eyebrow}
          title={ScreenText.Testimonials.title}
          subtitle={ScreenText.Testimonials.subtitle}
        />

        <div className="mx-auto mb-12 flex max-w-md items-center justify-center gap-3 rounded-full border border-border bg-card px-6 py-3 shadow-card">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-sm font-semibold">5.0 average · 300+ reviews</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
