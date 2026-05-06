import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/Section";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CTASection } from "@/components/CTASection";
import { ScreenText } from "@/constants/ScreenText";
import { GalleryImages } from "@/constants/SiteData";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Lumière Hair Studio" },
      { name: "description", content: "Browse our portfolio of recent cuts, colors, balayage, and bridal styles from Austin's premier salon." },
      { property: "og:title", content: "Gallery — Lumière Hair Studio" },
      { property: "og:description", content: ScreenText.Gallery.subtitle },
      { property: "og:image", content: GalleryImages[0].src },
      { name: "twitter:image", content: GalleryImages[0].src },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <Section className="bg-background">
        <SectionHeader
          eyebrow={ScreenText.Gallery.eyebrow}
          title={ScreenText.Gallery.title}
          subtitle={ScreenText.Gallery.subtitle}
        />
        <GalleryGrid />
      </Section>
      <CTASection />
    </>
  );
}
