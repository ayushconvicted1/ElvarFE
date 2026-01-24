import { Shield, Lock, FileKey } from "lucide-react";
import Image from "next/image";

export default function Security() {
  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <h2 className="font-italiano text-5xl lg:text-6xl text-heading mb-6">
          Your life remains yours
        </h2>
        <p className="opacity-70 text-lg max-w-xl mx-auto">
          In a world where data is everywhere, Elvār Private is committed to
          protecting yours.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-12 items-center mb-16 px-4">
        {[
          { icon: '/Encryption.png', label: "Bank-Grade\nEncryption" },
          { icon: '/Confidential.png', label: "Strict\nConfidentiality" },
          { icon: '/Storage.png', label: "Secure Data\nStorage" },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-4">
            <div className="w-[96px] h-[96px] rounded-full flex items-center justify-center relative">
              <Image src={item.icon} alt={item.label} width={96} height={96} />
            </div>
            <h3 className="font-cormorant text-xl text-center whitespace-pre-line text-ink/90">
              {item.label}
            </h3>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="bg-gold hover:bg-heading text-white px-10 py-4 text-xs tracking-[0.2em] uppercase transition-colors duration-300 shadow-sm">
          Request Invitation
        </button>
      </div>
    </section>
  );
}
