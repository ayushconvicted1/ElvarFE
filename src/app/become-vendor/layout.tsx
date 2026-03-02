import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a Vendor | ELVĀR Private",
  description:
    "Submit your vendor partnership request. We will review and contact you.",
  openGraph: {
    title: "Become a Vendor | ELVĀR Private",
    description:
      "Submit your vendor partnership request. We will review and contact you.",
    type: "website",
  },
};

export default function BecomeVendorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
