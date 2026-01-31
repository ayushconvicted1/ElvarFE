"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useLanguage, getText } from "@/context/LanguageContext";

export default function ContactSection() {
  const [open, setOpen] = useState<number | null>(null);
  const { language, t } = useLanguage();

  return (
    <section className="py-12 px-6">
      {/* FAQ */}
      <div className="max-w-2xl mx-auto mb-16">
        <h2 className="font-italiano text-[35px] text-center text-heading mb-6">
          {getText(t.contact.faqHeading, language)}
        </h2>
        <div className="border-t border-[var(--color-ink)]/20">
          {t.contact.faqs.map((faq, i) => (
            <div key={i} className="border-b border-[var(--color-ink)]/20">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full py-6 flex justify-between items-center text-left hover:bg-black/5 px-2 transition-colors"
              >
                <span className="font-cormorant text-xl text-[var(--color-ink)]">
                  {getText(faq.question, language)}
                </span>
                {open === i ? (
                  <Minus className="w-5 h-5 text-[var(--color-gold)]" />
                ) : (
                  <Plus className="w-5 h-5 text-[var(--color-gold)]" />
                )}
              </button>
              {open === i && (
                <div className="pb-6 px-2 font-light leading-relaxed text-[var(--color-ink)]/80 text-lg">
                  {getText(faq.answer, language)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <div id="contact-form" className="max-w-xl mx-auto text-center">
        <h2 className="font-italiano text-[35px] text-heading mb-3">
          {getText(t.contact.formHeading, language)}
        </h2> 
        <p className="mb-12 opacity-80 font-cormorant text-lg">
          {getText(t.contact.formDescription, language)}
        </p>

        <form className="space-y-10 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group">
              <label className="block text-base md:text-lg font-cormorant text-[var(--color-ink)] mb-2">
                {getText(t.contact.firstName, language)}
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-[var(--color-ink)]/40 py-3 text-lg focus:outline-none focus:border-[var(--color-gold)] transition-colors placeholder:text-[var(--color-ink)]/40 font-light text-[var(--color-ink)]"
              />
            </div>
            <div className="group">
              <label className="block text-base md:text-lg font-cormorant text-[var(--color-ink)] mb-2">
                {getText(t.contact.lastName, language)}
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-[var(--color-ink)]/40 py-3 text-lg focus:outline-none focus:border-[var(--color-gold)] transition-colors placeholder:text-[var(--color-ink)]/40 font-light text-[var(--color-ink)]"
              />
            </div>
          </div>

          <div>
            <label className="block text-base md:text-lg font-cormorant text-[var(--color-ink)] mb-2">
              {getText(t.contact.emailId, language)}
            </label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-[var(--color-ink)]/40 py-3 text-lg focus:outline-none focus:border-[var(--color-gold)] transition-colors placeholder:text-[var(--color-ink)]/40 font-light text-[var(--color-ink)]"
            />
          </div>

          <div>
            <label className="block text-base md:text-lg font-cormorant text-[var(--color-ink)] mb-2">
              {getText(t.contact.phoneNo, language)}
            </label>
            <input
              type="tel"
              className="w-full bg-transparent border-b border-[var(--color-ink)]/40 py-3 text-lg focus:outline-none focus:border-[var(--color-gold)] transition-colors placeholder:text-[var(--color-ink)]/40 font-light text-[var(--color-ink)]"
            />
          </div>

          <div>
            <label className="block text-base md:text-lg font-cormorant text-[var(--color-ink)] mb-2">
              {getText(t.contact.tellUsAbout, language)}
            </label>
            <textarea
              rows={4}
              className="w-full bg-transparent border border-[var(--color-ink)]/40 p-4 text-lg focus:outline-none focus:border-[var(--color-gold)] transition-colors placeholder:text-[var(--color-ink)]/40 font-light text-[var(--color-ink)] resize-none"
            ></textarea>
          </div>

          <div className="text-center pt-8">
            <button className="font-brilliant-cut bg-gold hover:bg-heading text-white px-12 py-4 text-sm tracking-[0.2em] uppercase w-full md:w-auto shadow-md transition-all active:scale-95">
              {getText(t.contact.submit, language)}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}