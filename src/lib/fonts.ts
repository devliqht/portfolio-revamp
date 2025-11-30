import { DM_Sans, DM_Mono } from 'next/font/google';
import localFont from 'next/font/local';

const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

const dm_mono = DM_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-mono',
  weight: ['300', '400', '500'],
});

const baybayin = localFont({
  src: '../app/fonts/Baybayin-Regular.ttf',
  variable: '--font-baybayin',
  display: 'swap',
});

export { dm_sans, dm_mono, baybayin };
