"use client";
import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import HorseLogo from "./HorseLogo";

interface MenuItem {
  label: string;
  href: string;
}

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
}

export default function SideMenu({ isOpen, onClose, menuItems }: SideMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay (Click to close) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
          />

          {/* Side Drawer (Slides from Left) */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 bottom-0 z-[70] w-[280px] max-w-[75vw] flex flex-col justify-start items-start pl-8 pt-24 shadow-2xl"
            style={{ backgroundColor: '#14403AF0' }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 left-6 p-1 rounded-full border border-white/30 hover:bg-white/10 hover:border-white transition-all group"
            >
              <X className="w-5 h-5 text-white group-hover:scale-90 transition-transform" strokeWidth={1} />
            </button>

            <HorseLogo className="w-20 md:w-24 h-auto text-[#c49a4e] mt-2 mb-6" />

            {/* Menu Links */}
            <div className="flex flex-col gap-10 text-left mt-4">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="font-omega text-base text-white tracking-wide hover:translate-x-2 transition-transform inline-block uppercase"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Language Switcher at Bottom */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="absolute bottom-10 left-8"
            >
              <LanguageSwitcher variant="sidemenu" />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
