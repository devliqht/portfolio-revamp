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
      <body 
        style={{
          backgroundImage: `radial-gradient(circle at center, black 0.8px, transparent 1px)`,
          backgroundSize: '13px 13px',
          backgroundPosition: '0 0',
          boxShadow: '0 0 24px 24px white inset'
        }}
          >
        {children}
      </body>
    </html>
  );
}
