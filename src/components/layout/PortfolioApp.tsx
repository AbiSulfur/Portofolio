import React from "react";
import { I18nProvider } from "../../i18n";
import { LenisProvider } from "../motion/LenisProvider";
import { CustomCursor } from "../motion/CustomCursor";
import { Navbar } from "../sections/Navbar";
import { Hero } from "../sections/Hero";
import { Intro } from "../sections/Intro";
import { Services } from "../sections/Services";
import { Projects } from "../sections/Projects";
import { Process } from "../sections/Process";
import { About } from "../sections/About";
import { Contact } from "../sections/Contact";
import { Footer } from "../sections/Footer";

export default function PortfolioApp() {
  return (
    <I18nProvider>
      <LenisProvider>
        <CustomCursor />
        <Navbar />
        <main id="main-content" className="outline-none">
          <Hero />
          <Intro />
          <Services />
          <Projects />
          <Process />
          <About />
          <Contact />
        </main>
        <Footer />
      </LenisProvider>
    </I18nProvider>
  );
}
