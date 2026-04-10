"use client";
import { useRef } from "react";
import Image from "next/image";
import { useInView, motion } from "framer-motion";
import { useLanguage, getText } from "@/context/LanguageContext";

const stepIcons = ["/BriefUs.svg", "/Execute.svg", "/Experience.svg"];

export default function HowWeWork() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language, t } = useLanguage();

  const steps = t.howWeWork.steps.map((step, index) => ({
    id: index + 1,
    title: step.title,
    description: step.description,
    icon: stepIcons[index],
  }));

  return (
    <section ref={ref} className="w-full py-16 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16 lg:mb-20">
        <h2 className="font-omega text-[24px] md:text-[28px] text-[#14403A]">
          {getText(t.howWeWork.heading, language)}
        </h2>
      </div>

      {/* Content Grid */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* Left Side - Timeline with Steps */}
        <div className="w-full lg:w-1/2">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex gap-6 mb-12 lg:mb-16 last:mb-0 items-center"
            >
              {/* Icon/Seal - vertically centered with text */}
              <div className="flex-shrink-0 relative">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center bg-paper">
                  {/* Detailed seal SVG */}
                  <Image
                    src={step.icon}
                    alt={getText(step.title, language)}
                    width={100}
                    height={100}
                    className="w-full h-full text-ink/60"
                  />
                </div>
                
                {/* Vertical Line - centered vertically between icons with equal spacing */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-full w-[1.5px] h-12 lg:h-14 bg-ink/25 -translate-x-1/2 translate-y-[18px] lg:translate-y-[26px]" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-cormorant text-2xl lg:text-3xl text-ink font-medium mb-2">
                  {getText(step.title, language)}
                </h3>
                <p className="font-cormorant text-base lg:text-lg text-ink/70 leading-relaxed">
                  {getText(step.description, language)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side - Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full hidden sm:block lg:w-1/2 h-[100%] relative"
        >
          <div className="relative w-full h-[100%] aspect-[4/3] lg:aspect-[3/2]">
            <Image
              src="/Work.png"
              alt="Professional team collaboration"
              fill
              className="object-cover rounded-lg mix-blend-multiply"
              style={{
                maskImage: "radial-gradient(ellipse 90% 85% at 50% 50%, black 65%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(ellipse 90% 85% at 50% 50%, black 65%, transparent 100%)",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
