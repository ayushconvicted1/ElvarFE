"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does ELVAR differ from traditional luxury concierge services?",
    answer: "ELVAR does not operate as a visible service provider. We function as a private access orchestration layer—quietly aligning trusted partners to deliver outcomes without attribution, exposure, or unnecessary interaction."
  },
  {
    question: "How is membership granted?",
    answer: "Membership is strictly invitation-only. Prospective members are admitted through private referral and internal alignment processes. ELVAR is not applied to—it is extended."
  },
  {
    question: "How does ELVAR protect member privacy?",
    answer: "Privacy is embedded at every level of operation. We practice data minimization, compartmentalized execution, and strict confidentiality agreements across our ecosystem. Information exists only where absolutely required."
  },
  {
    question: "What type of individuals does ELVAR serve?",
    answer: "ELVAR serves individuals whose lives, movements, and decisions require separation from public systems. Our members value control, discretion, and reliability over recognition or display."
  }
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
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[var(--color-ink)]/20">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full py-6 flex justify-between items-center text-left hover:bg-black/5 px-2 transition-colors"
              >
                <span className="font-cormorant text-xl text-[var(--color-ink)]">
                  {faq.question}
                </span>
                {open === i ? (
                  <Minus className="w-5 h-5 text-[var(--color-gold)]" />
                ) : (
                  <Plus className="w-5 h-5 text-[var(--color-gold)]" />
                )}
              </button>
              {open === i && (
                <div className="pb-6 px-2 font-light leading-relaxed text-[var(--color-ink)]/80 text-lg">
                  {faq.answer}
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
            <button className="bg-gold hover:bg-heading text-white px-12 py-4 text-sm tracking-[0.2em] uppercase w-full md:w-auto shadow-md transition-all active:scale-95">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}