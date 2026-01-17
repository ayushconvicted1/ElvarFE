import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center pt-32 pb-20 px-4">
      {/* Background Image - covers entire viewport from top, positioned absolutely */}
      <div className="absolute top-0 left-0 right-0 w-full h-screen z-0">
        <Image
          src="/Banner.png"
          alt="Background"
          fill
          className="object-cover object-top"
          priority
          quality={90}
          sizes="100vw"
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-paper)]/80 pointer-events-none z-[1]" />

      {/* Content container with relative positioning */}
      <div className="relative z-10 w-full max-w-7xl">
        {/* Add your hero content here */}
      </div>
    </section>
  );
}
