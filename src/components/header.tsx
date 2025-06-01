'use client';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import ThemeToggle from '@/components/theme-toggle';
import { useSection } from '@/hooks/useSection';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isBlurred, setIsBlurred] = useState(true);
    const { theme, setTheme } = useTheme();
    const { currentSection, isVisible } = useSection();

    const toggleMenu = () => {
        if (isOpen) {
            setIsClosing(true);
            setTimeout(() => {
                setIsOpen(false);
                setIsClosing(false);
            }, 300); 
        } else {
            setIsOpen(true);
        }
    };
    const handleNavClick = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
        }, 800); 
    };

    const BlurToggle = () => (
        <button onClick={() => setIsBlurred(!isBlurred)} className="w-[8vw] h-[8vw] rounded-full border-[1.4px] border-black dark:border-white hover:cursor-pointer transition-all flex items-center justify-center focus:outline-none focus:ring-1 focus:ring-neutral-800 dark:focus:ring-neutral-100 focus:ring-offset-2" aria-label={`Switch to ${isBlurred ? 'solid' : 'blurred'} background`}>
            {isBlurred ? (
                <svg className="w-[4vw] h-[4vw] text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" strokeWidth="2"/>
                    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" strokeWidth="2"/>
                    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" strokeWidth="2"/>
                    <line x1="2" y1="2" x2="22" y2="22" strokeWidth="2"/>
                </svg>
            ) : (
                <svg className="w-[4vw] h-[4vw] text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3" strokeWidth="2"/>
                    <path d="M12 5.5C7 5.5 3 9.5 3 12s4 6.5 9 6.5 9-4 9-6.5-4-6.5-9-6.5" strokeWidth="2"/>
                    <path d="M12 8.5c-1.5 0-3 1-3 3.5s1.5 3.5 3 3.5 3-1 3-3.5-1.5-3.5-3-3.5" strokeWidth="2"/>
                </svg>
            )}
        </button>
    );

    const navigationItems = [
        { en: 'Home', baybayin: 'home', link: '/' },
        { en: 'About', baybayin: 'about', link: '/about' },
        { en: 'Tech', baybayin: 'tech', link: '/tech' },
        { en: 'Projects', baybayin: 'projects', link: '/projects' },
        { en: 'Contact', baybayin: 'contact', link: '/contact' }
    ];
    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-4">
                    <a href="/" className={`relative ${isOpen ? 'sm:md:opacity-0' : 'opacity-100'} top-[0.4px] flex items-center transition-all duration-300 hover:scale-105`} aria-label="Home">
                        <img 
                            src={theme === 'dark' ? "/logos/logo_white_transparent.svg" : "/logos/logo_transparent.svg"}
                            alt="devliqht.dev logo" 
                            className="w-12 h-12 sm:w-12 sm:h-12 md:lg:w-[5vw] md:lg:h-[5vw]"
                        />
                    </a>
                    {currentSection && (
                        <span className={`text-lg sm:md:text-xl font-light text-neutral-600 dark:text-neutral-400 tracking-wide font-dm-sans uppercase transition-all duration-300 ease-in-out ${
                            isVisible && !isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                        }`}>
                            {currentSection}
                        </span>          
                    )}
                </div>
                
                <button onClick={toggleMenu} className="p-4 transition-all duration-300 hover:scale-110" aria-label="Toggle menu">
                    <div className="relative w-8 h-6 md:lg:scale-130 left-[0.2rem] sm:md:lg:right-[0.2rem]">
                        <span className={`absolute block w-full h-0.5 bg-gray-900 dark:bg-gray-100 transition-all duration-300 ${isOpen ? 'rotate-45 top-3' : 'top-0'}`}></span>
                        <span className={`absolute block w-full h-0.5 bg-gray-900 dark:bg-gray-100 transition-all duration-300 ${isOpen ? 'opacity-0' : 'top-3'}`}></span>
                        <span className={`absolute block w-full h-0.5 bg-gray-900 dark:bg-gray-100 transition-all duration-300 ${isOpen ? '-rotate-45 top-3' : 'top-6'}`}></span>
                    </div>
                </button>
            </header>
            {(isOpen || isClosing) && (
                <div className="fixed inset-0 z-40">
                    <div className={`fixed inset-0 ${isBlurred ? 'backdrop-blur-[72px] bg-white/20 dark:bg-black/20' : 'bg-white dark:bg-black'} transition-opacity duration-600 ${isClosing ? 'opacity-0' : 'opacity-100'}`}></div>
                    <div className={`relative z-10 flex flex-col justify-center items-start px-[1.6rem] sm:md:px-[5%] h-full transition-opacity duration-200 ${isClosing ? 'opacity-0' : 'opacity-100'}`}>
                        <nav className="space-y-4 mb-[12vh] sm:md:mb-0">
                            {/* <div className={`text-[8vw] sm:md:hidden font-dm-sans text-gray-900 dark:text-gray-100 font-thin tracking-widest mb-4 transition-opacity ${isClosing ? 'opacity-0 animate-float-out-left' : 'opacity-100 animate-float-in-left'}`} style={{animationDelay: `0s`, animationDuration: `0.6s`, animationTimingFunction: `var(--smooth-anim)`}}>
                                devliqht.dev
                            </div> */}
                            {navigationItems.map((item, index) => (
                                <div key={item.en} className={`transition-opacity ${isClosing ? 'opacity-0 animate-float-out-left' : 'opacity-100 animate-float-in-left'}`} style={{animationDelay: `${isClosing ? '0s' : `${index * 0.04}s`}`, animationDuration: `0.6s`, animationTimingFunction: `var(--smooth-anim)`}}>
                                    <a href={`${item.link}`} className="block text-[9vw] sm:text-[11vw] md:text-[5vw] font-dm-sans bg-gradient-to-r hover:bg-none from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-100 dark:via-neutral-300 dark:to-neutral-400 bg-clip-text text-transparent font-semibold tracking-tight hover:cursor-pointer hover:text-transparent hover:[-webkit-text-stroke:2px_#111827] dark:hover:[-webkit-text-stroke:2px_#f3f4f6] hover:-translate-y-1 transition-transform duration-300" onClick={handleNavClick}>
                                        {item.en}
                                    </a>
                                    <p className="text-[1.4rem] sm:md:text-[2rem] pt-3 sm:md:lg:pt-0 font-baybayin text-gray-900 dark:text-gray-100 font-semibold tracking-tight opacity-70 -mt-4">
                                        {item.baybayin}
                                    </p>
                                </div>
                            ))}
                        </nav>
                        
                        <div className={`absolute bottom-8 right-8 flex flex-col items-end space-y-4 transition-opacity duration-100 ${isClosing ? 'opacity-0 animate-float-out-right' : 'opacity-100 animate-float-in-right-header'} `} >
                            <div className="flex flex-col items-end">
                                <div className="flex space-x-3">
                                    <BlurToggle />
                                    <ThemeToggle />
                                </div>
                            <h1 className="text-[1.6rem] sm:text-[2rem] md:text-[4vw] font-dm-sans text-gray-900 dark:text-gray-100 font-thin tracking-tight mt-4">
                              {theme === 'dark' ? 'where are we hiding today?' : 'where are we heading today?'}
                            </h1>
                                <span className="text-[1.4rem] sm:text-[2rem] md:text-[3vw] text-gray-900 dark:text-gray-100 font-dm-sans font-semibold tracking-tighter">Matt Cabarrubias</span>
                            </div>
                            
                            <div className="flex space-x-3">
                                <a href="https://github.com/devliqht" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200" aria-label="GitHub">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>
                                <a href="https://instagram.com/mxttgacab" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200" aria-label="Instagram">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}