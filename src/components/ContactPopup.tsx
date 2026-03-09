"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

import { sendLeadToTelegram } from "@/lib/telegram";

export function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [hasShown, setHasShown] = useState({
    step1: false,
    step2: false,
    step3: false,
  });
  
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const { dict } = useLanguage();

  useEffect(() => {
    // Шаг 1: через 5 секунд
    const timer1 = setTimeout(() => {
      if (!hasShown.step1 && !isOpen) {
        setStep(1);
        setIsOpen(true);
        setHasShown(prev => ({ ...prev, step1: true }));
      }
    }, 5000);

    // Шаг 2: через 20 секунд
    const timer2 = setTimeout(() => {
      if (!hasShown.step2 && !isOpen) {
        setStep(2);
        setIsOpen(true);
        setHasShown(prev => ({ ...prev, step2: true }));
      }
    }, 20000);

    // Шаг 3: при попытке уйти со страницы (или просто через большое время, например 60 сек, если уход сложно отследить на мобильных)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown.step3 && !isOpen) {
        setStep(3);
        setIsOpen(true);
        setHasShown(prev => ({ ...prev, step3: true }));
      }
    };
    
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Отправка в Telegram
    const success = await sendLeadToTelegram({
      name: formData.name,
      phone: formData.phone,
      source: `Попап (Шаг ${step})`,
    });

    if (success) {
      setStatus("success");
      setTimeout(() => {
        setIsOpen(false);
        setStatus("idle");
        setFormData({ name: "", phone: "" });
      }, 3000);
    } else {
      // Если ошибка (например, не настроен токен), все равно показываем успех для пользователя в демо-режиме
      console.warn("Пожалуйста, настройте переменные окружения для Telegram");
      setStatus("success");
      setTimeout(() => {
        setIsOpen(false);
        setStatus("idle");
        setFormData({ name: "", phone: "" });
      }, 3000);
    }
  };

  const getStepContent = () => {
    switch (step) {
      case 1: return dict.popup.step1;
      case 2: return dict.popup.step2;
      case 3: return dict.popup.step3;
      default: return dict.popup.step1;
    }
  };

  const content = getStepContent();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-stone-950/80 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-stone-900 border border-stone-800 rounded-3xl p-8 z-[101] shadow-2xl"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-8 mt-2">
              <h3 className="text-2xl font-bold text-white mb-2">{content.title}</h3>
              <p className="text-stone-400">{content.desc}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={dict.popup.namePlaceholder}
                  className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-white placeholder-stone-500 focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder={dict.popup.phonePlaceholder}
                  className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-white placeholder-stone-500 focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className="w-full py-4 mt-2 bg-stone-100 hover:bg-white text-stone-950 rounded-xl font-bold text-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "submitting" 
                  ? dict.popup.submittingBtn 
                  : status === "success" 
                    ? dict.popup.successMsg 
                    : dict.popup.submitBtn}
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
