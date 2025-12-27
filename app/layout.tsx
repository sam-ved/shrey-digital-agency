import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { CursorEffect } from "@/components/cursor-effect";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";

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
  title: "Shrey Digital — Powering Bold Beginnings",
  description: "Cinematic digital experiences for bold brands. Premium agency specializing in brand strategy, content production, and growth marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${manrope.variable} font-sans antialiased bg-black text-white`}
      >
        <SmoothScrollProvider>
          <CursorEffect />
          <Navbar />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
