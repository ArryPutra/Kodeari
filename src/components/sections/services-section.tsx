"use client";

import {
  Building2,
  MousePointerClick,
  ShoppingBag,
  PanelsTopLeft,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { useInView } from "@/lib/use-in-view";

interface ServiceItem {
  number: string;
  title: string;
  label: string;
  description: string;
  icon: LucideIcon;
  graphicType: "architectural" | "focus" | "catalog" | "modular";
}

const services: ServiceItem[] = [
  {
    number: "01",
    title: "Website Profil Bisnis",
    label: "MEMBANGUN KREDIBILITAS",
    description:
      "Perkenalkan identitas, layanan, dan keunggulan bisnismu melalui website profesional yang membangun kepercayaan.",
    icon: Building2,
    graphicType: "architectural",
  },
  {
    number: "02",
    title: "Landing Page",
    label: "FOKUS PADA TUJUAN",
    description:
      "Sampaikan penawaran secara fokus melalui halaman yang menarik perhatian dan mengarahkan pengunjung pada tindakan berikutnya.",
    icon: MousePointerClick,
    graphicType: "focus",
  },
  {
    number: "03",
    title: "Website Katalog Produk",
    label: "MENAMPILKAN PRODUK",
    description:
      "Tampilkan produk, detail, dan informasi pemesanan dalam susunan yang rapi dan mudah dijelajahi.",
    icon: ShoppingBag,
    graphicType: "catalog",
  },
  {
    number: "04",
    title: "Website & Aplikasi Custom",
    label: "SOLUSI YANG FLEKSIBEL",
    description:
      "Wujudkan kebutuhan digital khusus melalui fitur, dashboard, dan alur kerja yang disesuaikan dengan bisnismu.",
    icon: PanelsTopLeft,
    graphicType: "modular",
  },
];

function ServiceCardItem({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) {
  const [cardRef, cardInView] = useInView<HTMLDivElement>({
    threshold: 0.12,
    rootMargin: "0px 0px -8% 0px",
    delay: index % 2 === 0 ? 500 : 600,
  });

  const Icon = service.icon;
  const delayClass = index % 2 === 0 ? "reveal-delay-0" : "reveal-delay-1";

  return (
    <div
      ref={cardRef}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E5EAF1] bg-white p-7 shadow-xs hover:border-[#2563EB]/40 hover:shadow-[0_12px_28px_-8px_rgba(23,32,51,0.06)] sm:p-8 scroll-reveal reveal-duration-card ${delayClass} ${
        cardInView ? "scroll-reveal-active" : ""
      }`}
    >
      {/* Subtle Decorative Detail in Background Corner */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-4 right-4 text-[#2563EB] opacity-15 transition-all duration-200 ease-out group-hover:scale-105 group-hover:opacity-35"
      >
        {service.graphicType === "architectural" && (
          <svg
            width="54"
            height="54"
            viewBox="0 0 54 54"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <rect x="6" y="6" width="42" height="42" rx="4" />
            <line x1="6" y1="20" x2="48" y2="20" />
            <line x1="20" y1="6" x2="20" y2="48" />
            <circle cx="20" cy="20" r="2.5" fill="currentColor" />
          </svg>
        )}

        {service.graphicType === "focus" && (
          <svg
            width="54"
            height="54"
            viewBox="0 0 54 54"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <line x1="10" y1="14" x2="44" y2="14" strokeWidth="2" />
            <line x1="10" y1="23" x2="36" y2="23" />
            <line x1="10" y1="31" x2="30" y2="31" />
            <line x1="10" y1="40" x2="22" y2="40" strokeDasharray="3 3" />
            <circle cx="41" cy="36" r="5" strokeWidth="1.5" />
            <circle cx="41" cy="36" r="1.5" fill="currentColor" />
          </svg>
        )}

        {service.graphicType === "catalog" && (
          <svg
            width="54"
            height="54"
            viewBox="0 0 54 54"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <rect x="8" y="8" width="16" height="16" rx="3" />
            <rect x="30" y="8" width="16" height="16" rx="3" />
            <rect x="8" y="30" width="16" height="16" rx="3" />
            <rect x="30" y="30" width="16" height="16" rx="3" strokeDasharray="2 2" />
          </svg>
        )}

        {service.graphicType === "modular" && (
          <svg
            width="54"
            height="54"
            viewBox="0 0 54 54"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <rect x="7" y="7" width="40" height="40" rx="4" />
            <line x1="7" y1="18" x2="47" y2="18" />
            <line x1="19" y1="18" x2="19" y2="47" />
            <rect x="25" y="24" width="16" height="8" rx="2" fill="currentColor" fillOpacity="0.15" />
            <rect x="25" y="35" width="16" height="6" rx="2" />
          </svg>
        )}
      </div>

      <div>
        {/* Top Bar: Icon container on left, Number on right */}
        <div className="flex items-center justify-between">
          <div className="flex size-11 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB] shadow-2xs transition-transform duration-200 ease-out group-hover:-translate-y-0.5 sm:size-12">
            <Icon className="size-5 sm:size-5.5" aria-hidden="true" />
          </div>

          <span className="font-mono text-xs font-semibold tracking-wider text-[#8A94A6]">
            {service.number}
          </span>
        </div>

        {/* Supporting Label (Uppercase kicker) */}
        <div className="mt-6 text-[10.5px] font-semibold tracking-[0.16em] uppercase text-[#2563EB]/90 sm:text-[11px]">
          {service.label}
        </div>

        {/* Service Title */}
        <h3 className="mt-1.5 text-xl font-bold tracking-tight text-[#172033] transition-colors duration-200 group-hover:text-[#2563EB] sm:text-[22px]">
          {service.title}
        </h3>

        {/* Concise Description */}
        <p className="mt-2.5 text-sm leading-relaxed text-[#667085] sm:text-[15px]">
          {service.description}
        </p>
      </div>
    </div>
  );
}

interface ServicesSectionProps {
  /**
   * Destination for the consultation button.
   * Defaults to WhatsApp consultation link.
   */
  consultationHref?: string;
}

export function ServicesSection({
  consultationHref = "https://wa.me/?text=Halo%20Kodeari%2C%20saya%20ingin%20konsultasi%20pembuatan%20website",
}: ServicesSectionProps) {
  const [introRef, introInView] = useInView({ threshold: 0.15, delay: 500 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.15, delay: 600 });

  return (
    <section
      id="layanan"
      aria-labelledby="services-heading"
      className="relative w-full border-t border-[#E5EAF1] bg-[#FAFBFC] py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Introduction: Editorial, Left-Aligned */}
        <div ref={introRef} className="max-w-3xl">
          <div
            className={`text-[11.5px] font-semibold tracking-[0.24em] uppercase text-[#667085] sm:text-xs scroll-reveal reveal-duration-heading ${
              introInView ? "scroll-reveal-active" : ""
            }`}
          >
            LAYANAN KODEARI
          </div>
          <h2
            id="services-heading"
            className={`mt-3 text-[32px] font-bold leading-[1.12] tracking-[-0.03em] text-[#172033] sm:text-[40px] lg:text-[46px] scroll-reveal reveal-duration-heading reveal-delay-1 ${
              introInView ? "scroll-reveal-active" : ""
            }`}
          >
            Website yang Tepat untuk Tujuan Bisnismu.
          </h2>
          <p
            className={`mt-4 text-base leading-[1.7] text-[#667085] sm:text-[17px] scroll-reveal reveal-duration-body reveal-delay-2 ${
              introInView ? "scroll-reveal-active" : ""
            }`}
          >
            Dari memperkenalkan bisnis hingga membangun pengalaman digital yang
            lebih lengkap, kami membantu mewujudkan website sesuai kebutuhanmu.
          </p>
        </div>

        {/* Four Service Cards: 2-column by 2-row on Desktop */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCardItem
              key={service.number}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Shared Consultation CTA Banner with Micro-Dot Pattern & Interface Illustration */}
        <div
          ref={ctaRef}
          className={`relative mt-16 overflow-hidden rounded-2xl border border-[#E5EAF1] bg-[#FAFBFC] p-7 shadow-xs sm:mt-20 sm:p-9 lg:mt-24 lg:p-11 scroll-reveal reveal-duration-card ${
            ctaInView ? "scroll-reveal-active" : ""
          }`}
        >
          {/* Background Treatment: Micro-Dot Pattern & Soft Radial Glow */}
          <div
            className="pointer-events-none absolute inset-0 select-none overflow-hidden"
            aria-hidden="true"
          >
            {/* Low-opacity micro-dot grid */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(100,116,139,0.13)_1.1px,transparent_1.1px)] [background-size:16px_16px]" />

            {/* Soft blue radial glow positioned behind the right-side illustration */}
            <div className="absolute -top-12 -right-12 h-[340px] w-[440px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(219,234,254,0.75)_0%,rgba(239,246,255,0.4)_48%,transparent_75%)] blur-2xl" />
          </div>

          {/* Main Banner Content */}
          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            {/* Left Column: Heading and Descriptive Copy */}
            <div className="max-w-xl">
              <h3 className="text-xl font-bold tracking-tight text-[#172033] sm:text-2xl lg:text-[26px] lg:leading-[1.24]">
                Belum yakin website seperti apa yang kamu butuhkan?
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#667085] sm:text-[15.5px]">
                Ceritakan tujuan bisnismu. Kita tentukan solusi yang paling sesuai.
              </p>
            </div>

            {/* Right Column: Decorative Interface Illustration & CTA Button */}
            <div className="flex w-full flex-col items-start gap-5 sm:flex-row sm:items-center lg:w-auto lg:gap-8">
              {/* Lightweight Abstract Digital Interface Illustration */}
              <div
                aria-hidden="true"
                className="pointer-events-none relative hidden select-none md:block"
              >
                {/* Simplified Browser Frame */}
                <div className="relative w-[170px] rounded-xl border border-[#CBD5E1]/80 bg-white/95 p-3 shadow-xs backdrop-blur-xs">
                  {/* Window Header Bar */}
                  <div className="flex items-center gap-1.5 border-b border-[#F1F5F9] pb-2">
                    <span className="size-1.5 rounded-full bg-[#CBD5E1]" />
                    <span className="size-1.5 rounded-full bg-[#CBD5E1]" />
                    <span className="size-1.5 rounded-full bg-[#CBD5E1]" />
                    <div className="ml-2 h-2 flex-1 rounded bg-[#F8FAFC]" />
                  </div>

                  {/* Wireframe Mockup Lines */}
                  <div className="mt-2.5 space-y-1.5">
                    <div className="h-2 w-16 rounded bg-[#2563EB]/35" />
                    <div className="h-1.5 w-24 rounded bg-[#E2E8F0]" />
                    <div className="h-1.5 w-20 rounded bg-[#E2E8F0]/70" />
                  </div>

                  {/* Two Mini Outlined Blocks */}
                  <div className="mt-2.5 flex items-center gap-1.5">
                    <div className="h-6 flex-1 rounded-md border border-[#E2E8F0] bg-[#F8FAFC]" />
                    <div className="h-6 flex-1 rounded-md border border-[#E2E8F0] bg-[#F8FAFC]" />
                  </div>

                  {/* Tiny Accent Cursor */}
                  <div className="absolute -bottom-2 -right-1 text-[#2563EB] drop-shadow-xs">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 2L6.5 14L8.5 9L13.5 7L2 2Z"
                        fill="#2563EB"
                        stroke="white"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Subtle Floating Status Indicator Dot */}
                <span className="absolute -top-1.5 -left-1.5 flex size-2.5 rounded-full bg-[#2563EB] ring-4 ring-[#EFF6FF]" />
              </div>

              {/* Consultation Action Button */}
              <div className="w-full shrink-0 sm:w-auto">
                <a
                  href={consultationHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-6 text-[14.5px] font-medium text-white shadow-xs transition-all duration-150 hover:bg-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 active:scale-[0.99] sm:h-12 sm:w-auto"
                >
                  <span>Konsultasikan Kebutuhanmu</span>
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
