"use client";
import { useRef } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import { clsx } from "clsx";
import { useLanguage, getText } from "@/context/LanguageContext";

function FeatureCard({ feature, index }: { feature: { title: { en: string; fr: string }; desc: { en: string; fr: string }; img: string; hoverImg: string }; index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  // Detect if card is in view (triggers when element reaches center of screen)
  const isInView = useInView(containerRef, { margin: "-50% 0px -50% 0px", once: false });

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center text-center p-6 border border-ink/20"
    >
      <div className="relative w-full aspect-square mb-6 border border-[#96663A] overflow-hidden group">
        
        {/* --- BASE IMAGE --- */}
        {/* Mobile Logic: Starts visible (opacity-100). Fades OUT (opacity-0) when scrolled into view.
            Desktop Logic (md:): Always stays visible (opacity-100) initially. Fades OUT only on HOVER. */}
        <Image
          src={feature.img}
          alt={getText(feature.title, language)}
          fill
          className={clsx(
            "object-cover grayscale mix-blend-multiply transition-all duration-1000",
            // Mobile: If in view -> fade out. Else -> visible.
            // Desktop (md): Force visibility (ignore scroll), let hover handle it.
            isInView ? "opacity-0 md:opacity-100" : "opacity-100",
            "md:group-hover:opacity-0"
          )}
        />

        {/* --- HOVER IMAGE --- */}
        {/* Mobile Logic: Starts hidden (opacity-0). Fades IN (opacity-100) when scrolled into view.
            Desktop Logic (md:): Always starts hidden (opacity-0). Fades IN only on HOVER. */}
        <Image
          src={feature.hoverImg}
          alt={getText(feature.title, language)}
          fill
          className={clsx(
            "object-cover mix-blend-multiply transition-all duration-1000",
            // Mobile: If in view -> fade in. Else -> hidden.
            // Desktop (md): Force hidden (ignore scroll), let hover handle it.
            isInView ? "opacity-100 md:opacity-0" : "opacity-0",
            "md:group-hover:opacity-100"
          )}
        />
      </div>
      <h3 className="font-cormorant text-gold text-2xl mb-3 text-ink">
        {getText(feature.title, language)}
      </h3>
      <p className="font-light leading-6 opacity-70">{getText(feature.desc, language)}</p>
    </div>
  );
}

export default function Features() {
  const { language, t } = useLanguage();

  const features = t.features.items.map((item, index) => ({
    title: item.title,
    desc: item.desc,
    img: `/Curated${index + 1}.png`,
    hoverImg: `/Curated${index + 1}Hover.png`,
  }));

  return (
    <section className="pb-24 lg:py-24 lg:px-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-italiano text-[35px] text-heading mb-4">
          {getText(t.features.heading, language)}
        </h2>
        <p className="max-w-2xl text-lg mx-auto leading-relaxed opacity-80">
          {getText(t.features.description, language)}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <FeatureCard key={i} feature={f} index={i} />
        ))}
      </div>
    </section>
  );
}