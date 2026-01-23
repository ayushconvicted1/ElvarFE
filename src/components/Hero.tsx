"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 1. SCROLL CONFIGURATION
  // We track the scroll progress within this container.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 2. FADE LOGIC
  // Since the container is shorter now, we fade the image out very quickly (0 to 15% of the scroll track)
  const imageOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  
  // 3. PLAYBACK & RESET LOGIC
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // If user scrolls down past 1%
    if (latest > 0.01) {
      if (!isPlaying) {
        setIsPlaying(true);
        videoRef.current?.play().catch(() => {});
      }
    } 
    // If user scrolls back to the very top (<= 1%)
    else {
      if (isPlaying || (videoRef.current && videoRef.current.currentTime > 0)) {
        setIsPlaying(false);
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0; // RESET VIDEO TO START
        }
      }
    }
  });

  return (
    // HEIGHT CHANGE:
    // Reduced from h-[400vh] to h-[140vh]. 
    // This creates a much shorter "sticky" duration (approx 5-10% feel) before the page moves on.
    <div ref={containerRef} className="relative h-[140vh] w-full">
      
      {/* STICKY VIEWPORT */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center pt-32 pb-20 px-4">
        
        {/* --- VIDEO LAYER --- */}
        <div className="absolute inset-0 z-0 bg-black">
          <video
            ref={videoRef}
            src={isMobile ? "/BannerMob.mp4" : "/HeroBanner.mp4"}
            className="w-full h-full object-cover"
            playsInline
            muted
            // loop={false} // Default is false, but explicitly removed 'loop' attribute here
            preload="auto"
          />
        </div>

        {/* --- IMAGE LAYER (Fades out) --- */}
        <motion.div 
          style={{ opacity: imageOpacity }}
          className="absolute inset-0 z-[1] pointer-events-none"
        >
          <Image
            src={isMobile ? "/BannerMob.png" : "/Banner.png"}
            alt="Hero Banner"
            fill
            className="object-cover object-top"
            priority
            quality={90}
            sizes="100vw"
          />
        </motion.div>

        {/* --- GRADIENT OVERLAY --- */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none z-[2]" />

        {/* --- CONTENT --- */}
        <motion.div 
           style={{ opacity: imageOpacity }} // Text fades out with image so video is clear
           className="relative z-10 w-full max-w-7xl h-full flex flex-col justify-end pb-32 pointer-events-none"
        >
           <div className="text-center">
              <p className="text-[var(--color-paper)] text-xs tracking-[0.2em] uppercase opacity-80 mix-blend-overlay">
                Scroll to Explore
              </p>
           </div>
        </motion.div>
        
      </div>
    </div>
  );
}