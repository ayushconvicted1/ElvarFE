"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useLanguage, getText } from "@/context/LanguageContext";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { language, t } = useLanguage();

  // 1. SCROLL CONFIGURATION
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 2. DEFERRED VIDEO PRELOAD — load videos after initial paint for fast page load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (desktopVideoRef.current) desktopVideoRef.current.preload = 'auto';
      if (mobileVideoRef.current) mobileVideoRef.current.preload = 'auto';
    }, 1500);
    return () => clearTimeout(timer);
  }, []);


  // 3. PLAYBACK & RESET LOGIC
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const isMobile = window.innerWidth < 768;
    const activeVideo = isMobile ? mobileVideoRef.current : desktopVideoRef.current;
    
    if (latest > 0.01) {
      if (!isPlaying) {
        setIsPlaying(true);
        activeVideo?.play().catch(() => {});
      }
    } else {
      if (isPlaying || (activeVideo && activeVideo.currentTime > 0)) {
        setIsPlaying(false);
        if (activeVideo) {
          activeVideo.pause();
          activeVideo.currentTime = 0;
        }
      }
    }
  });

  return (
    <div ref={containerRef} className="relative h-[140vh] w-full">
      
      {/* STICKY VIEWPORT */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center pt-32 pb-20 px-4">
        
        {/* --- VIDEO LAYER --- */}
        <div className={`absolute inset-0 z-0 ${isPlaying ? 'bg-black' : ''}`}>
          {/* Desktop video */}
          <video
            ref={desktopVideoRef}
            src="/HeroBanner.mp4"
            className="hidden md:block w-full h-full object-cover"
            playsInline
            muted
            preload="none"
          />
          {/* Mobile video */}
          <video
            ref={mobileVideoRef}
            src="/BannerMob.mp4"
            className="block md:hidden w-full h-full object-cover"
            playsInline
            muted
            preload="none"
          />
        </div>

        {/* --- IMAGE LAYER (Hidden when video plays) --- */}
        <div className={`absolute inset-0 z-[1] pointer-events-none transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
          {/* Desktop placeholder */}
          <Image
            src="/Banner.png"
            alt="Hero Banner"
            fill
            className="hidden md:block object-cover object-top"
            priority
            quality={90}
            sizes="100vw"
          />
          {/* Mobile placeholder */}
          <Image
            src="/BannerMob.png"
            alt="Hero Banner"
            fill
            className="block md:hidden object-cover object-top"
            priority
            quality={90}
            sizes="100vw"
          />
        </div>

        {/* --- GRADIENT OVERLAY --- */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none z-[2]" />

        {/* --- CONTENT --- */}
        <div className={`relative z-10 w-full max-w-7xl h-full flex flex-col justify-end pb-32 pointer-events-none transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
          <div className="text-center">
            <p className="text-[var(--color-paper)] text-xs tracking-[0.2em] uppercase opacity-80">
              {getText(t.hero.scrollToExplore, language)}
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}