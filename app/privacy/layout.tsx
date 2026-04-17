import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Privacy Policy — Roam",
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
