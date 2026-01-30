import type { Metadata } from 'next';
import LoginContent from "@/components/LoginContent";

export const metadata: Metadata = {
  title: "Login | ELVĀR Private",
  description: "Access your ELVĀR Private member account.",
  openGraph: {
    title: "Login | ELVĀR Private",
    description: "Access your ELVĀR Private member account.",
    type: "website",
  },
};

export default function LoginPage() {
  return <LoginContent />;
}