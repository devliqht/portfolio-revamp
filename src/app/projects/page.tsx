'use client';
import React, { useEffect, useState, useRef, useMemo } from 'react';
import { projects } from '@/lib/projects';
import Image from 'next/image';

export default function ProjectsSection() {
  const [scroll_progress, set_scroll_progress] = useState(0);
  const [current_project, set_current_project] = useState(0);
  const [previous_project, set_previous_project] = useState(0);
  const animation_frame_ref = useRef<number | null>(null);
  const last_scroll_time_ref = useRef<number>(0);

  useEffect(() => {
    const handle_scroll = () => {
      const now = performance.now();
      
      if (now - last_scroll_time_ref.current < 16) return;
      last_scroll_time_ref.current = now;
      if (animation_frame_ref.current) {
        cancelAnimationFrame(animation_frame_ref.current);
      }
      
      animation_frame_ref.current = requestAnimationFrame(() => {
        const projects_section = document.getElementById('projects');
        if (projects_section) {
          const rect = projects_section.getBoundingClientRect();
          const section_top = window.scrollY + rect.top;
          const section_bottom = section_top + projects_section.offsetHeight;
          const current_scroll_y = window.scrollY;
          
          if (current_scroll_y >= section_top && current_scroll_y <= section_bottom) {
            const scroll_in_section = Math.max(0, current_scroll_y - section_top);
            const total_height = projects.length * window.innerHeight;
            
            const settle_in_buffer = window.innerHeight * 0.3;
            const adjusted_scroll_in_section = Math.max(0, scroll_in_section - settle_in_buffer);
            const adjusted_total_height = total_height - settle_in_buffer;
            
            const progress = Math.min(adjusted_scroll_in_section / adjusted_total_height, 1);
            set_scroll_progress(progress);
            
            const exact_project_index = progress * projects.length;
            const new_project_index = Math.floor(exact_project_index + 0.2); 
            const new_project = Math.min(Math.max(0, new_project_index), projects.length - 1);
            
            if (new_project !== current_project) {
              set_previous_project(current_project);
              set_current_project(new_project);
            }
          }
        }
      });
    };

    window.addEventListener('scroll', handle_scroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handle_scroll);
      if (animation_frame_ref.current) {
        cancelAnimationFrame(animation_frame_ref.current);
      }
    };
  }, [current_project]);
  
  const is_moving_forward = current_project > previous_project;
  const exact_project_index = useMemo(() => scroll_progress * projects.length, [scroll_progress]);
  
  const visible_projects = useMemo(() => {
    return projects.map((project, index) => {
      const base_offset = index - exact_project_index;
      const abs_offset = Math.abs(base_offset);
      
      if (abs_offset > 1.5) return null;
      
      let opacity;
      if (abs_offset < 0.2) {
        opacity = 1;
      } else if (abs_offset < 0.8) {
        opacity = Math.max(0, 1 - Math.pow((abs_offset - 0.2) / 0.6, 3) * 0.9);
      } else {
        opacity = Math.max(0, 0.1 - (abs_offset - 0.8) * 0.15);
      }
      
      return {
        ...project,
        index,
        base_offset,
        abs_offset,
        translate_x: base_offset * 220, 
        translate_z: -abs_offset * 180,
        scale: Math.max(0.75, 1 - abs_offset * 0.25),
        opacity,
        rotate_y: base_offset * 5,
        z_index: projects.length - Math.floor(abs_offset)
      };
    }).filter((project): project is NonNullable<typeof project> => project !== null);
  }, [exact_project_index]);

  return (
    <div className="min-h-screen relative" id="projects" style={{ height: `${projects.length * 100}vh` }}>
      <div className="sticky top-0 h-screen flex flex-col-reverse sm:md:flex-row"> 
        <div className="w-full lg:w-2/5 flex items-center justify-center h-full p-6 lg:p-1">
          <div className="max-w-lg w-full sm:md:p-8">
            <div key={current_project} className="transition-all duration-300 ease-out" /*style={{ animation: is_moving_forward ? 'slideUp 0.3s ease-out' : 'slideDown 0.3s ease-out' }} */>
              <h3 className="text-[6rem] sm:md:text-[12vw] font-semibold text-neutral-900 dark:text-neutral-100 hover:cursor-pointer hover:text-transparent hover:[-webkit-text-stroke:2px_black] dark:hover:text-black dark:hover:[-webkit-text-stroke:2px_white] mb-4 tracking-tighter leading-[0.8] font-dm-sans">
                {projects[current_project]?.title}
              </h3>
              {/* <p className="text-base lg:text-lg text-neutral-700 dark:text-neutral-200 mb-6 leading-relaxed tracking-tight font-extralight font-dm-sans">
                {projects[current_project]?.description}
              </p> */}
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[current_project]?.tags.slice(0, 8).map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 rounded-full tracking-tight text-xs lg:text-sm font-light">
                    {tag}
                  </span>
                ))}
              </div>
              <a href={projects[current_project]?.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 text-black border-[1px] border-black dark:border-white dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-lg transition-colors duration-100">
                View Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/5 relative overflow-hidden min-h-[50vh] lg:min-h-full">
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="mb-8 absolute top-[7vw]">
              {/* <h2 className="text-4xl md:text-[8vw] font-semibold text-black mb-2 tracking-tighter font-dm-sans">projects</h2> */}
            </div>
            <div className="relative w-full max-w-2xl h-80 lg:h-96" style={{ perspective: '1000px' }}>
              {visible_projects.map((project) => (
                <div key={project.id} className="absolute inset-0 will-change-transform" style={{ transform: `translate3d(${project.translate_x}px, 0, ${project.translate_z}px) rotateY(${project.rotate_y}deg) scale(${project.scale})`, opacity: project.opacity, zIndex: project.z_index }}>
                  <div className="relative w-full h-full">
                    <div className="w-full h-full overflow-hidden rounded-lg" style={{ transform: 'translateZ(20px)', maxWidth: '1000px', maxHeight: '400px', margin: '0 auto' }}>
                      <Image src={project.imageUrl} alt={project.title} fill className="object-contain" sizes="(max-width: 768px) 90vw, 600px" priority={project.abs_offset <= 1} loading={project.abs_offset <= 1 ? 'eager' : 'lazy'} />
                      {project.abs_offset < 0.5 && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
              {projects.map((_, index) => {
                const distance_from_current = Math.abs(index - exact_project_index);
                const isActive = distance_from_current < 0.7;
                return (
                  <div key={index} className={`h-2 rounded-full transition-all duration-200 ${isActive ? 'bg-black dark:bg-neutral-100' : 'bg-neutral-300 dark:bg-neutral-500'}`} style={{width: isActive ? '24px' : '8px'}}/>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          0% {
            transform: translateY(15px);
          }
          100% {
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          0% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
} 