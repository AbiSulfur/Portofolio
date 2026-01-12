import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function TermsConditions() {
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
                        Terms & <span className="text-accent">Conditions.</span>
                    </h1>
                    <p className="section-subtitle">
                        Last updated: January 11, 2026
                    </p>
                </div>

                <div className="space-y-12 text-foreground/80 leading-relaxed">
                    <section className="glass-card p-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4 highlight">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using this website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not use this site.
                        </p>
                    </section>

                    <section className="glass-card p-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4 highlight">2. Intellectual Property</h2>
                        <p>
                            All content on this website, including but not limited to text, graphics, logos, images, and code, is my property (Benedictus Abigail Triwiyatno) and is protected by copyright and other intellectual property laws.
                        </p>
                        <p className="mt-4">
                            You may view the content for personal, non-commercial use. Any reproduction, distribution, or modification of the content without my express written consent is prohibited.
                        </p>
                    </section>

                    <section className="glass-card p-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4 highlight">3. User Conduct</h2>
                        <p>
                            You agree to use this website only for lawful purposes. You are prohibited from attempting to compromise the security of the site or using it to transmit harmful or offensive content.
                        </p>
                    </section>

                    <section className="glass-card p-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4 highlight">4. Limitation of Liability</h2>
                        <p>
                            This website and its content are provided "as is" without any warranties. While I strive to provide accurate and up-to-date information, I am not responsible for any errors or omissions, or for any results obtained from the use of this information.
                        </p>
                    </section>

                    <section className="glass-card p-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4 highlight">5. Links to Third-Party Sites</h2>
                        <p>
                            My portfolio may contain links to third-party websites (e.g., GitHub, LinkedIn). I have no control over the content or practices of these sites and accept no responsibility for them.
                        </p>
                    </section>

                    <section className="glass-card p-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4 highlight">6. Governing Law</h2>
                        <p>
                            These Terms and Conditions shall be governed by and construed in accordance with the laws of Indonesia, without regard to its conflict of law principles.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    )
}
