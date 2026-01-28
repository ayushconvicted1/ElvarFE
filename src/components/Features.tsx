"use client";
import { useRef } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import { clsx } from "clsx";

const features = [
  {
    title: "Unrivaled Access",
    desc: "Gain entry to exclusive events, private clubs, and sought-after destinations.",
    img: "/Curated1.png",
    hoverImg: "/Curated1Hover.png",
  },
  {
    title: "Curated Access",
    desc: "Every request is met with tailored solutions, anticipating your needs.",
    img: "/Curated2.png",
    hoverImg: "/Curated2Hover.png",
  },
  {
    title: "Discreet & Private",
    desc: "Your privacy is paramount. We operate with the utmost confidentiality.",
    img: "/Curated3.png",
    hoverImg: "/Curated3Hover.png",
  },
];

function FeatureCard({ feature }: { feature: typeof features[0] }) {
  const containerRef = useRef<HTMLDivElement>(null);
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
          alt={feature.title}
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
          alt={feature.title}
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
      <h3 className="font-cormorant text-2xl mb-3 text-ink">
        {feature.title}
      </h3>
      <p className="font-light leading-6 opacity-70">{feature.desc}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section className="pb-24 lg:py-24 lg:px-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-italiano text-4xl lg:text-5xl text-heading mb-4">
          Curated for the few
        </h2>
        <p className="max-w-2xl text-lg mx-auto leading-relaxed opacity-80">
          Elvār Private operates on the principles of absolute discretion,
          unparalleled access, and unwavering reliability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <FeatureCard key={i} feature={f} />
        ))}
      </div>
    </section>
  );
}