"use client";
import { useState, useEffect, useRef } from "react";
import { useLanguage, getText } from "@/context/LanguageContext";

export default function OurLocations() {
  const [open, setOpen] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { language, t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-play/pause based on visibility (replaces autoPlay attribute)
  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 px-6 mx-auto">
      {/* FAQ */}
      <div className="mx-auto">
        <h2 className="font-omega text-[35px] text-center text-[#14403A] mb-6 uppercase">
          {getText(t.ourLocations.heading, language)}
        </h2>
        <p className="opacity-70 text-lg max-w-xl mx-auto text-center">
          {getText(t.ourLocations.description, language)}
        </p>
        <div className="w-full h-full flex justify-center mt-12">
          <div className="w-full max-w-5xl aspect-video md:aspect-auto">
            <video
              ref={videoRef}
              src={isMobile ? "/MapMob.mp4" : "/Map.mp4"}
              className="w-full h-full object-cover md:object-contain"
              loop
              muted
              playsInline
              preload="none"
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

