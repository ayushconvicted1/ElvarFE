import type { Metadata } from "next";
import { Lato, Parisienne, Italianno } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const cormorant = localFont({
  src: [
    {
      path: "../../fonts/Cormorant/CormorantGaramond-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../fonts/Cormorant/CormorantGaramond-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../fonts/Cormorant/CormorantGaramond-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/Cormorant/CormorantGaramond-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../fonts/Cormorant/CormorantGaramond-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/Cormorant/CormorantGaramond-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../fonts/Cormorant/CormorantGaramond-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/Cormorant/CormorantGaramond-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../fonts/Cormorant/CormorantGaramond-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/Cormorant/CormorantGaramond-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
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
const italianno = Italianno({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-italiano",
  display: "swap",
});

const brilliantCut = localFont({
  src: "../../fonts/BrilliantCut.ttf",
  variable: "--font-brilliant-cut",
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
    <html lang="en" className={`${cormorant.variable} ${lato.variable} ${parisienne.variable} ${italianno.variable} ${brilliantCut.variable}`}>
      {/* We add the variables here so Tailwind can see them */}
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
