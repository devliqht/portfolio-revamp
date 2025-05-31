import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from '@/components/header';
import { dm_sans, baybayin } from '@/lib/fonts';
import { ThemeProvider } from 'next-themes';

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
    <html lang="en" className={`${dm_sans.variable} ${baybayin.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
