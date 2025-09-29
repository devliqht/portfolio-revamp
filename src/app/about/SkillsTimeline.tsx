'use client';
import React from 'react';
import { MdOutlineWeb } from 'react-icons/md';
import { FaPhotoVideo } from 'react-icons/fa';
import { CgIfDesign } from 'react-icons/cg';
import { MdOutlineGraphicEq } from 'react-icons/md';
import { MdPhoto } from 'react-icons/md';
import { SiAdobelightroomclassic } from 'react-icons/si';
import { PiFileCpp } from 'react-icons/pi';

const iconSize: number = 40;
const ComputerSkills = [
  {
    icon: <MdOutlineWeb size={iconSize} />,
    name: 'Web Development',
    description:
      'Built responsive and interactive web applications using modern frameworks like React.js and TailwindCSS for school, personal projects, and business needs.',
    year: '2022',
  },
  {
    icon: <FaPhotoVideo size={iconSize} />,
    name: 'Video Editing',
    description:
      'Edited videos ranging from motion graphics and short-form content to professional campaign and promotional videos using software like Vegas PRO, Adobe After Effects and DaVinci Resolve.',
    year: '2020',
  },
  {
    icon: <CgIfDesign size={iconSize} />,
    name: 'UI/UX Design',
    description:
      'Designed intuitive and aesthetically pleasing user interfaces, focusing on user experience principles using Figma and Canva.',
    year: '2023',
  },
  {
    icon: <MdOutlineGraphicEq size={iconSize} />,
    name: 'Graphic Design',
    description:
      'Created visually appealing designs, including branding materials, posters, social media graphics, and digital illustrations using Paint.NET and Canva.',
    year: '2021',
  },
  {
    icon: <MdPhoto size={iconSize} />,
    name: 'Photography',
    description:
      'Captured and edited high-quality photographs for creative and professional use, including portraits, landscapes, and personal photos.',
    year: '2019',
  },
  {
    icon: <SiAdobelightroomclassic size={iconSize} />,
    name: 'Color Grading',
    description:
      'Enhanced and corrected colors in photos and videos to achieve cinematic and stylistic effects using Adobe Lightroom Classic, DaVinci Resolve and Magic Bullet Suite.',
    year: '2021',
  },
  {
    icon: <PiFileCpp size={iconSize} />,
    name: 'Systems Programming',
    description:
      'Developed low-level applications using C and C++, with a focus on memory management and manipulation, engaging of games such as Minecraft Bedrock Edition.',
    year: '2024',
  },
];

export const SkillsTimeline: React.FC = () => {
  return (
    <section id='skills' className='py-20 px-6'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-16'>
          <h3 className='text-4xl md:text-6xl font-dm-sans font-semibold text-black dark:text-white tracking-tight'>
            What I like to do
          </h3>
        </div>

        <div className='relative'>
          <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-black via-neutral-600 to-black dark:from-white dark:via-neutral-400 dark:to-white'></div>

          <div className='space-y-12'>
            {ComputerSkills.map((skill, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className='relative flex items-center'>
                  <div className='absolute left-6 w-6 h-6 bg-black dark:bg-white rounded-full border-4 border-white dark:border-black z-10'></div>

                  <div className={`flex-1 ${isEven ? 'ml-20' : 'ml-20 mr-8'}`}>
                    <div className={`flex ${!isEven ? 'justify-end' : ''}`}>
                      <div className='max-w-md'>
                        <div className='bg-white dark:bg-black rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:cursor-pointer border-2 border-neutral-200 dark:hover:border-neutral-700'>
                          <div className='flex items-center gap-4 mb-4'>
                            <div className='text-black dark:text-white'>
                              {skill.icon}
                            </div>
                            <div>
                              <h4 className='text-lg font-dm-sans font-semibold text-black dark:text-white'>
                                {skill.name}
                              </h4>
                              <span className='text-sm text-neutral-500 dark:text-neutral-400 font-dm-sans'>
                                {skill.year}
                              </span>
                            </div>
                          </div>

                          <p className='text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed'>
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className='text-center pt-12'>
          <p className='text-sm text-neutral-600 dark:text-neutral-400 font-dm-sans'>
            Scroll down to explore more skills
          </p>
        </div>
      </div>
    </section>
  );
};
