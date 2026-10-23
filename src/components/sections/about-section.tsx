"use client";

import { MonitorSmartphone, ShieldCheck, SlidersHorizontal, type LucideIcon } from "lucide-react";
import { useInView } from "@/lib/use-in-view";

interface ValuePillar {
  title: string;
  description: string;
  icon: LucideIcon;
}

const valuePillars: ValuePillar[] = [
  {
    title: "Desain Modern & Fungsional",
    description:
      "Tampilan bersih, profesional, dan responsif di semua ukuran layar. Kami mencegah AI slop pada website agar setiap desain memiliki karakter kuat, fungsional, dan terarah pada keunggulan bisnis Anda.",
    icon: MonitorSmartphone,
  },
  {
    title: "Transparan Tanpa Biaya Tersembunyi",
    description:
      "Ruang lingkup fitur, batas layanan, serta estimasi waktu pengerjaan selalu disepakati secara jelas sejak awal sebelum proyek dimulai.",
    icon: ShieldCheck,
  },
  {
    title: "Struktur Rapi & Mudah Dikelola",
    description:
      "Dibangun dengan standar web modern yang ringan dan aman, serta dilengkapi dashboard yang intuitif bagi Anda yang ingin mengelola konten secara mandiri.",
    icon: SlidersHorizontal,
  },
];

export function AboutSection() {
  const [leftRef, leftInView] = useInView<HTMLDivElement>({
    threshold: 0.12,
    delay: 350,
  });

  const [cardsRef, cardsInView] = useInView<HTMLDivElement>({
    threshold: 0.12,
    delay: 450,
  });

  return (
    <section
      id="tentang-kami"
      aria-labelledby="about-heading"
      className="relative w-full overflow-hidden border-t border-blue-600/30 bg-[#1D4ED8] py-20 sm:py-28 lg:py-32"
    >
      {/* Subtle depth lighting accents */}
      <div
        className="pointer-events-none absolute inset-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.3)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[500px] w-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.35)_0%,transparent_70%)] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Kolom Kiri (5 kolom desktop): Narasi Utama & Indikator Standar Layanan */}
          <div
            ref={leftRef}
            className={`lg:col-span-5 flex flex-col justify-between scroll-reveal reveal-duration-heading ${
              leftInView ? "scroll-reveal-active" : ""
            }`}
          >
            <div>
              {/* Eyebrow Badge dengan kontras tinggi di atas latar biru */}
              <div className="inline-flex items-center gap-1.5 self-start rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-wider text-white uppercase backdrop-blur-xs sm:text-xs">
                TENTANG KODEARI
              </div>

              {/* Heading Utama */}
              <h2
                id="about-heading"
                className="mt-4 text-[30px] font-bold leading-[1.16] tracking-[-0.03em] text-white sm:text-[38px] lg:text-[42px]"
              >
                Partner Digital untuk Membangun Kredibilitas Bisnis Anda
              </h2>

              {/* Lead Copy */}
              <p className="mt-5 text-[15.5px] leading-relaxed text-blue-50 sm:text-[16.5px]">
                Kodeari hadir untuk membantu bisnis memiliki kehadiran digital yang profesional tanpa proses yang rumit. Kami percaya bahwa website bisnis yang baik tidak harus penuh dengan dekorasi berlebihan, melainkan harus cepat diakses, mudah dipahami pengunjung, dan dibangun dengan struktur teknis yang rapi.
              </p>

              {/* Supporting Copy */}
              <p className="mt-3.5 text-sm leading-relaxed text-blue-100/90 sm:text-[15px]">
                Mulai dari halaman profil bisnis, landing page, hingga sistem web dengan pengelolaan mandiri, setiap proyek kami kerjakan dengan ruang lingkup yang transparan, estimasi waktu yang terukur, dan desain modern yang optimal di berbagai perangkat.
              </p>
            </div>

            {/* Indikator Standar Layanan (Highlight Strip) */}
            <div className="mt-8 border-t border-white/20 pt-6 sm:mt-10 sm:pt-7">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4 sm:divide-x sm:divide-white/20">
                {/* Poin 1 */}
                <div className="flex flex-col sm:pr-3">
                  <span className="text-[14.5px] font-bold tracking-tight text-white sm:text-[15px]">
                    2–7 Hari Kerja
                  </span>
                  <span className="mt-1 text-xs leading-normal text-blue-100/80">
                    Estimasi pengerjaan terukur
                  </span>
                </div>

                {/* Poin 2 */}
                <div className="flex flex-col sm:px-3">
                  <span className="text-[14.5px] font-bold tracking-tight text-white sm:text-[15px]">
                    100% Responsif
                  </span>
                  <span className="mt-1 text-xs leading-normal text-blue-100/80">
                    Optimal di desktop &amp; mobile
                  </span>
                </div>

                {/* Poin 3 */}
                <div className="flex flex-col sm:pl-3">
                  <span className="text-[14.5px] font-bold tracking-tight text-white sm:text-[15px]">
                    Ruang Lingkup Jelas
                  </span>
                  <span className="mt-1 text-xs leading-normal text-blue-100/80">
                    Transparan sejak awal
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom Kanan (7 kolom desktop): 3 Kartu Pilar Nilai dengan Background Transparan & Serasi */}
          <div
            ref={cardsRef}
            className="lg:col-span-7 flex flex-col gap-4 sm:gap-5"
          >
            {valuePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const delayClass =
                idx === 0
                  ? "reveal-delay-0"
                  : idx === 1
                  ? "reveal-delay-1"
                  : "reveal-delay-2";

              return (
                <div
                  key={pillar.title}
                  className={`group relative flex flex-col items-start gap-4 rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xs transition-all duration-200 hover:border-white/30 hover:bg-white/[0.15] hover:shadow-lg sm:flex-row sm:items-start sm:gap-5 sm:p-7 scroll-reveal reveal-duration-card ${delayClass} ${
                    cardsInView ? "scroll-reveal-active" : ""
                  }`}
                >
                  {/* Icon Container yang serasi dan kontras */}
                  <div
                    className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/15 text-white transition-colors duration-200 group-hover:border-white/35 group-hover:bg-white/25 group-hover:text-white sm:size-12"
                    aria-hidden="true"
                  >
                    <Icon className="size-5 sm:size-5.5" />
                  </div>

                  {/* Card Content dengan teks putih & biru terang yang menyatu elegan */}
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-white sm:text-[17px]">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-blue-100/90 sm:text-[14.5px]">
                      {pillar.description}
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
