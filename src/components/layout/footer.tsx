"use client";

import Link from "next/link";
import Image from "next/image";
import { useSyncExternalStore } from "react";
import { ArrowRight } from "lucide-react";

interface FooterProps {
  /**
   * Destination for the consultation CTA button.
   * Defaults to WhatsApp consultation link.
   */
  consultationHref?: string;
}

function subscribe() {
  return () => {};
}

function getClientYear() {
  return new Date().getFullYear();
}

function getServerYear() {
  return 2026;
}

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Layanan", href: "#layanan" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Harga", href: "#harga" },
  { label: "Cara Kerja", href: "#cara-kerja" },
];

const serviceLinks = [
  { label: "Website Profil Bisnis", href: "#layanan" },
  { label: "Landing Page", href: "#layanan" },
  { label: "Katalog Produk", href: "#layanan" },
  { label: "Website Custom", href: "#layanan" },
];

export function Footer({
  consultationHref = "https://wa.me/?text=Halo%20Kodeari%2C%20saya%20ingin%20konsultasi%20pembuatan%20website",
}: FooterProps) {
  const currentYear = useSyncExternalStore(
    subscribe,
    getClientYear,
    getServerYear
  );

  return (
    <footer
      aria-labelledby="footer-heading"
      className="relative w-full border-t border-slate-800/80 bg-[#0F172A] text-slate-300"
    >
      <h2 id="footer-heading" className="sr-only">
        Navigasi Footer Kodeari
      </h2>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Main 4-Area Grid Layout */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Area A: Brand Kodeari (Desktop: 4 columns) */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]"
              aria-label="kodeari beranda"
            >
              <div className="relative size-8 shrink-0 overflow-hidden transition-transform duration-150 group-hover:scale-105">
                <Image
                  src="/logo/logo-only.png"
                  alt="Logo Kodeari"
                  width={32}
                  height={32}
                  className="size-full object-contain"
                />
              </div>
              <span className="text-[19px] font-bold tracking-tight text-white">
                Kodeari
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Membantu bisnis membangun kehadiran digital melalui website yang profesional, fungsional, dan sesuai kebutuhan.
            </p>
          </div>

          {/* Area B: Navigasi (Desktop: 2 columns, offset) */}
          <div className="lg:col-span-2 lg:col-start-6">
            <p className="text-xs font-semibold tracking-wider text-slate-200 uppercase">
              Navigasi
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="inline-block text-sm text-slate-400 transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Area C: Layanan (Desktop: 2 columns) */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold tracking-wider text-slate-200 uppercase">
              Layanan
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="inline-block text-sm text-slate-400 transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Area D: Kontak / Hubungi Kami (Desktop: 3 columns) */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold tracking-wider text-slate-200 uppercase">
              Hubungi Kami
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Siap membangun kehadiran digital untuk bisnis Anda? Diskusikan kebutuhan website Anda bersama tim kami.
            </p>
            <div className="mt-5">
              <a
                href={consultationHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-5 text-sm font-medium text-white shadow-xs transition-all duration-150 hover:bg-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A] active:scale-[0.99]"
              >
                <span>Konsultasikan Proyekmu</span>
                <ArrowRight className="size-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Garis Pemisah Tipis & Bagian Bawah Footer */}
        <div className="mt-12 border-t border-slate-800/80 pt-8 sm:mt-16">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-slate-400 sm:text-[13px]">
              &copy; {currentYear} Kodeari. Hak cipta dilindungi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
