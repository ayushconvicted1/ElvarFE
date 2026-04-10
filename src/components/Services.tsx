"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { clsx } from "clsx";
import { useLanguage, getText } from "@/context/LanguageContext";

const serviceVideos = [
  { video: "/Cars.mp4", mobileVideo: "/CarsMob.mp4" },
  { video: "/Omakase.mp4", mobileVideo: "/OmakaseMob.mp4" },
  { video: "/PrivateJet.mp4", mobileVideo: "/PrivateJetMob.mp4" },
  { video: "/Yacht.mp4", mobileVideo: "/YachtMob.mp4" },
  { video: "/Residences.mp4", mobileVideo: "/ResidencesMob.mp4" },
  { video: "/Destination.mp4", mobileVideo: "/DestinationsMob.mp4" },
  { video: "/Experiences.mp4", mobileVideo: "/ExperiencesMob.mp4" },
  { video: "/Assets.mp4", mobileVideo: "/AssetsMob.mp4" },
  { video: "/Wellness.mp4", mobileVideo: "/WellnessMob.mp4" },
];

const VIEWPORT_HEIGHT = 600;

export default function Services() {
  const [[activeIndex, direction], setActiveIndex] = useState([3, 0]);
  const [isMobile, setIsMobile] = useState(false);
  const [itemHeight, setItemHeight] = useState(80);
  const { language, t } = useLanguage();
  
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.3 });
  const currentVideoRef = useRef<HTMLVideoElement | null>(null);

  // Get services with translations
  const services = t.services.items.map((label, index) => ({
    id: `service-${index}`,
    label,
    ...serviceVideos[index],
  }));

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
    setActiveIndex(([prev]) => [prev + 1, 1]);
  };

  const handlePrevious = () => {
    setActiveIndex(([prev]) => [prev - 1, -1]);
  };

  const handleNext = () => {
    setActiveIndex(([prev]) => [prev + 1, 1]);
  };

  // Touch scroll handler for mobile menu (desktop only now)
  useEffect(() => {
    if (isMobile || !menuRef.current) return;

    let touchStartY = 0;
    let touchStartX = 0;
    let touchEndY = 0;
    let touchEndX = 0;
    let hasMoved = false;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
      hasMoved = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      touchEndY = e.touches[0].clientY;
      touchEndX = e.touches[0].clientX;
      
      const deltaY = Math.abs(touchEndY - touchStartY);
      const deltaX = Math.abs(touchEndX - touchStartX);
      
      if (deltaY > 10 && deltaY > deltaX) {
        e.preventDefault();
        hasMoved = true;
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!hasMoved) {
        return;
      }

      const distance = touchStartY - touchEndY;
      const minSwipeDistance = 50;

      if (Math.abs(distance) > minSwipeDistance) {
        if (distance > 0) {
          setActiveIndex(([prev]) => [prev + 1, 1]);
        } else {
          setActiveIndex(([prev]) => [prev - 1, -1]);
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

  // Horizontal swipe handler for mobile video
  useEffect(() => {
    if (!isMobile || !videoContainerRef.current) return;

    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;
    let hasMoved = false;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      hasMoved = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      touchEndX = e.touches[0].clientX;
      touchEndY = e.touches[0].clientY;
      
      const deltaX = Math.abs(touchEndX - touchStartX);
      const deltaY = Math.abs(touchEndY - touchStartY);
      
      // Only prevent default if horizontal movement is significant
      if (deltaX > 10 && deltaX > deltaY) {
        e.preventDefault();
        hasMoved = true;
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!hasMoved) {
        return;
      }

      const distance = touchStartX - touchEndX;
      const minSwipeDistance = 50;

      if (Math.abs(distance) > minSwipeDistance) {
        if (distance > 0) {
          // Swiped left - go to next
          setActiveIndex(([prev]) => [prev + 1, 1]);
        } else {
          // Swiped right - go to previous
          setActiveIndex(([prev]) => [prev - 1, -1]);
        }
      }

      hasMoved = false;
    };

    const videoContainer = videoContainerRef.current;
    videoContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
    videoContainer.addEventListener('touchmove', handleTouchMove, { passive: false });
    videoContainer.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      videoContainer.removeEventListener('touchstart', handleTouchStart);
      videoContainer.removeEventListener('touchmove', handleTouchMove);
      videoContainer.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobile]);

  return (
    <section 
      ref={containerRef}
      className="w-full py-12 lg:py-24 flex flex-col lg:flex-row items-center overflow-hidden"
    >
      
      {/* --- Mobile Header (Horizontal Carousel) --- */}
      {isMobile && (
        <div className="w-full py-6 px-4">
          {/* Header with Arrows and Carousel */}
          <div 
            ref={(el) => {
              if (!el) return;
              
              let touchStartX = 0;
              let touchStartY = 0;
              let touchEndX = 0;
              let touchEndY = 0;
              let hasMoved = false;

              const handleTouchStart = (e: TouchEvent) => {
                touchStartX = e.touches[0].clientX;
                touchStartY = e.touches[0].clientY;
                hasMoved = false;
              };

              const handleTouchMove = (e: TouchEvent) => {
                touchEndX = e.touches[0].clientX;
                touchEndY = e.touches[0].clientY;
                
                const deltaX = Math.abs(touchEndX - touchStartX);
                const deltaY = Math.abs(touchEndY - touchStartY);
                
                if (deltaX > 10 && deltaX > deltaY) {
                  e.preventDefault();
                  hasMoved = true;
                }
              };

              const handleTouchEnd = (e: TouchEvent) => {
                if (!hasMoved) return;

                const distance = touchStartX - touchEndX;
                const minSwipeDistance = 50;

                if (Math.abs(distance) > minSwipeDistance) {
                  if (distance > 0) {
                    handleNext();
                  } else {
                    handlePrevious();
                  }
                }

                hasMoved = false;
              };

              el.addEventListener('touchstart', handleTouchStart, { passive: true });
              el.addEventListener('touchmove', handleTouchMove, { passive: false });
              el.addEventListener('touchend', handleTouchEnd, { passive: true });
            }}
            className="flex items-center justify-center gap-2"
          >
            {/* Horizontal Carousel */}
            <div className="relative flex-1 h-16 overflow-hidden">
              <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={{
                    enter: (direction: number) => ({
                      x: direction > 0 ? 100 : -100,
                      opacity: 0
                    }),
                    center: {
                      x: 0,
                      opacity: 1
                    },
                    exit: (direction: number) => ({
                      x: direction < 0 ? 100 : -100,
                      opacity: 0
                    })
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {/* Current Service - Center (Prominent) */}
                  <div className="flex justify-center items-center">
                    <div className="text-[20px] md:text-[24px] font-medium text-[#14403A] font-cormorant text-center uppercase tracking-wide">
                      {getText(activeService.label, language)}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      )}

      {/* --- Desktop Menu (Hidden on Mobile) --- */}
      <div className="hidden lg:block w-full lg:w-1/3 px-6 pt-0 lg:px-0 lg:pl-[max(1.5rem,calc((100vw-80rem)/2))]">
        <div
          ref={menuRef}
          className="relative overflow-hidden"
          style={{ 
            height: VIEWPORT_HEIGHT,
            maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to right, black 85%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to right, black 85%, transparent 100%)",
            WebkitMaskComposite: "source-in",
            maskComposite: "intersect"
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
                  className="absolute w-full left-0 flex items-center justify-start"
                  style={{
                    height: itemHeight,
                    top: index * itemHeight,
                  }}
                >
                  <button
                    onClick={() => setActiveIndex(([prev]) => [index, index > prev ? 1 : -1])}
                    className={clsx(
                      "group text-left text-xl tracking-wide transition-all duration-300 flex items-center gap-3 relative cursor-pointer whitespace-nowrap",
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

                    <span className="text-lg md:text-xl font-cormorant uppercase tracking-wide">
                      {getText(service.label, language)}
                    </span>
                  </button>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* --- Video Display --- */}
      <div 
        ref={videoContainerRef}
        className="w-full lg:w-2/3 relative aspect-[3/4] lg:h-[600px] lg:aspect-auto"
      >
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
              preload="none"
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

      {/* Pagination Dots - Mobile Only, Below Video */}
      {isMobile && (
        <div className="flex justify-center items-center gap-2 mt-6 w-full">
          {services.map((service, index) => {
            const normalizedActiveIndex = ((activeIndex % services.length) + services.length) % services.length;
            const isActive = index === normalizedActiveIndex;
            
            return (
              <button
                key={service.id}
                onClick={() => setActiveIndex(([prev]) => [index, index > (prev % services.length) ? 1 : -1])}
                className={clsx(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  isActive 
                    ? "bg-[var(--color-gold)]" 
                    : "bg-ink/30 hover:bg-ink/50"
                )}
                aria-label={`Go to ${getText(service.label, language)}`}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}