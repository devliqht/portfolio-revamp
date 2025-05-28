import type { Metadata } from "next";
import "@/styles/globals.css";
import { dm_sans } from '@/lib/fonts';

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
    <html lang="en" className={dm_sans.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
