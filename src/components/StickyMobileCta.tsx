"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/constants";
import { Send } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

export function StickyMobileCta() {
  const [isVisible, setIsVisible] = useState(false);
  const { dict } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Показывать кнопку после первого экрана
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 z-40 md:hidden"
        >
          <a
            href={siteConfig.links.telegram}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl shadow-lg font-medium text-lg transition-colors"
          >
            <Send className="w-5 h-5" />
            <span>{dict.mobileCta}</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
