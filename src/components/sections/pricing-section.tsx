"use client";

import { useInView } from "@/lib/use-in-view";
import { ArrowRight, Check, Clock, Globe, Server } from "lucide-react";

// --- Data terpusat -----------------------------------------------------------
// Perbarui harga, fitur, dan CTA di sini tanpa menyentuh markup.

const CONSULTATION_HREF =
  "https://wa.me/?text=Halo%20Kodeari%2C%20saya%20ingin%20konsultasi%20pembuatan%20website";

interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  originalPrice?: string | null;
  price: string;
  priceNote: string | null;
  /** Estimasi pengerjaan yang ditampilkan di bagian bawah card. */
  estimate: string;
  ctaLabel: string;
  ctaHref: string;
  featured: boolean;
  features: string[];
  exclusions: string[];
}

const plans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Untuk bisnis yang membutuhkan website profil profesional.",
    originalPrice: "Rp 539.000",
    price: "Rp 439.000",
    priceNote: null,
    estimate: "2-3 hari kerja",
    ctaLabel: "Pilih Starter",
    ctaHref: `${CONSULTATION_HREF}%20-%20Paket%20Starter`,
    featured: false,
    features: [
      "Website profil bisnis atau landing page",
      "Desain responsif untuk desktop, tablet, dan mobile",
      "Halaman informasi sesuai lingkup proyek",
      "Tombol WhatsApp atau kontak",
      "SEO dasar",
    ],
    exclusions: [
      "Tidak termasuk login, dashboard admin, atau CMS",
      "Perubahan konten setelah website selesai mengikuti kesepakatan layanan",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    tagline: "Untuk bisnis yang ingin mengelola konten website sendiri.",
    originalPrice: "Rp 839.000",
    price: "Rp 739.000",
    priceNote: null,
    estimate: "4-7 hari kerja",
    ctaLabel: "Pilih Professional",
    ctaHref: `${CONSULTATION_HREF}%20-%20Paket%20Professional`,
    featured: true,
    features: [
      "Semua fitur dalam paket Starter",
      "Login admin yang aman",
      "Dashboard admin",
      "Tambah, edit, dan hapus konten sesuai lingkup proyek",
      "Validasi input dan proteksi akses admin",
      "Antarmuka dashboard yang mudah digunakan",
    ],
    exclusions: [
      "Tidak multi-role kompleks dan fitur transaksi kecuali disepakati terpisah",
    ],
  },
  {
    id: "custom",
    name: "Custom",
    tagline: "Untuk kebutuhan website dengan fitur khusus.",
    originalPrice: null,
    price: "Konsultasi",
    priceNote: "Harga dan estimasi waktu ditentukan setelah konsultasi.",
    estimate: "Sesuai kompleksitas proyek",
    ctaLabel: "Konsultasikan Kebutuhanmu",
    ctaHref: `${CONSULTATION_HREF}%20-%20Paket%20Custom`,
    featured: false,
    features: [
      "Fitur dan struktur website disesuaikan dengan kebutuhan bisnis",
      "Integrasi API atau layanan pihak ketiga bila diperlukan",
      "Sistem autentikasi dan hak akses sesuai kebutuhan",
      "Workflow atau fungsionalitas khusus berdasarkan ruang lingkup proyek",
    ],
    exclusions: [],
  },
];

// --- Sub-komponen kartu ------------------------------------------------------

function PlanCard({ plan, index }: { plan: PricingPlan; index: number }) {
  const delayMs = index === 0 ? 500 : index === 1 ? 600 : 700;
  const [cardRef, cardInView] = useInView<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -8% 0px",
    delay: delayMs,
  });

  const delayClass =
    index === 0
      ? "reveal-delay-0"
      : index === 1
        ? "reveal-delay-1"
        : "reveal-delay-2";

  return (
    <div
      ref={cardRef}
      className={`relative flex flex-col overflow-hidden rounded-2xl border bg-white scroll-reveal reveal-duration-card ${delayClass} ${cardInView ? "scroll-reveal-active" : ""
        } ${plan.featured
          ? "border-[#2563EB]/30 shadow-[0_8px_32px_-8px_rgba(37,99,235,0.14)]"
          : "border-[#E5EAF1] shadow-xs"
        }`}
    >
      {/* Aksen atas untuk paket unggulan */}
      {plan.featured && (
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-0.5 bg-[#2563EB]"
        />
      )}

      <div className="flex flex-1 flex-col p-7 sm:p-8">
        {/* Nama dan tagline */}
        <div>
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-bold tracking-tight text-[#172033]">
              {plan.name}
            </h3>
            {plan.featured && (
              <span className="shrink-0 rounded-md border border-[#2563EB]/20 bg-[#EFF6FF] px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-[#2563EB]">
                Direkomendasikan
              </span>
            )}
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-[#667085]">
            {plan.tagline}
          </p>
        </div>

        {/* Harga */}
        <div className="mt-6 border-t border-[#F1F5F9] pt-6">
          <div className="flex flex-col gap-1">
            {plan.originalPrice && (
              <span className="text-base font-normal italic text-[#94A3B8] line-through decoration-[#EF4444] decoration-2">
                <span className="sr-only">Harga sebelumnya: </span>
                {plan.originalPrice}
              </span>
            )}
            <div className="text-2xl font-bold tracking-tight text-[#172033] sm:text-3xl">
              {plan.price}
            </div>
          </div>
          {plan.priceNote && (
            <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#667085]">
              {plan.priceNote}
            </p>
          )}
        </div>

        {/* Daftar fitur */}
        <ul
          className="mt-6 flex flex-col gap-3"
          aria-label={`Fitur paket ${plan.name}`}
        >
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5">
              <Check
                className="mt-[1px] size-4 shrink-0 text-[#2563EB]"
                aria-hidden="true"
              />
              <span className="text-[13.5px] leading-relaxed text-[#475467]">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* Pengecualian */}
        {plan.exclusions.length > 0 && (
          <ul
            className="mt-5 flex flex-col gap-2.5 border-t border-dashed border-[#E5EAF1] pt-5"
            aria-label={`Tidak termasuk dalam paket ${plan.name}`}
          >
            {plan.exclusions.map((note) => (
              <li key={note} className="flex items-start gap-2.5">
                <span
                  className="mt-[4px] size-1.5 shrink-0 rounded-full bg-[#CBD5E1]"
                  aria-hidden="true"
                />
                <span className="text-[12.5px] leading-relaxed text-[#94A3B8]">
                  {note}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* Estimasi pengerjaan */}
        <div className="mt-5 flex items-center gap-1.5 border-t border-[#F1F5F9] pt-4">
          <Clock
            className="size-3.5 shrink-0 text-[#94A3B8]"
            aria-hidden="true"
          />
          <span className="text-[12.5px] text-[#94A3B8]">
            Estimasi:{" "}
            <span className="font-medium text-[#667085]">{plan.estimate}</span>
          </span>
        </div>

        {/* CTA */}
        <div className="mt-auto pt-6">
          <a
            href={plan.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            id={`cta-plan-${plan.id}`}
            className={`inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg text-[14px] font-medium shadow-xs transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 active:scale-[0.99] ${plan.featured
                ? "bg-[#2563EB] text-white hover:bg-[#1D4ED8]"
                : "border border-[#E5EAF1] bg-white text-[#172033] hover:border-slate-300 hover:bg-slate-50"
              }`}
          >
            <span>{plan.ctaLabel}</span>
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}

// --- Section utama -----------------------------------------------------------

export function PricingSection() {
  const [introRef, introInView] = useInView({ threshold: 0.15, delay: 500 });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.15, delay: 500 });

  return (
    <section
      id="harga"
      aria-labelledby="pricing-heading"
      className="relative w-full border-t border-[#E5EAF1] bg-[#FAFBFC] py-20 sm:py-28 lg:py-32"
    >
      {/* Background Treatment: subtle line grid + soft blue radial glow */}
      <div
        className="pointer-events-none absolute inset-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Thin geometric line grid — 28px pitch, ~5% opacity cool grey */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(100,116,139,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(100,116,139,0.05) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Soft pale-blue radial glow — top-right, very subtle depth */}
        <div className="absolute -top-20 -right-24 h-[480px] w-[560px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(219,234,254,0.28)_0%,rgba(239,246,255,0.1)_52%,transparent_74%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div ref={introRef} className="max-w-3xl">
          <div
            className={`text-[11.5px] font-semibold tracking-[0.24em] uppercase text-[#667085] sm:text-xs scroll-reveal reveal-duration-heading ${introInView ? "scroll-reveal-active" : ""
              }`}
          >
            HARGA &amp; PAKET
          </div>
          <h2
            id="pricing-heading"
            className={`mt-3 text-[32px] font-bold leading-[1.12] tracking-[-0.03em] text-[#172033] sm:text-[40px] lg:text-[46px] scroll-reveal reveal-duration-heading reveal-delay-1 ${introInView ? "scroll-reveal-active" : ""
              }`}
          >
            Pilih Paket yang Sesuai dengan Kebutuhan Bisnismu
          </h2>
          <p
            className={`mt-4 text-base leading-[1.7] text-[#667085] sm:text-[17px] scroll-reveal reveal-duration-body reveal-delay-2 ${introInView ? "scroll-reveal-active" : ""
              }`}
          >
            Temukan solusi website yang tepat untuk memperkenalkan bisnis,
            mengelola konten secara mandiri, atau membangun sistem digital sesuai
            kebutuhan.
          </p>
        </div>

        {/* Grid tiga kartu paket */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-3 lg:gap-7">
          {plans.map((plan, index) => (
            <PlanCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>

        {/* Benefit bersama */}
        <div
          ref={benefitsRef}
          className={`mt-10 rounded-2xl border border-[#E5EAF1] bg-white px-7 py-6 sm:px-8 scroll-reveal reveal-duration-card reveal-delay-2 ${benefitsInView ? "scroll-reveal-active" : ""
            }`}
        >
          <p className="mb-5 text-[12px] font-semibold tracking-[0.18em] uppercase text-[#667085]">
            Yang Kamu Dapatkan di Setiap Paket
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Domain */}
            <div className="flex items-start gap-3.5">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#2563EB]">
                <Globe className="size-4" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[13.5px] font-semibold text-[#172033]">
                  Domain Gratis Tahun Pertama
                </p>
                <p className="mt-0.5 text-[12.5px] leading-relaxed text-[#667085]">
                  Pilih .com sesuai ketentuan paket.
                </p>
              </div>
            </div>

            {/* Hosting */}
            <div className="flex items-start gap-3.5">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#2563EB]">
                <Server className="size-4" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[13.5px] font-semibold text-[#172033]">
                  Hosting Termasuk
                </p>
                <p className="mt-0.5 text-[12.5px] leading-relaxed text-[#667085]">
                  Untuk penggunaan wajar sesuai kapasitas layanan hosting.
                </p>
              </div>
            </div>
          </div>

          {/* Catatan perpanjangan */}
          <p className="mt-5 border-t border-[#F1F5F9] pt-4 text-[12px] text-[#94A3B8]">
            Biaya perpanjangan domain dan hosting tahun berikutnya tidak termasuk.
          </p>
        </div>

        {/* Catatan bawah */}
        <p
          className={`mt-6 text-center text-[13px] text-[#94A3B8] scroll-reveal reveal-duration-body reveal-delay-3 ${introInView ? "scroll-reveal-active" : ""
            }`}
        >
          Semua paket dikerjakan berdasarkan kesepakatan lingkup proyek.
        </p>
      </div>
    </section>
  );
}
