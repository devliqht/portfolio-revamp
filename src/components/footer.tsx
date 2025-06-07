'use client';
import React from 'react';
import { SiGithub, SiInstagram } from 'react-icons/si';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white dark:bg-black overflow-hidden">
      <div className="absolute inset-0 opacity-60 dark:opacity-40">
        <div className="animated-dots-bg w-full h-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-black/50 dark:to-black" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-neutral-200/20 dark:bg-neutral-800/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-neutral-300/20 dark:bg-neutral-700/30 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-radial from-neutral-100/15 to-transparent dark:from-neutral-900/20 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 container mx-auto px-[5.8%] sm:md:px-[2.7%] py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-[12vw] sm:text-[8vw] md:lg:text-[9vw] font-dm-sans font-semibold tracking-tight leading-[0.85] hover:cursor-pointer text-transparent hover:text-black [-webkit-text-stroke:2px_black] dark:text-black dark:[-webkit-text-stroke:2px_white] dark:hover:text-white transition-all duration-300">
                devliqht
              </h2>
              <div className="text-[4vw] sm:text-[2.5vw] lg:text-[1.8vw] font-baybayin text-neutral-600 dark:text-neutral-400 font-semibold tracking-tight">
                devliqht
              </div>
            </div>
          </div>
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="group">
                <h3 className="text-sm font-dm-sans font-medium tracking-widest uppercase text-neutral-500 dark:text-neutral-500 mb-2">
                  Email
                </h3>
                <a href="mailto:hello@devliqht.dev" className="text-2xl sm:text-3xl font-dm-sans font-light text-black dark:text-white hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors duration-300 group-hover:tracking-wide">
                  matt.cabarrubias@gmail.com
                </a>
              </div>
              
              <div className="group">
                <h3 className="text-sm font-dm-sans font-medium tracking-widest uppercase text-neutral-500 dark:text-neutral-500 mb-2">
                  Location
                </h3>
                <div className="text-2xl sm:text-3xl font-dm-sans font-light text-black dark:text-white group-hover:tracking-wide transition-all duration-300">
                  Cebu City, Philippines
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-dm-sans font-medium tracking-widest uppercase text-neutral-500 dark:text-neutral-500">
                Follow
              </h3>
              <div className="flex gap-6">
                {[
                  { Icon: SiGithub, href: 'https://github.com/devliqht', label: 'GitHub' },
                  // { Icon: SiLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
                  { Icon: SiInstagram, href: 'https://instagram.com/mxttgacab', label: 'Instagram' },
                ].map(({ Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="group p-3 rounded-full bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-300 hover:scale-110" aria-label={label}>
                    <Icon className="w-6 h-6 text-neutral-700 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="my-16 h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <div className="text-3xl sm:text-4xl font-dm-sans font-light text-black dark:text-white mb-2 tracking-tight">
              Matt Cabarrubias
            </div>
            <div className="text-lg font-dm-sans font-thin text-neutral-600 dark:text-neutral-400">
              full-stack developer
            </div>
          </div>

          <div className="text-center sm:text-right space-y-2">
            <div className="text-sm font-dm-sans text-neutral-500 dark:text-neutral-500 tracking-wide">
              © {currentYear} Matt Cabarrubias. All rights reserved.
            </div>
            <div className="text-xs font-dm-sans text-neutral-400 dark:text-neutral-600 tracking-wider">
              Built with Next.js • Tailwind CSS • TypeScript
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent" />
    </footer>
  );
};

export default Footer; 