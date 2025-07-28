'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { techIcons } from '@/lib/techicons';

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

  // --- User Defined Animation Parameters ---
  const groupBaseZ = -200;
  const groupEndZ = 2000;
  const iconFlyDuration = 1.4; // Icon's individual flight duration factor
  const sectionHeightVh = 600; // For className `h-[600vh]`

  // --- Derived/Internal Animation Parameters ---
  const zFlyDistance = 3000;
  const iconFlyStartFactor = 0.01;
  const opacityPeakZ = 150;
  const opacityHalfWidth = 1000;
  const visibilityCenterFocusZ = 150;
  const visibilityFocusDepth = 800;
  const xyPerspectiveDivisor = 2000;
  const minIconScale = 0.2;
  const maxIconScale = 1.8;
  const iconScaleSensitivity = 3000;
  const zForIconMinimumScale = -1500;
  const numStars = 70;
  const numLines = 30;

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
      progress = Math.max(
        0,
        Math.min(
          1,
          pixelsScrolledWithinStickyDuration / totalStickyScrollDuration
        )
      );
    } else {
      const scrolledThroughSection = windowHeight - sectionTop;
      const totalVisibleScrollHeight = containerHeight + windowHeight;
      progress = Math.max(
        0,
        Math.min(1, scrolledThroughSection / totalVisibleScrollHeight)
      );
    }
    setScrollProgress(progress);

    const newVisibleIcons: string[] = [];
    const currentGroupTranslateZ =
      groupBaseZ + progress * (groupEndZ - groupBaseZ);

    techIcons.forEach(icon => {
      const iconOrderProgress = (icon.order - 1) / Math.max(1, totalIcons - 1);
      const flyStart = iconOrderProgress * iconFlyStartFactor;
      let flyProgressForVisibility = 0;
      if (progress >= flyStart) {
        flyProgressForVisibility = Math.min(
          1,
          (progress - flyStart) / iconFlyDuration
        );
      }

      const estimatedCurrentIconLocalZ =
        icon.z + flyProgressForVisibility * zFlyDistance;
      const estimatedFinalWorldZ =
        currentGroupTranslateZ + estimatedCurrentIconLocalZ;

      if (
        Math.abs(estimatedFinalWorldZ - visibilityCenterFocusZ) <
        visibilityFocusDepth / 2
      ) {
        newVisibleIcons.push(icon.id);
      }
    });
    setVisibleIcons(newVisibleIcons);
  }, [
    totalIcons,
    groupBaseZ,
    groupEndZ,
    zFlyDistance,
    iconFlyStartFactor,
    iconFlyDuration,
    visibilityCenterFocusZ,
    visibilityFocusDepth,
  ]);

  const throttledUpdate = useRef(rafThrottle(updateScrollState));

  useEffect(() => {
    const handler = () => throttledUpdate.current();
    const currentThrottled = throttledUpdate.current;
    const initTimeout = setTimeout(handler, 0);
    window.addEventListener('scroll', handler, { passive: true });
    window.addEventListener('resize', handler, { passive: true });

    return () => {
      clearTimeout(initTimeout);
      window.removeEventListener('scroll', handler);
      window.removeEventListener('resize', handler);
      currentThrottled.cancel();
    };
  }, [updateScrollState]);

  const groupTranslateZ =
    groupBaseZ + scrollProgress * (groupEndZ - groupBaseZ);

  return (
    <section
      ref={containerRef}
      className={`relative h-[${sectionHeightVh}vh] bg-white dark:bg-black`}
      id='tech'
    >
      <div
        className='sticky top-0 h-screen flex items-center justify-center overflow-hidden'
        style={{ perspective: '800px' }}
      >
        <div className='absolute inset-0 bg-white dark:bg-black'>
          {[...Array(numStars)].map((_, i) => (
            <div
              key={`star-${i}`}
              className='absolute bg-black dark:bg-white rounded-full animate-pulse'
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
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          <div className='absolute inset-0 flex items-center justify-center'>
            {[...Array(numLines)].map((_, i) => {
              const angle = (i / numLines) * 360 + scrollProgress * 10;
              const length =
                5 + Math.pow(Math.max(0.001, scrollProgress), 0.3) * 2500;
              const lineOpacity = Math.min(
                0.4,
                Math.pow(Math.max(0.001, scrollProgress), 0.3) * 0.6
              );
              const thickness = 0.5 + scrollProgress * 1;

              return (
                <div
                  key={`line-${i}`}
                  className='absolute origin-center'
                  style={{
                    width: `${length}px`,
                    height: `${thickness}px`,
                    transform: `rotate(${angle}deg) translateX(${scrollProgress * 30}px)`,
                    transformOrigin: '0% 50%',
                    left: '50%',
                    top: '50%',
                  }}
                >
                  <div
                    className='w-full h-full bg-gradient-to-r from-black dark:from-white to-transparent'
                    style={{ opacity: lineOpacity }}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div
          className='relative w-full h-full'
          style={{
            transformStyle: 'preserve-3d',
            transform: `translateZ(${groupTranslateZ}px)`,
          }}
        >
          {techIcons.map(tech => {
            const iconOrderProgress =
              (tech.order - 1) / Math.max(1, totalIcons - 1);
            const flyStart = iconOrderProgress * iconFlyStartFactor;
            let iconFlyProgress = 0;
            if (scrollProgress >= flyStart) {
              iconFlyProgress = Math.min(
                1,
                (scrollProgress - flyStart) / iconFlyDuration
              );
            }

            const currentIconLocalZ = tech.z + iconFlyProgress * zFlyDistance;
            const finalWorldZ = groupTranslateZ + currentIconLocalZ;

            let opacity = 0;
            const distFromOpacityPeak = Math.abs(finalWorldZ - opacityPeakZ);
            if (distFromOpacityPeak < opacityHalfWidth) {
              opacity =
                1 - Math.pow(distFromOpacityPeak / opacityHalfWidth, 1.2);
            }
            if (
              finalWorldZ > opacityPeakZ + opacityHalfWidth * 1.5 ||
              finalWorldZ < opacityPeakZ - opacityHalfWidth * 1.5
            ) {
              opacity = 0;
            }
            opacity = Math.max(0, Math.min(1, opacity * 1.3));
            let additionalScale =
              minIconScale +
              (currentIconLocalZ - zForIconMinimumScale) / iconScaleSensitivity;
            additionalScale = Math.max(
              minIconScale,
              Math.min(additionalScale, maxIconScale)
            );
            const xyClampedFactor = Math.max(
              0.01,
              (xyPerspectiveDivisor + currentIconLocalZ) / xyPerspectiveDivisor
            );
            const isActive = visibleIcons.includes(tech.id);

            return (
              <div
                key={tech.id}
                className='absolute'
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `
                    translate(-50%, -50%)
                    translate3d(
                      ${tech.x * xyClampedFactor}px,
                      ${tech.y * xyClampedFactor}px,
                      ${currentIconLocalZ}px
                    )
                    scale(${additionalScale})
                  `,
                  opacity: opacity,
                  zIndex: Math.floor(5000 - finalWorldZ),
                  willChange: 'transform, opacity',
                }}
              >
                <div className={`relative group`}>
                  <tech.Icon
                    className={`w-16 h-16 md:w-20 md:h-20`}
                    style={{ color: tech.color }}
                  />
                  <div
                    className='absolute inset-0 rounded-full'
                    style={{ transform: 'scale(1.8)', zIndex: -1 }}
                  />
                  <div
                    className='absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-black dark:text-white text-xs md:text-sm font-mono whitespace-nowrap'
                    style={{
                      opacity: isActive
                        ? 0.9
                        : Math.max(0, opacity * 0.7 - 0.1),
                      fontSize: `${Math.max(0.5, Math.min(1.1, additionalScale * 0.65))}rem`,
                    }}
                  >
                    {tech.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className='absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center pointer-events-none'
          style={{
            opacity: Math.max(0, 0.8 - scrollProgress * 3.5),
            transition: 'opacity 0.3s',
            willChange: 'opacity',
          }}
        >
          <div className='animate-bounce'>
            <div className='w-1 h-8 bg-white mx-auto mb-2 rounded-full' />
            <p className='text-sm font-mono'>SCROLL TO EXPLORE</p>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes pulse-icon {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.9;
          }
        }
      `}</style>
    </section>
  );
};

export default TechSection;
