"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/constants";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { dict } = useLanguage();

  const navLinks = [
    { name: dict.nav.benefits, href: "#benefits" },
    { name: dict.nav.catalog, href: "#catalog" },
    { name: dict.nav.gallery, href: "#gallery" },
    { name: dict.nav.location, href: "#location" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-stone-950/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src="/images/logo.png" alt="Ligno Logo" className="h-12 md:h-16 w-auto object-contain" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-stone-300 hover:text-stone-50 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 border-l border-stone-800 pl-4">
              <a
                href={`tel:${siteConfig.contacts.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-2 text-stone-100 font-semibold hover:text-stone-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">{siteConfig.contacts.phone}</span>
              </a>
              <LanguageSwitcher />
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <LanguageSwitcher />
            <button
              className="p-2 text-stone-300 hover:text-stone-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-stone-900 border-t border-stone-800 shadow-xl"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-stone-300 hover:text-stone-50 block"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-stone-800">
                <a
                  href={`tel:${siteConfig.contacts.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center gap-2 text-stone-100 font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  <span>{siteConfig.contacts.phone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
