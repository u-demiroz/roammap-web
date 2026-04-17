import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Roam",
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
