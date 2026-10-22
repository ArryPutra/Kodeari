"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Lock } from "lucide-react";

interface SlideData {
  id: string;
  category: string;
  domain: string;
  brandMonogram: string;
  brandName: string;
  navLinks: string[];
  ctaButtonText: string;
  serviceTag: string;
  headline: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  imageSrc: string;
  imageAlt: string;
  pillars: { title: string; subtitle: string }[];
}

const slides: SlideData[] = [
  {
    id: "corporate",
    category: "Konsultansi & Korporat",
    domain: "nusastudio.id",
    brandMonogram: "N",
    brandName: "NUSA STUDIO",
    navLinks: ["Profil", "Layanan", "Keunggulan", "Kontak"],
    ctaButtonText: "Hubungi Kami",
    serviceTag: "KONSULTANSI & LAYANAN PROFESIONAL",
    headline: "Mengenal Bisnis Kami Lebih Dekat.",
    description:
      "Menyediakan solusi terintegrasi dan pendampingan profesional untuk mendukung kelancaran operasional serta pertumbuhan bisnis Anda secara terukur.",
    primaryButtonText: "Jelajahi Layanan",
    secondaryButtonText: "Tentang Kami",
    imageSrc: "/images/sample-business.jpg",
    imageAlt: "Pratinjau visual situs profil usaha profesional Nusa Studio",
    pillars: [
      { title: "Solusi Terpadu", subtitle: "Sesuai kebutuhan usaha" },
      { title: "Standar Profesional", subtitle: "Transparan & terpercaya" },
      { title: "Dukungan Responsif", subtitle: "Pendampingan tim andal" },
    ],
  },
  {
    id: "hospitality",
    category: "F&B & Ritel Modern",
    domain: "kedaikopiroti.id",
    brandMonogram: "K",
    brandName: "KEDAI KOPI & ROTI",
    navLinks: ["Menu", "Tentang Kami", "Lokasi", "Pemesanan"],
    ctaButtonText: "Order Meja",
    serviceTag: "SPESIALTI KAFE & ROTI ARTISAN",
    headline: "Kopi Pilihan & Roti Hangat Setiap Hari.",
    description:
      "Menghadirkan racikan biji kopi lokal pilihan dipadukan dengan pastry artisan segar langsung dari oven untuk pengalaman berkunjung yang berkesan.",
    primaryButtonText: "Lihat Menu Favorit",
    secondaryButtonText: "Kunjungi Kedai",
    imageSrc: "/images/sample-retail.jpg",
    imageAlt: "Pratinjau visual situs kedai kopi dan bakery artisan",
    pillars: [
      { title: "Biji Kopi Nusantara", subtitle: "Dipanggang teratur" },
      { title: "Bahan Alami Pilihan", subtitle: "Tanpa pengawet buatan" },
      { title: "Suasana Hangat", subtitle: "Nyaman untuk bersantai" },
    ],
  },
  {
    id: "creative",
    category: "Studio Arsitektur & Desain",
    domain: "ruangselaras.id",
    brandMonogram: "R",
    brandName: "RUANG SELARAS",
    navLinks: ["Portofolio", "Layanan", "Filosofi", "Kontak"],
    ctaButtonText: "Konsultasi Proyek",
    serviceTag: "STUDIO ARSITEKTUR & INTERIOR",
    headline: "Membangun Ruang Usaha & Hunian Berkarakter.",
    description:
      "Membantu pemilik bisnis dan hunian mewujudkan tempat yang fungsional dan estetis dengan pendekatan material alami yang berkelanjutan.",
    primaryButtonText: "Lihat Galeri Proyek",
    secondaryButtonText: "Profil Studio",
    imageSrc: "/images/sample-studio.jpg",
    imageAlt: "Pratinjau visual situs studio arsitektur dan interior Ruang Selaras",
    pillars: [
      { title: "Konsep Desain 3D", subtitle: "Visualisasi ruang matang" },
      { title: "Interior Komersial", subtitle: "Kafe, toko, & kantor" },
      { title: "Estimasi Biaya", subtitle: "Rencana anggaran jelas" },
    ],
  },
];

export function PreviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!containerRef.current) return;
      if (document.activeElement && containerRef.current.contains(document.activeElement)) {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          goToPrev();
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          goToNext();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrev, goToNext]);

  // Touch Swipe Handlers for mobile
  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  }

  function handleTouchMove(e: React.TouchEvent) {
    touchEndX.current = e.touches[0].clientX;
  }

  function handleTouchEnd() {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 40; // minimum swipe distance

    if (diff > threshold) {
      goToNext();
    } else if (diff < -threshold) {
      goToPrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  }

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Koleksi Pratinjau Desain Website"
      className="mx-auto w-full max-w-5xl outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-4 rounded-2xl"
    >
      {/* Top Carousel Bar: Slide Counter & Category Tabs */}
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between px-1">
        {/* Category Indicator Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {slides.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                  isActive
                    ? "bg-[#172033] text-white shadow-xs"
                    : "bg-white border border-[#E5EAF1] text-[#667085] hover:bg-slate-50 hover:text-[#172033]"
                }`}
              >
                <span
                  className={`size-1.5 rounded-full transition-colors ${
                    isActive ? "bg-[#2563EB]" : "bg-slate-300"
                  }`}
                  aria-hidden="true"
                />
                <span>{slide.category}</span>
              </button>
            );
          })}
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <span className="text-xs font-medium text-[#8A94A6] pr-1">
            0{currentIndex + 1} / 0{slides.length}
          </span>
          <button
            type="button"
            onClick={goToPrev}
            aria-label="Lihat desain sebelumnya"
            className="inline-flex size-9 items-center justify-center rounded-lg border border-[#E5EAF1] bg-white text-[#172033] shadow-xs transition-colors hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            aria-label="Lihat desain berikutnya"
            className="inline-flex size-9 items-center justify-center rounded-lg border border-[#E5EAF1] bg-white text-[#172033] shadow-xs transition-colors hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Main Single Browser Mockup Frame (Landscape Aspect Ratio) */}
      <div
        className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-[#E5EAF1] bg-white shadow-[0_25px_60px_-15px_rgba(23,32,51,0.11),0_1px_3px_rgba(23,32,51,0.04)]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Horizontal Sliding Track */}
        <div
          className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="w-full shrink-0 flex-none"
              role="group"
              aria-roledescription="slide"
              aria-label={slide.category}
            >
              {/* Browser Window Chrome */}
              <div className="flex h-10 items-center justify-between border-b border-[#E5EAF1] bg-[#F7F8FA] px-3.5 sm:px-4">
                {/* Window Controls */}
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="size-2.5 rounded-full border border-[#CBD5E1]/60 bg-[#E2E6EB]" />
                  <span className="size-2.5 rounded-full border border-[#CBD5E1]/60 bg-[#E2E6EB]" />
                  <span className="size-2.5 rounded-full border border-[#CBD5E1]/60 bg-[#E2E6EB]" />
                </div>

                {/* Minimal Address Bar */}
                <div className="flex items-center gap-1.5 rounded-md border border-[#E5EAF1] bg-white px-2.5 py-1 text-[11px] text-[#667085] shadow-[0_1px_2px_rgba(15,23,42,0.02)]">
                  <Lock className="size-2.5 text-[#8A94A6]" aria-hidden="true" />
                  <span className="font-mono text-[10.5px] text-[#475467]">
                    {slide.domain}
                  </span>
                </div>

                {/* Tag */}
                <div className="text-[10px] font-medium tracking-wide uppercase text-[#8A94A6]">
                  {slide.category}
                </div>
              </div>

              {/* Sample Website Content Inside Browser */}
              <div className="bg-white p-4 sm:p-6 lg:p-7">
                {/* Sample Navbar */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 sm:pb-4">
                  <div className="flex items-center gap-2">
                    <span className="flex size-6 items-center justify-center rounded bg-[#172033] text-[11px] font-bold text-white">
                      {slide.brandMonogram}
                    </span>
                    <span className="text-xs font-semibold tracking-tight text-[#172033] sm:text-sm">
                      {slide.brandName}
                    </span>
                  </div>

                  <div className="hidden items-center gap-5 text-xs text-[#667085] md:flex">
                    {slide.navLinks.map((link, idx) => (
                      <span
                        key={link}
                        className={idx === 0 ? "font-medium text-[#172033]" : ""}
                      >
                        {link}
                      </span>
                    ))}
                  </div>

                  <div className="rounded-md bg-[#172033] px-3 py-1.5 text-[11px] font-medium text-white sm:text-xs">
                    {slide.ctaButtonText}
                  </div>
                </div>

                {/* Sample Hero Layout */}
                <div className="mt-5 grid grid-cols-1 items-center gap-6 sm:mt-6 sm:grid-cols-12 sm:gap-8">
                  {/* Copy Column */}
                  <div className="sm:col-span-7">
                    <div className="inline-block text-[10px] font-semibold tracking-wider uppercase text-[#2563EB] sm:text-[10.5px]">
                      {slide.serviceTag}
                    </div>
                    <h2 className="mt-2 text-lg font-semibold leading-tight text-[#172033] sm:text-xl lg:text-2xl">
                      {slide.headline}
                    </h2>
                    <p className="mt-2.5 text-xs leading-relaxed text-[#667085] sm:text-sm">
                      {slide.description}
                    </p>

                    <div className="mt-4 flex items-center gap-2.5 sm:mt-5">
                      <span className="inline-flex items-center rounded-md bg-[#2563EB] px-3 py-1.5 text-xs font-medium text-white shadow-xs">
                        {slide.primaryButtonText}
                      </span>
                      <span className="inline-flex items-center rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-[#172033]">
                        {slide.secondaryButtonText}
                      </span>
                    </div>
                  </div>

                  {/* Imagery Column: Real Editorial Photography */}
                  <div className="sm:col-span-5">
                    <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg border border-slate-200/80 bg-slate-100 shadow-xs">
                      <Image
                        src={slide.imageSrc}
                        alt={slide.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                        priority={slide.id === "corporate"}
                      />
                    </div>
                  </div>
                </div>

                {/* Feature Highlights Bar */}
                <div className="mt-6 grid grid-cols-3 gap-2 rounded-lg border border-slate-100 bg-[#F8F9FA] p-3 text-center sm:gap-4 sm:p-3.5">
                  {slide.pillars.map((pillar, idx) => (
                    <div
                      key={pillar.title}
                      className={idx === 1 ? "border-x border-slate-200/70" : ""}
                    >
                      <div className="text-xs font-semibold text-[#172033] sm:text-[13px]">
                        {pillar.title}
                      </div>
                      <div className="mt-0.5 text-[10px] text-[#667085] sm:text-[11px]">
                        {pillar.subtitle}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
