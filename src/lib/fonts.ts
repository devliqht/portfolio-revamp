import { DM_Sans } from 'next/font/google';
import localFont from 'next/font/local';

const dm_sans = DM_Sans({
    subsets: ['latin'],
    display: 'swap',   
    variable: '--font-dm-sans',
});

const baybayin = localFont({
    src: '../app/fonts/Baybayin-Regular.ttf',
    variable: '--font-baybayin',
    display: 'swap',
});

export {
    dm_sans,
    baybayin
}