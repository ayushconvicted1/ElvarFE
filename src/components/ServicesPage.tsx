"use client";
import { useRef } from "react";
import Image from "next/image";
import { useInView, motion } from "framer-motion";
import HowWeWork from "./HowWeWork";

const services = [
  {
    id: "aviation",
    title: "Private Aviation",
    description: "From charter coordination to last-minute re-routing, we handle every aspect of private air travel with precision and discretion.",
    image: "/Service1.png",
    imagePosition: "left"
  },
  {
    id: "yachts",
    title: "Yachts & Maritime",
    description: "Whether Mediterranean summers or Caribbean winters, we curate yacht experiences that balance privacy, comfort, and discovery.",
    image: "/Service2.png",
    imagePosition: "right"
  },
  {
    id: "living",
    title: "Residences & Living",
    description: "We secure luxury residences globally and ensure they're ready when you arrive—staffed, stocked,and seamless.",
    image: "/Service3.png",
    imagePosition: "left"
  },
  {
    id: "travel",
    title: "Travel & Destinations",
    description: "From alpine retreats to island sanctuaries, we design journeys that respect your time, privacy, and preferences.",
    image: "/Service4.png",
    imagePosition: "right"
  },
  {
    id: "experiences",
    title: "Curated Experiences",
    description: "Private tastings, closed-door access, and bespoke celebrations—experiences designed for those who value uniqueness.",
    image: "/Service5.png",
    imagePosition: "left"
  },
  {
    id: "assets",
    title: "Luxury Assets",
    description: "From rare timepieces to blue-chip art, we coordinate acquisition, authentication, storage, and resale with trusted specialists.",
    image: "/Service6.png",
    imagePosition: "right"
  },
  {
    id: "wellness",
    title: "Wellness & Longevity",
    description: "Proactive health optimization through private retreats, executive physicals, and access to world-class specialists.",
    image: "/Service7.png",
    imagePosition: "left"
  }
];

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const isLeft = service.imagePosition === "left";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`
        flex flex-col gap-8 lg:gap-12 items-center
        ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}
        mb-16 lg:mb-24
      `}
    >
      {/* Image Section - Increased size */}
      <div className="w-full lg:w-[68%] flex justify-center">
        <div className="relative w-full aspect-[4/3]">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-contain mix-blend-multiply"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className={`w-full lg:w-1/2 flex flex-col ${isLeft ? 'lg:pl-12' : 'lg:pr-12'} px-6 lg:px-0`}>
        <h3 className="font-cormorant text-2xl lg:text-3xl mb-4 lg:mb-6">
          {service.title}
        </h3>
        <p className="font-cormorant text-lg lg:text-xl text-ink/80 leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <section className="w-full py-16 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16 lg:mb-24">
        <h2 className="font-parisienne text-3xl lg:text-4xl text-gold mb-6">
          Our Services
        </h2>
        <p className="font-cormorant text-xl lg:text-2xl text-ink/70 max-w-3xl mx-auto leading-relaxed">
          Discover a world of exclusive experiences, curated just for you. From luxury travel to bespoke acquisitions, we bring your vision to life.
        </p>
      </div>

      {/* Service Cards */}
      <div className="space-y-8">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>

      {/* How We Work Section */}
      <div className="mt-20 lg:mt-32">
        <HowWeWork />
      </div>

      {/* Single Request Service Button */}
      <div className="text-center pt-12">
        <button className="font-brilliant-cut bg-[#0D236D] text-white px-12 py-4 text-sm tracking-[0.2em] uppercase hover:bg-[#0D236D]/90 transition-colors duration-300">
          REQUEST SERVICE
        </button>
      </div>
    </section>
  );
}
