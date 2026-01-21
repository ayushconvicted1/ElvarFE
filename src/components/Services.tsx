"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { clsx } from "clsx";

const services = [
  {
    id: "cars",
    label: "Luxury & Sports Cars",
    video: "/Cars.mp4",
    mobileVideo: "/CarsMob.mp4",
  },
  {
    id: "dining",
    label: "Fine Dining & Omakase Experiences",
    video: "/Omakase.mp4",
    mobileVideo: "/OmakaseMob.mp4",
  },
  {
    id: "aviation",
    label: "Private Aviation",
    video: "/PrivateJet.mp4",
    mobileVideo: "/PrivateJetMob.mp4",
  },
  {
    id: "yachts",
    label: "Yachts & Maritime Access",
    video: "/Yacht.mp4",
    mobileVideo: "/YachtMob.mp4",
  },
  {
    id: "living",
    label: "Residences & Global Living",
    video: "/Residences.mp4",
    mobileVideo: "/ResidencesMob.mp4",
  },
  {
    id: "travel",
    label: "Destinations & Travel Design",
    video: "/Destination.mp4",
    mobileVideo: "/DestinationsMob.mp4",
  },
  {
    id: "curated",
    label: "Experiences & Curated Moments",
    video: "/Experiences.mp4",
    mobileVideo: "/ExperiencesMob.mp4",
  },
  {
    id: "assets",
    label: "Assets & Acquisition",
    video: "/Assets.mp4",
    mobileVideo: "/AssetsMob.mp4",
  },
  {
    id: "wellness",
    label: "Wellness & Personal Care",
    video: "/Wellness.mp4",
    mobileVideo: "/WellnessMob.mp4",
  }
];

const ITEM_HEIGHT = 80;
const VIEWPORT_HEIGHT = 600;

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(3);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.3 });
  const currentVideoRef = useRef<HTMLVideoElement | null>(null);

  const getService = (index: number) => {
    const len = services.length;
    return services[((index % len) + len) % len];
  };

  const renderRange = Array.from({ length: 9 }, (_, i) => activeIndex - 4 + i);
  const activeService = getService(activeIndex);

  const setVideoRef = useCallback((el: HTMLVideoElement | null) => {
    currentVideoRef.current = el;
    if (el && isInView) {
      el.currentTime = 0;
      el.load(); 
      el.play().catch((e) => console.log("Auto-play blocked", e));
    }
  }, [isInView]); 

  useEffect(() => {
    const video = currentVideoRef.current;
    if (video) {
      if (isInView) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    }
  }, [isInView]);

  const handleVideoEnd = () => {
    setActiveIndex((prev) => prev + 1);
  };

  return (
    <section 
      ref={containerRef}
      // CHANGED: Reduced padding on mobile (py-12) to save space, keeping py-24 on desktop
      className="w-full py-12 lg:py-24 flex flex-col lg:flex-row gap-12 items-center overflow-hidden"
    >
      
      {/* --- Left Menu --- */}
      <div className="w-full lg:w-1/3 px-6 lg:px-0 lg:pl-[max(1.5rem,calc((100vw-80rem)/2))]">
        <div
          className="relative overflow-hidden"
          style={{ 
            height: VIEWPORT_HEIGHT,
            maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)"
          }}
        >
          <motion.div
            className="absolute w-full left-0"
            initial={false}
            animate={{
              y:
                -(activeIndex * ITEM_HEIGHT) +
                VIEWPORT_HEIGHT / 2 -
                ITEM_HEIGHT / 2,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 25,
              mass: 0.8,
            }}
          >
            {renderRange.map((index) => {
              const service = getService(index);
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  className="absolute font-regular w-full left-0 flex items-center"
                  style={{
                    height: ITEM_HEIGHT,
                    top: index * ITEM_HEIGHT,
                  }}
                >
                  <button
                    onClick={() => setActiveIndex(index)}
                    className={clsx(
                      "group text-left text-lg lg:text-xl tracking-wide transition-all duration-300 flex items-center gap-3 relative w-full",
                      isActive
                        ? "text-gold translate-x-4 scale-105 origin-left"
                        : "text-ink/80 lg:text-ink/40 hover:text-ink/70"
                    )}
                  >
                    <span
                      className={clsx(
                        "transition-all duration-300 absolute -left-4",
                        isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                      )}
                    >
                      <span className="block w-0 h-0 border-t-[5px] border-t-transparent border-l-8 border-l-gold border-b-[5px] border-b-transparent" />
                    </span>

                    <span>
                      {service.label}
                    </span>
                  </button>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* --- Right Video Display --- */}
      {/* CHANGED: 
          1. Removed 'aspect-video' (16:9) from mobile default.
          2. Added 'aspect-[9/16]' for mobile to match vertical video format.
          3. Added 'lg:aspect-auto' to reset this on desktop where we use height.
      */}
      <div className="w-full lg:w-2/3 relative aspect-[9/16] lg:h-[600px] lg:aspect-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full"
          >
            <video
              ref={setVideoRef} 
              muted
              playsInline
              onEnded={handleVideoEnd} 
              className="w-full h-full object-cover contrast-100 mix-blend-multiply"
              style={{
                maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                WebkitMaskComposite: "source-in",
                maskComposite: "intersect"
              }}
            >
              {/* Media query ensures correct video file is loaded */}
              <source src={activeService.mobileVideo} media="(max-width: 1023px)" />
              <source src={activeService.video} />
            </video>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}