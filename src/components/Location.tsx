"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";
import { MapPin, Phone, Send, Clock } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export function Location() {
  const { dict } = useLanguage();

  return (
    <section id="location" className="py-24 bg-stone-950">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{dict.location.title}</h2>
            <p className="text-stone-400 mb-10 text-lg">
              {dict.location.desc}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-stone-900 flex items-center justify-center text-stone-300 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">{dict.location.addressTitle}</h3>
                  <p className="text-stone-400">{dict.location.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-stone-900 flex items-center justify-center text-stone-300 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">{dict.location.scheduleTitle}</h3>
                  <p className="text-stone-400 whitespace-pre-line">{dict.location.schedule}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-stone-900 flex items-center justify-center text-stone-300 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">{dict.location.phoneTitle}</h3>
                  <a href={`tel:${siteConfig.contacts.phone.replace(/[^0-9+]/g, "")}`} className="text-stone-400 hover:text-white transition-colors">
                    {siteConfig.contacts.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-stone-900 flex items-center justify-center text-blue-400 shrink-0">
                  <Send className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">{dict.location.tgTitle}</h3>
                  <a href={siteConfig.links.telegram} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                    {dict.location.tgLink}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] lg:h-[500px] bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 relative group"
          >
            <iframe 
              src={siteConfig.contacts.mapUrl} 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              className="absolute inset-0 grayscale contrast-125 opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-500 -z-10 bg-stone-900">
              <MapPin className="w-12 h-12 mb-4 opacity-50" />
              <span>{dict.location.loading}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
