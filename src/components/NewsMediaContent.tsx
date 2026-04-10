"use client";
import { useLanguage, getText } from "@/context/LanguageContext";

export default function NewsMediaContent() {
  const { language, t } = useLanguage();

  return (
    <main className="flex-grow flex flex-col items-center justify-center pt-20 md:pt-0 -mt-20 px-6">
      <div className="text-center max-w-2xl mx-auto space-y-6">
        <h1 className="font-omega text-[24px] md:text-[28px] text-[#14403A]">
          {getText(t.newsMedia.heading, language)}
        </h1>
        <p className="font-serif text-lg text-[var(--color-ink)]/80">
          {getText(t.newsMedia.comingSoon, language)}
        </p>
      </div>
    </main>
  );
}
