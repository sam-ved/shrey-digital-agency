import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shrey Digital — Architect of Desire",
  description: "The growth partner for modern brands. Premium digital marketing agency specializing in SEO, brand identity, and performance marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${manrope.variable} font-sans antialiased bg-zinc-950 text-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
