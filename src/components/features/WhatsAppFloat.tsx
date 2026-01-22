"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleClick = () => {
    // Track Click
    console.log("Track: WA Button Clicked");
    // @ts-ignore
    if (typeof window !== "undefined" && window.fbq) {
        // @ts-ignore 
        window.fbq('track', 'Contact');
    }
    
    window.open("https://wa.me/62812XXXXXXX?text=Halo%20GlowUp%20Clinic", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-white shadow-lg transition-all hover:bg-green-600 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      )}
      aria-label="Chat WhatsApp"
    >
      <MessageCircle className="h-6 w-6 fill-current" />
      <span className="font-semibold">Chat WhatsApp</span>
    </button>
  );
}
