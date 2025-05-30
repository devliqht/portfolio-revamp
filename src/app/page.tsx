'use client';
import React from 'react';
import Image from 'next/image';
import { SiReact, SiVercel, SiPhp, SiLaravel, SiJavascript, SiTailwindcss } from 'react-icons/si';
import Typewriter from '@/components/typewriter';
import ProjectsSection from '@/components/projects/page';

export default function Home() {
  return (
    <main>
      <div className="relative min-h-screen flex text-white overflow-hidden wavy-gradient-bottom" id="landing">
        <div className="flex flex-col px-[5%] py-[3.7%] mt-8 z-10 relative h-fit transition" style={{transition: '1s all'}}>
          <h2 className="text-6xl font-dm-sans font-light tracking-tighter bg-gradient-to-r from-neutral-800 via-neutral-500 to-neutral-400 bg-clip-text text-transparent animate-float-in-bottom text-delay">Matt Cabarrubias</h2>
          <h1 className="text-[14vw] font-dm-sans text-black font-semibold tracking-tight hover:cursor-pointer hover:text-transparent hover:[-webkit-text-stroke:2px_black] -translate-y-[4vw]"><Typewriter text="devliqht" delay={150}/></h1>
          <h3 className="text-4xl font-baybayin text-black font-semibold tracking-tight pt-4 animate-float-in-top text-delay">devliqht</h3>
        </div>
        <div className="absolute right-0 top-8/12 scale-110 -translate-y-1/2 w-[400px] h-[560px] sm:h-[720px] md:h-[860px] group">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-[48%] right-8 hover:scale-105 animate-float-in-right icons-delay hover:translate-x-2 transition duration-300 hover:cursor-pointer">
              <SiReact className="w-32 h-32 text-black opacity-100" />
            </div>
            <div className="absolute top-1/8 -left-0 -rotate-24 hover:scale-105 animate-float-in-left icons-delay hover:-translate-x-2 transition duration-300 hover:cursor-pointer">
              <SiVercel className="w-38 h-38 text-black opacity-100" />
            </div>
            <div className="absolute bottom-1/5 right-8 hover:scale-105 animate-float-in-bottom icons-delay hover:translate-x-2 transition duration-300 hover:cursor-pointer">
              <SiPhp className="w-38 h-38 text-black opacity-100" />
            </div>
            <div className="absolute top-1/7 right-9 rotate-11 hover:scale-105 animate-float-in-top icons-delay hover:translate-x-2 transition duration-300 hover:cursor-pointer">
              <SiLaravel className="w-42 h-42 text-black opacity-100" />
            </div>
            <div className="absolute top-[60%] -left-4 -rotate-16 hover:scale-105 animate-float-in-bottom icons-delay hover:-translate-x-2 transition duration-300 hover:cursor-pointer">
              <SiJavascript className="w-28 h-28 text-black opacity-100" />
            </div>
            <div className="absolute top-1/3 -left-0 hover:scale-105 animate-float-in-left icons-delay hover:-translate-x-2 transition duration-300 hover:cursor-pointer">
              <SiTailwindcss className="w-32 h-32 text-black opacity-100" />
            </div>
          </div>
          
          <div className="relative w-full h-full transition-all duration-500 ease-in-out pointer-events-none">
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
