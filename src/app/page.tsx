'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import {
  SiReact,
  SiVercel,
  SiPhp,
  SiLaravel,
  SiJavascript,
  SiTailwindcss,
} from 'react-icons/si';

import Typewriter from '@/components/typewriter';
import ProjectsSection from '@/app/projects/page';
// import TechSection from '@/app/tech/page';
import TechSectionSW from '@/app/tech/page';
import ExperienceSection from '@/app/experience/page';
import Footer from '@/components/footer';
import Beams from '@/components/Beams';
// import { SkillsTimeline } from '@/app/about/SkillsTimeline';

export default function Home() {
  const [isTypewriterComplete, setIsTypewriterComplete] = useState(false);

  const handleTypewriterComplete = () => {
    setIsTypewriterComplete(true);
  };

  return (
    <main suppressHydrationWarning={true}>
      <div
        className={`relative min-h-screen flex text-white overflow-hidden`}
        id='landing'
      >
        {/* beams bg */}
        <div className='absolute inset-0 z-0'>
          <Beams
            beamWidth={3}
            beamHeight={30}
            beamNumber={12}
            lightColor='#ffffff'
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={-45}
          />
        </div>

        <div className='flex flex-col px-[5.8%] sm:md:px-[2.7%] top-12 sm:md:top-8 sm:md:pt-[4%] mt-8 z-10 relative h-fit transition'>
          <h2
            className={`text-[8vw] sm:text-5xl md:text-6xl font-dm-mono font-light tracking-tighter bg-gradient-to-r from-neutral-800 via-neutral-500 to-neutral-400 dark:from-neutral-100 dark:via-neutral-300 dark:to-neutral-400 bg-clip-text text-transparent ${isTypewriterComplete ? 'animate-float-in-bottom opacity-80 animate-delay-300' : ''} opacity-0`}
          >
            Matt Cabarrubias
          </h2>
          <h1 className='text-[19vw] sm:md:lg:xl:text-[12vw] -translate-y-[8vw] sm:md:lg:xl:-translate-y-[4vw]'>
            <Typewriter
              text='devliqht'
              delay={150}
              onComplete={handleTypewriterComplete}
            />
          </h1>
        </div>
        <div className='absolute bottom-0 px-[5%] pb-[4.7%] sm:md:left-0 right-0'>
          <div
            className={`text-2xl sm:text-3xl md:text-[3.4vw] font-dm-sans text-gray-900 dark:text-gray-100 font-extralight tracking-tighter mb-4 transition-opacity ${isTypewriterComplete ? 'animate-float-in-top' : ''} sm:md:text-left text-right opacity-0`}
          >
            Full Stack, AI &amp; Devops
          </div>
          <h3
            className={`text-2xl sm:md:text-4xl font-baybayin text-black sm:md:text-left text-right dark:text-white font-semibold tracking-tight ${isTypewriterComplete ? 'animate-float-in-top' : ''} opacity-0`}
          >
            devliqht
          </h3>
        </div>
        <div className='absolute right-0 top-8/12 scale-110 -translate-y-1/2 w-[400px] h-[560px] sm:h-[720px] md:h-[860px] group'>
          <div className='absolute inset-0 -z-10'>
            <div
              className={`absolute top-[48%] right-8 hover:scale-105 ${isTypewriterComplete ? 'animate-float-in-right' : ''} hover:translate-x-2 transition duration-300 hover:cursor-pointer opacity-0`}
            >
              <SiReact className='w-32 h-32 text-black dark:text-white hover:text-[#00D8FF] dark:hover:text-[#00D8FF] opacity-100' />
            </div>
            <div
              className={`absolute top-1/8 -left-0 -rotate-24 hover:scale-105 ${isTypewriterComplete ? 'animate-float-in-left' : ''} hover:-translate-x-2 transition duration-300 hover:cursor-pointer opacity-0`}
            >
              <SiVercel className='w-38 h-38 text-black dark:text-white hover:text-black dark:hover:text-black opacity-100' />
            </div>
            <div
              className={`absolute bottom-1/5 right-8 hover:scale-105 ${isTypewriterComplete ? 'animate-float-in-bottom' : ''} hover:translate-x-2 transition duration-300 hover:cursor-pointer opacity-0`}
            >
              <SiPhp className='w-38 h-38 text-black dark:text-white hover:text-[#777BB4] dark:hover:text-[#777BB4] opacity-100' />
            </div>
            <div
              className={`absolute top-1/7 right-9 rotate-11 hover:scale-105 ${isTypewriterComplete ? 'animate-float-in-top' : ''} hover:translate-x-2 transition duration-300 hover:cursor-pointer opacity-0`}
            >
              <SiLaravel className='w-42 h-42 text-black dark:text-white hover:text-[#fb503b] dark:hover:text-[#fb503b] opacity-100' />
            </div>
            <div
              className={`absolute top-[60%] -left-4 -rotate-16 hover:scale-105 ${isTypewriterComplete ? 'animate-float-in-bottom' : ''} hover:-translate-x-2 transition duration-300 hover:cursor-pointer opacity-0`}
            >
              <SiJavascript className='w-28 h-28 text-black dark:text-white hover:text-[#F7DF1E] dark:hover:text-[#F7DF1E] opacity-100' />
            </div>
            <div
              className={`absolute top-1/3 -left-0 hover:scale-105 ${isTypewriterComplete ? 'animate-float-in-left' : ''} hover:-translate-x-2 transition duration-300 hover:cursor-pointer opacity-0`}
            >
              <SiTailwindcss className='w-32 h-32 text-black dark:text-white hover:text-[#06B6D4] dark:hover:text-[#06B6D4] opacity-100' />
            </div>
          </div>

          <div
            className={`relative w-full h-full transition-all duration-500 ease-in-out pointer-events-none [mask:linear-gradient(to_bottom,black_0%,black_70%,transparent_100%)] sm:md:[mask:linear-gradient(to_bottom,black_0%,black_50%,rgba(0,0,0,0.6)_70%,transparent_80%)] ${isTypewriterComplete ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src='/portraits/halftone.svg'
              alt='Matt Cabarrubias Portrait Halftone'
              fill
              className='object-contain transition-opacity duration-500 ease-in-out group-hover:opacity-0 drop-shadow-[0_0_12px_rgba(0,0,0,0.5)]'
              priority
            />
            <Image
              src='/portraits/original.svg'
              alt='Matt Cabarrubias Portrait Original'
              fill
              className='object-contain opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 drop-shadow-[0_0_12px_rgba(0,0,0,0.5)]'
              priority
            />
          </div>
        </div>
      </div>

      <TechSectionSW />
      {/*<TechSection />*/}
      <ProjectsSection />
      <ExperienceSection />
      {/*<SkillsTimeline />*/}
      <Footer />
    </main>
  );
}
