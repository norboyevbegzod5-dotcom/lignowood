"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { useRouter, usePathname } from "next/navigation";

export function LanguageSwitcher() {
  const { lang } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    if (!pathname) return;
    const segments = pathname.split('/');
    segments[1] = newLang; // Because pathname starts with '/', segments[0] is empty, segments[1] is the locale
    router.push(segments.join('/') || '/');
  };

  return (
    <select 
      value={lang} 
      onChange={handleLangChange}
      className="bg-transparent text-stone-300 hover:text-white text-sm font-medium focus:outline-none cursor-pointer px-1 py-1"
      aria-label="Select language"
    >
      <option value="ru" className="bg-stone-900 text-stone-300">RU</option>
      <option value="en" className="bg-stone-900 text-stone-300">EN</option>
      <option value="uz" className="bg-stone-900 text-stone-300">UZ</option>
    </select>
  );
}
