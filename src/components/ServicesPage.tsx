"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView, motion } from "framer-motion";
import HowWeWork from "./HowWeWork";
import { useLanguage, getText } from "@/context/LanguageContext";

const serviceImages = [
  "/Service1.png",
  "/Service2.png",
  "/Service3.png",
  "/Service4.png",
  "/Service5.png",
  "/Service6.png",
  "/Service7.png",
];

const imagePositions = ["left", "right", "left", "right", "left", "right", "left"];

interface ServiceCardProps {
  service: {
    id: string;
    title: { en: string; fr: string };
    description: { en: string; fr: string };
    image: string;
    imagePosition: string;
  };
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();

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
      {/* Image Section - No horizontal padding */}
      <div className="w-full lg:w-[68%] flex justify-center">
        <div className="relative w-full aspect-[4/3]">
          <Image
            src={service.image}
            alt={getText(service.title, language)}
            fill
            className="object-contain mix-blend-multiply"
          />
        </div>
      </div>

      {/* Content Section - Only text has padding */}
      <div className={`w-full lg:w-1/2 flex flex-col px-6 text-center lg:text-left ${isLeft ? 'lg:pl-12 lg:pr-0' : 'lg:pr-12 lg:pl-0'}`}>
        <h3 className="font-cormorant text-gold text-2xl lg:text-3xl mb-4 lg:mb-6">
          {getText(service.title, language)}
        </h3>
        <p className="font-cormorant text-lg lg:text-xl text-ink/80 leading-relaxed">
          {getText(service.description, language)}
        </p>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  const { language, t } = useLanguage();

  const services = t.servicesPage.items.map((item, index) => ({
    id: `service-${index}`,
    title: item.title,
    description: item.description,
    image: serviceImages[index],
    imagePosition: imagePositions[index],
  }));

  return (
    <section className="w-full py-16 lg:py-24 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16 px-5 lg:mb-24">
        <h2 className="font-omega text-[35px] text-[#14403A] mb-6">
          {getText(t.servicesPage.heading, language)}
        </h2>
        <p className="font-cormorant text-xl lg:text-2xl text-ink/70 max-w-3xl mx-auto leading-relaxed">
          {getText(t.servicesPage.description, language)}
        </p>
      </div>

      {/* Service Cards */}
      <div className="space-y-8">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>

      {/* How We Work Section */}
      <div>
        <HowWeWork />
      </div>

      {/* Single Request Service Button */}
      <div className="text-center pt-12">
        <Link href="/#contact-form" className="font-brilliant-cut bg-[#14403A] text-[#C49A4E] px-12 py-4 text-sm tracking-[0.2em] uppercase hover:bg-[#14403A]/90 transition-colors duration-300 inline-block">
          {getText(t.servicesPage.requestService, language)}
        </Link>
      </div>
    </section>
  );
}
