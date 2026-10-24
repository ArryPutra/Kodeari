"use client";

import { useInView } from "@/lib/use-in-view";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Konsultasi Kebutuhan",
    description:
      "Ceritakan bisnis dan website yang kamu butuhkan. Kami membantu menentukan solusi dan paket yang paling sesuai.",
  },
  {
    number: "02",
    title: "Sepakati Penawaran",
    description:
      "Dapatkan rincian harga, fitur, estimasi waktu pengerjaan, dan ketentuan layanan sebelum proyek dimulai.",
  },
  {
    number: "03",
    title: "Desain dan Pengerjaan",
    description:
      "Setelah kesepakatan dan materi diterima, kami mulai membangun website sesuai kebutuhan bisnismu.",
  },
  {
    number: "04",
    title: "Review dan Revisi",
    description:
      "Periksa hasil website melalui tautan preview dan sampaikan masukan sesuai kesepakatan revisi.",
  },
  {
    number: "05",
    title: "Website Siap Online",
    description:
      "Setelah disetujui dan pembayaran diselesaikan sesuai kesepakatan, website dipublikasikan dan diserahkan kepadamu.",
  },
];

export function HowItWorksSection() {
  const [introRef, introInView] = useInView<HTMLDivElement>({
    threshold: 0.12,
    delay: 300,
  });

  const [stepsRef, stepsInView] = useInView<HTMLDivElement>({
    threshold: 0.12,
    delay: 400,
  });

  return (
    <section
      id="cara-kerja"
      aria-labelledby="how-it-works-heading"
      className="relative w-full border-t border-blue-600/30 bg-[#1D4ED8] py-20 sm:py-28 lg:py-32 text-white"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Introduction: Editorial, Clean, Left-Aligned */}
        <div ref={introRef} className="max-w-3xl">
          <div
            className={`inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-wider text-white uppercase backdrop-blur-xs sm:text-xs scroll-reveal reveal-duration-heading ${
              introInView ? "scroll-reveal-active" : ""
            }`}
          >
            CARA KERJA
          </div>
          <h2
            id="how-it-works-heading"
            className={`mt-4 text-[32px] font-bold leading-[1.14] tracking-[-0.03em] text-white sm:text-[40px] lg:text-[46px] scroll-reveal reveal-duration-heading reveal-delay-1 ${
              introInView ? "scroll-reveal-active" : ""
            }`}
          >
            Dari Ide Menjadi Website, dengan Langkah yang Jelas
          </h2>
          <p
            className={`mt-4 text-base leading-[1.7] text-blue-100 sm:text-[17px] scroll-reveal reveal-duration-body reveal-delay-2 ${
              introInView ? "scroll-reveal-active" : ""
            }`}
          >
            Proses pembuatan website yang sederhana dan transparan, mulai dari
            konsultasi hingga website bisnismu siap online.
          </p>
        </div>

        {/* Connected Process Timeline Container */}
        <div ref={stepsRef} className="mt-14 sm:mt-18 lg:mt-20">
          {/* Desktop Timeline (Horizontal Flow: 5 Columns) */}
          <div className="hidden lg:grid lg:grid-cols-5 lg:gap-6 xl:gap-8">
            {steps.map((step, index) => {
              const delayClass =
                index === 0
                  ? "reveal-delay-0"
                  : index === 1
                  ? "reveal-delay-1"
                  : index === 2
                  ? "reveal-delay-2"
                  : index === 3
                  ? "reveal-delay-3"
                  : "reveal-delay-4";

              return (
                <div
                  key={step.number}
                  className={`group relative flex flex-col scroll-reveal reveal-duration-card ${delayClass} ${
                    stepsInView ? "scroll-reveal-active" : ""
                  }`}
                >
                  {/* Step Node & Horizontal Timeline Connector */}
                  <div className="relative flex items-center">
                    {/* Step Number Node: Transparent, moderately bright translucent background */}
                    <div className="relative z-10 flex size-13 xl:size-14 shrink-0 items-center justify-center rounded-2xl border border-white/30 bg-white/[0.18] font-mono text-lg xl:text-xl font-bold text-white shadow-xs backdrop-blur-xs transition-all duration-200 group-hover:scale-105 group-hover:border-white/50 group-hover:bg-white/[0.28] group-hover:shadow-md">
                      {step.number}
                    </div>

                    {/* Horizontal Connector Line (Runs cleanly between nodes) */}
                    {index < steps.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="absolute top-1/2 left-13 xl:left-14 right-[-1.5rem] xl:right-[-2rem] h-[2px] -translate-y-1/2 bg-white/25 z-0 pointer-events-none transition-colors duration-200 group-hover:bg-white/50"
                      />
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="mt-5 xl:mt-6">
                    <h3 className="text-base xl:text-[17px] font-bold tracking-tight text-white leading-snug">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] xl:text-[14px] leading-relaxed text-blue-100/90">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile & Tablet Timeline (Vertical Flow) */}
          <div className="flex flex-col lg:hidden">
            {steps.map((step, index) => {
              const delayClass =
                index === 0
                  ? "reveal-delay-0"
                  : index === 1
                  ? "reveal-delay-1"
                  : index === 2
                  ? "reveal-delay-2"
                  : index === 3
                  ? "reveal-delay-3"
                  : "reveal-delay-4";

              return (
                <div
                  key={step.number}
                  className={`group relative flex gap-4 sm:gap-6 scroll-reveal reveal-duration-card ${delayClass} ${
                    stepsInView ? "scroll-reveal-active" : ""
                  }`}
                >
                  {/* Left Column: Number Node & Vertical Connecting Line */}
                  <div className="relative flex flex-col items-center">
                    {/* Step Number Node: Transparent, moderately bright translucent background */}
                    <div className="relative z-10 flex size-12 sm:size-13 shrink-0 items-center justify-center rounded-2xl border border-white/30 bg-white/[0.18] font-mono text-base sm:text-lg font-bold text-white shadow-xs backdrop-blur-xs transition-all duration-200 group-hover:scale-105 group-hover:border-white/50 group-hover:bg-white/[0.28] group-hover:shadow-md">
                      {step.number}
                    </div>

                    {/* Vertical Connector Line (Only between consecutive steps) */}
                    {index < steps.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="my-1.5 w-[2px] flex-1 bg-white/25 transition-colors duration-200 group-hover:bg-white/50"
                      />
                    )}
                  </div>

                  {/* Right Column: Title and Description */}
                  <div
                    className={`flex-1 pt-1 ${
                      index < steps.length - 1 ? "pb-8 sm:pb-10" : "pb-2"
                    }`}
                  >
                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-blue-100/90">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// Alias for flexibility
export const CaraKerjaSection = HowItWorksSection;
