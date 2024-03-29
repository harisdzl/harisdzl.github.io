import "./globals.css";
import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";

export const metadata: Metadata = {
  title: "Haris Dzulkifli | Tech stuff",
  description: "Haris Portfolio",
  icons: {
    icon: "/duck-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative overflow-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
