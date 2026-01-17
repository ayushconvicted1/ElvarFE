"use client";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-multiply">
      <button className="p-2 hover:opacity-70 transition-opacity">
        <Menu className="w-6 h-6 text-ink" strokeWidth={1.5} />
      </button>

      <Link
        href="/"
        className="font-(family-name:--font-primary) text-2xl tracking-[0.2em] font-semibold text-ink"
      >
        ELVĀR
      </Link>

      <Link
        href="/login"
        className="text-sm tracking-widest uppercase hover:text-gold transition-colors font-light"
      >
        Log in
      </Link>
    </nav>
  );
}
