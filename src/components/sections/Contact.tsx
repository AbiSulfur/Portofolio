import React from "react";
import { useI18n } from "../../i18n";
import { site } from "../../data/site";
import { Button } from "../ui/Button";
import { FadeUp } from "../motion/FadeUp";
import { Magnetic } from "../motion/Magnetic";
import { ArrowUpRight, MessageSquare, MapPin } from "lucide-react";

export function Contact() {
  const { t } = useI18n();

  const directLinks = [
    {
      label: "Email",
      value: site.email,
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${site.email}`,
    },
    {
      label: "GitHub",
      value: "github.com/AbiSulfur",
      href: site.socials.github,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/abigail-dev",
      href: site.socials.linkedin,
    },
    {
      label: "Instagram",
      value: "@bened_tri",
      href: site.socials.instagram,
    },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="py-16 sm:py-24 max-w-[1440px] mx-auto px-5 sm:px-8 md:px-14"
    >
      {/* Editorial Accent Block with FadeUp (DESIGN.md §6.7) */}
      <FadeUp className="bg-accent text-ink rounded-[36px] sm:rounded-[48px] p-8 sm:p-14 md:p-20 shadow-xl border border-black/10">
        <div className="max-w-4xl">
          <span className="font-mono text-xs uppercase tracking-widest text-ink/80 block mb-4">
            06 / Collaboration
          </span>
          <h2
            id="contact-title"
            className="text-[clamp(36px,5.8vw,80px)] font-extrabold tracking-tight leading-[1.02] text-ink text-balance"
          >
            {t("contact.title")}
          </h2>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-ink/85 leading-relaxed font-normal max-w-2xl">
            {t("contact.subtitle")}
          </p>

          {/* Primary Action Pill Buttons */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Magnetic className="w-full sm:w-auto">
              <Button
                href={site.whatsapp}
                external
                className="w-full sm:w-auto bg-ink text-bg hover:bg-black hover:text-white"
              >
                <span>{t("contact.ctaWhatsapp")}</span>
                <MessageSquare className="w-4 h-4 ml-2" />
              </Button>
            </Magnetic>

            <Magnetic className="w-full sm:w-auto">
              <Button
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${site.email}`}
                external
                className="w-full sm:w-auto bg-transparent text-ink border border-ink/40 hover:bg-ink hover:text-bg"
              >
                <span>{t("contact.ctaEmail")}</span>
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </Magnetic>
          </div>

          {/* Direct Contact Links List */}
          <div className="mt-16 sm:mt-20 pt-10 border-t border-ink/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {directLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-1 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 rounded-xs"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-ink/70">
                  {item.label}
                </span>
                <span className="text-base font-semibold group-hover:underline underline-offset-4 flex items-center gap-1">
                  {item.value}
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            ))}
          </div>

          {/* Availability and Location Footnote */}
          <div className="mt-10 pt-6 border-t border-ink/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-ink/80">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-700 animate-pulse" />
              <span>{t("contact.availability")}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>{t("contact.location")}</span>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
