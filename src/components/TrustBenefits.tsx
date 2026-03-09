"use client";

import { motion } from "framer-motion";
import { benefitIcons } from "@/lib/constants";
import * as Icons from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export function TrustBenefits() {
  const { dict } = useLanguage();

  return (
    <section id="benefits" className="py-24 bg-stone-950">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{dict.benefits.title}</h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            {dict.benefits.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dict.benefits.items.map((benefit, index) => {
            // @ts-ignore - Lucide icon dynamic access
            const Icon = Icons[benefitIcons[index]] || Icons.CheckCircle;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-stone-900 border border-stone-800 p-8 rounded-2xl hover:border-stone-700 transition-colors group"
              >
                <div className="w-12 h-12 bg-stone-800 rounded-xl flex items-center justify-center text-stone-300 mb-6 group-hover:text-white group-hover:bg-stone-700 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-stone-400 leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
