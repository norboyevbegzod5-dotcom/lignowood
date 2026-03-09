"use client";

import { motion } from "framer-motion";
import { Send, FileText } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { useLanguage } from "./LanguageProvider";

export function HeroSection() {
  const { dict } = useLanguage();
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/images/timber1.png')", // Красивые доски в стопке
          backgroundColor: "#291a14" 
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-stone-950/50 via-transparent to-stone-950" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6"
          >
            {dict.hero.title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-300 mb-10 max-w-2xl leading-relaxed"
          >
            {dict.hero.subtitle}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#catalog"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-stone-950 bg-stone-100 hover:bg-white rounded-lg transition-colors"
            >
              {dict.hero.catalogBtn}
            </a>
            <a 
              href={siteConfig.links.telegram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
            >
              <Send className="w-5 h-5" />
              {dict.hero.telegramBtn}
            </a>
            <a 
              href="#lead-form"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-stone-100 border border-stone-700 hover:bg-stone-800 rounded-lg transition-colors"
            >
              <FileText className="w-5 h-5" />
              {dict.hero.priceBtn}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
