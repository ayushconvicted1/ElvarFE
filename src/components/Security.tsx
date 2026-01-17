import { Shield, Lock, FileKey } from "lucide-react";

export default function Security() {
  return (
    <section className="py-24 bg-paper">
      <div className="text-center mb-16">
        <h2 className="font-parisienne text-4xl lg:text-5xl italic text-gold mb-6">
          Your Life Remains Yours
        </h2>
        <p className="text-sm opacity-70 max-w-xl mx-auto">
          In a world where data is everywhere, Elvār Private is committed to
          protecting yours.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-12 items-center mb-16 px-4">
        {[
          { icon: Shield, label: "Bank-Grade\nEncryption" },
          { icon: Lock, label: "Strict\nConfidentiality" },
          { icon: FileKey, label: "Secure Data\nStorage" },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-4">
            <div className="w-24 h-24 rounded-full border border-ink/30 flex items-center justify-center p-6 relative">
              <div className="absolute inset-1 border border-ink/10 rounded-full" />
              <item.icon className="w-8 h-8 text-ink/70" strokeWidth={1} />
            </div>
            <h3 className="font-(family-name:--font-primary) text-xl text-center whitespace-pre-line text-ink/90">
              {item.label}
            </h3>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="bg-[#D8C6B0] hover:bg-gold text-white px-10 py-4 text-xs tracking-[0.2em] uppercase transition-colors duration-300 shadow-sm">
          Request Invitation
        </button>
      </div>
    </section>
  );
}
