import type { Metadata } from "next";
import { Cormorant_Garamond, Lato, Parisienne } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-parisienne",
  display: "swap",
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ELVĀR | Private Access",
  description: "Curated for the few.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* We add the variables here so Tailwind can see them */}
      <body
        className={`${cormorant.variable} ${lato.variable} ${parisienne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
