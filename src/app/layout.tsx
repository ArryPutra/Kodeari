import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kodeari — Jasa Pembuatan Website Profesional & Profil Usaha",
  description:
    "Website yang dirancang dengan cermat untuk memperkuat citra bisnis, menampilkan keunggulanmu, dan membuat pelanggan lebih mudah mengenal layananmu.",
  icons: {
    icon: "/logo/logo-only.png",
    shortcut: "/logo/logo-only.png",
    apple: "/logo/logo-only.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <noscript>
          <style>{`.scroll-reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
