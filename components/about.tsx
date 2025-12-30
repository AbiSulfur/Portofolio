"use client"

export default function About() {
  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="section-title mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-accent via-accent/70 to-accent/30 rounded-full"></div>
          <p className="section-subtitle mt-6 max-w-2xl">
            Get to know me better. I'm a junior developer passionate about building clean, functional web experiences
            and continuously improving my craft.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-8">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              Hi, I'm <span className="text-foreground font-bold text-xl">Abigail</span> (Benedictus Abigail
              Triwiyatno), a junior web developer currently learning the craft of building functional, clean, and
              user-friendly web applications.
            </p>

            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              I'm passionate about understanding how things work on the web—from the basics of HTML and CSS to the logic
              of JavaScript and server-side programming. I believe that every line of code is an opportunity to learn
              and improve.
            </p>

            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              Currently, I'm an active student at <span className="text-accent font-bold">SMK Budi Luhur</span>, where
              I'm building a strong foundation in web technologies. I'm preparing for internships and entry-level
              positions where I can contribute real value and grow alongside experienced developers.
            </p>
          </div>

          <div className="space-y-4">
            <div className="glass-card p-6 card-hover border border-border/20 hover:border-accent/40">
              <h3 className="text-sm uppercase tracking-wider text-accent font-bold mb-4">Tech Stack</h3>
              <ul className="space-y-3 text-base text-foreground/80">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-accent/60"></span>
                  Frontend: HTML, CSS, JavaScript, WordPress & Elementor
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-accent/60"></span>
                  Backend: PHP, Laravel (MVC, routing, CRUD)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-accent/60"></span>
                  Databases: MySQL, basic SQL queries
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-accent/60"></span>
                  Tools: VS Code, Git/GitHub, Chrome DevTools
                </li>
              </ul>
            </div>

            <div className="glass-card p-6 card-hover border border-border/20 hover:border-accent/40">
              <h3 className="text-sm uppercase tracking-wider text-accent font-bold mb-4">Current Status</h3>
              <p className="text-base text-foreground/80 leading-relaxed">
                Active student at SMK Budi Luhur. Looking for internship and junior developer opportunities to apply
                skills in real-world projects.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-border/30">
          <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed max-w-3xl font-medium">
            I approach learning with <span className="highlight">honesty and curiosity</span>—I'm not afraid to say "I
            don't know" and even more excited to figure it out. Every project is a stepping stone, and every mistake is
            a lesson. My goal is to become a full-stack developer who can deliver complete solutions while maintaining
            code quality and respecting user experience.
          </p>
        </div>
      </div>
    </section>
  )
}
