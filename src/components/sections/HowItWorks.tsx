import { Section } from "@/components/ui/Section";
import { MessageCircle, Search, Sparkles, Home } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Booking via WhatsApp",
      desc: "Pilih jadwal yang cocok untuk Anda tanpa ribet.",
    },
    {
      icon: Search,
      title: "Gratis Konsultasi",
      desc: "Analisis kulit oleh terapis sebelum tindakan.",
    },
    {
      icon: Sparkles,
      title: "Relaxing Treatment",
      desc: "Nikmati perawatan 30-60 menit yang nyaman.",
    },
    {
      icon: Home,
      title: "Home Aftercare",
      desc: "Dapat panduan perawatan pasca treatment.",
    },
  ];

  return (
    <Section id="how-it-works" background="light">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
          Mulai Perjalanan Kulit Sehatmu
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-8 relative">
        {/* Connector Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-200 -z-10" />

        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-white rounded-full border border-slate-100 shadow-sm flex items-center justify-center mb-6 relative z-10 transition-transform group-hover:scale-110 group-hover:border-primary/30">
              <step.icon className="h-10 w-10 text-primary" />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full text-white flex items-center justify-center font-bold text-sm">
                {i + 1}
              </div>
            </div>
            <h3 className="font-semibold text-lg text-slate-900 mb-2">{step.title}</h3>
            <p className="text-slate-600 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
