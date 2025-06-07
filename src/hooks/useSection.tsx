'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getDefaultCategory, type ProjectCategory } from '@/lib/projects';

interface SectionContextType {
  currentSection: string;
  isVisible: boolean;
  setSectionText: (section: string) => void;
  currentProjectCategory: ProjectCategory;
  setProjectCategory: (category: ProjectCategory) => void;
  isProjectsSection: boolean;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export function SectionProvider({ children }: { children: React.ReactNode }) {
  const [currentSection, setCurrentSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [currentProjectCategory, setCurrentProjectCategory] = useState<ProjectCategory>(getDefaultCategory());
  const [isProjectsSection, setIsProjectsSection] = useState(false);

  const setSectionText = (section: string) => {
    setCurrentSection(section);
  };

  const setProjectCategory = (category: ProjectCategory) => {
    setCurrentProjectCategory(category);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'landing', text: '' },
        { id: 'about', text: 'About Me' },
        { id: 'projects', text: currentProjectCategory.displayName },
        { id: 'tech', text: 'Technologies'},
        { id: 'contact', text: 'Contact Me'},
        { id: 'skills', text: 'Skills'}
      ];

      let currentSectionText = '';
      let isInProjectsSection = false;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // More conservative detection - section needs to be significantly in view
          const isInView = rect.top <= window.innerHeight * 0.2 && rect.bottom >= window.innerHeight * 0.8;
          
          if (isInView) {
            currentSectionText = section.text;
            if (section.id === 'projects') {
              isInProjectsSection = true;
            }
            break;
          }
        }
      }

      if (isInProjectsSection !== isProjectsSection) {
        setIsProjectsSection(isInProjectsSection);
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
  }, [currentSection, currentProjectCategory.displayName, isProjectsSection]);

  return (
    <SectionContext.Provider value={{ 
      currentSection, 
      isVisible, 
      setSectionText,
      currentProjectCategory,
      setProjectCategory,
      isProjectsSection
    }}>
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