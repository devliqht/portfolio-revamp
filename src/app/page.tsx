'use client';
import React from 'react';
import Image from 'next/image';
import { SiReact, SiVercel, SiPhp, SiLaravel, SiJavascript, SiTailwindcss } from 'react-icons/si';
import Typewriter from '@/components/typewriter';

export default function Home() {
  return (
    <main>
      <div className="relative min-h-screen flex text-white overflow-hidden wavy-gradient-bottom" id="landing">
        <div className="flex flex-col gap-4 px-[5%] py-[3.7%] mt-8 z-10 relative h-fit transition" style={{transition: '1s all'}}>
          <div 
            className="absolute inset-0 z-0 opacity-60 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at center, black 0.8px, transparent 1px)`,
              backgroundSize: '13px 13px',
              backgroundPosition: '0 0',
              boxShadow: '0 0 24px 24px white inset'
            }}
          ></div>
          <h2 className="text-6xl font-dm-sans text-black font-light tracking-tighter">Matt Cabarrubias</h2>
          <h1 className="text-8xl font-dm-sans text-black font-semibold tracking-tight"><Typewriter text="devliqht" delay={150}/></h1>
          <h3 className="text-4xl font-baybayin text-black font-semibold tracking-tight pt-4">devliqht</h3>
        </div>
        <div className="absolute right-0 top-8/12 scale-110 -translate-y-1/2 w-[400px] h-[100%] group">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-[48%] right-8 hover:scale-110 animate-float-in-right animate-delay-100">
              <SiReact className="w-32 h-32 text-black opacity-100" />
            </div>
            <div className="absolute top-1/8 -left-0 -rotate-24 animate-float-in-left animate-delay-100">
              <SiVercel className="w-38 h-38 text-black opacity-100" />
            </div>
            <div className="absolute bottom-1/5 right-8 animate-float-in-bottom animate-delay-100">
              <SiPhp className="w-38 h-38 text-black opacity-100" />
            </div>
            <div className="absolute top-1/7 right-9 rotate-11 animate-float-in-top animate-delay-100">
              <SiLaravel className="w-42 h-42 text-black opacity-100" />
            </div>
            <div className="absolute top-[60%] -left-4 -rotate-16 animate-float-in-bottom animate-delay-100">
              <SiJavascript className="w-28 h-28 text-black opacity-100" />
            </div>
            <div className="absolute top-1/3 -left-0 animate-float-in-left animate-delay-100">
              <SiTailwindcss className="w-32 h-32 text-black opacity-100" />
            </div>
          </div>
          
          <div className="relative w-full h-full transition-all duration-500 ease-in-out group-hover:scale-105">
            <Image
              src="/portraits/halftone.svg"
              alt="Matt Cabarrubias Portrait Halftone"
              fill
              className="object-contain transition-opacity duration-500 ease-in-out group-hover:opacity-0"
              priority
            />
            <Image
              src="/portraits/original.svg"
              alt="Matt Cabarrubias Portrait Original"
              fill
              className="object-contain opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
