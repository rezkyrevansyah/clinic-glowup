"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#problem", label: "Masalah Kulit" },
    { href: "#pricing", label: "Treatment" },
    { href: "#reviews", label: "Review" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <>
      <nav 
        className={cn(
          "sticky top-0 z-50 w-full border-b transition-all duration-300",
          scrolled 
            ? "border-white/10 bg-white/80 backdrop-blur-md shadow-sm" 
            : "border-transparent bg-transparent"
        )}
      >
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 z-50">
            <span className="text-xl font-bold tracking-tight text-primary-dark">
              GlowUp Clinic
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden gap-8 md:flex items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button size="sm" className="hidden md:flex shadow-primary/20 shadow-md">
              Booking Sekarang
            </Button>
          </div>

          {/* Mobile Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <div 
        className={cn(
          "fixed top-0 right-0 z-40 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden pt-24 px-6",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between text-lg font-medium text-slate-900 border-b border-slate-100 pb-4"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.label}
              <ChevronRight className="h-5 w-5 text-slate-400" />
            </Link>
          ))}
          <div className="pt-4">
             <Button className="w-full text-lg h-12 shadow-lg shadow-primary/20">
               Booking via WhatsApp
             </Button>
             <p className="text-center text-xs text-slate-400 mt-4">
               Buka Setiap Hari 10.00 - 20.00
             </p>
          </div>
        </div>
      </div>
    </>
  );
}
