import type { Metadata } from 'next';
import ServicesPage from "@/components/ServicesPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services | ELVĀR Private",
  description: "Explore our seven pillars of service - from private aviation to luxury assets, curated exclusively for you.",
  openGraph: {
    title: "Services | ELVĀR Private",
    description: "Explore our seven pillars of service - from private aviation to luxury assets, curated exclusively for you.",
    type: "website",
  },
};

export default function Services() {
  return (
    <main className="min-h-screen relative">
      <Navbar variant="standard" />
      <div className="relative pt-5 z-10">
        <ServicesPage />
        <Footer />
      </div>
    </main>
  );
}
