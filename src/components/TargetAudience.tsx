"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export function TargetAudience() {
  const { dict } = useLanguage();

  return (
    <section className="py-24 bg-stone-900 border-y border-stone-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{dict.audience.title}</h2>
            <p className="text-stone-400 mb-8 text-lg leading-relaxed">
              {dict.audience.desc}
            </p>
            
            <ul className="space-y-4">
              {dict.audience.items.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-stone-300 text-lg"
                >
                  <CheckCircle2 className="w-6 h-6 text-stone-500 shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full relative"
          >
            {/* Декоративное изображение */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: "url('/images/timber5.png')", // Мастер работает с деревом
                  backgroundColor: "#4a332a" 
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-stone-950/60 to-transparent" />
            </div>
            
            {/* Плавающая карточка */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -left-8 md:-left-12 bg-stone-950 p-6 rounded-xl border border-stone-800 shadow-xl max-w-xs"
            >
              <div className="text-4xl font-bold text-white mb-2">{dict.audience.statsTitle}</div>
              <div className="text-stone-400 text-sm">{dict.audience.statsDesc}</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
