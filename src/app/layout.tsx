import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GlowUp Clinic | Klinik Kecantikan Jakarta Selatan",
  description: "Solusi kulit sehat & glowing natural dengan treatment terjangkau di Jakarta Selatan. Booking konsultasi gratis sekarang!",
  openGraph: {
    title: "GlowUp Clinic - Facial & Acne Care Premium",
    description: "Nikmati perawatan wajah premium dengan harga terjangkau. Spesialis jerawat dan kulit kusam.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${outfit.variable} antialiased bg-slate-50 text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
