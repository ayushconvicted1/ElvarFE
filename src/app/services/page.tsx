import ServicesPage from "@/components/ServicesPage";
import ServicesNavbar from "@/components/ServicesNavbar";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Footer from "@/components/Footer";

export default function Services() {
  return (
    <main className="min-h-screen relative">
      <ServicesNavbar />
      <div className="relative pt-5 z-10">
        <ServicesPage />

        <Footer />
      </div>
    </main>
  );
}
