'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface SectionContextType {
  currentSection: string;
  isVisible: boolean;
  setSectionText: (section: string) => void;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export function SectionProvider({ children }: { children: React.ReactNode }) {
  const [currentSection, setCurrentSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const setSectionText = (section: string) => {
    setCurrentSection(section);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'landing', text: '' },
        { id: 'about', text: 'About Me' },
        { id: 'projects', text: 'Projects' },
        { id: 'tech', text: 'Technologies' },
        { id: 'contact', text: 'Contact Me' },
        { id: 'skills', text: 'Skills' },
        { id: 'experience', text: 'Experiences' },
      ];

      let currentSectionText = '';

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // More conservative detection - section needs to be significantly in view
          const isInView =
            rect.top <= window.innerHeight * 0.2 &&
            rect.bottom >= window.innerHeight * 0.8;

          if (isInView) {
            currentSectionText = section.text;
            break;
          }
        }
      }

      if (currentSectionText !== currentSection) {
        if (currentSectionText === '') {
          setIsVisible(false);
          setTimeout(() => setCurrentSection(currentSectionText), 200);
        } else {
          if (currentSection === '') {
            setCurrentSection(currentSectionText);
            setTimeout(() => setIsVisible(true), 50);
          } else {
            setIsVisible(false);
            setTimeout(() => {
              setCurrentSection(currentSectionText);
              setTimeout(() => setIsVisible(true), 50);
            }, 200);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

  return (
    <SectionContext.Provider
      value={{
        currentSection,
        isVisible,
        setSectionText,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
}

export function useSection() {
  const context = useContext(SectionContext);
  if (context === undefined) {
    throw new Error('useSection must be used within a SectionProvider');
  }
  return context;
}
