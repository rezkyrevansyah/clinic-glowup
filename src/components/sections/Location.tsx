import { Section } from "@/components/ui/Section";
import { MapPin, Phone, Instagram, Facebook, Clock } from "lucide-react";
import Link from "next/link";

export function Location() {
  return (
    <footer className="w-full">
      <Section background="dark" className="py-20 border-t border-slate-800">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-6">
             <div>
               <h3 className="text-2xl font-bold text-white tracking-tight">GlowUp Clinic</h3>
               <p className="text-emerald-500 text-sm font-medium">Beauty & Wellness Center</p>
             </div>
             <p className="text-sm leading-relaxed text-slate-400">
               Memberikan pelayanan perawatan kulit terbaik dengan teknologi modern dan sterilisasi terjamin.
             </p>
             <div className="flex space-x-4">
               <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-all"><Instagram className="h-5 w-5" /></Link>
               <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-all"><Facebook className="h-5 w-5" /></Link>
             </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Akses Cepat</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="#problem" className="hover:text-emerald-400 transition-colors">Masalah Kulit</Link></li>
              <li><Link href="#pricing" className="hover:text-emerald-400 transition-colors">Treatment Menu</Link></li>
              <li><Link href="#reviews" className="hover:text-emerald-400 transition-colors">Testimoni</Link></li>
              <li><Link href="#consultation" className="hover:text-emerald-400 transition-colors">Konsultasi Gratis</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
             <h4 className="text-lg font-semibold text-white">Kunjungi Kami</h4>
             <ul className="space-y-4 text-sm text-slate-400">
               <li className="flex items-start">
                 <MapPin className="mr-3 h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                 <span>Jl. Raya Fatmawati No. 45, Cilandak, Jakarta Selatan<br/>(Seberang MRT Cipete)</span>
               </li>
               <li className="flex items-center">
                 <Phone className="mr-3 h-5 w-5 text-emerald-500 shrink-0" />
                 <span>0812-9988-7766</span>
               </li>
               <li className="flex items-start">
                 <Clock className="mr-3 h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                 <div>
                   <span className="block text-white">Operasional:</span>
                   <span>Senin - Minggu: 10.00 - 20.00</span>
                 </div>
               </li>
             </ul>
          </div>

          {/* Map Placeholder */}
          <div className="space-y-4">
            <div className="h-48 w-full bg-slate-800 rounded-2xl overflow-hidden relative group border border-slate-700/50">
               {/* Simulate Map */}
               <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=-6.278,106.797&zoom=15&size=400x300&sensor=false')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                 <Button variant="outline" size="sm" className="bg-slate-900/80 border-slate-600 text-white hover:bg-emerald-600 hover:border-emerald-600">
                    Buka Google Maps
                 </Button>
               </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} GlowUp Clinic. All rights reserved.</p>
          <div className="flex gap-6">
             <Link href="#" className="hover:text-slate-300">Privacy Policy</Link>
             <Link href="#" className="hover:text-slate-300">Terms of Service</Link>
          </div>
        </div>
      </Section>
    </footer>
  );
}
import { Button } from "@/components/ui/Button";
