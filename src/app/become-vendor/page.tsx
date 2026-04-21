"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useLanguage, getText } from "@/context/LanguageContext";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

// Must match backend LISTING_CATEGORIES keys (lib/constants)
const SERVICE_CATEGORY_OPTIONS: { value: string; labelEn: string; labelFr: string }[] = [
  { value: "LUXURY_CARS", labelEn: "Luxury Cars", labelFr: "Voitures de luxe" },
  { value: "VILLAS", labelEn: "Villas", labelFr: "Villas" },
  { value: "HOTELS", labelEn: "Hotels", labelFr: "Hôtels" },
  { value: "YACHTS", labelEn: "Yachts", labelFr: "Yachts" },
  { value: "SHIPS", labelEn: "Ships", labelFr: "Navires" },
  { value: "PRIVATE_JETS", labelEn: "Private Jets", labelFr: "Jets privés" },
  { value: "HELICOPTERS", labelEn: "Helicopters", labelFr: "Hélicoptères" },
  { value: "SECURITY", labelEn: "Security", labelFr: "Sécurité" },
  { value: "PALACES_HERITAGES", labelEn: "Palaces & Heritages", labelFr: "Palais & Patrimoine" },
  { value: "RESTAURANTS", labelEn: "Restaurants", labelFr: "Restaurants" },
  { value: "CELEBRATIONS_EVENTS", labelEn: "Celebrations & Private Events", labelFr: "Célébrations & Événements privés" },
  { value: "SPA", labelEn: "Spa & Wellness", labelFr: "Spa & Bien-être" },
  { value: "ADDITIONAL_ACTIVITIES", labelEn: "Additional Activities", labelFr: "Activités supplémentaires" },
];

export default function BecomeVendorPage() {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    commissionRate: "",
    services: [] as string[],
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function toggleService(value: string) {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(value)
        ? prev.services.filter((s) => s !== value)
        : prev.services.length >= 20
          ? prev.services
          : [...prev.services, value],
    }));
    if (errors.services) setErrors((prev) => ({ ...prev, services: "" }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!API_BASE_URL) {
      setSubmitStatus("error");
      setSubmitMessage(
        language === "en"
          ? "API URL is not configured."
          : "L'URL de l'API n'est pas configurée."
      );
      return;
    }
    setSubmitStatus("loading");
    setSubmitMessage("");
    setErrors({});

    const commissionNum = formData.commissionRate === "" ? 0 : Number(formData.commissionRate);
    if (formData.commissionRate !== "" && (Number.isNaN(commissionNum) || commissionNum < 0 || commissionNum > 100)) {
      setErrors((prev) => ({ ...prev, commissionRate: language === "en" ? "Enter 0–100." : "Saisir 0–100." }));
      setSubmitStatus("idle");
      return;
    }
    if (formData.services.length === 0) {
      setErrors((prev) => ({ ...prev, services: language === "en" ? "Select at least one category." : "Sélectionnez au moins une catégorie." }));
      setSubmitStatus("idle");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setErrors((prev) => ({ ...prev, confirmPassword: language === "en" ? "Passwords do not match." : "Les mots de passe ne correspondent pas." }));
      setSubmitStatus("idle");
      return;
    }

    try {
      const res = await fetch(`${API_BASE_URL}/api/contact/vendor`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: formData.phone.trim() || undefined,
          message: formData.message.trim() || undefined,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          companyName: formData.companyName.trim(),
          commissionRate: Number.isNaN(commissionNum) ? 0 : commissionNum,
          services: formData.services,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitStatus("success");
        setSubmitMessage(getText(t.vendorContact.submitSuccess, language));
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          password: "",
          confirmPassword: "",
          companyName: "",
          commissionRate: "",
          services: [],
        });
      } else {
        setSubmitStatus("error");
        setSubmitMessage(data.error || getText(t.vendorContact.submitError, language));
        if (data.details && typeof data.details === "object") {
          const fieldErrors: Record<string, string> = {};
          for (const [key, value] of Object.entries(data.details)) {
            const msg = Array.isArray(value) ? value[0] : value;
            if (typeof msg === "string") fieldErrors[key] = msg;
          }
          setErrors(fieldErrors);
        }
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

  const inputClass =
    "w-full bg-transparent border-b border-[var(--color-ink)]/40 py-3 text-lg focus:outline-none focus:border-[var(--color-gold)] transition-colors placeholder:text-[var(--color-ink)]/40 font-light text-[var(--color-ink)]";
  const labelClass = "block text-base md:text-lg font-cormorant text-[var(--color-ink)] mb-2";

  return (
    <main className="min-h-screen relative">
      <Navbar variant="standard" />
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="font-omega text-[24px] md:text-[28px] text-[#14403A] mb-3">
            {getText(t.vendorContact.formHeading, language)}
          </h1>
          <p className="mb-12 opacity-80 font-cormorant text-lg">
            {getText(t.vendorContact.formDescription, language)}
          </p>

          <form className="space-y-10 text-left" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className={labelClass}>{getText(t.vendorContact.firstName, language)}</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                  required
                  className={inputClass}
                />
                {errors.firstName && <p className="mt-1 text-sm text-rose-600">{errors.firstName}</p>}
              </div>
              <div>
                <label className={labelClass}>{getText(t.vendorContact.lastName, language)}</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
                  required
                  className={inputClass}
                />
                {errors.lastName && <p className="mt-1 text-sm text-rose-600">{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <label className={labelClass}>{getText(t.vendorContact.emailId, language)}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                required
                className={inputClass}
              />
              {errors.email && <p className="mt-1 text-sm text-rose-600">{errors.email}</p>}
            </div>

            <div>
              <label className={labelClass}>{getText(t.vendorContact.phoneNo, language)}</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>{getText(t.vendorContact.password, language)}</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                  required
                  minLength={8}
                  placeholder={language === "en" ? "Min. 8 characters, 1 upper, 1 lower, 1 number" : "Min. 8 caractères, 1 majuscule, 1 minuscule, 1 chiffre"}
                  className={inputClass}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[var(--color-ink)]/50 hover:text-[var(--color-ink)]"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "🙈" : "👁"}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-sm text-rose-600">{errors.password}</p>}
            </div>

            <div>
              <label className={labelClass}>{getText(t.vendorContact.confirmPassword, language)}</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                  required
                  className={inputClass}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[var(--color-ink)]/50 hover:text-[var(--color-ink)]"
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                >
                  {showConfirmPassword ? "🙈" : "👁"}
                </button>
              </div>
              {errors.confirmPassword && <p className="mt-1 text-sm text-rose-600">{errors.confirmPassword}</p>}
            </div>

            <div>
              <label className={labelClass}>{getText(t.vendorContact.companyName, language)}</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={(e) => setFormData((prev) => ({ ...prev, companyName: e.target.value }))}
                required
                className={inputClass}
              />
              {errors.companyName && <p className="mt-1 text-sm text-rose-600">{errors.companyName}</p>}
            </div>

            <div>
              <label className={labelClass}>{getText(t.vendorContact.commissionRate, language)}</label>
              <input
                type="number"
                name="commissionRate"
                value={formData.commissionRate}
                onChange={(e) => setFormData((prev) => ({ ...prev, commissionRate: e.target.value }))}
                min={0}
                max={100}
                step={0.5}
                placeholder="0"
                className={inputClass}
              />
              {errors.commissionRate && <p className="mt-1 text-sm text-rose-600">{errors.commissionRate}</p>}
            </div>

            <div>
              <label className={labelClass}>{getText(t.vendorContact.services, language)}</label>
              <p className="text-sm text-[var(--color-ink)]/70 mb-2">{getText(t.vendorContact.servicesHint, language)}</p>
              <div className="max-h-48 overflow-y-auto border border-[var(--color-ink)]/30 rounded-lg p-3 space-y-2">
                {SERVICE_CATEGORY_OPTIONS.map((opt) => (
                  <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.services.includes(opt.value)}
                      onChange={() => toggleService(opt.value)}
                      className="w-4 h-4 accent-[var(--color-gold)]"
                    />
                    <span className="font-light text-[var(--color-ink)]">
                      {language === "en" ? opt.labelEn : opt.labelFr}
                    </span>
                  </label>
                ))}
              </div>
              {errors.services && <p className="mt-1 text-sm text-rose-600">{errors.services}</p>}
            </div>

            <div>
              <label className={labelClass}>{getText(t.vendorContact.message, language)}</label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                className="w-full bg-transparent border border-[var(--color-ink)]/40 p-4 text-lg focus:outline-none focus:border-[var(--color-gold)] transition-colors placeholder:text-[var(--color-ink)]/40 font-light text-[var(--color-ink)] resize-none"
              />
            </div>

            {submitMessage && (
              <p
                className={`text-center font-cormorant text-lg ${
                  submitStatus === "success" ? "text-emerald-700" : "text-rose-600"
                }`}
              >
                {submitMessage}
              </p>
            )}

            <div className="text-center pt-8">
              <button
                type="submit"
                disabled={submitStatus === "loading"}
                className="font-omega bg-[#14403A] hover:bg-[#14403A]/90 text-[#C49A4E] px-12 py-4 text-sm tracking-[0.2em] uppercase w-full md:w-auto shadow-md transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitStatus === "loading"
                  ? language === "en"
                    ? "Submitting…"
                    : "Envoi…"
                  : getText(t.vendorContact.submit, language)}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center">
            <Link
              href="/"
              className="font-cormorant text-lg text-[var(--color-ink)]/80 hover:text-[var(--color-gold)] transition-colors"
            >
              {getText(t.vendorContact.backToHome, language)}
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
