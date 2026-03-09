"use client";

import { motion } from "framer-motion";
import { siteConfig, productImages } from "@/lib/constants";
import { Send, FileSearch } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export function ProductCatalog() {
  const { dict } = useLanguage();

  return (
    <section id="catalog" className="py-24 bg-stone-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{dict.catalog.title}</h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            {dict.catalog.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dict.catalog.items.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-stone-950 rounded-2xl overflow-hidden border border-stone-800 hover:border-stone-700 transition-all flex flex-col sm:flex-row"
            >
              {/* Изображение */}
              <div className="sm:w-2/5 h-64 sm:h-auto relative overflow-hidden bg-stone-800 shrink-0">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${productImages[index]})` }}
                />
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 to-transparent sm:hidden" />
              </div>

              {/* Контент */}
              <div className="p-6 sm:p-8 flex flex-col justify-between grow">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                  <div className="inline-block px-3 py-1 bg-stone-800 text-stone-300 text-sm rounded-full mb-4">
                    {product.sizes}
                  </div>
                  <p className="text-stone-400 mb-6">
                    {product.desc}
                  </p>
                </div>

                <div className="flex flex-col gap-3 mt-auto">
                  <a 
                    href="#lead-form"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-stone-100 hover:bg-white text-stone-950 rounded-lg font-medium transition-colors"
                  >
                    <FileSearch className="w-4 h-4" />
                    {dict.catalog.checkAvailability}
                  </a>
                  <a 
                    href={siteConfig.links.telegram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-stone-800 hover:bg-stone-700 text-stone-100 rounded-lg font-medium transition-colors"
                  >
                    <Send className="w-4 h-4 text-blue-400" />
                    {dict.catalog.viewTelegram}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
