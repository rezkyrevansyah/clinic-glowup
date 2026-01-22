import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <Section className="py-20 bg-primary/5">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-primary/10 max-w-5xl mx-auto p-8 md:p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Wujudkan Kulit Glowing Impianmu Hari Ini
        </h2>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          Slot konsultasi gratis terbatas hanya untuk <span className="font-bold text-primary">5 orang per hari</span>. Jangan sampai kehabisan!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto text-lg px-8 shadow-lg shadow-primary/20">
            Booking via WhatsApp
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8">
            Lihat Menu Treatment
          </Button>
        </div>
      </div>
    </Section>
  );
}
