"use client";
import { useRef, useEffect, useState } from "react";

export default function MembersAccess({ url }: { url?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
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

  // Deferred preload — start loading video after initial page paint
  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) videoRef.current.preload = 'auto';
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Calculate rootMargin to create a narrow observation zone at the center of the viewport
    // This makes the video start playing when the element reaches the center of the screen
    const updateObserver = () => {
      const viewportHeight = window.innerHeight;
      // Create a margin that leaves only the center 10% of the viewport as the observation zone
      const topBottomMargin = -Math.floor(viewportHeight * 0.45);
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          // 1. Is the element in the center of the viewport?
          if (entry.isIntersecting) {
            // Play video when it reaches the center
            video.play().catch(() => {}); 
          } else {
            // 2. Element is NOT in the center. Where did it go?
            if (entry.boundingClientRect.top > 0) {
              video.pause();
              video.currentTime = 0; // RESET: Door closes so it can open again next time
            }
          }
        },
        { 
          threshold: 0,
          rootMargin: `${topBottomMargin}px 0px ${topBottomMargin}px 0px`
        }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return observer;
    };

    let observer = updateObserver();

    const handleResize = () => {
      observer?.disconnect();
      observer = updateObserver();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="w-full flex justify-center items-center px-4"
    >
      <div className="relative w-full h-auto">
        <video
          ref={videoRef}
          src={url || (isMobile ? "/DoorMob.mp4" : "/Door.mp4")}
          className="w-full h-auto mix-blend-multiply contrast-100"
          muted
          playsInline
          preload="none"
          style={{
            // This creates the fade on all 4 sides (Top, Bottom, Left, Right)
            // matching the Services component style
            maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskComposite: "source-in",
            maskComposite: "intersect"
          }}
        />
      </div>
    </section>
  );
}