import React, { useState, useEffect } from "react";
import { useI18n } from "../../i18n";
import { site } from "../../data/site";
import { Badge } from "../ui/Badge";
import { SegmentedControl } from "../ui/SegmentedControl";
import { Button } from "../ui/Button";
import { Magnetic } from "../motion/Magnetic";
import { cn } from "../../lib/utils";

export function Navbar() {
  const { t } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "#about", label: t("nav.about") },
    { href: "#services", label: t("nav.services") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#process", label: t("nav.process") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-bg/85 backdrop-blur-md border-b border-line/60 py-3.5 shadow-xs"
          : "bg-transparent py-5 md:py-6"
      )}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-14 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#top"
          className="text-2xl md:text-3xl font-extrabold tracking-tight text-ink hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 rounded-sm"
        >
          {site.brand}
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-ink hover:text-ink transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 rounded-xs"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-ink scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </a>
          ))}
        </nav>

        {/* Right Controls: Availability, Lang Switcher, CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Badge
            label={t("nav.available")}
            isAvailable={site.availableForWork}
          />
          <SegmentedControl />
          <Magnetic>
            <Button
              href={site.whatsapp}
              external
              size="sm"
              variant="primary"
            >
              {t("hero.ctaPrimary")}
            </Button>
          </Magnetic>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-3">
          <SegmentedControl />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-full border border-line bg-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink cursor-pointer"
          >
            <span
              className={cn(
                "w-5 h-[2px] bg-ink transition-transform duration-300",
                mobileMenuOpen && "rotate-45 translate-y-[8px]"
              )}
            />
            <span
              className={cn(
                "w-5 h-[2px] bg-ink transition-opacity duration-300",
                mobileMenuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "w-5 h-[2px] bg-ink transition-transform duration-300",
                mobileMenuOpen && "-rotate-45 -translate-y-[8px]"
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[73px] bg-bg/95 backdrop-blur-xl z-50 flex flex-col justify-between p-6 sm:p-10 lg:hidden border-t border-line overflow-y-auto">
          <nav className="flex flex-col gap-6 pt-6" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-extrabold tracking-tight text-ink hover:text-accent hover:translate-x-2 transition-all duration-200 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-6 pt-10 border-t border-line/60">
            <Badge
              label={t("nav.available")}
              isAvailable={site.availableForWork}
            />
            <Button
              href={site.whatsapp}
              external
              variant="primary"
              className="w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("hero.ctaPrimary")}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
