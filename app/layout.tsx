import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = localFont({
  src: [
    {
      path: "../assets/fonts/inter/Inter-VariableFont_opsz,wght.ttf",
      style: "normal",
    },
    {
      path: "../assets/fonts/inter/Inter-Italic-VariableFont_opsz,wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Orchestrate - Strategy Execution Platform for Product Teams",
  description: "Turn product strategy into confident decisions. Orchestrate connects your OKRs to actionable delta proposals, validates them faster, and proves which changes actually moved metrics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
