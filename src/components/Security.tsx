"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage, getText } from "@/context/LanguageContext";

export default function Security() {
  const { language, t } = useLanguage();

  const securityItems = [
    { icon: '/Encryption.png', label: t.security.items[0] },
    { icon: '/Confidential.png', label: t.security.items[1] },
    { icon: '/Storage.png', label: t.security.items[2] },
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-16">
        <h2 className="font-italiano text-[35px] text-heading mb-6">
          {getText(t.security.heading, language)}
        </h2>
        <p className="opacity-70 text-lg max-w-xl mx-auto">
          {getText(t.security.description, language)}
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-12 items-center mb-16 px-4">
        {securityItems.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-4">
            <div className="w-[96px] h-[96px] rounded-full flex items-center justify-center relative">
              <Image src={item.icon} alt={getText(item.label, language)} width={96} height={96} />
            </div>
            <h3 className="font-cormorant text-xl text-center whitespace-pre-line text-ink/90">
              {getText(item.label, language)}
            </h3>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link href="/#contact-form" className="font-brilliant-cut bg-gold hover:bg-heading text-white px-10 py-4 text-xs tracking-[0.2em] uppercase transition-colors duration-300 shadow-sm inline-block">
          {getText(t.security.requestInvitation, language)}
        </Link>
      </div>
    </section>
  );
}
