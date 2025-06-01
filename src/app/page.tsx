'use client';
import React from 'react';
import Image from 'next/image';
import { SiReact, SiVercel, SiPhp, SiLaravel, SiJavascript, SiTailwindcss } from 'react-icons/si';
import Typewriter from '@/components/typewriter';
import ProjectsSection from '@/app/projects/page';

export default function Home() {
  return (
    <main>
      <div className="relative min-h-screen flex text-white overflow-hidden animated-dots-bg" id="landing">
        <div className="flex flex-col px-[5%] py-[3.7%] mt-8 z-10 relative h-fit transition">
          <h2 className="text-[8vw] sm:text-5xl md:text-6xl font-dm-sans font-light tracking-tighter bg-gradient-to-r from-neutral-800 via-neutral-500 to-neutral-400 dark:from-neutral-100 dark:via-neutral-300 dark:to-neutral-400 bg-clip-text text-transparent animate-float-in-bottom text-delay">Matt Cabarrubias</h2>
          <h1 className="text-[14vw] font-dm-sans text-black dark:text-white font-semibold tracking-tight hover:cursor-pointer hover:text-transparent hover:[-webkit-text-stroke:2px_black] dark:hover:text-black dark:hover:[-webkit-text-stroke:2px_white] -translate-y-[4vw]"><Typewriter text="devliqht" delay={150}/></h1>
        </div>
        <div className="absolute bottom-0 px-[5%] pb-[4.7%] sm:md:left-0 right-0">
          <div className={`text-2xl sm:text-3xl md:text-[4vw] font-dm-sans text-gray-900 dark:text-gray-100 font-extralight tracking-widest mb-4 transition-opacity animate-float-in-top text-delay sm:md:text-left text-right`}>full-stack</div>
          <h3 className="text-2xl sm:md:text-4xl font-baybayin text-black sm:md:text-left text-right dark:text-white font-semibold tracking-tight animate-float-in-top text-delay">devliqht</h3>
        </div>
        <div className="absolute right-0 top-8/12 scale-110 -translate-y-1/2 w-[400px] h-[560px] sm:h-[720px] md:h-[860px] group">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-[48%] right-8 hover:scale-105 animate-float-in-right icons-delay hover:translate-x-2 transition duration-300 hover:cursor-pointer">
              <SiReact className="w-32 h-32 text-black dark:text-white hover:text-[#00D8FF] dark:hover:text-[#00D8FF] opacity-100" />
            </div>
            <div className="absolute top-1/8 -left-0 -rotate-24 hover:scale-105 animate-float-in-left icons-delay hover:-translate-x-2 transition duration-300 hover:cursor-pointer">
              <SiVercel className="w-38 h-38 text-black dark:text-white hover:text-black dark:hover:text-black opacity-100" />
            </div>
            <div className="absolute bottom-1/5 right-8 hover:scale-105 animate-float-in-bottom icons-delay hover:translate-x-2 transition duration-300 hover:cursor-pointer">
              <SiPhp className="w-38 h-38 text-black dark:text-white hover:text-[#777BB4] dark:hover:text-[#777BB4] opacity-100" />
            </div>
            <div className="absolute top-1/7 right-9 rotate-11 hover:scale-105 animate-float-in-top icons-delay hover:translate-x-2 transition duration-300 hover:cursor-pointer">
              <SiLaravel className="w-42 h-42 text-black dark:text-white hover:text-[#fb503b] dark:hover:text-[#fb503b] opacity-100" />
            </div>
            <div className="absolute top-[60%] -left-4 -rotate-16 hover:scale-105 animate-float-in-bottom icons-delay hover:-translate-x-2 transition duration-300 hover:cursor-pointer">
              <SiJavascript className="w-28 h-28 text-black dark:text-white hover:text-[#F7DF1E] dark:hover:text-[#F7DF1E] opacity-100" />
            </div>
            <div className="absolute top-1/3 -left-0 hover:scale-105 animate-float-in-left icons-delay hover:-translate-x-2 transition duration-300 hover:cursor-pointer">
              <SiTailwindcss className="w-32 h-32 text-black dark:text-white hover:text-[#06B6D4] dark:hover:text-[#06B6D4] opacity-100" />
            </div>
          </div>
          
          <div className="relative w-full h-full transition-all duration-500 ease-in-out pointer-events-none [mask:linear-gradient(to_bottom,black_0%,black_70%,transparent_100%)] sm:md:[mask:linear-gradient(to_bottom,black_0%,black_50%,rgba(0,0,0,0.6)_70%,transparent_80%)]">
            <Image
              src="/portraits/halftone.svg"
              alt="Matt Cabarrubias Portrait Halftone"
              fill
              className="object-contain transition-opacity duration-500 ease-in-out group-hover:opacity-0 drop-shadow-[0_0_12px_rgba(0,0,0,0.5)]"
              priority
            />
            <Image
              src="/portraits/original.svg"
              alt="Matt Cabarrubias Portrait Original"
              fill
              className="object-contain opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 drop-shadow-[0_0_12px_rgba(0,0,0,0.5)]"
              priority
            />
          </div>
        </div>
      </div>

      <ProjectsSection />
    </main>
  );
}
