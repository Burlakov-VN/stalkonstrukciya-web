import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-manrope",
  display: "swap"
});

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  variable: "--font-inter",
  display: "swap"
});

const plexMono = IBM_Plex_Mono({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stalkonstrukciya.ru"),
  title: "Стальконструкция — промышленное здание под ключ",
  description:
    "Проектирование, производство и монтаж металлоконструкций для промышленных и быстровозводимых зданий.",
  openGraph: {
    title: "Стальконструкция",
    description:
      "Промышленное здание под ключ: проектирование, производство, монтаж.",
    locale: "ru_RU",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="bg-bg-primary text-ink font-body">{children}</body>
    </html>
  );
}
