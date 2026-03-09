"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";
import { Send } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export function TelegramCta() {
  const { dict } = useLanguage();

  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-blue-700/30 p-10 md:p-16 rounded-3xl border border-blue-500/50 shadow-2xl relative overflow-hidden">
          {/* Декоративные элементы фона */}
          <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-64 h-64 bg-blue-800 rounded-full blur-3xl opacity-50" />

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl relative z-10"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {dict.telegramCta.title}
            </h2>
            <p className="text-blue-100 text-lg md:text-xl">
              {dict.telegramCta.desc}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="shrink-0 relative z-10 w-full md:w-auto"
          >
            <a 
              href={siteConfig.links.telegram}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-3 px-8 py-5 bg-white text-blue-600 hover:bg-stone-50 rounded-xl font-bold text-lg transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] w-full md:w-auto"
            >
              <Send className="w-6 h-6 group-hover:scale-110 transition-transform" />
              {dict.telegramCta.btn}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
