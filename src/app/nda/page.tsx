import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalPageContent from "@/components/LegalPageContent";

export const metadata: Metadata = {
  title: "Non-Disclosure Agreement | ELVĀR Private",
  description: "Non-Disclosure Agreement governing the confidential relationship between ELVĀR Private and its members.",
  openGraph: {
    title: "Non-Disclosure Agreement | ELVĀR Private",
    description: "Non-Disclosure Agreement governing the confidential relationship between ELVĀR Private and its members.",
    type: "website",
  },
};

export default function NDAPage() {
  return (
    <main className="min-h-screen bg-[var(--color-paper)]">
      <Navbar variant="standard" />
      <LegalPageContent pageKey="nda" />
      <Footer />
    </main>
  );
}
