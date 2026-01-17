import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MembersAccess from "@/components/MembersAccess";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Security from "@/components/Security";
import ContactSection from "@/components/ContactForm";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden bg-[var(--color-paper)]">
      <Navbar />
      <Hero />
      <MembersAccess />
      <Services />
      <Features />
      <Security />
      
      {/* Locations Banner */}
      <div className="w-full py-24 flex justify-center items-center px-4 md:px-[10%] lg:px-[20%]">
         <div className="relative w-full aspect-[2/1] md:aspect-video">
            <Image 
                src="/Locations.png" 
                alt="Locations" 
                fill 
                className="object-contain mix-blend-multiply opacity-80" 
            />
         </div>
      </div>
      
      <ContactSection />

      {/* --- REVISED FOOTER --- */}
      <footer className="w-full pt-16 pb-8 px-6 md:px-12 relative border-t border-[var(--color-ink)]/10 overflow-hidden">
        
        {/* The Sketch Image - Anchored Bottom Right - Fixed Size & Position */}
        {/* We constrain the max-width to ensure it doesn't take over the whole footer on smaller screens */}
        <div className="absolute right-[-50px] bottom-0 w-[600px] max-w-[80vw] h-[500px] z-0 pointer-events-none opacity-90 mix-blend-multiply">
            <Image
              src="/FooterImg.png"
              alt="Social Sketch"
              fill
              className="object-contain object-bottom md:object-right-bottom"
              priority
            />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* 1. Logo */}
          <div className="mb-10">
            <h4 className="font-serif text-4xl md:text-5xl text-[var(--color-ink)] tracking-tight">
              ELVĀR
            </h4>
          </div>

          {/* 2. Links Container - Constrained Width to prevent collision with Image */}
          <div className="w-full md:max-w-[65%] lg:max-w-[60%] grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 mb-16">
            
            {/* Column 1 */}
            <div className="flex flex-col space-y-3">
              {['About', 'Philosophy', 'Membership', 'Private Introductions'].map((item) => (
                <a key={item} href="#" className="font-serif text-[var(--color-ink)]/80 hover:text-[var(--color-gold)] transition-colors text-sm md:text-base tracking-wide">
                  {item}
                </a>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col space-y-3">
               {['Aviation', 'Yachts', 'Residences', 'Destinations', 'Experiences', 'Assets', 'Wellness & Longevity'].map((item) => (
                <a key={item} href="#" className="font-serif text-[var(--color-ink)]/80 hover:text-[var(--color-gold)] transition-colors text-sm md:text-base tracking-wide">
                  {item}
                </a>
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col space-y-3">
               {['Privacy Framework', 'Security Standards', 'Confidentiality', 'Responsible Systems'].map((item) => (
                <a key={item} href="#" className="font-serif text-[var(--color-ink)]/80 hover:text-[var(--color-gold)] transition-colors text-sm md:text-base tracking-wide">
                  {item}
                </a>
              ))}
            </div>

            {/* Column 4 (Legal + Socials) */}
            <div className="flex flex-col justify-between h-full space-y-8 md:space-y-0">
              <div className="flex flex-col space-y-3">
                {['Terms', 'Privacy Policy', 'NDA', 'Compliance'].map((item) => (
                  <a key={item} href="#" className="font-serif text-[var(--color-ink)]/80 hover:text-[var(--color-gold)] transition-colors text-sm md:text-base tracking-wide">
                    {item}
                  </a>
                ))}
              </div>
              
              {/* Social Icons - Explicitly sized to avoid 'huge' icons */}
              <div className="flex gap-4 text-[var(--color-gold)] items-center mt-4 md:mt-auto">
                <a href="#" className="hover:text-[var(--color-ink)] transition-colors">
                  <Facebook strokeWidth={1.5} className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-[var(--color-ink)] transition-colors">
                  <Instagram strokeWidth={1.5} className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-[var(--color-ink)] transition-colors">
                  <Linkedin strokeWidth={1.5} className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* 3. Divider Line - Stops before the image area on desktop */}
          <div className="w-full md:w-[60%] h-px bg-[var(--color-ink)]/20 mb-6"></div>
          
          {/* 4. Copyright */}
          <p className="font-serif text-[var(--color-ink)]/50 text-xs md:text-sm tracking-widest">
            All Copyright Reserved @2026
          </p>
        </div>
      </footer>
    </main>
  );
}