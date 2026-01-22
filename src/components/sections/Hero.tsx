import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Star, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <Section className="pt-20 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
        <div className="flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Klinik Kecantikan Jakarta Selatan
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl xl:text-6xl/none">
              Wajah Glowing Natural, <br />
              <span className="text-primary">Bebas Kusam & Jerawat</span>
            </h1>
            <p className="max-w-[600px] text-slate-600 md:text-xl/relaxed">
              Solusi perawatan kulit profesional dengan harga transparan. 
              Ditangani terapis berpengalaman dalam 30-60 menit.
            </p>
          </div>
          <div className="flex flex-col gap-3 min-[400px]:flex-row">
            <Button size="lg" className="shadow-primary/25 shadow-xl">
              Booking via WhatsApp
            </Button>
            <Button size="lg" variant="outline">
              Cek Paket Treatment
            </Button>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-white bg-slate-200"
                  aria-hidden="true"
                />
              ))}
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="font-semibold text-slate-900">4.9/5</span>
              <span>(1.2k+ Happy Clients)</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Higienis & Steril
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Terapis Bersertifikat
            </div>
          </div>
        </div>
        <div className="mx-auto aspect-square w-full max-w-[500px] lg:max-w-none relative rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
           {/* Placeholder for Hero Image */}
           <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-medium">
             Hero Image Placeholder <br/> (Clinic Interior / Happy Patient)
           </div>
        </div>
      </div>
    </Section>
  );
}
