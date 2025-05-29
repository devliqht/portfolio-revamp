'use client';
import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="relative min-h-screen flex text-white overflow-hidden">
        <div className="flex flex-col gap-4 px-[5%] py-[3.7%] mt-8 z-10 relative h-fit">
          <div 
            className="absolute inset-0 z-0 opacity-60 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at center, black 0.8px, transparent 1px)`,
              backgroundSize: '13px 13px',
              backgroundPosition: '0 0',
              boxShadow: '0 0 16px 16px white inset'
            }}
          ></div>
          <h2 className="text-6xl font-dm-sans text-black font-light tracking-tighter">Matt Cabarrubias</h2>
          <h1 className="text-8xl font-dm-sans text-black font-semibold tracking-tight">devliqht</h1>
          <h3 className="text-4xl font-baybayin text-black font-semibold tracking-tight pt-4">devliqht</h3>
        </div>
        <div className="absolute right-0 top-8/12 scale-110 -translate-y-1/2 w-[400px] h-[100%] group">
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
