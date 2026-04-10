"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useLanguage, getText } from "@/context/LanguageContext";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export default function ContactSection() {
  const [open, setOpen] = useState<number | null>(null);
  const { language, t } = useLanguage();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!API_BASE_URL) {
      setSubmitStatus("error");
      setSubmitMessage("API URL is not configured.");
      return;
    }
    setSubmitStatus("loading");
    setSubmitMessage("");
    try {
      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: formData.phone.trim() || undefined,
          message: formData.message.trim() || undefined,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitStatus("success");
        setSubmitMessage(
          language === "en"
            ? "Your invitation request has been submitted successfully."
            : "Votre demande d'invitation a été envoyée avec succès."
        );
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus("error");
        setSubmitMessage(data.error || (language === "en" ? "Something went wrong." : "Une erreur s'est produite."));
      }
    } catch {
      setSubmitStatus("error");
      setSubmitMessage(
        language === "en"
          ? "Unable to submit. Please check your connection and try again."
          : "Impossible d'envoyer. Vérifiez votre connexion et réessayez."
      );
    }
  }

  return (
    <section className="py-12 px-6">
      {/* FAQ */}
      <div className="max-w-2xl mx-auto mb-16">
        <h2 className="font-omega text-[24px] md:text-[28px] text-center text-[#14403A] mb-6 uppercase">
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
        <h2 className="font-omega text-[24px] md:text-[28px] text-[#14403A] mb-3 uppercase">
          {getText(t.contact.formHeading, language)}
        </h2> 
        <p className="mb-12 opacity-80 font-cormorant text-lg">
          {getText(t.contact.formDescription, language)}
        </p>

        <form className="space-y-10 text-left" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group">
              <label className="block text-base md:text-lg font-cormorant text-[var(--color-ink)] mb-2">
                {getText(t.contact.firstName, language)}
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, firstName: e.target.value }))
                }
                required
                className="w-full bg-transparent border-b border-[var(--color-ink)]/40 py-3 text-lg focus:outline-none focus:border-[var(--color-gold)] transition-colors placeholder:text-[var(--color-ink)]/40 font-light text-[var(--color-ink)]"
              />
            </div>
            <div className="group">
              <label className="block text-base md:text-lg font-cormorant text-[var(--color-ink)] mb-2">
                {getText(t.contact.lastName, language)}
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, lastName: e.target.value }))
                }
                required
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
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              required
              className="w-full bg-transparent border-b border-[var(--color-ink)]/40 py-3 text-lg focus:outline-none focus:border-[var(--color-gold)] transition-colors placeholder:text-[var(--color-ink)]/40 font-light text-[var(--color-ink)]"
            />
          </div>

          <div>
            <label className="block text-base md:text-lg font-cormorant text-[var(--color-ink)] mb-2">
              {getText(t.contact.phoneNo, language)}
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, phone: e.target.value }))
              }
              className="w-full bg-transparent border-b border-[var(--color-ink)]/40 py-3 text-lg focus:outline-none focus:border-[var(--color-gold)] transition-colors placeholder:text-[var(--color-ink)]/40 font-light text-[var(--color-ink)]"
            />
          </div>

          <div>
            <label className="block text-base md:text-lg font-cormorant text-[var(--color-ink)] mb-2">
              {getText(t.contact.tellUsAbout, language)}
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              className="w-full bg-transparent border border-[var(--color-ink)]/40 p-4 text-lg focus:outline-none focus:border-[var(--color-gold)] transition-colors placeholder:text-[var(--color-ink)]/40 font-light text-[var(--color-ink)] resize-none"
            />
          </div>

          {submitMessage && (
            <p
              className={`text-center font-cormorant text-lg ${
                submitStatus === "success"
                  ? "text-emerald-700"
                  : "text-rose-600"
              }`}
            >
              {submitMessage}
            </p>
          )}

          <div className="text-center pt-8">
            <button
              type="submit"
              disabled={submitStatus === "loading"}
              className="font-brilliant-cut bg-[#14403A] hover:bg-[#14403A]/90 text-[#C49A4E] px-12 py-4 text-sm tracking-[0.2em] uppercase w-full md:w-auto shadow-md transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {submitStatus === "loading"
                ? language === "en"
                  ? "Submitting…"
                  : "Envoi…"
                : getText(t.contact.submit, language)}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}