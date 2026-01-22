import { Section } from "@/components/ui/Section";
import Image from "next/image";

export function BeforeAfter() {
  return (
    <Section id="results">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
          Hasil Nyata Pelanggan Kami
        </h2>
        <p className="text-lg text-slate-600">
          Kumpulan portofolio hasil treatment di GlowUp Clinic.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="relative aspect-square bg-slate-100 rounded-xl overflow-hidden group">
            {/* Placeholder for Before/After Image */}
            <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium text-sm text-center p-4 bg-slate-200 transition-transform duration-500 group-hover:scale-105">
              Before/After Result #{i}
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-sm font-medium">Acne Care Treatment</span>
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-center text-sm text-slate-500 mt-8 italic">
        *Hasil perawatan setiap individu bisa berbeda-beda tergantung kondisi kulit.
      </p>
    </Section>
  );
}
