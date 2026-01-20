"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { clsx } from "clsx";

const services = [
  {
    id: "cars",
    label: "Luxury & Sports Cars",
    video: "/Cars.mp4",
  },
  {
    id: "dining",
    label: "Fine Dining & Omakase Experiences",
    video: "/Omakase.mp4",
  },
  {
    id: "aviation",
    label: "Private Aviation",
    video: "/PrivateJet.mp4",
  },
  {
    id: "yachts",
    label: "Yachts & Maritime Access",
    video: "/Yacht.mp4",
  },
  {
    id: "living",
    label: "Residences & Global Living",
    video: "/Residences.mp4",
  },
  {
    id: "travel",
    label: "Destinations & Travel Design",
    video: "/Destination.mp4",
  },
  {
    id: "curated",
    label: "Experiences & Curated Moments",
    video: "/Experiences.mp4",
  },
  {
    id: "assets",
    label: "Assets & Acquisition",
    video: "/Assets.mp4",
  },
  {
    id: "wellness",
    label: "Wellness & Personal Care",
    video: "/Wellness.mp4",
  }
];

const ITEM_HEIGHT = 80;
const VIEWPORT_HEIGHT = 600;

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(3);
  
  // 1. Ref for the section container
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 2. Detect if the section is visible
  const isInView = useInView(containerRef, { amount: 0.3 });

  // 3. Mutable ref to hold the current video element (for pausing via Scroll Effect)
  const currentVideoRef = useRef<HTMLVideoElement | null>(null);

  const getService = (index: number) => {
    const len = services.length;
    return services[((index % len) + len) % len];
  };

  const renderRange = Array.from({ length: 9 }, (_, i) => activeIndex - 4 + i);
  const activeService = getService(activeIndex);

  // 4. Callback Ref: Triggers immediately when the NEW video mounts
  const setVideoRef = useCallback((el: HTMLVideoElement | null) => {
    currentVideoRef.current = el;
    if (el && isInView) {
      el.currentTime = 0;
      el.play().catch((e) => console.log("Auto-play blocked", e));
    }
  }, [isInView]); // Re-run logic if visibility changes while mounting

  // 5. Effect: Handle Play/Pause purely based on Scrolling (Visibility)
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

  // 6. Handler: Auto-switch to next item when video ends
  const handleVideoEnd = () => {
    setActiveIndex((prev) => prev + 1);
  };

  return (
    <section 
      ref={containerRef}
      className="w-full py-24 flex flex-col lg:flex-row gap-12 items-center overflow-hidden"
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
                  className="absolute w-full left-0 flex items-center"
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
                        : "text-ink/40 hover:text-ink/70"
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
      <div className="w-full lg:w-2/3 relative aspect-video lg:h-[600px] lg:aspect-auto">
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
              ref={setVideoRef} // Using Callback Ref to trigger play on mount
              src={activeService.video}
              muted
              playsInline
              onEnded={handleVideoEnd} // Trigger auto-switch
              // Removed 'loop' to allow onEnded to fire
              className="w-full h-full object-cover contrast-100 mix-blend-multiply"
              style={{
                maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                WebkitMaskComposite: "source-in",
                maskComposite: "intersect"
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}