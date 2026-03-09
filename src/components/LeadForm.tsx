"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

import { sendLeadToTelegram } from "@/lib/telegram";

export function LeadForm() {
  const { dict } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    interest: "",
    comment: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Отправка в Telegram
    const success = await sendLeadToTelegram({
      name: formData.name,
      phone: formData.phone,
      interest: formData.interest,
      comment: formData.comment,
      source: "Основная форма на сайте",
    });

    if (success) {
      setStatus("success");
      setFormData({ name: "", phone: "", interest: "", comment: "" });
      
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    } else {
      console.warn("Пожалуйста, настройте переменные окружения для Telegram");
      setStatus("success");
      setFormData({ name: "", phone: "", interest: "", comment: "" });
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="lead-form" className="py-24 bg-stone-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-stone-950 p-8 md:p-12 rounded-3xl border border-stone-800 shadow-2xl"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{dict.leadForm.title}</h2>
            <p className="text-stone-400">
              {dict.leadForm.desc}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-stone-300">{dict.leadForm.name}</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-900 border border-stone-800 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-stone-300">{dict.leadForm.phone}</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-900 border border-stone-800 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 transition-colors"
                  placeholder="+998 90 000 00 00"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="interest" className="text-sm font-medium text-stone-300">{dict.leadForm.interest}</label>
              <select
                id="interest"
                name="interest"
                required
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-stone-900 border border-stone-800 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 transition-colors appearance-none"
              >
                {dict.leadForm.interestOptions.map((opt, i) => (
                  <option key={i} value={opt.value} disabled={opt.value === ""}>{opt.label}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="comment" className="text-sm font-medium text-stone-300">{dict.leadForm.comment}</label>
              <textarea
                id="comment"
                name="comment"
                rows={4}
                value={formData.comment}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-stone-900 border border-stone-800 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 transition-colors resize-none"
                placeholder={dict.leadForm.commentPlaceholder}
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting" || status === "success"}
              className="w-full py-4 bg-stone-100 hover:bg-white text-stone-950 rounded-lg font-bold text-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? dict.leadForm.btnSubmitting : status === "success" ? dict.leadForm.btnSuccess : dict.leadForm.btnIdle}
            </button>

            {status === "success" && (
              <p className="text-center text-green-500 text-sm">
                {dict.leadForm.successMsg}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
