import ServicesNavbar from "@/components/ServicesNavbar";
import Footer from "@/components/Footer";

export default function NewsMediaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-paper)]">
      <ServicesNavbar />
      
      <main className="flex-grow flex flex-col items-center justify-center -mt-20 px-6">
        <div className="text-center max-w-2xl mx-auto space-y-6">
          <h1 className="font-italiano text-[35px] text-[#0D236D]">
            News & Media
          </h1>
          <p className="font-serif text-lg text-[var(--color-ink)]/80">
            Stay tuned for upcoming updates and features.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
