"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";

const services = [
  {
    id: "cars",
    label: "Luxury & Sports Cars",
    image:
      "/Yacht.png",
  },
  {
    id: "dining",
    label: "Fine Dining & Omakase Experiences",
    image:
      "/Yacht.png",
  },
  {
    id: "aviation",
    label: "Private Aviation",
    image:
      "https://images.unsplash.com/photo-1540962351504-03099e0a7782?auto=format&fit=crop&q=80",
  },
  {
    id: "yachts",
    label: "Yachts & Maritime Access",
    image:
      "https://images.unsplash.com/photo-1569263979104-865ab7dd8d17?auto=format&fit=crop&q=80",
  },
  {
    id: "living",
    label: "Residences & Global Living",
    image:
      "https://images.unsplash.com/photo-1600596542815-2a4d9f6facb8?auto=format&fit=crop&q=80",
  },
  {
    id: "travel",
    label: "Destinations & Travel Design",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80",
  },
  {
    id: "curated",
    label: "Experiences & Curated Moments",
    image:
      "https://images.unsplash.com/photo-1519225427186-1db33e981bc2?auto=format&fit=crop&q=80",
  },
];

const ITEM_HEIGHT = 80;
const VIEWPORT_HEIGHT = 400;

export default function Services() {
  // We use a numeric index that can go infinite (negative or positive)
  // Default to 3 (Yachts) to start in the middle of our list
  const [activeIndex, setActiveIndex] = useState(3);

  // Helper to handle the infinite modulo logic (works for negative numbers too)
  const getService = (index: number) => {
    const len = services.length;
    return services[((index % len) + len) % len];
  };

  // Generate a window of indices to render relative to the active index.
  // We render enough buffer items above and below to ensure no empty space during fast scrolls.
  const renderRange = Array.from({ length: 9 }, (_, i) => activeIndex - 4 + i);

  // The 'active' service ID for the image display
  const activeService = getService(activeIndex);

  return (
    <section className="w-full max-w-7xl mx-auto py-32 px-6 flex flex-col lg:flex-row bg-paper gap-12 items-center">
      {/* --- Infinite Wheel Menu --- */}
      <div
        className="w-full lg:w-1/3 relative overflow-hidden mask-gradient-v"
        style={{ height: VIEWPORT_HEIGHT }}
      >
        {/* The Moving Container */}
        {/* We animate the 'y' transform to slide the whole list */}
        <motion.div
          className="absolute w-full left-0"
          initial={false}
          animate={{
            // Math: Move list up by activeIndex * height.
            // Add half viewport to push down to center.
            // Subtract half item height to center the text itself.
            y:
              -(activeIndex * ITEM_HEIGHT) +
              VIEWPORT_HEIGHT / 2 -
              ITEM_HEIGHT / 2,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 25,
            mass: 0.8,
          }}
        >
          {renderRange.map((index) => {
            const service = getService(index);
            const isActive = index === activeIndex;

            return (
              <div
                key={index} // Key must be the index (not ID) to maintain order in the virtual list
                className="absolute w-full left-0 flex items-center"
                style={{
                  height: ITEM_HEIGHT,
                  top: index * ITEM_HEIGHT, // Position based on its virtual index
                }}
              >
                <button
                  onClick={() => setActiveIndex(index)}
                  className={clsx(
                    "group text-left text-lg lg:text-xl tracking-wide transition-all duration-300 flex items-center gap-3 relative w-full",
                    isActive
                      ? "text-gold font-normal translate-x-4 scale-105 origin-left"
                      : "text-ink/40 hover:text-ink/70 font-light"
                  )}
                >
                  {/* Gold Arrow */}
                  <span
                    className={clsx(
                      "transition-all duration-300 absolute -left-4",
                      isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    )}
                  >
                    <span className="block w-0 h-0 border-t-[5px] border-t-transparent border-l-8 border-l-gold border-b-[5px] border-b-transparent" />
                  </span>

                  <span className={isActive ? "font-serif italic" : ""}>
                    {service.label}
                  </span>
                </button>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* --- Right Image Display --- */}
      <div className="w-full lg:w-2/3 relative aspect-video">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={activeService.image}
              alt={activeService.label}
              fill
              className="object-contain grayscale contrast-100 mix-blend-multiply sketch-mask"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
