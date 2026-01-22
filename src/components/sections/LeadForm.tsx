"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { CheckCircle, Loader2 } from "lucide-react";

export function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Track Lead Event (Placeholder)
    console.log("Track: Lead Submitted");
    // @ts-ignore
    if (typeof window !== "undefined" && window.fbq) {
        // @ts-ignore 
        window.fbq('track', 'Lead');
    }

    setIsSubmitting(false);
    setIsSuccess(true);
  }

  return (
    <Section id="consultation" background="pattern">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
              Masih Bingung Pilih Treatment?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Isi formulir ini untuk mendapatkan rekomendasi terbaik dari konsultan kami. Gratis & tanpa komitmen.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-slate-700">
                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                Respon cepat di jam kerja
              </li>
              <li className="flex items-center text-slate-700">
                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                Konsultasi awal gratis
              </li>
              <li className="flex items-center text-slate-700">
                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                Data aman & terjaga
              </li>
            </ul>
          </div>

          <Card className="shadow-2xl border-primary/10">
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Terima Kasih!</h3>
                <p className="text-slate-600 mb-6">
                  Data Anda sudah kami terima. Konsultan kami akan segera menghubungi Anda via WhatsApp.
                </p>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => window.open("https://wa.me/62812XXXXXXX", "_blank")}
                >
                  Lanjut ke WhatsApp Sekarang
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Form Konsultasi Gratis</h3>
                
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">Nama Lengkap</label>
                  <input 
                    required 
                    id="name" 
                    type="text" 
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" 
                    placeholder="Contoh: Sarah Putri"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="whatsapp" className="text-sm font-medium text-slate-700">Nomor WhatsApp</label>
                  <input 
                    required 
                    id="whatsapp" 
                    type="tel" 
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" 
                    placeholder="0812xxxx (Pastikan aktif)"
                  />
                </div>

                <div className="space-y-2">
                   <label htmlFor="treatment" className="text-sm font-medium text-slate-700">Tertarik Treatment Apa?</label>
                   <select id="treatment" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50">
                     <option>Belum tahu, butuh saran</option>
                     <option>Facial Glow Basic</option>
                     <option>Acne Care Program</option>
                     <option>Brightening Peel</option>
                     <option>Lainnya</option>
                   </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="complaint" className="text-sm font-medium text-slate-700">Keluhan Singkat (Opsional)</label>
                  <textarea 
                    id="complaint" 
                    rows={2} 
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" 
                    placeholder="Contoh: Kulit kusam dan ada bekas jerawat..."
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    "Minta Rekomendasi"
                  )}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </Section>
  );
}
