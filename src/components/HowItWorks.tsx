"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

export function HowItWorks() {
  const { dict } = useLanguage();

  return (
    <section className="py-24 bg-stone-950">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{dict.howItWorks.title}</h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            {dict.howItWorks.desc}
          </p>
        </motion.div>

        <div className="relative">
          {/* Линия, соединяющая шаги (только для desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-stone-800 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {dict.howItWorks.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-stone-900 border-4 border-stone-950 shadow-[0_0_0_2px_rgba(41,26,20,1)] flex items-center justify-center text-2xl font-bold text-white mb-6 group-hover:bg-stone-800 transition-colors">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-stone-400 leading-relaxed max-w-xs">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
