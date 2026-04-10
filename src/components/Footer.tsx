"use client";
import Image from "next/image";
import { useLanguage, getText } from "@/context/LanguageContext";
import HorseLogo from "./HorseLogo";

export default function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="w-full pt-12 pb-0 md:pt-32 relative z-10 overflow-hidden">
      {/* Footer Background Sketch - Desktop Only */}
      <div className="hidden md:block absolute right-0 bottom-[72px] w-[800px] h-[650px] z-0 pointer-events-none opacity-90 mix-blend-multiply flex items-end">
        <Image
          src="/FooterImg.png"
          alt="Social Sketch"
          fill
          className="object-contain object-right-bottom"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-6 md:px-12">
        {/* MOBILE LAYOUT */}
        <div className="block md:hidden">
          {/* Top Horizontal Line */}
          <div className="w-full h-px bg-[var(--color-ink)]/20 mb-12"></div>

          {/* Links in one row with separators */}
          <div className="flex items-center justify-center gap-4 mb-16 flex-wrap">
            <a href="/terms" className="font-serif text-[var(--color-ink)]/80 hover:text-[var(--color-gold)] transition-colors text-xl tracking-wide">
              {getText(t.footer.terms, language)}
            </a>
            <span className="text-[var(--color-ink)]/40 text-xl">|</span>
            <a href="/privacy" className="font-serif text-[var(--color-ink)]/80 hover:text-[var(--color-gold)] transition-colors text-xl tracking-wide">
              {getText(t.footer.privacyPolicy, language)}
            </a>
            <span className="text-[var(--color-ink)]/40 text-xl">|</span>
            <a href="/nda" className="font-serif text-[var(--color-ink)]/80 hover:text-[var(--color-gold)] transition-colors text-xl tracking-wide">
              {getText(t.footer.nda, language)}
            </a>
            <span className="text-[var(--color-ink)]/40 text-xl">|</span>
            <a href="/compliance" className="font-serif text-[var(--color-ink)]/80 hover:text-[var(--color-gold)] transition-colors text-xl tracking-wide">
              {getText(t.footer.compliance, language)}
            </a>
          </div>

          {/* No Social Media Message */}
          <div className="text-center mb-16 px-4 relative z-10">
            <p className="font-serif text-[var(--color-ink)]/60 text-lg leading-relaxed italic">
              Enclaire is built on trusted relationships and operates through an exclusive private referral network.
            </p>
            <p className="font-serif text-[var(--color-ink)]/60 text-lg leading-relaxed italic mt-1">
              As part of this philosophy, we are not present on social media.
            </p>
          </div>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden md:block">
          {/* Logo */}
          <div className="mb-4">
            <HorseLogo className="w-40 h-auto text-[#c49a4e]" />
          </div>

          {/* Links in horizontal row */}
          <div className="flex items-center gap-4 mb-16">
            <a href="/terms" className="font-serif text-[var(--color-ink)]/80 hover:text-[var(--color-gold)] transition-colors text-base tracking-wide">
              {getText(t.footer.terms, language)}
            </a>
            <span className="text-[var(--color-ink)]/40 text-base">|</span>
            <a href="/privacy" className="font-serif text-[var(--color-ink)]/80 hover:text-[var(--color-gold)] transition-colors text-base tracking-wide">
              {getText(t.footer.privacyPolicy, language)}
            </a>
            <span className="text-[var(--color-ink)]/40 text-base">|</span>
            <a href="/nda" className="font-serif text-[var(--color-ink)]/80 hover:text-[var(--color-gold)] transition-colors text-base tracking-wide">
              {getText(t.footer.nda, language)}
            </a>
            <span className="text-[var(--color-ink)]/40 text-base">|</span>
            <a href="/compliance" className="font-serif text-[var(--color-ink)]/80 hover:text-[var(--color-gold)] transition-colors text-base tracking-wide">
              {getText(t.footer.compliance, language)}
            </a>
          </div>

          {/* No Social Media Message */}
          <div className="mb-24 max-w-md">
            <p className="font-serif text-[var(--color-ink)]/70 text-base leading-relaxed italic">
              Enclaire is built on trusted relationships and operates through an exclusive private referral network.
              As part of this philosophy, we are not present on social media.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Image Mobile */}
      <div className="block md:hidden relative w-full h-[250px] pointer-events-none opacity-90 mix-blend-multiply z-0 overflow-hidden">
        <div className="absolute right-0 bottom-0 w-[182%] h-full">
          <Image
            src="/FooterImg.png"
            alt="Social Sketch"
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full bg-[#14403A] py-6 z-20 relative">
        <p className="max-w-7xl mx-auto px-6 md:px-12 font-serif text-white text-base md:text-lg tracking-widest text-center md:text-left">
          {getText(t.footer.copyright, language)}
        </p>
      </div>
    </footer>
  );
}
