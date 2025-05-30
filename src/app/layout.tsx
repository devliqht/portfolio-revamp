import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from '@/components/header';
import { dm_sans, baybayin } from '@/lib/fonts';

export const metadata: Metadata = {
  title: "devliqht - Matt Cabarrubias",
  description: "Dive into devliqht's portfolio.",
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dm_sans.variable} ${baybayin.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
