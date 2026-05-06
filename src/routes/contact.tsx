import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import { Section, SectionHeader } from "@/components/Section";
import { ScreenText } from "@/constants/ScreenText";
import { ButtonLabels } from "@/constants/ButtonLabels";
import { Messages } from "@/constants/Messages";
import { SiteConfig } from "@/theme/ThemeConfig";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book — Lumière Hair Studio" },
      { name: "description", content: `Book your appointment at ${SiteConfig.salonName} in ${SiteConfig.city}. Call ${SiteConfig.phone} or send us a message.` },
      { property: "og:title", content: "Contact Lumière Hair Studio" },
      { property: "og:description", content: ScreenText.Contact.subtitle },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      toast.error(Messages.Contact.validation);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success(Messages.Contact.success);
      setForm({ name: "", phone: "", message: "" });
      setSubmitting(false);
    }, 700);
  };

  return (
    <Section className="bg-background">
      <SectionHeader
        eyebrow={ScreenText.Contact.eyebrow}
        title={ScreenText.Contact.title}
        subtitle={ScreenText.Contact.subtitle}
      />

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Form */}
        <div className="rounded-2xl border border-border bg-card p-7 shadow-card lg:col-span-3">
          <h2 className="font-serif text-2xl font-semibold">{ScreenText.Contact.formTitle}</h2>
          <form onSubmit={onSubmit} className="mt-6 space-y-5">
            <div>
              <label className="mb-1.5 block text-sm font-medium">Name *</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Phone *</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="(512) 555-0123"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Message *</label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Tell us what you'd like to book..."
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02] disabled:opacity-60 sm:w-auto"
            >
              <Send className="h-4 w-4" />
              {submitting ? "Sending..." : ButtonLabels.Contact.submitButton}
            </button>
          </form>
        </div>

        {/* Info */}
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
            <h3 className="font-serif text-xl font-semibold">{ScreenText.Contact.detailsTitle}</h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-foreground">{SiteConfig.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <a href={SiteConfig.phoneHref} className="text-foreground hover:text-primary">{SiteConfig.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <a href={`mailto:${SiteConfig.email}`} className="text-foreground hover:text-primary">{SiteConfig.email}</a>
              </li>
            </ul>
            <a
              href={SiteConfig.phoneHref}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              {ButtonLabels.Contact.callButton}
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
            <h3 className="flex items-center gap-2 font-serif text-xl font-semibold">
              <Clock className="h-5 w-5 text-primary" />
              {ScreenText.Contact.hoursTitle}
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {SiteConfig.hours.map((h) => (
                <li key={h.day} className="flex justify-between border-b border-border pb-2 last:border-0">
                  <span className="text-foreground">{h.day}</span>
                  <span className="text-muted-foreground">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl border border-border shadow-card">
        <iframe
          src={SiteConfig.mapsEmbed}
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Salon location map"
          className="w-full"
        />
      </div>
    </Section>
  );
}
