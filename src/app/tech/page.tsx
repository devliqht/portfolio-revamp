'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { 
  SiReact, SiVercel, SiPhp, SiLaravel, SiJavascript, SiTailwindcss,
  SiTypescript, SiNextdotjs, SiNodedotjs, SiMongodb, SiPostgresql,
  SiGit, SiDocker, SiPython, SiMysql
} from 'react-icons/si';

interface TechIcon {
  Icon: React.ComponentType<any>;
  name: string;
  color: string;
  x: number;
  y: number;
  z: number; // Initial Z offset for the icon within its "slot"
  id: string;
  order: number;
}

const techIcons: TechIcon[] = [
  // Adjusted initial Z values to be more spread out and start further back
  // The `order` and this initial `z` will work together.
  { Icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E', x: 100, y: 100, z: -2500, id: 'javascript', order: 1 },
  { Icon: SiReact, name: 'React', color: '#00D8FF', x: -200, y: -150, z: -2400, id: 'react', order: 2 },
  { Icon: SiTypescript, name: 'TypeScript', color: '#3178C6', x: -100, y: 200, z: -2300, id: 'typescript', order: 3 },
  { Icon: SiNextdotjs, name: 'Next.js', color: '#FFFFFF', x: 150, y: -200, z: -2200, id: 'nextjs', order: 4 },
  { Icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4', x: -300, y: 50, z: -2100, id: 'tailwind', order: 5 },
  { Icon: SiNodedotjs, name: 'Node.js', color: '#339933', x: 250, y: -100, z: -2000, id: 'nodejs', order: 6 },
  { Icon: SiMongodb, name: 'MongoDB', color: '#47A248', x: 0, y: 250, z: -1900, id: 'mongodb', order: 7 },
  { Icon: SiPostgresql, name: 'PostgreSQL', color: '#336791', x: -150, y: -250, z: -1800, id: 'postgresql', order: 8 },
  { Icon: SiLaravel, name: 'Laravel', color: '#fb503b', x: -250, y: -50, z: -1700, id: 'laravel', order: 9 },
  { Icon: SiMysql, name: 'MySQL', color: '#4479A1', x: 350, y: -150, z: -1600, id: 'mysql', order: 10 },
  { Icon: SiPython, name: 'Python', color: '#3776AB', x: -250, y: 150, z: -1500, id: 'python', order: 11 },
  { Icon: SiPhp, name: 'PHP', color: '#777BB4', x: 300, y: 100, z: -1400, id: 'php', order: 12 },
  { Icon: SiGit, name: 'Git', color: '#F05032', x: -350, y: -150, z: -1300, id: 'git', order: 13 },
  { Icon: SiDocker, name: 'Docker', color: '#2496ED', x: 50, y: 200, z: -1200, id: 'docker', order: 14 },
  { Icon: SiVercel, name: 'Vercel', color: '#000000', x: 250, y: -50, z: -1100, id: 'vercel', order: 15 },
].sort((a, b) => a.order - b.order);


const rafThrottle = (callback: () => void) => {
  let requestId: number | null = null;

  const throttled = () => {
    if (requestId == null) {
      requestId = requestAnimationFrame(() => {
        requestId = null;
        callback();
      });
    }
  };

  throttled.cancel = () => {
    if (requestId != null) {
      cancelAnimationFrame(requestId);
      requestId = null;
    }
  };

  return throttled;
};


const TechSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleIcons, setVisibleIcons] = useState<string[]>([]);
  const totalIcons = techIcons.length;

  const updateScrollState = useCallback(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const containerHeight = container.offsetHeight;
    const sectionTop = rect.top;
    
    let progress = 0;
    const pixelsScrolledWithinStickyDuration = -sectionTop;
    const totalStickyScrollDuration = containerHeight - windowHeight;

    if (totalStickyScrollDuration > 0) {
         progress = Math.max(0, Math.min(1, pixelsScrolledWithinStickyDuration / totalStickyScrollDuration));
    } else {
        const scrolledThroughSection = windowHeight - sectionTop;
        const totalVisibleScrollHeight = containerHeight + windowHeight;
        progress = Math.max(0, Math.min(1, scrolledThroughSection / totalVisibleScrollHeight));
    }
    
    setScrollProgress(progress);

    const newVisibleIcons: string[] = [];
    const centerFocusZ = -200; // Where icons are most prominent
    const focusDepth = 600;   // How much Z depth around the centerFocusZ is considered "active"

    techIcons.forEach(icon => {
        // Calculate an approximate current Z for this icon based on overall progress
        // This is a simplified version of what's in the render, for visibility check
        const iconProgressPoint = (icon.order -1) / totalIcons; // 0 for first, near 1 for last
        const groupTravel = groupEndZ - groupBaseZ;
        
        // Estimate how much this icon has "flown forward"
        // This is tricky because iconFlyProgress itself depends on scrollProgress.
        // For simplicity here, we tie it to the icon's order.
        // A more accurate way would be to calculate the icon's Z pos like in the render loop.
        const flyProgressForVisibility = Math.min(1, Math.max(0, (progress - (iconProgressPoint * 0.7)) / (1.5 / totalIcons) ));
        const estimatedCurrentIconZ = icon.z + flyProgressForVisibility * zFlyDistance;
        const groupAdjustedZ = estimatedCurrentIconZ + (groupBaseZ + progress * groupTravel);


        if (Math.abs(groupAdjustedZ - centerFocusZ) < focusDepth) {
            newVisibleIcons.push(icon.id);
        }
    });
    setVisibleIcons(newVisibleIcons);

  }, [totalIcons]); 

  const throttledUpdate = useRef(rafThrottle(updateScrollState));

  useEffect(() => {
    const handler = () => throttledUpdate.current();
    handler(); 

    window.addEventListener('scroll', handler, { passive: true }); 
    return () => {
      window.removeEventListener('scroll', handler);
      throttledUpdate.current.cancel();
    };
  }, [updateScrollState]);


  const groupBaseZ = -1500; 
  const groupEndZ = 1000; 
  const groupTranslateZ = groupBaseZ + scrollProgress * (groupEndZ - groupBaseZ);
  const zFlyDistance = 2500; 

  return (
    <section 
      ref={containerRef}
      className="relative h-[550vh] bg-white dark:bg-black" 
      id="tech"
    >
      <div 
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
        style={{ perspective: '1000px' }}
      >
        <div className="absolute inset-0 bg-white dark:bg-black">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-black dark:bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 1.5 + 0.9}px`,
                height: `${Math.random() * 1.5 + 0.9}px`,
                opacity: Math.random() * 0.4 + 0.15,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 5 + 3}s`,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(40)].map((_, i) => {
              const angle = (i / 40) * 360 + scrollProgress * 15;
              const length = 10 + Math.pow(scrollProgress, 2) * 2000; 
              const lineOpacity = Math.min(0.6, Math.pow(scrollProgress, 2) * 1.2); 
              const thickness = 1 + scrollProgress * 1;

              return (
                <div
                  key={`line-${i}`}
                  className="absolute origin-center"
                  style={{
                    width: `${length}px`,
                    height: `${thickness}px`,
                    transform: `rotate(${angle}deg) translateX(${scrollProgress * 50}px)`,
                    transformOrigin: '0% 50%',
                    left: '50%',
                    top: '50%',
                  }}
                >
                  <div 
                    className="w-full h-full bg-gradient-to-r from-black dark:from-white to-transparent"
                    style={{ opacity: lineOpacity }} // Removed transition from here for perf
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Tech Icons in 3D space */}
        <div 
          className="relative w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
            transform: `translateZ(${groupTranslateZ}px)`,
            // The group's movement is smoother with a short transition
            // or if scrollProgress itself changes smoothly.
            // For direct scroll linking, JS updates drive this, not a CSS transition on the group itself.
            // transition: 'transform 0.05s linear', // Very short, or remove
          }}
        >
          {techIcons.map((tech) => { // Removed index as it's tied to tech.order
            // Icon's "turn" to fly forward, based on its order.
            // Starts a bit staggered. 0.9 means they are spread over 90% of scroll.
            const iconOrderProgress = (tech.order - 1) / (totalIcons -1); // Normalizes order from 0 to 1

            // Defines the segment of overall scrollProgress during which this icon performs its fly animation
            const flyStartProgress = iconOrderProgress * 0.7; // Icon starts flying when scrollProgress reaches this point (scaled by order)
            const flyDurationProgress = 0.3; // Icon takes this much of scrollProgress range to complete its flight (e.g. 30% of total scroll)
            
            let iconFlyProgress = 0;
            if (scrollProgress >= flyStartProgress) {
              iconFlyProgress = Math.min(1, (scrollProgress - flyStartProgress) / flyDurationProgress);
            }
            // If you want icons to "pass by" and not just stop at flyProgress = 1, you'd let it go beyond 1.
            // For now, they fly forward and then move with the group.

            const currentIconZ = tech.z + iconFlyProgress * zFlyDistance;

            const zForMinimumScale = -1500;
            const scaleSensitivity = 1200;
            let scale = 0.1 + (currentIconZ - zForMinimumScale) / scaleSensitivity;
            scale = Math.max(0.05, Math.min(scale, 2.5)); // Start even smaller

            let opacity = 0;
            const opacityPeakZ = -200; // Z-value where icon is brightest (relative to its own currentIconZ)
            const opacityHalfWidth = 700; // Wider opacity window
            
            // Opacity based on the icon's Z relative to the camera after group transform
            const finalZ = currentIconZ + groupTranslateZ;

            if (finalZ > opacityPeakZ - opacityHalfWidth && finalZ < opacityPeakZ + opacityHalfWidth) {
                // Smoother fade in/out based on distance from peak
                opacity = 1 - Math.pow(Math.abs(finalZ - opacityPeakZ) / opacityHalfWidth, 1.5);
            }
            opacity = Math.max(0, Math.min(1, opacity * 1.5)); // Boost and clamp


            const isActive = visibleIcons.includes(tech.id);
            
            return (
              <div
                key={tech.id}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                  // The transform is now directly calculated. NO CSS TRANSITION on transform here.
                  transform: `
                    translate(-50%, -50%)
                    translate3d(
                      ${tech.x * (1 + currentIconZ/3000) }px, 
                      ${tech.y * (1 + currentIconZ/3000) }px, 
                      ${currentIconZ}px
                    ) 
                    scale(${scale})
                  `,
                  opacity: opacity,
                  zIndex: Math.floor(1000 + currentIconZ), 
                  willChange: 'transform, opacity', // Keep for the icon's direct manipulation layer
                  transition: 'opacity 0.3s ease-out', // Only transition opacity
                }}
              >
                <div 
                  className={`relative group`}
                >
                  <tech.Icon 
                    className={`w-16 h-16 md:w-20 md:h-20`}
                    style={{ color: tech.color }}
                  />
                  
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      transform: 'scale(1.5)',
                      zIndex: -1,
                      opacity: isActive ? 0.5 : 0.2,
                      transition: 'opacity 0.3s',
                    }}
                  />
                  
                  <div
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white text-xs md:text-sm font-mono whitespace-nowrap"
                    style={{
                      opacity: isActive ? 0.9 : Math.max(0, opacity * 0.5 - 0.1),
                      fontSize: `${Math.max(0.5, Math.min(1.1, scale * 0.65))}rem`, // Slightly smaller text
                      transition: 'opacity 0.3s',
                    }}
                  >
                    {tech.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* UI Elements */}

        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center pointer-events-none"
          style={{
            opacity: Math.max(0, 0.7 - scrollProgress * 2.5),
            transition: 'opacity 0.3s',
            willChange: 'opacity',
          }}
        >
          <div className="animate-bounce">
            <div className="w-1 h-8 bg-white mx-auto mb-2 rounded-full" />
            <p className="text-sm font-mono">SCROLL TO ENGAGE</p>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes pulse-icon {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.15); opacity: 0.9; }
        }
      `}</style>
    </section>
  );
};

export default TechSection;