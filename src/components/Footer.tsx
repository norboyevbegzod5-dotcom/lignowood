"use client";

import { siteConfig } from "@/lib/constants";
import { Phone, MapPin, Send } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { dict } = useLanguage();

  return (
    <footer className="bg-stone-950 py-12 border-t border-stone-900 text-stone-400">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/images/logo.png" alt="Ligno Logo" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              {dict.meta.description}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-stone-100 mb-4">{dict.footer.contacts}</h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${siteConfig.contacts.phone.replace(/[^0-9+]/g, "")}`} className="flex items-center gap-2 hover:text-stone-200 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>{siteConfig.contacts.phone}</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>{dict.location.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-stone-100 mb-4">{dict.footer.socials}</h4>
            <div className="flex flex-col gap-3">
              <a 
                href={siteConfig.links.telegram} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Telegram</span>
              </a>
              <a 
                href={siteConfig.links.instagram} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-pink-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-stone-900 text-sm text-center">
          <p>&copy; {currentYear} {dict.meta.name}. {dict.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
