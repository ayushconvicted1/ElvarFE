import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Us | ELVĀR Private",
  description: "Discover ELVĀR Private - redefining modern luxury with seamless access to exceptional services and privileges.",
  openGraph: {
    title: "About Us | ELVĀR Private",
    description: "Discover ELVĀR Private - redefining modern luxury with seamless access to exceptional services and privileges.",
    type: "website",
  },
};

export default function About() {
  return (
    <main className="min-h-screen relative bg-[var(--color-background)]">
      <Navbar variant="standard" />
      <AboutContent />
      <Footer />
    </main>
  );
}
