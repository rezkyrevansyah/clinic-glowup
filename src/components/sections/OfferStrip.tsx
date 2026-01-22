import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function OfferStrip() {
  return (
    <div className="w-full bg-primary py-2 text-center text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('/pattern-noise.png')]"></div>
      <div className="container relative mx-auto px-4 flex items-center justify-center gap-2 text-sm font-medium">
        <span className="hidden sm:inline">✨ Promo Spesial Bulan Ini:</span>
        <span>Diskon 15% untuk Member Baru!</span>
        <Link href="#pricing" className="inline-flex items-center decoration-white/60 hover:underline">
          Ambil Promo <ArrowRight className="ml-1 h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}
