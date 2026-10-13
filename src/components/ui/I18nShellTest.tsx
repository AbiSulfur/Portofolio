import React from "react";
import { I18nProvider, useI18n } from "../../i18n";

function InnerShell() {
  const { locale, toggleLocale, t } = useI18n();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center px-4">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-line text-xs font-mono">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span>{t("nav.available")}</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
        {t("hero.headlineLine1")} {t("hero.headlineLine2")}
      </h1>
      <p className="max-w-md text-ink-muted text-lg">
        {t("hero.subtitle")}
      </p>
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={toggleLocale}
          aria-label="Toggle language"
          className="h-12 px-6 rounded-full bg-ink text-bg font-medium hover:bg-accent hover:text-ink transition-colors cursor-pointer"
        >
          Toggle Language ({locale.toUpperCase()})
        </button>
      </div>
    </div>
  );
}

export default function I18nShellTest() {
  return (
    <I18nProvider>
      <InnerShell />
    </I18nProvider>
  );
}
