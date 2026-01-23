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
        <h2 className="font-italiano text-5xl text-center lg:text-6xl text-heading mb-6">
          Frequently asked questions
        </h2>
        <div className="border-t border-[var(--color-ink)]/20">
          {faqs.map((q, i) => (
            <div key={i} className="border-b border-[var(--color-ink)]/20">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full py-6 flex justify-between items-center text-left hover:bg-black/5 px-2 transition-colors"
              >
                <span className="font-cormorant text-xl text-[var(--color-ink)]">
                  {q}
                </span>
                {open === i ? (
                  <Minus className="w-5 h-5 text-[var(--color-gold)]" />
                ) : (
                  <Plus className="w-5 h-5 text-[var(--color-gold)]" />
                )}
              </button>
              {open === i && (
                <div className="pb-6 px-2 font-light leading-relaxed text-[var(--color-ink)]/80 text-lg">
                  Membership applications are reviewed by our committee weekly.
                  Please fill out the form below to begin the vetting process.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <div id="contact-form" className="max-w-xl mx-auto text-center">
        <h2 className="font-italiano text-5xl lg:text-6xl text-heading mb-3">
          Request Invitation
        </h2> 
        <p className="mb-12 opacity-80 font-cormorant text-lg">
          Complete the form below and our membership team will be in touch
          within 48 hours.
        </p>

        <form className="space-y-10 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group">
              <label className="block text-base md:text-lg font-cormorant text-[var(--color-ink)] mb-2">
                First Name
              </label>
              <input
                type="text"
                placeholder="Kaustav"
                className="w-full bg-transparent border-b border-[var(--color-ink)]/40 py-3 text-lg focus:outline-none focus:border-[var(--color-gold)] transition-colors placeholder:text-[var(--color-ink)]/40 font-light text-[var(--color-ink)]"
              />
            </div>
            <div className="group">
              <label className="block text-base md:text-lg font-cormorant text-[var(--color-ink)] mb-2">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Roy"
                className="w-full bg-transparent border-b border-[var(--color-ink)]/40 py-3 text-lg focus:outline-none focus:border-[var(--color-gold)] transition-colors placeholder:text-[var(--color-ink)]/40 font-light text-[var(--color-ink)]"
              />
            </div>
          </div>

          <div>
            <label className="block text-base md:text-lg font-cormorant text-[var(--color-ink)] mb-2">
              Email ID
            </label>
            <input
              type="email"
              placeholder="demo@gmail.com"
              className="w-full bg-transparent border-b border-[var(--color-ink)]/40 py-3 text-lg focus:outline-none focus:border-[var(--color-gold)] transition-colors placeholder:text-[var(--color-ink)]/40 font-light text-[var(--color-ink)]"
            />
          </div>

          <div>
            <label className="block text-base md:text-lg font-cormorant text-[var(--color-ink)] mb-2">
              Phone No.
            </label>
            <input
              type="tel"
              placeholder="+91 1234567890"
              className="w-full bg-transparent border-b border-[var(--color-ink)]/40 py-3 text-lg focus:outline-none focus:border-[var(--color-gold)] transition-colors placeholder:text-[var(--color-ink)]/40 font-light text-[var(--color-ink)]"
            />
          </div>

          <div>
            <label className="block text-base md:text-lg font-cormorant text-[var(--color-ink)] mb-2">
              Tell us about yourself
            </label>
            <textarea
              rows={4}
              className="w-full bg-transparent border border-[var(--color-ink)]/40 p-4 text-lg focus:outline-none focus:border-[var(--color-gold)] transition-colors placeholder:text-[var(--color-ink)]/40 font-light text-[var(--color-ink)] resize-none"
              placeholder="Lorem Ipsum is simply dummy text..."
            ></textarea>
          </div>

          <div className="text-center pt-8">
            <button className="bg-bright hover:bg-heading text-white px-12 py-4 text-sm tracking-[0.2em] uppercase w-full md:w-auto shadow-md transition-all active:scale-95">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}