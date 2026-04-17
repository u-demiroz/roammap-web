import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roam — Save & Discover Places",
  description: "Save places you love, discover new spots, and share your world with friends.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
