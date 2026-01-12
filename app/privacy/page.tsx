import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="section-padding max-w-4xl mx-auto pt-32">
        <div className="mb-12">
          <Link 
            href="/" 
            className="text-accent hover:underline mb-8 inline-block transition-all hover:translate-x-[-4px]"
          >
            ← Back to Home
          </Link>
          <h1 className="section-title mb-6">
            Privacy <span className="text-accent">Policy.</span>
          </h1>
          <p className="section-subtitle">
            Last updated: January 11, 2026
          </p>
        </div>

        <div className="space-y-12 text-foreground/80 leading-relaxed">
          <section className="glass-card p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 highlight">1. Introduction</h2>
            <p>
              Welcome to my portfolio! Your privacy is important to me. This Privacy Policy explains how I handle any information when you visit my website.
            </p>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 highlight">2. Information Collection</h2>
            <p>
              This website is a static portfolio and does not actively collect personally identifiable information from its visitors unless you voluntarily provide it through the contact form. 
            </p>
            <p className="mt-4">
              I may use third-party services like Vercel Analytics to understand how visitors interact with the site, which may collect anonymous data such as IP addresses, browser types, and pages visited.
            </p>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 highlight">3. How I Use Your Information</h2>
            <p>
              If you contact me via the contact form, the information you provide (name, email, message) will only be used to respond to your inquiry. I will never sell or share your contact information with third parties for marketing purposes.
            </p>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 highlight">4. Cookies</h2>
            <p>
              This site may use cookies to enhance your browsing experience. Cookies are small files stored on your device that help with site functionality and analytics. You can choose to disable cookies through your browser settings.
            </p>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 highlight">5. Changes to This Policy</h2>
            <p>
              I may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date.
            </p>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 highlight">6. Contact Me</h2>
            <p>
              If you have any questions about this Privacy Policy, please feel free to reach out via the contact section on the main page.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
