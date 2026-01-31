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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // 1. Is the element visible?
        if (entry.isIntersecting) {
          // Play video if it's paused
          video.play().catch(() => {}); 
        } else {
          // 2. Element is NOT visible. Where did it go?
          if (entry.boundingClientRect.top > 0) {
            video.pause();
            video.currentTime = 0; // RESET: Door closes so it can open again next time
          }
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
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