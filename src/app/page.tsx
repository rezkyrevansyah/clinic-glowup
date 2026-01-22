import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { OfferStrip } from "@/components/sections/OfferStrip";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { KeyBenefits } from "@/components/sections/KeyBenefits";
import { Pricing } from "@/components/sections/Pricing";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { LeadForm } from "@/components/sections/LeadForm";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Location } from "@/components/sections/Location";
import { WhatsAppFloat } from "@/components/features/WhatsAppFloat";
import { TrackingScripts } from "@/components/analytics/TrackingScripts";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      <TrackingScripts />
      <Navbar />
      <Hero />
      <OfferStrip />
      <ProblemSolution />
      <KeyBenefits />
      <Pricing />
      <BeforeAfter />
      <HowItWorks />
      <Testimonials />
      <LeadForm />
      <FAQ />
      <FinalCTA />
      <Location />
      <WhatsAppFloat />
    </main>
  );
}
