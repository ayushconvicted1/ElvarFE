import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalPageContent from "@/components/LegalPageContent";

export const metadata: Metadata = {
  title: "Compliance | ELVĀR Private",
  description: "ELVĀR Private compliance standards - AML, KYC, and regulatory adherence.",
  openGraph: {
    title: "Compliance | ELVĀR Private",
    description: "ELVĀR Private compliance standards - AML, KYC, and regulatory adherence.",
    type: "website",
  },
};

export default function CompliancePage() {
  return (
    <main className="min-h-screen bg-[var(--color-paper)]">
      <Navbar variant="standard" />
      <LegalPageContent pageKey="compliance" />
      <Footer />
    </main>
  );
}
