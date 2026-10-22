interface HeroSectionProps {
  /**
   * Destination for the consultation link.
   * Defaults to WhatsApp consultation link.
   */
  consultationHref?: string;
}

export function HeroSection({
  consultationHref = "https://wa.me/?text=Halo%20Kodeari%2C%20saya%20ingin%20konsultasi%20pembuatan%20website",
}: HeroSectionProps) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[calc(100vh-80px)] w-full flex-col items-center justify-center overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      {/* Background Decorative Treatment: Micro-Dot Pattern & Subtle Radial Glow */}
      <div
        className="pointer-events-none absolute inset-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Micro-dot grid (1.2px dots on a 16px grid, low-contrast cool grayish-blue) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(100,116,139,0.18)_1.2px,transparent_1.2px)] [background-size:16px_16px]" />

        {/* Soft pale-blue radial glow */}
        <div className="absolute bottom-12 left-1/2 h-[580px] w-[1180px] max-w-[94vw] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(219,234,254,0.36)_0%,rgba(239,246,255,0.16)_48%,transparent_72%)] blur-2xl" />
      </div>

      {/* Marketing Message Area (Centered) */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-center text-center">
        {/* Eyebrow Label */}
        <div className="hero-animate-fade-up">
          <span className="text-[11.5px] font-semibold tracking-[0.24em] uppercase text-[#667085] sm:text-xs">
            JASA PEMBUATAN WEBSITE
          </span>
        </div>

        {/* Prominent, Confident Display Headline */}
        <h1
          id="hero-heading"
          className="hero-animate-fade-up-delay-1 mt-5 max-w-4xl text-[38px] font-bold leading-[1.08] tracking-[-0.035em] text-[#172033] sm:text-[54px] md:text-[62px] lg:text-[70px] xl:text-[74px]"
        >
          Bisnis Lebih Meyakinkan.{" "}
          <span className="block sm:inline">
            Hadir{" "}
            <span className="relative inline-block text-[#2563EB]">
              Lebih Profesional.
              <svg
                className="pointer-events-none absolute -bottom-1.5 left-0 h-[8px] w-full overflow-visible sm:-bottom-2 sm:h-[11px] lg:h-[13px]"
                viewBox="0 0 250 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M4 9.5C65 4.5 160 4 246 7.5"
                  stroke="#2563EB"
                  strokeWidth="4"
                  strokeLinecap="round"
                  pathLength="100"
                  className="hero-brush-path"
                />
              </svg>
            </span>
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="hero-animate-fade-up-delay-2 mt-6 max-w-[640px] text-base leading-[1.7] text-[#667085] sm:text-lg lg:text-[19px]">
          Website yang dirancang dengan cermat untuk memperkuat citra bisnis,
          menampilkan keunggulanmu, dan membuat pelanggan lebih mudah mengenal
          layananmu.
        </p>

        {/* Primary Action Button */}
        <div className="hero-animate-fade-up-delay-3 mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <a
            href={consultationHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-[#2563EB] px-8 text-[15px] font-medium text-white shadow-xs transition-all duration-150 hover:bg-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 active:scale-[0.99] sm:w-auto"
          >
            Konsultasikan Bisnismu
          </a>
        </div>

        {/* Restrained Supporting Detail */}
        <div className="hero-animate-fade-up-delay-3 mt-4 text-xs font-normal text-[#667085]">
          Untuk berbagai skala usaha: UMKM, bisnis ritel, hingga perusahaan.
        </div>

        {/* Single-Page Navigation Target Anchors */}
        <div id="portofolio" className="sr-only" aria-hidden="true" />
        <div id="harga" className="sr-only" aria-hidden="true" />
        <div id="tentang-kami" className="sr-only" aria-hidden="true" />
      </div>
    </section>
  );
}
