import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { CheckIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const packages = [
  {
    name: "Facial Glow Basic",
    price: "199k",
    desc: "Perawatan dasar untuk kulit kusam.",
    features: ["Deep Cleansing", "Face Massage", "Masker Organik", "Serum Vitamin C"],
    highlight: false,
  },
  {
    name: "Acne Care Program",
    price: "499k",
    desc: "Solusi tuntas untuk kulit berjerawat.",
    features: ["High Frequency Tool", "Acne Extraction", "Masker Anti-Inflamasi", "LED Blue Light"],
    highlight: true,
  },
  {
    name: "Brightening Peel",
    price: "699k",
    desc: "Peeling aman untuk cerah instan.",
    features: ["Chemical Peeling Ringan", "Neutralizer", "Cooling Mask", "Sunscreen Application"],
    highlight: false,
  },
  {
    name: "3x Membership",
    price: "Disc 15%",
    desc: "Paket hemat untuk hasil maksimal.",
    features: ["Pilih Treatment Apapun", "Priority Booking", "Free 1x Product", "Valid 3 Bulan"],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <Section id="pricing" background="light">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
          Pilihan Treatment Favorit
        </h2>
        <p className="text-lg text-slate-600">
          Harga transparan, tanpa biaya tersembunyi.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((pkg, i) => (
          <Card 
            key={i} 
            className={cn(
              "flex flex-col relative", 
              pkg.highlight ? "border-primary ring-1 ring-primary shadow-lg scale-105 z-10" : ""
            )}
          >
            {pkg.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                Best Value
              </div>
            )}
            <div className="mb-4">
              <h3 className="font-semibold text-lg text-slate-900">{pkg.name}</h3>
              <p className="text-sm text-slate-500">{pkg.desc}</p>
            </div>
            <div className="mb-6">
              <span className="text-3xl font-bold text-slate-900">{pkg.price}</span>
            </div>
            <ul className="flex-1 space-y-3 mb-6">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-sm text-slate-600">
                  <CheckIcon className="mr-2 h-4 w-4 text-primary shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button 
               variant={pkg.highlight ? "default" : "outline"} 
               className="w-full"
            >
              Pilih & Booking
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  );
}
