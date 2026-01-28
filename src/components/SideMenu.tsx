"use client";
import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
            className="fixed top-0 left-0 bottom-0 z-[70] w-full max-w-sm bg-[#966F47]/85 flex flex-col justify-center items-start pl-12 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-8 left-8 p-1 rounded-full border border-white/30 hover:bg-white/10 hover:border-white transition-all group"
            >
              <X className="w-6 h-6 text-white group-hover:scale-90 transition-transform" strokeWidth={1} />
            </button>

            {/* Menu Links */}
            <div className="flex flex-col gap-8 text-left mt-12">
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
                    className="font-brilliant-cut text-xl text-white tracking-wide hover:translate-x-2 transition-transform inline-block uppercase"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
