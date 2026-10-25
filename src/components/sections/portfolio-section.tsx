"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, FolderKanban, Lock } from "lucide-react";

import { useInView } from "@/lib/use-in-view";

export type PortfolioCategory =
  | "Semua"
  | "Profil Bisnis"
  | "Landing Page"
  | "Katalog Produk"
  | "Custom";

export interface PortfolioProject {
  id: string;
  title: string;
  category: "Profil Bisnis" | "Landing Page" | "Katalog Produk" | "Custom";
  domain: string;
  isConcept: boolean;
  headline: string;
  purpose: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  demoUrl?: string;
  detailsHref?: string;
}

const CATEGORIES: PortfolioCategory[] = [
  "Semua",
  "Profil Bisnis",
  "Landing Page",
  "Katalog Produk",
  "Custom",
];

const portfolioProjects: PortfolioProject[] = [
  {
    id: "arta-konstruksi",
    title: "Arta Konstruksi",
    category: "Profil Bisnis",
    domain: "arta-kontruksi.vercel.app",
    demoUrl: "https://arta-kontruksi.vercel.app",
    isConcept: false,
    headline: "Jasa Kontraktor & Renovasi Bangunan Terpercaya.",
    purpose:
      "Website profil bisnis jasa kontraktor yang dirancang profesional untuk memaparkan layanan bangun baru, renovasi, interior, dan transparansi estimasi RAB bagi calon klien.",
    description:
      "Menghadirkan perencanaan anggaran transparan, spesifikasi material jelas, dan pendampingan konstruksi terukur dari gambar kerja hingga serah terima.",
    imageSrc: "/images/arta-konstruksi-mockup.png",
    imageAlt:
      "Pratinjau visual website profil bisnis kontraktor Arta Konstruksi",
  },
  {
    id: "dapur-warisan-ibu",
    title: "Dapur Warisan Ibu",
    category: "Landing Page",
    domain: "dapur-warisan-ibu.vercel.app",
    demoUrl: "https://dapur-warisan-ibu.vercel.app",
    isConcept: false,
    headline: "Masakan Rumahan Bumbu Medok, Siap Makan di Tempat atau Antar Katering.",
    purpose:
      "Landing page kuliner hangat dengan buku menu digital dan kalkulator katering interaktif yang menghitung estimasi harga otomatis lalu terhubung langsung ke WhatsApp Admin.",
    description:
      "Menyajikan navigasi menu andalan, perhitungan kalkulator katering instan, dan integrasi WhatsApp Admin untuk pemesanan nasi kotak serta acara keluarga.",
    imageSrc: "/images/dapur-warisan-ibu.png",
    imageAlt:
      "Pratinjau visual landing page kuliner hangat dan katering Dapur Warisan Ibu",
  },
  {
    id: "ruang-kayu",
    title: "Ruang Kayu",
    category: "Katalog Produk",
    domain: "ruang-kayu-phi.vercel.app",
    demoUrl: "https://ruang-kayu-phi.vercel.app",
    isConcept: false,
    headline: "Furnitur Berkualitas untuk Ruang yang Lebih Nyaman.",
    purpose:
      "Website katalog produk furnitur dan dekorasi rumah dengan penataan kategori terstruktur serta integrasi pemesanan langsung via WhatsApp.",
    description:
      "Memudahkan pelanggan mengeksplorasi koleksi furnitur berkualitas mulai dari kursi, meja, hingga penyimpanan dengan tampilan modern, estetik, dan informatif.",
    imageSrc: "/images/ruang-kayu-mockup.png",
    imageAlt:
      "Pratinjau visual website katalog produk furnitur Ruang Kayu",
  },
  {
    id: "sinar-task",
    title: "Sinar Task",
    category: "Custom",
    domain: "sinar-task.vercel.app",
    demoUrl: "https://sinar-task.vercel.app",
    isConcept: false,
    headline: "Platform Aplikasi Web Untuk Manajemen Tugas dan Pekerjaan.",
    purpose:
      "Website untuk mengelola penugasan, memantau progres harian berbasis lokasi, dan meninjau laporan pekerjaan karyawan secara terstruktur dan transparan.",
    description:
      "Memungkinkan delegasi tugas yang efisien, pelacakan progres harian berbasis lokasi, dan alur peninjauan laporan yang transparan antara admin dan pelaksana.",
    imageSrc: "/images/sinar-task-mockup.png",
    imageAlt:
      "Pratinjau visual website aplikasi web untuk manajemen task dan pekerjaan",
  },
];

function PortfolioCardItem({
  project,
  index,
}: {
  project: PortfolioProject;
  index: number;
}) {
  const [cardRef, cardInView] = useInView<HTMLElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -8% 0px",
    delay: index % 3 === 0 ? 500 : index % 3 === 1 ? 600 : 700,
  });

  const destination =
    project.demoUrl || project.detailsHref || `https://${project.domain}`;

  const delayClass =
    index % 3 === 0
      ? "reveal-delay-0"
      : index % 3 === 1
        ? "reveal-delay-1"
        : "reveal-delay-2";

  return (
    <article
      ref={cardRef}
      className={`group flex flex-col overflow-hidden rounded-xl border border-[#E5EAF1] bg-white shadow-xs transition-all duration-200 ease-out hover:border-slate-300 hover:shadow-[0_12px_28px_-8px_rgba(23,32,51,0.08)] sm:rounded-2xl scroll-reveal reveal-duration-card ${delayClass} ${
        cardInView ? "scroll-reveal-active" : ""
      }`}
    >
      {/* Browser Mockup Chrome Header */}
      <div className="flex h-8.5 items-center justify-between border-b border-[#E5EAF1] bg-[#F8FAFC] px-3.5">
        {/* Window Dots */}
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="size-2 rounded-full border border-[#CBD5E1]/60 bg-[#E2E8F0]" />
          <span className="size-2 rounded-full border border-[#CBD5E1]/60 bg-[#E2E8F0]" />
          <span className="size-2 rounded-full border border-[#CBD5E1]/60 bg-[#E2E8F0]" />
        </div>

        {/* Domain Pill */}
        <div className="flex items-center gap-1 rounded border border-[#E5EAF1] bg-white px-2 py-0.5 text-[10.5px] text-[#64748B] shadow-2xs font-mono">
          <Lock className="size-2.5 text-[#94A3B8]" aria-hidden="true" />
          <span className="text-[#475467]">{project.domain}</span>
        </div>

        {/* Concept Label */}
        <div className="text-[9.5px] font-semibold tracking-wider uppercase text-[#64748B]">
          {project.isConcept ? "Konsep" : "Karya"}
        </div>
      </div>

      {/* 16:9 Responsive Website Preview */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
        <Image
          src={project.imageSrc}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={index === 0}
          className="object-cover object-top transition-transform duration-200 ease-out group-hover:scale-[1.02]"
        />
      </div>

      {/* Project Information Area */}
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-5.5">
        <div>
          {/* Meta Row: Category & Status */}
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#2563EB]">
              {project.category}
            </span>
            <span className="rounded-full border border-slate-200/80 bg-slate-50 px-2 py-0.5 text-[10.5px] font-medium text-[#64748B]">
              {project.isConcept ? "Konsep Desain" : "Website Live"}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="mt-2.5 text-lg font-bold tracking-tight text-[#172033] sm:text-xl">
            {project.title}
          </h3>

          {/* Purpose Description */}
          <p className="mt-2 text-[13px] leading-relaxed text-[#64748B]">
            {project.purpose}
          </p>
        </div>

        {/* Action Button to Visit Project Link */}
        <div className="mt-5 border-t border-slate-100 pt-4">
          <a
            href={destination}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9.5 w-full items-center justify-center gap-1.5 rounded-lg border border-[#E5EAF1] bg-[#F8FAFC] px-4 text-xs font-semibold text-[#172033] shadow-2xs transition-all duration-150 hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 active:scale-[0.99]"
          >
            <span>Kunjungi Website</span>
            <ArrowUpRight
              className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </article>
  );
}

export function PortfolioSection() {
  const [introRef, introInView] = useInView({ threshold: 0.15, delay: 500 });
  const [tabsRef, tabsInView] = useInView({ threshold: 0.15, delay: 550 });
  const [selectedCategory, setSelectedCategory] =
    useState<PortfolioCategory>("Semua");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "Semua") {
      return portfolioProjects;
    }
    return portfolioProjects.filter(
      (project) => project.category === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <section
      id="portofolio"
      aria-labelledby="portfolio-heading"
      className="relative w-full border-t border-[#E5EAF1] bg-white py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Introduction: Editorial, Bold, and Confident */}
        <div ref={introRef} className="max-w-3xl">
          <div
            className={`text-[11.5px] font-semibold tracking-[0.24em] uppercase text-[#667085] sm:text-xs scroll-reveal reveal-duration-heading ${
              introInView ? "scroll-reveal-active" : ""
            }`}
          >
            PORTOFOLIO KODEARI
          </div>
          <h2
            id="portfolio-heading"
            className={`mt-4 text-3xl font-bold tracking-[-0.03em] text-[#172033] sm:text-4xl lg:text-[44px] sm:leading-[1.15] scroll-reveal reveal-duration-heading reveal-delay-1 ${
              introInView ? "scroll-reveal-active" : ""
            }`}
          >
            Setiap Bisnis Punya Cerita. Website Membantu Menunjukkannya.
          </h2>
          <p
            className={`mt-4 max-w-2xl text-base leading-relaxed text-[#667085] sm:text-lg scroll-reveal reveal-duration-body reveal-delay-2 ${
              introInView ? "scroll-reveal-active" : ""
            }`}
          >
            Jelajahi berbagai konsep dan karya website yang dirancang untuk
            memperkuat identitas bisnis, menampilkan keunggulan, dan memberikan
            pengalaman digital yang lebih profesional.
          </p>
        </div>

        {/* Functional Category Filter Tabs */}
        <div
          ref={tabsRef}
          className={`mt-10 sm:mt-12 scroll-reveal reveal-duration-body reveal-delay-1 ${
            tabsInView ? "scroll-reveal-active" : ""
          }`}
        >
          <div
            role="tablist"
            aria-label="Filter kategori portofolio"
            className="flex flex-wrap items-center gap-2 sm:gap-2.5"
          >
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  id={`tab-${category.toLowerCase().replace(/\s+/g, "-")}`}
                  aria-selected={isActive}
                  aria-controls="portfolio-gallery-panel"
                  onClick={() => setSelectedCategory(category)}
                  className={`inline-flex h-9 items-center rounded-lg px-4 text-[13.5px] font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 ${
                    isActive
                      ? "bg-[#172033] text-white shadow-xs"
                      : "border border-[#E5EAF1] bg-white text-[#667085] hover:border-slate-300 hover:bg-slate-50 hover:text-[#172033]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Gallery Panel */}
        <div
          id="portfolio-gallery-panel"
          role="tabpanel"
          aria-labelledby={`tab-${selectedCategory.toLowerCase().replace(/\s+/g, "-")}`}
          className="mt-8 sm:mt-10"
        >
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <PortfolioCardItem
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          ) : (
            /* Clean Empty State */
            <div
              className="flex w-full flex-col items-center justify-center rounded-2xl border border-dashed border-[#E5EAF1] bg-[#F8FAFC] px-6 py-16 text-center sm:py-20"
              role="status"
              aria-live="polite"
            >
              <div
                className="flex size-12 items-center justify-center rounded-full bg-slate-100 text-[#64748B]"
                aria-hidden="true"
              >
                <FolderKanban className="size-5" />
              </div>
              <p className="mt-4 text-base font-semibold text-[#172033]">
                Belum ada proyek dalam kategori ini.
              </p>
              <p className="mt-1.5 max-w-sm text-sm text-[#64748B]">
                Konsep website untuk kategori{" "}
                <span className="font-medium text-[#172033]">
                  {selectedCategory}
                </span>{" "}
                sedang dalam proses penyiapan kurasi desain.
              </p>
              <button
                type="button"
                onClick={() => setSelectedCategory("Semua")}
                className="mt-5 inline-flex items-center gap-2 rounded-lg border border-[#E5EAF1] bg-white px-4 py-2 text-xs font-medium text-[#172033] shadow-xs transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              >
                <span>Tampilkan Semua Proyek</span>
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
