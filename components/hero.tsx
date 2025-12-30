"use client"

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent/40 to-accent/10 border-2 border-accent/40 flex items-center justify-center overflow-hidden shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300">
            <img
              src="/placeholder.svg?height=128&width=128"
              alt="Benedictus Abigail Triwiyatno"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-balance mb-4 leading-tight">
          Benedictus Abigail
          <br />
          <span className="gradient-text">Triwiyatno</span>
        </h1>

        <p className="text-2xl md:text-3xl text-muted-foreground mb-6">Junior Web Developer & Student</p>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Passionate about crafting clean, functional web experiences. Building skills in{" "}
          <span className="highlight">HTML, CSS, JavaScript, PHP,</span> and <span className="highlight">Laravel</span>.
          Currently studying at <span className="text-foreground">SMK Budi Luhur</span>, preparing for growth in web
          development.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 text-base md:text-lg"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-card hover:bg-card/80 text-foreground border border-border rounded-lg font-semibold transition-all duration-300 hover:border-accent/50 text-base md:text-lg"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center animate-bounce">
          <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
