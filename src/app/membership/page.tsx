import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MembershipContent from "@/components/MembershipContent";

export const metadata: Metadata = {
  title: "Membership | ELVĀR Private",
  description: "Membership at Elvar Private is an invitation into a world designed for those who value precision, privacy, and exceptional living.",
  openGraph: {
    title: "Membership | ELVĀR Private",
    description: "Membership at Elvar Private is an invitation into a world designed for those who value precision, privacy, and exceptional living.",
    type: "website",
  },
};

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-[var(--color-paper)]">
      <Navbar variant="standard" />
      <MembershipContent />
      <Footer />
    </main>
  );
}
