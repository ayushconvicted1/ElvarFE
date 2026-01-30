import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsMediaContent from "@/components/NewsMediaContent";

export const metadata: Metadata = {
  title: "News & Media | ELVĀR Private",
  description: "Stay updated with the latest news and updates from ELVĀR Private.",
  openGraph: {
    title: "News & Media | ELVĀR Private",
    description: "Stay updated with the latest news and updates from ELVĀR Private.",
    type: "website",
  },
};

export default function NewsMediaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-paper)]">
      <Navbar variant="standard" />
      <NewsMediaContent />
      <Footer />
    </div>
  );
}
