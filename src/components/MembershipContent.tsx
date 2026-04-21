"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage, getText } from "@/context/LanguageContext";

export default function MembershipContent() {
  const [openTier, setOpenTier] = useState<number | null>(null);
  const { language, t } = useLanguage();

  const toggleTier = (index: number) => {
    setOpenTier(openTier === index ? null : index);
  };

  return (
    <div className="pt-24 pb-16 px-6 max-w-2xl mx-auto">
      {/* Heading */}
      <h1 className="font-omega text-[#14403A] text-[24px] md:text-[28px] md:text-5xl text-center mb-8">
        {getText(t.membership.heading, language)}
      </h1>

      {/* Description with Background Image */}
      <div className="relative mb-12">
        {/* Background Image - behind description only */}
        <div className="absolute -top-16 -bottom-16 -left-8 -right-8 flex justify-center items-center pointer-events-none overflow-visible">
          <div className="relative w-full h-full opacity-25 mix-blend-multiply">
            <Image
              src="/MembershipBG.png"
              alt=""
              fill
              className="object-contain object-center"
              priority
            />
          </div>
        </div>
        
        {/* White gradient overlay for better text readability */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 70%)'
          }}
        />
        
        <p className="text-center font-serif text-[var(--color-ink)]/80 leading-relaxed text-base md:text-lg max-w-xl mx-auto relative z-10">
          {getText(t.membership.description, language)}
        </p>
      </div>

      {/* Accordion Tiers */}
      <div className="space-y-4 mb-12">
        {t.membership.tiers.map((tier, index) => (
          <div key={index}>
            {/* Tier Header */}
            <button
              onClick={() => toggleTier(index)}
              className="w-full py-4 flex items-center gap-3 text-left group transition-colors"
            >
              <motion.div
                animate={{ rotate: openTier === index ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                <ChevronRight 
                  className="w-4 h-4 text-[var(--color-gold)]" 
                  strokeWidth={2}
                />
              </motion.div>
              <span className="font-brilliant-cut text-sm md:text-base tracking-[0.15em] text-[var(--color-gold)] group-hover:text-[var(--color-ink)] transition-colors">
                {getText(tier.name, language)}
              </span>
            </button>

            {/* Tier Content */}
            <AnimatePresence>
              {openTier === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pl-7 pb-6">
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className="font-serif text-[var(--color-ink)]/70 leading-relaxed flex gap-2"
                        >
                          <span className="text-[var(--color-gold)] flex-shrink-0 leading-relaxed">•</span>
                          <span>{getText(feature, language)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Request Invitation Button */}
      <div className="flex justify-center">
        <Link 
          href="/#contact-form"
          className="font-omega bg-[#14403A] text-[#C49A4E] px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-[#14403A]/90 transition-colors inline-block"
        >
          {getText(t.membership.requestInvitation, language)}
        </Link>
      </div>
    </div>
  );
}


