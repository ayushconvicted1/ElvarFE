"use client";
import { useLanguage, getText } from "@/context/LanguageContext";

interface LegalSection {
  title: { en: string; fr: string };
  content: { en: string; fr: string };
}

interface LegalPageContentProps {
  pageKey: 'terms' | 'privacy' | 'nda' | 'compliance';
}

export default function LegalPageContent({ pageKey }: LegalPageContentProps) {
  const { language, t } = useLanguage();
  const legalContent = t.legal[pageKey];

  return (
    <div className="pt-24 pb-16 px-6 md:px-12 max-w-4xl mx-auto">
      {/* Heading */}
      <h1 className="font-omega text-[#14403A] text-[24px] md:text-[28px] md:text-5xl text-center mb-4">
        {getText(legalContent.heading, language)}
      </h1>

      {/* Last Updated */}
      <p className="text-center font-serif text-[var(--color-ink)]/50 text-sm mb-12">
        {getText(t.legal.lastUpdated, language)}: {getText(t.legal.effectiveDate, language)}
      </p>

      {/* Introduction */}
      <p className="font-serif text-[var(--color-ink)]/80 leading-relaxed text-base md:text-lg mb-12 text-center max-w-3xl mx-auto">
        {getText(legalContent.intro, language)}
      </p>

      {/* Sections */}
      <div className="space-y-10">
        {legalContent.sections.map((section: LegalSection, index: number) => (
          <div key={index} className="space-y-4">
            <h2 className="font-omega text-lg md:text-xl tracking-wide text-[#14403A]">
              {getText(section.title, language)}
            </h2>
            <p className="font-serif text-[var(--color-ink)]/70 leading-relaxed text-base">
              {getText(section.content, language)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
