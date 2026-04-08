"use client";
import { useState, useEffect } from "react";
import { useLanguage, getText } from "@/context/LanguageContext";

export default function OurLocations() {
  const [open, setOpen] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { language, t } = useLanguage();

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="py-12 px-6 mx-auto">
      {/* FAQ */}
      <div className="mx-auto">
        <h2 className="font-omega text-[35px] text-center text-[#14403A] mb-6">
          {getText(t.ourLocations.heading, language)}
        </h2>
        <p className="opacity-70 text-lg max-w-xl mx-auto text-center">
          {getText(t.ourLocations.description, language)}
        </p>
        <div className="w-full h-full flex justify-center mt-12">
          <div className="w-full max-w-5xl aspect-video md:aspect-auto">
            <video
              src={isMobile ? "/MapMob.mp4" : "/Map.mp4"}
              className="w-full h-full object-cover md:object-contain"
              autoPlay
              loop
              muted
              playsInline
              style={{
                // Fade effect on all edges to blend into background
                maskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%), linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
                WebkitMaskComposite: "source-in",
                maskComposite: "intersect"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
