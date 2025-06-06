import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes';

import "@/styles/globals.css";
import Header from '@/components/header';
import { dm_sans, baybayin } from '@/lib/fonts';
import { SectionProvider } from '@/hooks/useSection';

export const metadata: Metadata = {
  title: "devliqht - Matt Cabarrubias",
  description: "Dive into devliqht's portfolio.",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "devliqht - Matt Cabarrubias",
    description: "Dive into devliqht's portfolio.",
    type: "website",
    url: "https://devliqht.dev",
    siteName: "devliqht",
    images: [
      {
        url: "/projects/portfolio.png",
        width: 1200,
        height: 630,
        alt: "devliqht - Matt Cabarrubias Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "devliqht - Matt Cabarrubias",
    description: "Dive into devliqht's portfolio.",
    images: ["/projects/portfolio.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dm_sans.variable} ${baybayin.variable}`} suppressHydrationWarning={true}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <SectionProvider>
            <Header />
            {children}
          </SectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
