import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalPageContent from "@/components/LegalPageContent";

export const metadata: Metadata = {
  title: "Privacy Policy | ELVĀR Private",
  description: "Privacy Policy for ELVĀR Private - How we collect, use, and protect your information.",
  openGraph: {
    title: "Privacy Policy | ELVĀR Private",
    description: "Privacy Policy for ELVĀR Private - How we collect, use, and protect your information.",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--color-paper)]">
      <Navbar variant="standard" />
      <LegalPageContent pageKey="privacy" />
      <Footer />
    </main>
  );
}
