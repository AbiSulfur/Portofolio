import React from "react";
import { useI18n } from "../../i18n";
import { site } from "../../data/site";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const { t } = useI18n();

  const quickLinks = [
    { href: "#about", label: t("nav.about") },
    { href: "#services", label: t("nav.services") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#process", label: t("nav.process") },
    { href: "#contact", label: t("nav.contact") },
  ];

  const socialLinks = [
    { href: site.socials.github, label: "GitHub" },
    { href: site.socials.linkedin, label: "LinkedIn" },
    { href: site.socials.instagram, label: "Instagram" },
  ];

  return (
    <footer className="border-t border-line/60 bg-bg pt-16 sm:pt-20 pb-12 text-ink">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-14">
        {/* Top Grid: Brand & Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-line/60">
          {/* Brand & Description (6 cols) */}
          <div className="md:col-span-6 flex flex-col gap-4">
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
              {site.brand}
            </span>
            <p className="text-ink-muted text-sm sm:text-base max-w-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-wider text-ink-subtle">
              {t("footer.quickLinks")}
            </span>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group relative inline-block text-sm text-ink-muted hover:text-ink transition-colors py-0.5"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-ink scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links (3 cols) */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-wider text-ink-subtle">
              {t("footer.connect")}
            </span>
            <ul className="flex flex-col gap-2.5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-block text-sm text-ink-muted hover:text-ink transition-colors py-0.5"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-ink scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal Links, Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-ink-subtle font-mono">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {site.name}. {t("footer.copyright")}</span>
            <span className="hidden sm:inline">|</span>
            <a href="/privacy" className="hover:text-ink transition-colors underline-offset-4 hover:underline">
              {t("legal.privacyTitle")}
            </a>
            <a href="/terms" className="hover:text-ink transition-colors underline-offset-4 hover:underline">
              {t("legal.termsTitle")}
            </a>
          </div>

          <div className="flex items-center gap-6">
            <span>{t("footer.builtWith")}</span>
            <a
              href="#top"
              aria-label="Back to top of page"
              className="w-9 h-9 rounded-full border border-line flex items-center justify-center hover:bg-ink hover:text-bg transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
