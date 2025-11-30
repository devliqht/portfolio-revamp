'use client';
import React, { useEffect, useState, useRef } from 'react';

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    const fallbackTimer = setTimeout(() => {
      setIsVisible(prev => (!prev ? true : prev));
    }, 2000);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className='bg-white dark:bg-black relative overflow-hidden'
        id='about'
      >
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          <div className='absolute top-20 left-10 w-64 h-64 bg-neutral-200/10 dark:bg-neutral-800/10 rounded-full blur-3xl' />
          <div className='absolute bottom-20 right-10 w-80 h-80 bg-neutral-300/10 dark:bg-neutral-700/10 rounded-full blur-3xl' />
          <div
            className='absolute inset-0 opacity-[0.1] dark:opacity-[0.02]'
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-6 pt-20'>
          <div
            className={`sm:text-center mb-4 sm:mb-16 mt-4 sm:mt-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className='text-[14vw] sm:text-6xl md:lg:text-[6vw] font-dm-sans font-semibold text-black dark:text-white tracking-tight mb-4 hover:cursor-pointer hover:text-transparent hover:[-webkit-text-stroke:2px_black] dark:hover:text-black dark:hover:[-webkit-text-stroke:2px_white]'>
              About Me
            </h2>
          </div>

          <div className='grid lg:grid-cols-2 gap-8 sm:gap-16 items-start mb-20'>
            <div
              className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            >
              <div>
                <h3 className='text-3xl md:text-5xl font-dm-sans font-normal text-black dark:text-white mb-2 sm:mb-6 tracking-tighter'>
                  Full-Stack Developer
                </h3>
                <div className='space-y-4 text-lg tracking-tight font-extralight text-neutral-700 dark:text-neutral-300 leading-relaxed'>
                  <p>
                    I am a 20 year old BSCS student at the University of San
                    Carlos, specializing in web development, UI/UX design, and
                    video editing. As a quick learner with a lifelong passion
                    for coding, I bring creativity and technical expertise to my
                    projects. I thrive in collaborative settings, often stepping
                    up as a group leader, and I approach challenges
                    methodically, driven by curiosity and a desire to solve
                    problems effectively.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`space-y-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            >
              <div>
                <h3 className='text-3xl md:text-5xl font-dm-sans font-light text-black dark:text-white mb-6 tracking-tighter'>
                  Education
                </h3>
                <div className='space-y-6'>
                  <div className='border-l-4 border-black dark:border-white pl-6'>
                    <h4 className='text-lg font-dm-sans font-medium text-black dark:text-white'>
                      Bachelor of Science in Computer Science
                    </h4>
                    <p className='text-neutral-600 dark:text-neutral-400 font-light text-sm'>
                      University of San Carlos 2024 - 2027
                    </p>
                    <p className='text-neutral-700 dark:text-neutral-300 mt-2 text-sm'>
                      Specialized in Software Engineering and Web Development.
                      Relevant coursework included Data Structures, Algorithms,
                      Database Systems, and Software Engineering Principles.
                    </p>
                  </div>
                  <div className='border-l-4 border-black dark:border-white pl-6'>
                    <h4 className='text-lg font-dm-sans font-medium text-black dark:text-white'>
                      Senior High School - STEM
                    </h4>
                    <p className='text-neutral-600 dark:text-neutral-400 font-light text-sm'>
                      University of San Carlos 2022 - 2024
                    </p>
                    <p className='text-neutral-700 dark:text-neutral-300 mt-2 text-sm'>
                      Enrolled in Technology Track of the Philippines&apos; STEM
                      curriculum. Relevant coursework include Computer
                      Fundamentals and Programming.
                    </p>
                  </div>
                  <div className='border-l-4 border-neutral-400 dark:border-neutral-600 pl-6'>
                    <h4 className='text-base font-dm-sans font-medium text-neutral-800 dark:text-neutral-200'>
                      Relevant Certifications
                    </h4>
                    <ul className='text-neutral-600 dark:text-neutral-400 mt-2 space-y-1 text-sm'>
                      <li>• CCNA: Introduction to Networking Certification</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          /* Styles specific to AboutSection if any */
          @keyframes float-in-bottom {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-float-in-bottom {
            animation: float-in-bottom 0.8s ease-out forwards;
          }
        `}</style>
      </section>
    </>
  );
};

export default AboutSection;
