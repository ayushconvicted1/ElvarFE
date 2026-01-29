
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen relative bg-[var(--color-background)]">
        <Navbar variant="standard" />
        
        <div className="pt-24 pb-16 px-6 md:px-12 max-w-4xl mx-auto flex flex-col items-center">
            {/* Top Image */}
            <div className="w-full max-w-2xl aspect-[4/3] relative mb-12">
                 {/* Using a placeholder consistent with the sketch style if possible, or a real image as requested */}
                 {/* User asked for random image from internet. Using a placeholder for a private jet. */}
                <Image
                    src="/AboutImg.png"
                    alt="Private Jet"
                    fill
                    className="object-cover opacity-80"
                    style={{
                      maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                      WebkitMaskComposite: "source-in",
                      maskComposite: "intersect"
                    }}
                />
            </div>

            {/* "About us" Heading */}
            <h1 className="font-italiano text-heading text-[35px] md:text-6xl text-[var(--color-blue)] mb-8">
                About us
            </h1>

            {/* Content Text */}
            <div className="text-center font-serif text-[var(--color-ink)]/80 leading-relaxed text-lg md:text-xl space-y-6 max-w-2xl">
                <p>
                    Elvar Private is dedicated to redefining the experience of modern luxury. We curate seamless access to the world’s most exceptional services and privileges—spanning private travel, maritime journeys, bespoke wellness, curated experiences, and high-value asset management.
                </p>
                <p>
                    Our integrated approach ensures that every aspect of your lifestyle is managed with absolute precision, complete discretion, and uncompromising excellence.
                </p>
                <p>
                    At Elvar Private, luxury is not a service—it is a standard we uphold in everything we do.
                </p>
            </div>

            {/* ELVAR Logo (Center) */}
            <div className="mt-16">
                <span className="font-serif text-4xl tracking-[0.2em] text-[var(--color-ink)]">ELVÃR</span>
            </div>
        </div>

        <Footer />
    </main>
  );
}
