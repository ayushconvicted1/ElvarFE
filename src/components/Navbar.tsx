"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { clsx } from "clsx";
import SideMenu from "./SideMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage, getText } from "@/context/LanguageContext";
import Image from "next/image";
import Logo from "../../public/Logo.svg"
import LogoMob from "../../public/LogoMob.svg"

interface NavbarProps {
  variant?: "home" | "standard";
}

export default function Navbar({ variant = "home" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, t } = useLanguage();

  const menuItems = [
    { label: getText(t.nav.home, language), href: "/" },
    { label: getText(t.nav.about, language), href: "/about" },
    { label: getText(t.nav.services, language), href: "/services" },
    { label: getText(t.nav.membership, language), href: "/membership" },
    { label: getText(t.nav.newsMedia, language), href: "/news-media" },
    { label: getText(t.nav.becomeAVendor, language), href: "/become-vendor" },
    { label: getText(t.nav.login, language), href: "/login" },
  ];

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      // Different threshold based on variant
      const threshold = variant === "home" ? window.innerHeight * 1.4 - 80 : 50;
      
      if (window.scrollY > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [variant]);

  // Lock Body Scroll when Menu is Open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 w-full z-50 px-6 flex justify-center items-center transition-all duration-500 ease-in-out",
          isScrolled && !isMenuOpen
            ? "py-4 bg-[var(--color-paper)]/85 backdrop-blur-md shadow-sm border-b border-[var(--color-ink)]/5"
            : variant === "standard"
              ? "py-6 bg-[var(--color-paper)]"
              : "py-6 bg-transparent mix-blend-multiply"
        )}
      >
        {/* Hamburger Trigger */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className={clsx(
            "p-2 hover:opacity-70 transition-opacity z-50 absolute left-6",
            isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          )}
        >
          <Menu
            className="w-6 h-6 text-[var(--color-ink)]"
            strokeWidth={1.5}
          />
        </button>

        {/* Logo - Centered */}
        <Link
          href="/"
          className={clsx(
            "hover:opacity-80 transition-opacity z-40",
            isMenuOpen ? "opacity-0 md:opacity-100" : "opacity-100" 
          )}
        >
            <Image src={Logo} alt="Logo" width={250} height={100} className="hidden md:block" />
            <Image src={LogoMob} alt="Logo" width={180} height={70} className="block md:hidden" />
        </Link>

        {/* Language Switcher - Right side */}
        <div className="absolute right-6 z-40">
          <LanguageSwitcher variant="navbar" />
        </div>
      </nav>

      {/* Reusable Side Menu */}
      <SideMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        menuItems={menuItems} 
      />
    </>
  );
}