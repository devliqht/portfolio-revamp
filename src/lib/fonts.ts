import { DM_Sans } from 'next/font/google';
import '@/styles/globals.css';

const dm_sans = DM_Sans({
    subsets: ['latin'],
    display: 'swap',   
    variable: '--font-dm-sans',
});

export {
    dm_sans
}