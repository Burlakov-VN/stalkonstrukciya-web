import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="ru">
      <body className="bg-bg-primary text-ink font-body">{children}</body>
    </html>
  );
}
