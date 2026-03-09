import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Locale, dictionaries } from "@/lib/dictionaries";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-sans" });

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = dictionaries[locale] || dictionaries.ru;
  
  return {
    title: dict.meta.name,
    description: dict.meta.description,
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const locale = lang as Locale;

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <LanguageProvider lang={locale}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
