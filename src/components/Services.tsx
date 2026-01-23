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

const VIEWPORT_HEIGHT = 600;

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  const [itemHeight, setItemHeight] = useState(80);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.3 });
  const currentVideoRef = useRef<HTMLVideoElement | null>(null);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      setItemHeight(mobile ? 50 : 80); // 50px spacing on mobile, 80px on desktop
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  // Touch scroll handler for mobile
  useEffect(() => {
    if (!isMobile || !menuRef.current) return;

    let touchStartY = 0;
    let touchStartX = 0;
    let touchEndY = 0;
    let touchEndX = 0;
    let hasMoved = false;

    const handleTouchStart = (e: TouchEvent) => {
      // Don't prevent default on touchstart - allows click events to work
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
      hasMoved = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      touchEndY = e.touches[0].clientY;
      touchEndX = e.touches[0].clientX;
      
      const deltaY = Math.abs(touchEndY - touchStartY);
      const deltaX = Math.abs(touchEndX - touchStartX);
      
      // Only prevent default if vertical movement is significant
      // This prevents page scroll during swipe gestures
      if (deltaY > 10 && deltaY > deltaX) {
        e.preventDefault(); // Prevent page scroll only when actively swiping vertically
        hasMoved = true;
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      // Only process swipe if there was actual movement
      if (!hasMoved) {
        // This was a tap, not a swipe - let the onClick handler deal with it
        return;
      }

      const distance = touchStartY - touchEndY;
      const minSwipeDistance = 50; // Minimum distance for a swipe

      if (Math.abs(distance) > minSwipeDistance) {
        if (distance > 0) {
          // Swiped up - go to next
          setActiveIndex((prev) => prev + 1);
        } else {
          // Swiped down - go to previous
          setActiveIndex((prev) => prev - 1);
        }
      }

      hasMoved = false;
    };

    const menu = menuRef.current;
    menu.addEventListener('touchstart', handleTouchStart, { passive: true });
    menu.addEventListener('touchmove', handleTouchMove, { passive: false });
    menu.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      menu.removeEventListener('touchstart', handleTouchStart);
      menu.removeEventListener('touchmove', handleTouchMove);
      menu.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobile]);

  return (
    <section 
      ref={containerRef}
      // CHANGED: Using flex-col-reverse on mobile to put selector below video
      className="w-full py-12 lg:py-24 flex flex-col-reverse lg:flex-row items-center overflow-hidden"
    >
      
      {/* --- Left Menu --- */}
      <div className="w-full lg:w-1/3 px-6 pt-0 lg:px-0 lg:pl-[max(1.5rem,calc((100vw-80rem)/2))]">
        <div
          ref={menuRef}
          className="relative overflow-hidden"
          style={{ 
            height: VIEWPORT_HEIGHT,
            maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          }}
        >
          <motion.div
            className="absolute w-full left-0"
            initial={false}
            animate={{
              y:
                -(activeIndex * itemHeight) +
                VIEWPORT_HEIGHT / 2 -
                itemHeight / 2,
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
                  className="absolute w-full left-0 flex items-center justify-center lg:justify-start"
                  style={{
                    height: itemHeight,
                    top: index * itemHeight,
                  }}
                >
                  <button
                    onClick={() => setActiveIndex(index)}
                    className={clsx(
                      "group text-center lg:text-left text-lg lg:text-xl tracking-wide transition-all duration-300 flex items-center gap-3 relative cursor-pointer touch-manipulation active:scale-95",
                      isActive
                        ? "text-gold translate-x-0 lg:translate-x-4 scale-105 origin-center lg:origin-left"
                        : "text-ink/80 lg:text-ink/40 hover:text-ink/70"
                    )}
                  >
                    <span
                      className={clsx(
                        "transition-all duration-300 absolute -left-4 lg:block",
                        isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                      )}
                    >
                      <span className="block w-0 h-0 border-t-[5px] border-t-transparent border-l-8 border-l-gold border-b-[5px] border-b-transparent" />
                    </span>

                    <span className="text-2xl italic font-medium">
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
          1. Changed mobile aspect from [9/16] to [3/4] to reduce height and crop excess vertical space
          2. object-cover will automatically crop top and bottom portions
          3. Desktop maintains lg:h-[600px] lg:aspect-auto
      */}
      <div className="w-full lg:w-2/3 relative aspect-[3/4] lg:h-[600px] lg:aspect-auto">
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
              className="w-full h-full object-cover object-top aspect-[4/3] lg:object-center contrast-100 mix-blend-multiply"
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