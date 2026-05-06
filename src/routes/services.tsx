import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { ScreenText } from "@/constants/ScreenText";
import { ServiceCategories } from "@/constants/SiteData";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — Lumière Hair Studio" },
      { name: "description", content: "Explore our full menu of haircuts, color, balayage, styling, and men's grooming services with transparent pricing." },
      { property: "og:title", content: "Services & Pricing — Lumière Hair Studio" },
      { property: "og:description", content: ScreenText.Services.subtitle },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <Section className="bg-background">
        <SectionHeader
          eyebrow={ScreenText.Services.eyebrow}
          title={ScreenText.Services.title}
          subtitle={ScreenText.Services.subtitle}
        />

        <div className="space-y-16">
          {ServiceCategories.map((cat, idx) => (
            <div
              key={cat.id}
              className={`grid gap-8 lg:grid-cols-2 lg:items-center ${idx % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="overflow-hidden rounded-2xl shadow-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-serif text-3xl font-semibold sm:text-4xl">{cat.name}</h2>
                <p className="mt-2 text-muted-foreground">{cat.description}</p>
                <div className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex items-start justify-between gap-4 p-5">
                      <div>
                        <p className="font-serif text-base font-semibold">{item.name}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <p className="shrink-0 rounded-full bg-gradient-gold px-3 py-1 text-sm font-semibold text-primary-foreground">
                        {item.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-14 max-w-2xl rounded-xl bg-secondary p-5 text-center text-sm text-muted-foreground">
          {ScreenText.Services.note}
        </p>
      </Section>

      <CTASection />
    </>
  );
}
