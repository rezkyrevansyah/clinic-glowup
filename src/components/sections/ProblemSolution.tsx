import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Frown, Sparkles, ArrowRight } from "lucide-react";

export function ProblemSolution() {
  return (
    <Section id="problem" background="light">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
          Merasa Kulit Masih Kurang Maksimal?
        </h2>
        <p className="text-lg text-slate-600">
          Jangan biarkan masalah kulit menurunkan kepercayaan diri Anda. Kami paham apa yang Anda rasakan.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Problems */}
        {[
          {
            title: "Kusam & Tidak Bercahaya",
            desc: "Wajah terlihat lelah dan gelap meski sudah pakai skincare rutin.",
          },
          {
            title: "Jerawat Membandel",
            desc: "Jerawat yang terus muncul dan meninggalkan bekas kemerahan.",
          },
          {
            title: "Tekstur Kasar",
            desc: "Kulit terasa kasar saat disentuh dan makeup sulit menempel.",
          },
        ].map((item, i) => (
          <Card key={i} className="bg-red-50/50 border-red-100 relative overflow-hidden">
             <div className="absolute -right-4 -top-4 w-24 h-24 bg-red-100 rounded-full opacity-50 blur-xl"></div>
             <Frown className="h-10 w-10 text-red-400 mb-4" />
             <h3 className="font-semibold text-xl mb-2 text-slate-900">{item.title}</h3>
             <p className="text-slate-600">{item.desc}</p>
          </Card>
        ))}
      </div>

      <div className="my-12 flex justify-center">
        <div className="p-2 rounded-full bg-slate-200/50">
          <ArrowRight className="h-6 w-6 text-slate-400 rotate-90 md:rotate-0" />
        </div>
      </div>

      <div className="text-center max-w-2xl mx-auto mb-10">
        <h3 className="text-2xl font-bold text-primary">Solusi GlowUp Clinic</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Skin Analyzer",
            desc: "Analisis kondisi kulit mendalam sebelum rekomendasi treatment.",
          },
          {
            title: "Personalized Treatment",
            desc: "Protokol perawatan disesuaikan dengan jenis kulit unik Anda.",
          },
          {
            title: "Aftercare Guidance",
            desc: "Panduan perawatan di rumah agar hasil treatment bertahan lama.",
          },
        ].map((item, i) => (
          <Card key={i} variant="default" className="border-primary/20 hover:border-primary/50 text-center">
             <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
             </div>
             <h3 className="font-semibold text-xl mb-2 text-slate-900">{item.title}</h3>
             <p className="text-slate-600">{item.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
