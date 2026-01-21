"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  "How do I apply for membership?",
  "What payment methods do you accept?",
  "What are the membership tiers?",
  "How is my privacy protected?",
  "What is the response time for requests?",
  "Can I cancel my membership?",
];

export default function ContactSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-6">
      {/* FAQ */}
      <div className="max-w-2xl mx-auto mb-32">
        <h2 className="font-italiano text-4xl text-center lg:text-5xl text-heading mb-6">
          Frequently asked questions
        </h2>
        <div className="border-t border-[var(--color-ink)]/10">
          {faqs.map((q, i) => (
            <div key={i} className="border-b border-[var(--color-ink)]/10">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full py-6 flex justify-between items-center text-left hover:bg-black/5 px-2 transition-colors"
              >
                <span className="font-cormorant text-lg text-[var(--color-ink)]/80">
                  {q}
                </span>
                {open === i ? (
                  <Minus className="w-4 h-4 text-[var(--color-gold)]" />
                ) : (
                  <Plus className="w-4 h-4 text-[var(--color-gold)]" />
                )}
              </button>
              {open === i && (
                <div className="pb-6 px-2 font-light leading-relaxed text-[var(--color-ink)]/60">
                  Membership applications are reviewed by our committee weekly.
                  Please fill out the form below to begin the vetting process.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-italiano text-4xl lg:text-5xl text-heading mb-2">
          Request invitation
        </h2> 
        <p className="mb-12 opacity-60 font-cormorant">
          Complete the form below and our membership team will be in touch
          within 48 hours.
        </p>

        <form className="space-y-8 text-left">
          <div className="grid grid-cols-2 gap-8">
            <div className="group">
              <label className="block text-xs font-cormorant text-[var(--color-ink)]/60 mb-2">
                First Name
              </label>
              <input
                type="text"
                placeholder="Kaustav"
                className="w-full bg-transparent border-b border-[var(--color-ink)]/20 py-2 focus:outline-none focus:border-[var(--color-gold)] transition-colors placeholder:text-[var(--color-ink)]/20 font-light"
              />
            </div>
            <div className="group">
              <label className="block text-xs font-cormorant text-[var(--color-ink)]/60 mb-2">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Roy"
                className="w-full bg-transparent border-b border-[var(--color-ink)]/20 py-2 focus:outline-none focus:border-[var(--color-gold)] transition-colors placeholder:text-[var(--color-ink)]/20 font-light"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-cormorant text-[var(--color-ink)]/60 mb-2">
              Email ID
            </label>
            <input
              type="email"
              placeholder="demo@gmail.com"
              className="w-full bg-transparent border-b border-[var(--color-ink)]/20 py-2 focus:outline-none focus:border-[var(--color-gold)] transition-colors placeholder:text-[var(--color-ink)]/20 font-light"
            />
          </div>

          <div>
            <label className="block text-xs font-cormorant text-[var(--color-ink)]/60 mb-2">
              Phone No.
            </label>
            <input
              type="tel"
              placeholder="+91 1234567890"
              className="w-full bg-transparent border-b border-[var(--color-ink)]/20 py-2 focus:outline-none focus:border-[var(--color-gold)] transition-colors placeholder:text-[var(--color-ink)]/20 font-light"
            />
          </div>

          <div>
            <label className="block text-xs font-cormorant text-[var(--color-ink)]/60 mb-2">
              Tell us about yourself
            </label>
            <textarea
              rows={4}
              className="w-full bg-transparent border border-[var(--color-ink)]/20 p-4 focus:outline-none focus:border-[var(--color-gold)] transition-colors placeholder:text-[var(--color-ink)]/20 font-light text-sm resize-none"
              placeholder="Lorem Ipsum is simply dummy text..."
            ></textarea>
          </div>

          <div className="text-center pt-8">
            <button className="bg-bright hover:bg-heading text-white px-12 py-4 text-xs tracking-[0.2em] uppercase w-full md:w-auto shadow-sm transition-colors">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
