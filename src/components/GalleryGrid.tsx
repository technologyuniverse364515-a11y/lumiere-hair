import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryImages } from "@/constants/SiteData";

type Props = {
  images?: typeof GalleryImages;
};

export function GalleryGrid({ images = GalleryImages }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? 0 : (i + 1) % images.length));
      if (e.key === "ArrowLeft") setOpen((i) => (i === null ? 0 : (i - 1 + images.length) % images.length));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, images.length]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setOpen(i)}
            className="group relative overflow-hidden rounded-xl bg-muted shadow-card transition-all hover:shadow-elegant"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/15" />
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 p-4 backdrop-blur"
          onClick={() => setOpen(null)}
        >
          <button
            className="absolute right-4 top-4 rounded-full bg-background/10 p-2 text-background hover:bg-background/20"
            onClick={() => setOpen(null)}
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            className="absolute left-4 rounded-full bg-background/10 p-3 text-background hover:bg-background/20"
            onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + images.length) % images.length); }}
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <img
            src={images[open].src}
            alt={images[open].alt}
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-elegant"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 rounded-full bg-background/10 p-3 text-background hover:bg-background/20"
            onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % images.length); }}
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}
