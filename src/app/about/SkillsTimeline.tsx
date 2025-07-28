'use client';
import React, { useEffect, useState, useRef } from 'react';
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

// --- Refined Constants for Layout Calculation ---
// Heights of different parts of the card content area
const CARD_HEADER_APPROX_HEIGHT_PX = 70; // Icon + Title + Year text + margin-bottom
const MAX_CARD_DESCRIPTION_HEIGHT_PX = 130; // Max height for the scrollable description paragraph

// Padding and Border of the card box itself
const CARD_PADDING_SINGLE_SIDE_PX = 24; // p-6 means 1.5rem. Assuming 1rem = 16px. (1.5 * 16 = 24)
const CARD_INTERNAL_CONTENT_PADDING_TOTAL_VERTICAL_PX =
  CARD_PADDING_SINGLE_SIDE_PX * 2;
const CARD_BORDER_WIDTH_SINGLE_SIDE_PX = 2; // border-2
const CARD_BORDER_TOTAL_VERTICAL_PX = CARD_BORDER_WIDTH_SINGLE_SIDE_PX * 2;

// Total maximum height of the card's content box (inner dimensions)
const MAX_CARD_CONTENT_BOX_HEIGHT_PX =
  CARD_HEADER_APPROX_HEIGHT_PX +
  MAX_CARD_DESCRIPTION_HEIGHT_PX +
  CARD_INTERNAL_CONTENT_PADDING_TOTAL_VERTICAL_PX;

// Total maximum outer height of the card (including its own border)
const MAX_CARD_OUTER_HEIGHT_PX =
  MAX_CARD_CONTENT_BOX_HEIGHT_PX + CARD_BORDER_TOTAL_VERTICAL_PX;

// Connecting line and gap
const FIXED_LINE_HEIGHT_PX = 64; // h-16 (4rem * 16px)
const GAP_BETWEEN_CARD_AND_LINE_PX = 8; // mt-2 or mb-2 (0.5rem * 16px)

// This is half the total height of the (Card at its max outer height + Gap + Fixed Line) block.
// This is the amount the assembly needs to be translated.
const CARD_ASSEMBLY_VERTICAL_OFFSET_PX =
  (MAX_CARD_OUTER_HEIGHT_PX +
    GAP_BETWEEN_CARD_AND_LINE_PX +
    FIXED_LINE_HEIGHT_PX) /
  2;

export const SkillsTimeline: React.FC = () => {
  const timelineContentRef = useRef<HTMLDivElement>(null);
  const stickyContainerRef = useRef<HTMLDivElement>(null);
  const stickyElementRef = useRef<HTMLDivElement>(null);

  const [scrollOffset, setScrollOffset] = useState(0);
  const [maxHorizontalScroll, setMaxHorizontalScroll] = useState(0);
  const [containerHeight, setContainerHeight] = useState('200vh');

  const timelineItemWidth = 400;
  const cardWidth = 320;

  useEffect(() => {
    const calculateSizes = () => {
      if (timelineContentRef.current && stickyElementRef.current) {
        const calculatedMaxScroll =
          (ComputerSkills.length - 1) * timelineItemWidth;
        setMaxHorizontalScroll(Math.max(0, calculatedMaxScroll));
        const scrollSensitivityFactor = 1.5;
        const parallaxScrollHeight =
          Math.max(0, calculatedMaxScroll) * scrollSensitivityFactor;
        setContainerHeight(`calc(100vh + ${parallaxScrollHeight}px)`);
      }
    };
    calculateSizes();
    window.addEventListener('resize', calculateSizes);
    return () => window.removeEventListener('resize', calculateSizes);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        !stickyContainerRef.current ||
        !stickyElementRef.current ||
        maxHorizontalScroll <= 0
      ) {
        if (maxHorizontalScroll === 0 && scrollOffset !== 0) setScrollOffset(0);
        return;
      }
      const stickyContainerRect =
        stickyContainerRef.current.getBoundingClientRect();
      const scrollTopRelativeToContainerStart = -stickyContainerRect.top;
      const parallaxEffectVerticalRange =
        stickyContainerRef.current.offsetHeight - window.innerHeight;
      if (parallaxEffectVerticalRange <= 0) {
        setScrollOffset(
          scrollTopRelativeToContainerStart > 0 ? maxHorizontalScroll : 0
        );
        return;
      }
      let currentHorizontalScroll = 0;
      if (scrollTopRelativeToContainerStart <= 0) currentHorizontalScroll = 0;
      else if (scrollTopRelativeToContainerStart >= parallaxEffectVerticalRange)
        currentHorizontalScroll = maxHorizontalScroll;
      else
        currentHorizontalScroll =
          (scrollTopRelativeToContainerStart / parallaxEffectVerticalRange) *
          maxHorizontalScroll;
      setScrollOffset(currentHorizontalScroll);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [maxHorizontalScroll, scrollOffset]);

  return (
    <section
      ref={stickyContainerRef}
      style={{ height: containerHeight, position: 'relative' }}
      id='skills'
    >
      <div
        ref={stickyElementRef}
        className='sticky top-0 h-screen w-full overflow-hidden flex flex-col'
      >
        <div className='relative w-full max-w-7xl mx-auto px-6 pt-12 pb-6 md:pt-20 md:pb-10 flex-shrink-0'>
          <h3 className='text-4xl md:text-[6vw] font-dm-sans font-semibold text-black dark:text-white text-center tracking-tight pt-8'>
            What I like to do
          </h3>
        </div>

        <div className='relative w-full flex-grow h-[600px] overflow-hidden'>
          <div
            ref={timelineContentRef}
            className='relative flex items-center transition-transform duration-300 ease-out'
            style={{
              transform: `translateX(-${scrollOffset}px)`,
              width: `${ComputerSkills.length * timelineItemWidth}px`,
              height: '100%',
              paddingLeft: `calc(50vw - ${timelineItemWidth / 2}px)`,
              paddingRight: `calc(50vw - ${timelineItemWidth / 2}px)`,
              transitionProperty: 'transform',
              transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
              willChange: 'transform',
            }}
          >
            <div
              className='absolute top-1/2 left-0 h-1 bg-gradient-to-r from-black via-neutral-600 to-black dark:from-white dark:via-neutral-400 dark:to-white transform -translate-y-1/2 z-0'
              style={{ width: '100%' }}
            />
            {ComputerSkills.map((skill, index) => {
              const isEven = index % 2 === 0;
              const itemSlotLeftPosition =
                index * timelineItemWidth + timelineItemWidth / 2;
              return (
                <div
                  key={index}
                  className='absolute'
                  style={{
                    left: `${itemSlotLeftPosition}px`,
                    top: '50%',
                    width: `${timelineItemWidth}px`,
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <div
                    className='absolute w-6 h-6 bg-black dark:bg-white rounded-full border-4 border-white dark:border-black z-20'
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                  <div
                    className='relative flex flex-col items-center transition-all duration-300 ease-out'
                    style={{
                      width: `${cardWidth}px`,
                      transform: isEven
                        ? `translateY(-${CARD_ASSEMBLY_VERTICAL_OFFSET_PX}px)`
                        : `translateY(${CARD_ASSEMBLY_VERTICAL_OFFSET_PX}px)`,
                    }}
                  >
                    <div
                      className={`bg-white dark:bg-black rounded-lg p-6 w-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:cursor-pointer border-2 border-transparent hover:border-neutral-200 dark:hover:border-neutral-700 ${isEven ? 'order-1' : 'order-2'}`}
                      style={{
                        willChange: 'transform, box-shadow',
                        backfaceVisibility: 'hidden',
                      }}
                    >
                      <div className='flex items-center gap-4 mb-3'>
                        <div className='text-black dark:text-white'>
                          {skill.icon}
                        </div>
                        <div>
                          <h4 className='text-lg font-dm-sans font-semibold text-black dark:text-white'>
                            {skill.name}
                          </h4>
                        </div>
                      </div>
                      <p
                        className='text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed custom-scrollbar'
                        style={{
                          maxHeight: `${MAX_CARD_DESCRIPTION_HEIGHT_PX}px`,
                          overflowY: 'auto',
                        }}
                      >
                        {skill.description}
                      </p>
                    </div>
                    <div
                      className={`w-1 bg-black dark:bg-white h-16 transition-all duration-300 ease-out ${isEven ? 'order-2 mt-2' : 'order-1 mb-2'}`}
                      style={{
                        willChange: 'transform',
                        backfaceVisibility: 'hidden',
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className='text-center py-4 flex-shrink-0 relative z-20'>
          <p className='text-sm text-neutral-600 dark:text-neutral-400 font-dm-sans'>
            Scroll to explore the timeline →
          </p>
        </div>
      </div>
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(128, 128, 128, 0.5);
          border-radius: 3px;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(128, 128, 128, 0.5) transparent;
        }
      `}</style>
    </section>
  );
};
