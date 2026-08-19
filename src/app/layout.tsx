import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Srivishnu Charan Avasarala | AI & Enterprise Transformation Leader",
  description: "Portfolio of Srivishnu Charan Avasarala, an AI Generalist, Enterprise Transformation Leader, and Platform Modernization expert, former Verizon Associate Director.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={{ scrollBehavior: "smooth" }}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent/30 selection:text-white"
        suppressHydrationWarning
      >
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
