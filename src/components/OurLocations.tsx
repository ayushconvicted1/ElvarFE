"use client";
import { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";



export default function OurLocations() {
  const [open, setOpen] = useState<number | null>(null);
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

  return (
    <section className="py-24 px-6 mx-auto">
      {/* FAQ */}
      <div className="mx-auto">
        <h2 className="font-italiano text-4xl text-center lg:text-5xl text-heading mb-6">
          Our locations
        </h2>
        <p className="opacity-70 text-lg max-w-xl mx-auto text-center">
        In a world where data is everywhere, Elvār Private is committed to protecting yours.
        We understand that your lifestyle demands the highest levels of confidentiality.
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
