"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  /**
   * Destination for the consultation CTA button.
   * Defaults to `#konsultasi` anchor.
   */
  consultationHref?: string;
  /**
   * Destination for the Layanan link.
   * Defaults to `#layanan` anchor.
   */
  servicesHref?: string;
  /**
   * Destination for the Portofolio link.
   * Defaults to `#portofolio` anchor.
   */
  portfolioHref?: string;
  /**
   * Destination for the Tentang link.
   * Defaults to `#tentang` anchor.
   */
  aboutHref?: string;
}

export function Header({
  consultationHref = "#konsultasi",
  servicesHref = "#layanan",
  portfolioHref = "#portofolio",
  aboutHref = "#tentang",
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key press
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: "Beranda", href: "/", isActive: true },
    { label: "Layanan", href: servicesHref, isActive: false },
    { label: "Portofolio", href: portfolioHref, isActive: false },
    { label: "Tentang", href: aboutHref, isActive: false },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E5EAF1] bg-white/95 backdrop-blur-xs transition-colors">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Brand Name & Logo Mark */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
          aria-label="kodeari beranda"
        >
          <span className="flex size-7 items-center justify-center rounded-lg bg-[#2563EB] text-white shadow-xs transition-transform duration-150 group-hover:scale-105">
            <svg
              className="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17V7" />
              <path d="m14 7-6 5 6 5" />
            </svg>
          </span>
          <span className="text-[19px] font-bold tracking-tight text-[#172033]">
            kodeari<span className="text-[#2563EB]">.</span>
          </span>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav
          aria-label="Navigasi Utama"
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`rounded-sm text-[14.5px] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 ${
                link.isActive
                  ? "text-[#172033]"
                  : "text-[#667085] hover:text-[#172033]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Desktop Primary CTA */}
        <div className="hidden items-center md:flex">
          <a
            href={consultationHref}
            className="inline-flex h-10 items-center justify-center rounded-lg bg-[#2563EB] px-5 text-[14px] font-medium text-white shadow-xs transition-all duration-150 hover:bg-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 active:scale-[0.99]"
          >
            Konsultasi
          </a>
        </div>

        {/* Mobile: Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          className="inline-flex size-10 items-center justify-center rounded-lg border border-[#E5EAF1] bg-white text-[#172033] shadow-xs transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 md:hidden"
        >
          {isMobileMenuOpen ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer / Dropdown */}
      {isMobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navigasi Mobile"
          className="border-t border-[#E5EAF1] bg-white px-4 py-5 shadow-lg md:hidden sm:px-6"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex h-11 items-center rounded-lg px-3 text-[15px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 ${
                  link.isActive
                    ? "bg-slate-50 font-semibold text-[#172033]"
                    : "text-[#667085] hover:bg-slate-50 hover:text-[#172033]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-3 border-t border-slate-100 pt-3">
              <a
                href={consultationHref}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex h-11 w-full items-center justify-center rounded-lg bg-[#2563EB] px-4 text-[15px] font-medium text-white shadow-xs transition-colors hover:bg-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
              >
                Konsultasi
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
