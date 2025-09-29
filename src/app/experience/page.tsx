'use client';
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

import { experiences, type Experience } from '@/lib/experience';

export default function ExperienceSection() {
  const [visible_items, set_visible_items] = useState<number[]>([]);
  const section_ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute('data-index') || '0'
            );
            set_visible_items(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = section_ref.current?.querySelectorAll('[data-index]');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={section_ref}
      id='experience'
      className='py-20 px-6 bg-white dark:bg-black min-h-screen'
    >
      <div className='max-w-6xl mx-auto'>
        {/* section header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-6xl font-dm-sans font-semibold text-black dark:text-white tracking-tight hover:cursor-pointer hover:text-transparent hover:[-webkit-text-stroke:2px_black] dark:hover:text-transparent dark:hover:[-webkit-text-stroke:2px_white] transition-all duration-300'>
            Experience
          </h2>
        </div>

        {/* experience grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {experiences.map((exp: Experience, index: number) => {
            const is_visible = visible_items.includes(index);
            const animation_delay = index * 150;

            return (
              <div
                key={exp.id}
                data-index={index}
                className={`group relative bg-white dark:bg-neutral-900 rounded-xl border-2 border-neutral-200 dark:border-neutral-700 hover:border-black dark:hover:border-white transition-all duration-300 hover:cursor-pointer flex flex-col ${
                  is_visible ? 'animate-float-in-bottom' : 'opacity-0'
                }`}
                style={{ animationDelay: `${animation_delay}ms` }}
              >
                <div className='flex flex-col h-full'>
                  {/* company logo */}
                  <div className='relative w-full h-48 md:h-64 lg:h-75 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 transition-transform duration-300'>
                    <Image
                      src={exp.logo_url}
                      alt={`${exp.company} logo`}
                      fill
                      className='object-cover'
                    />
                  </div>

                  <div className='p-4 flex flex-col flex-1'>
                    <div className='flex-1'>
                      {/* role title */}
                      <h3 className='text-xl md:text-2xl font-dm-sans font-semibold text-black dark:text-white tracking-tight'>
                        {exp.role}
                      </h3>

                      {/* company name */}
                      <h4 className='text-lg font-dm-sans font-medium text-neutral-600 dark:text-neutral-400'>
                        {exp.company}
                      </h4>

                      {/* period */}
                      <p className='text-sm font-dm-sans text-neutral-500 dark:text-neutral-500 mb-4 tracking-wide'>
                        {exp.period}
                      </p>

                      {/* description */}
                      <p className='text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6 font-dm-sans font-light'>
                        {exp.description}
                      </p>
                    </div>

                    {/* view organization link */}
                    <a
                      href={exp.company_url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 px-4 py-2 text-sm text-black dark:text-white border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-lg transition-colors duration-200 font-dm-sans self-end'
                    >
                      View Organization
                      <ExternalLink className='w-4 h-4' />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
