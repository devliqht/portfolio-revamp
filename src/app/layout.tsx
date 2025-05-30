import type { Metadata } from "next";
import "@/styles/globals.css";
import { dm_sans, baybayin } from '@/lib/fonts';

export const metadata: Metadata = {
  title: "devliqht - Matt Cabarrubias",
  description: "Dive into devliqht's portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dm_sans.variable} ${baybayin.variable}`}>
      <body className="animated-dots-bg">
        {children}
      </body>
    </html>
  );
}
