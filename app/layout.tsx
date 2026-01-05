import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "The Gadget Shelf - Viral Gadgets, Tested & Verified",
  description: "Editorial testing and reviews of viral gadgets. We test products so you don't have to.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} antialiased bg-slate-950 text-slate-50`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
