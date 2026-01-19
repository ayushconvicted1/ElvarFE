"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";



export default function OurLocations() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      {/* FAQ */}
      <div className="max-w-2xl mx-auto mb-32">
        <h2 className="font-parisienne text-4xl text-center lg:text-5xl italic text-heading mb-6">
          Our Locations
        </h2>
        <p className="text-sm opacity-70 max-w-xl mx-auto text-center">
        In a world where data is everywhere, Elvar Private is committed to protecting yours.
        We understand that your lifestyle demands the highest levels of confidentiality.
        </p>
        <div className="w-full h-full mt-12">
          <Image src="/Location.png" alt="Location 1" width={800} height={800} />
        </div>
      </div>
    </section>
  );
}
