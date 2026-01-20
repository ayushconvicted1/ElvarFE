import Image from "next/image";

const features = [
  {
    title: "Unrivaled Access",
    desc: "Gain entry to exclusive events, private clubs, and sought-after destinations.",
    img: "/Curated1.png",
    hoverImg: "/Curated1Hover.png",
  },
  {
    title: "Curated Access",
    desc: "Every request is met with tailored solutions, anticipating your needs.",
    img: "/Curated2.png",
    hoverImg: "/Curated2Hover.png",
  },
  {
    title: "Discreet & Private",
    desc: "Your privacy is paramount. We operate with the utmost confidentiality.",
    img: "/Curated3.png",
    hoverImg: "/Curated3Hover.png",
  },
];

export default function Features() {
  return (
    <section className="py-24 lg:px-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-italiano text-4xl lg:text-5xl italic text-heading mb-4">
          Curated for the few
        </h2>
        <p className="text-sm max-w-2xl mx-auto leading-relaxed opacity-80">
          Elvār Private operates on the principles of absolute discretion,
          unparalleled access, and unwavering reliability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center p-6 border border-ink/20"
          >
            <div className="relative w-full aspect-square mb-6 border border-[#96663A] overflow-hidden group">
              {/* Base image - hidden on mobile, visible on desktop, fades out on hover */}
              <Image
                src={f.img}
                alt={f.title}
                fill
                className="object-cover grayscale mix-blend-multiply hidden md:block md:opacity-100 md:group-hover:opacity-0 transition-all duration-700"
              />
              {/* Hover image - always visible on mobile, shown on hover on desktop */}
              <Image
                src={f.hoverImg}
                alt={f.title}
                fill
                className="object-cover mix-blend-multiply md:opacity-0 md:group-hover:opacity-100 transition-all duration-700"
              />
            </div>
            <h3 className="font-(family-name:--font-primary) text-2xl mb-3 text-ink">
              {f.title}
            </h3>
            <p className="font-light text-sm leading-6 opacity-70">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
