import { Section } from "@/components/ui/Section";
import { CheckCircle, Clock, ShieldCheck, CalendarHeart } from "lucide-react";

export function KeyBenefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Cepat & Efisien",
      desc: "Treatment 30-60 menit, cocok untuk Anda yang sibuk.",
    },
    {
      icon: ShieldCheck,
      title: "Aman & Higienis",
      desc: "Alat steril standar medis, spons sekali pakai.",
    },
    {
      icon: CheckCircle,
      title: "Terapis Pro",
      desc: "Ditangani oleh beautician tersertifikat & berpengalaman.",
    },
    {
      icon: CalendarHeart,
      title: "Mudah Booking",
      desc: "Jadwal fleksibel, booking via WhatsApp anti ribet.",
    },
  ];

  return (
    <Section className="py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-[400px] bg-slate-100 rounded-3xl overflow-hidden shadow-lg order-2 lg:order-1">
          {/* Placeholder Image */}
          <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium bg-slate-200">
             Clean Clinic Interior Photo
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
            Kenapa Memilih GlowUp Clinic?
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {benefits.map((item, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
