"use client";
import Image from "next/image";
import { useLanguage, getText } from "@/context/LanguageContext";

export default function AboutContent() {
  const { language, t } = useLanguage();

  return (
    <div className="pt-24 pb-16 px-6 md:px-12 max-w-4xl mx-auto flex flex-col items-center">
      {/* Top Image */}
      <div className="w-full max-w-2xl aspect-[4/3] relative mb-12">
        <Image
          src="/AboutImg.png"
          alt="Private Jet"
          fill
          className="object-cover opacity-80"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskComposite: "source-in",
            maskComposite: "intersect"
          }}
        />
      </div>

      {/* "About us" Heading */}
      <h1 className="font-italiano text-heading text-[35px] md:text-6xl text-[var(--color-blue)] mb-8">
        {getText(t.about.heading, language)}
      </h1>

      {/* Content Text */}
      <div className="text-center font-serif text-[var(--color-ink)]/80 leading-relaxed text-lg md:text-xl space-y-6 max-w-2xl">
        {t.about.content.map((paragraph, index) => (
          <p key={index}>
            {getText(paragraph, language)}
          </p>
        ))}
      </div>
    </div>
  );
}
