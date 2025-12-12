import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "BEIBARYS | Территория комфорта в Астане",
  description: "Зона отдыха BEIBARYS — идеальное место для семейного отдыха, корпоративов и праздников. Беседки, бассейн, номера, банкетный зал, активный отдых. Село Жибек Жолы, Астана.",
  keywords: "зона отдыха Астана, база отдыха, беседки, бассейн, банкетный зал, корпоратив, семейный отдых, Beibarys",
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: "BEIBARYS | Территория комфорта",
    description: "Зона отдыха BEIBARYS — идеальное место для отдыха рядом с Астаной",
    locale: "ru_KZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
