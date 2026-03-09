"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export function Gallery() {
  const { dict } = useLanguage();
  const galleryImages = [
    "/images/timber1.png", // Склад досок/штабеля
    "https://images.unsplash.com/photo-1542840410-3092f99611a3?q=80&w=2070&auto=format&fit=crop", // Деревянные спилы/торцы
    "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop", // Красивая древесная текстура
    "/images/timber4.png", // Мастерская с деревом
  ];

  return (
    <section id="gallery" className="py-24 bg-stone-950">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{dict.gallery.title}</h2>
            <p className="text-stone-400">
              {dict.gallery.desc}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a 
              href="#location"
              className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-stone-700 text-stone-100 rounded-lg transition-all"
            >
              <MapPin className="w-4 h-4" />
              {dict.gallery.viewAddress}
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl bg-stone-900 group ${
                index === 0 || index === 3 ? "lg:col-span-2 aspect-video lg:aspect-auto" : "aspect-square lg:aspect-auto"
              } min-h-[300px]`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url(${src})`, backgroundColor: "#291a14" }}
              />
              <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
