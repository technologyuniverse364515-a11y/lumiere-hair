import { Star } from "lucide-react";

type Props = {
  name: string;
  rating: number;
  text: string;
  service?: string;
};

export function TestimonialCard({ name, rating, text, service }: Props) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:shadow-elegant">
      <div className="flex gap-0.5">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
        ))}
      </div>
      <p className="mt-4 flex-1 text-base leading-relaxed text-foreground">
        &ldquo;{text}&rdquo;
      </p>
      <div className="mt-6 border-t border-border pt-4">
        <p className="font-serif text-base font-semibold text-foreground">{name}</p>
        {service && <p className="text-sm text-muted-foreground">{service}</p>}
      </div>
    </div>
  );
}
