import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MembersAccess from "@/components/MembersAccess";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Security from "@/components/Security";
import ContactSection from "@/components/ContactForm";
import OurLocations from "@/components/OurLocations";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ELVĀR | Private Access",
  description: "Curated for the few. Exclusive luxury concierge services with unparalleled access and absolute discretion.",
  openGraph: {
    title: "ELVĀR | Private Access",
    description: "Curated for the few. Exclusive luxury concierge services with unparalleled access and absolute discretion.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELVĀR | Private Access",
    description: "Curated for the few. Exclusive luxury concierge services with unparalleled access and absolute discretion.",
  },
};

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
        <Footer />
      </div>
    </main>
  );
}