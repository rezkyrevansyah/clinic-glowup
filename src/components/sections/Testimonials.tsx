import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  return (
    <Section id="reviews">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
          Apa Kata Mereka?
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          {
            name: "Sarah A.",
            role: "Mahasiswa",
            text: "Baru pertama kali coba facial, ternyata nyaman banget. Komedo bersih, nggak sakit sama sekali.",
          },
          {
            name: "Dina R.",
            role: "Karyawan Swasta",
            text: "Suka banget sama Acne Care-nya. Jerawat radang langsung kempes dalam 2 hari. Terapisnya ramah!",
          },
          {
            name: "Putri M.",
            role: "Ibu Rumah Tangga",
            text: "Langganan di sini karena tempatnya bersih dan wangi. Harganya juga masuk akal buat treatment rutin.",
          },
        ].map((item, i) => (
          <Card key={i} className="bg-slate-50 border-none">
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-slate-700 mb-4 italic">"{item.text}"</p>
            <div>
              <p className="font-semibold text-slate-900">{item.name}</p>
              <p className="text-xs text-slate-500">{item.role}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto bg-primary rounded-3xl p-8 md:p-12 text-white overflow-hidden text-center">
        <div className="absolute top-0 left-0 p-8 opacity-10">
          <Quote className="h-24 w-24" />
        </div>
        <p className="text-xl md:text-2xl font-medium relative z-10 mb-6 leading-relaxed">
          "Kami percaya setiap wanita berhak merasa percaya diri dengan kulit sehatnya. Di GlowUp Clinic, kemewahan treatment bertemu dengan harga yang jujur."
        </p>
        <p className="font-semibold opacity-80">— Dr. Amanda, Head Consultant</p>
      </div>
    </Section>
  );
}
