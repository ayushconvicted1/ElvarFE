import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MembersAccess from "@/components/MembersAccess";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Security from "@/components/Security";
import ContactSection from "@/components/ContactForm";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import OurLocations from "@/components/OurLocations";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <div className="relative z-10">
        <MembersAccess />
        <Services />
        <Features />
        <Security />
        
        <OurLocations />
        
        <ContactSection />

        <ContactSection />

        <Footer />
      </div>
    </main>
  );
}