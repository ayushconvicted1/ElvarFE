import ServicesPage from "@/components/ServicesPage";
import ServicesNavbar from "@/components/ServicesNavbar";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Services() {
  return (
    <main className="min-h-screen relative">
      <ServicesNavbar />
      <div className="relative pt-5 z-10">
        <ServicesPage />

        <footer className="w-full pt-16 pb-8 px-6 md:px-12 relative overflow-hidden">
            {/* Footer Background Sketch - Desktop Only */}
            <div className="hidden md:block absolute right-0 bottom-0 w-[500px] h-[400px] z-0 pointer-events-none opacity-90 mix-blend-multiply">
                <Image
                  src="/FooterImg.png"
                  alt="Social Sketch"
                  fill
                  className="object-contain object-right-bottom"
                  priority
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
              {/* MOBILE LAYOUT */}
              <div className="block md:hidden">
                {/* Top Horizontal Line */}
                <div className="w-full h-px bg-[var(--color-ink)]/20 mb-12"></div>

                {/* Links in one row with separators */}
                <div className="flex items-center justify-center gap-4 mb-12 flex-wrap">
                  <a href="#" className="font-serif text-[var(--color-ink)]/80 hover:text-[var(--color-gold)] transition-colors text-lg tracking-wide">
                    Terms
                  </a>
                  <span className="text-[var(--color-ink)]/40 text-lg">|</span>
                  <a href="#" className="font-serif text-[var(--color-ink)]/80 hover:text-[var(--color-gold)] transition-colors text-lg tracking-wide">
                    Privacy Policy
                  </a>
                  <span className="text-[var(--color-ink)]/40 text-lg">|</span>
                  <a href="#" className="font-serif text-[var(--color-ink)]/80 hover:text-[var(--color-gold)] transition-colors text-lg tracking-wide">
                    NDA
                  </a>
                  <span className="text-[var(--color-ink)]/40 text-lg">|</span>
                  <a href="#" className="font-serif text-[var(--color-ink)]/80 hover:text-[var(--color-gold)] transition-colors text-lg tracking-wide">
                    Compliance
                  </a>
                </div>

                {/* Social Icons */}
                <div className="flex gap-6 text-[var(--color-gold)] items-center justify-center mb-8">
                  <a href="#" className="hover:text-[var(--color-ink)] transition-colors">
                    <Facebook strokeWidth={1.5} className="w-7 h-7" />
                  </a>
                  <a href="#" className="hover:text-[var(--color-ink)] transition-colors">
                    <Instagram strokeWidth={1.5} className="w-7 h-7" />
                  </a>
                  <a href="#" className="hover:text-[var(--color-ink)] transition-colors">
                    <Linkedin strokeWidth={1.5} className="w-7 h-7" />
                  </a>
                </div>

                {/* Footer Image Mobile */}
                <div className="relative w-full max-w-[600px] h-[200px] mx-auto mb-8 pointer-events-none opacity-90 mix-blend-multiply">
                  <Image
                    src="/FooterImg.png"
                    alt="Social Sketch"
                    fill
                    className="object-contain object-center"
                    priority
                  />
                </div>

                {/* Copyright Mobile */}
                <p className="font-serif text-[var(--color-ink)]/50 text-sm tracking-widest text-center">
                  All Copyright Reserved @2026
                </p>
              </div>

              {/* DESKTOP LAYOUT */}
              <div className="hidden md:block">
                {/* Logo */}
                <div className="mb-12">
                  <svg 
                    className="w-28 h-auto" 
                    viewBox="0 0 163 41" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_35_240)">
                      <path d="M0 39.9362C0.750705 39.6967 1.26843 39.1984 1.54024 38.4477C1.81205 37.697 1.94795 36.3445 1.94795 34.39V12.7814C1.94795 10.8334 1.81205 9.46794 1.54024 8.69782C1.26843 7.9277 0.750705 7.44233 0 7.23524V6.62044H22.5341L23.0971 12.8849L22.5341 13.0403C21.7122 10.9564 20.5602 9.48088 19.0718 8.62663C17.5833 7.77238 15.5707 7.34526 13.0403 7.34526H9.83035C8.65252 7.34526 7.7012 7.32584 6.98285 7.29348H5.90209V22.0228H12.1148C14.7488 22.0228 16.5867 21.764 17.6351 21.2527C18.677 20.7415 19.3565 19.9001 19.6607 18.7353H20.2237V26.0223H19.6607C19.3501 24.8574 18.677 24.0226 17.6351 23.5048C16.5932 22.9936 14.7488 22.7347 12.1148 22.7347H5.90209V37.6194C5.90209 39.0884 6.63985 39.8262 8.10891 39.8262H14.4252C16.852 39.8262 18.8064 39.3991 20.2755 38.5448C21.7446 37.6906 22.9094 36.1697 23.7637 33.9759L24.2749 34.0794L23.9125 40.5445H0V39.9297V39.9362Z" fill="#432E1A"/>
                      <path d="M57.5131 34.9595L58.0243 35.0631L57.1507 40.5575H34.6166V39.9427C35.3673 39.7032 35.885 39.2049 36.1568 38.4542C36.4286 37.7035 36.5645 36.3509 36.5645 34.3965V11.9595C36.5645 10.3869 36.4157 9.25438 36.1309 8.56839C35.8397 7.8824 35.3349 7.44233 34.6166 7.23524V6.62044H42.4731V7.23524C41.7547 7.44233 41.25 7.89534 40.9587 8.59427C40.6675 9.29321 40.5251 10.484 40.5251 12.1601V37.5676C40.5251 39.0366 41.2629 39.7744 42.732 39.7744H48.4787C50.9444 39.7744 52.9118 39.4055 54.3808 38.6678C55.8499 37.93 56.8983 36.6939 57.5131 34.9466V34.9595Z" fill="#432E1A"/>
                      <path d="M86.7128 6.56866H91.3336V7.07992C90.104 7.55882 88.9908 9.04729 87.9942 11.5453L76.546 40.8034H75.2128L64.127 12.8785C62.7938 9.5909 61.493 7.71414 60.2246 7.23524V6.62044H68.0811V7.23524C67.4275 7.40997 67.0974 7.84357 67.078 8.5425C67.0586 9.24143 67.2916 10.1928 67.7705 11.39C67.8028 11.4935 68.6312 13.6227 70.2621 17.7775C71.8864 21.9387 73.5043 26.0676 75.1157 30.177L77.4779 36.338C83.8071 19.7384 86.9911 11.4224 87.0235 11.39C87.47 10.1604 87.6836 9.18319 87.6642 8.46484C87.6448 7.74649 87.3276 7.29996 86.7128 7.13169V6.56866Z" fill="#432E1A"/>
                      <path d="M162.385 39.7809H163V40.4992C162.625 40.4992 161.965 40.5057 161.026 40.5251C160.081 40.5445 159.441 40.551 159.104 40.551C158.658 40.551 158.23 40.4669 157.823 40.2921C157.415 40.1239 157.078 39.9297 156.82 39.7291C156.561 39.522 156.27 39.1855 155.946 38.7001C155.622 38.2212 155.383 37.8523 155.228 37.5935C155.072 37.3346 154.833 36.8687 154.509 36.1827C154.186 35.4967 153.953 35.0372 153.817 34.7978C153.746 34.6295 153.5 34.06 153.073 33.1022C152.645 32.1444 152.147 31.0572 151.584 29.8405C151.021 28.6239 150.497 27.5755 150.018 26.6824C149.986 26.6112 149.914 26.4947 149.811 26.32C149.3 25.3945 148.911 24.7538 148.659 24.3979C148.4 24.0355 148.051 23.7249 147.604 23.4466C147.158 23.1748 146.594 23.0389 145.909 23.0389H140.828V34.3836C140.828 36.3704 140.964 37.7294 141.236 38.4671C141.508 39.2049 142.026 39.6903 142.776 39.9297V40.5445H134.92V39.9297C135.67 39.6903 136.188 39.2049 136.46 38.4671C136.732 37.7294 136.868 36.3704 136.868 34.3836V12.7814C136.868 10.7946 136.732 9.42911 136.46 8.67193C136.188 7.92123 135.67 7.44233 134.92 7.23524V6.62044C140.324 6.58808 143.475 6.56866 144.362 6.56866C152.95 6.56866 157.247 9.33851 157.247 14.8847C157.247 19.0265 154.613 21.6086 149.338 22.6376C150.471 22.8124 151.468 23.2718 152.341 24.0226C153.215 24.7733 154.024 25.9381 154.781 27.5107C155.092 28.1644 155.493 29.051 155.985 30.177C156.483 31.3096 156.813 32.0279 156.988 32.3321C157.299 32.9145 157.635 33.5811 158.017 34.3318C158.392 35.0825 158.683 35.6585 158.891 36.0532C159.098 36.448 159.337 36.8816 159.609 37.3605C159.881 37.8394 160.114 38.2018 160.301 38.4413C160.489 38.6807 160.703 38.9202 160.942 39.1596C161.181 39.3991 161.414 39.5608 161.634 39.645C161.855 39.7291 162.107 39.7744 162.379 39.7744L162.385 39.7809ZM140.828 7.44233V22.327H144.938C147.604 22.327 149.636 21.6863 151.021 20.4049C152.406 19.1236 153.098 17.4215 153.098 15.2988C153.098 12.9691 152.374 11.0794 150.918 9.62973C149.461 8.17362 147.229 7.4488 144.219 7.4488H140.835L140.828 7.44233Z" fill="#432E1A"/>
                      <path d="M115.421 26.9995L108.49 9.59737L101.973 26.9995L101.662 27.7178C100.09 31.6202 99.0413 34.2218 98.53 35.5226C98.1223 36.5127 97.9152 37.3281 97.9152 37.9624C97.9152 38.5966 98.0317 39.0431 98.2776 39.2955C98.5171 39.5544 98.8924 39.7485 99.4102 39.8844V40.551H93.9158V39.8844C94.7377 39.645 95.4301 39.2243 95.9932 38.6289C96.5562 38.0336 97.1645 36.8946 97.8181 35.2184L108.082 8.67841L107.519 7.18994V6.57514H111.163C117.188 21.9775 120.915 31.4519 122.352 35.0113C123.038 36.6875 123.633 37.8588 124.151 38.5254C124.662 39.192 125.232 39.645 125.847 39.8844V40.551H118.301V39.8844C118.78 39.7809 119.097 39.3732 119.252 38.6548C119.407 37.9365 119.33 37.1664 119.019 36.3445L115.732 27.7178L115.421 26.9995ZM106.697 2.15504C105.636 2.15504 104.697 2.70513 103.876 3.79882V1.28138C103.992 1.10017 105.28 0 107.26 0C108.011 0 108.943 0.245921 110.056 0.744233C111.169 1.24255 112.049 1.48847 112.696 1.48847C113.926 1.48847 115.466 0 115.466 0V2.4139C114.282 3.39759 114.029 3.59173 111.978 3.59173C111.396 3.59173 110.515 3.35229 109.338 2.87339C108.16 2.39449 107.273 2.15504 106.697 2.15504Z" fill="#432E1A"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_35_240">
                        <rect width="163" height="40.8099" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                {/* Links in horizontal row */}
                <div className="flex items-center gap-4 mb-12">
                  <a href="#" className="font-serif text-[var(--color-ink)]/80 hover:text-[var(--color-gold)] transition-colors text-sm tracking-wide">
                    Terms
                  </a>
                  <span className="text-[var(--color-ink)]/40 text-sm">|</span>
                  <a href="#" className="font-serif text-[var(--color-ink)]/80 hover:text-[var(--color-gold)] transition-colors text-sm tracking-wide">
                    Privacy Policy
                  </a>
                  <span className="text-[var(--color-ink)]/40 text-sm">|</span>
                  <a href="#" className="font-serif text-[var(--color-ink)]/80 hover:text-[var(--color-gold)] transition-colors text-sm tracking-wide">
                    Legal
                  </a>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 text-[var(--color-gold)] items-center mb-16">
                  <a href="#" className="hover:text-[var(--color-ink)] transition-colors">
                    <Facebook strokeWidth={1.5} className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:text-[var(--color-ink)] transition-colors">
                    <Instagram strokeWidth={1.5} className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:text-[var(--color-ink)] transition-colors">
                    <Linkedin strokeWidth={1.5} className="w-5 h-5" />
                  </a>
                </div>

                {/* Copyright Desktop */}
                <p className="font-serif text-[var(--color-ink)]/50 text-xs tracking-widest">
                  All Copyright Reserved @2026
                </p>
              </div>
            </div>
        </footer>
      </div>
    </main>
  );
}
