import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalPageContent from "@/components/LegalPageContent";

export const metadata: Metadata = {
  title: "Terms of Service | ELVĀR Private",
  description: "Terms of Service for ELVĀR Private membership and services.",
  openGraph: {
    title: "Terms of Service | ELVĀR Private",
    description: "Terms of Service for ELVĀR Private membership and services.",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--color-paper)]">
      <Navbar variant="standard" />
      <LegalPageContent pageKey="terms" />
      <Footer />
    </main>
  );
}
