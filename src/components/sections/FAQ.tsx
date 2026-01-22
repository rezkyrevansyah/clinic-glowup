"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Apakah treatment ini sakit?",
    answer: "Sebagian besar treatment kami sangat nyaman (painless). Untuk tindakan ekstraksi komedo atau peeling, mungkin ada sensasi 'cekit-cekit' ringan yang wajar, namun kami selalu memprioritaskan kenyamanan Anda.",
  },
  {
    question: "Berapa lama durasi treatment?",
    answer: "Rata-rata treatment memakan waktu 45-60 menit, sudah termasuk pembersihan wajah dan masker penutup. Kami menghargai waktu Anda sehingga pengerjaan efisien namun teliti.",
  },
  {
    question: "Apakah ada downtime (wajah merah) setelah perawatan?",
    answer: "Untuk Facial Glow Basic, tidak ada downtime (no downtime), Anda bisa langsung beraktivitas. Untuk Acne Care dan Brightening Peel, mungkin ada kemerahan ringan yang akan reda dalam 2-4 jam.",
  },
  {
    question: "Apakah cocok untuk kulit sensitif?",
    answer: "Ya, kami menggunakan produk hypo-allergenic dan akan melakukan skin test / analisis kulit terlebih dahulu untuk memastikan keamanan bagi kulit sensitif.",
  },
  {
    question: "Metode pembayaran apa yang tersedia?",
    answer: "Kami menerima Cash, Transfer Bank, QRIS (GoPay/OVO/Dana), dan Kartu Debit/Kredit.",
  },
  {
    question: "Dimana lokasi tepatnya dan parkir susah tidak?",
    answer: "Kami berlokasi di Jakarta Selatan (dekat [Landmark]). Parkir tersedia luas untuk mobil dan motor, gratis dan dijaga keamanan.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
          Pertanyaan Umum
        </h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div 
            key={i} 
            className="border border-slate-200 rounded-lg overflow-hidden bg-white"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between p-4 text-left font-medium text-slate-900 hover:bg-slate-50 transition-colors"
            >
              <span className="pr-4">{faq.question}</span>
              {openIndex === i ? (
                <ChevronUp className="h-5 w-5 text-slate-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-slate-500" />
              )}
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="p-4 pt-0 text-slate-600 text-sm leading-relaxed border-t border-transparent">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
