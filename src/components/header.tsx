'use client';
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
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
    const navigationItems = [
        { en: 'home', baybayin: 'home' },
        { en: 'about', baybayin: 'about' },
        { en: 'tech', baybayin: 'tech' },
        { en: 'projects', baybayin: 'projects' },
        { en: 'contact', baybayin: 'contact' }
    ];
    return (
        <>
            <button onClick={toggleMenu} className="fixed top-8 right-8 z-50 p-4 transition-all duration-300 hover:scale-110" aria-label="Toggle menu">
                <div className="relative w-8 h-6">
                    <span className={`absolute block w-full h-0.5 bg-black transition-all duration-300 ${isOpen ? 'rotate-45 top-3' : 'top-0'}`}></span>
                    <span className={`absolute block w-full h-0.5 bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : 'top-3'}`}></span>
                    <span className={`absolute block w-full h-0.5 bg-black transition-all duration-300 ${isOpen ? '-rotate-45 top-3' : 'top-6'}`}></span>
                </div>
            </button>
            {isOpen && (
                <div className="fixed inset-0 z-40">
                    <div className={`menu-overlay-bg ${isClosing ? 'closing' : ''}`}></div>
                    <div className={`relative z-10 flex flex-col justify-center items-start px-[5%] h-full transition-opacity duration-200 ${isClosing ? 'opacity-0' : 'opacity-100'}`}>
                        <nav className="space-y-4">
                            {navigationItems.map((item, index) => (
                                <div key={item.en} className={`animate-float-in-left `} style={{animationDelay: `${0.3 + index * 0.1}s`}}>
                                    <a href={`#${item.en}`} className="block text-[5vw] font-dm-sans text-black font-semibold tracking-tight hover:cursor-pointer hover:text-transparent hover:[-webkit-text-stroke:2px_black] hover:-skew-x-12 transition-transform duration-300" onClick={handleNavClick}>
                                        {item.en}
                                    </a>
                                    <p className="text-[2rem] font-baybayin text-black font-semibold tracking-tight opacity-70 -mt-4">
                                        {item.baybayin}
                                    </p>
                                </div>
                            ))}
                        </nav>
                        
                        <div className={`absolute bottom-8 right-8 flex flex-col items-end space-y-2 transition-opacity duration-100 ${isClosing ? 'opacity-0' : 'opacity-100'} animate-float-in-right`} style={{animationDelay: '0.3s'}}>
                            <div className="flex flex-col items-end">
                                <div className="w-8 h-8 flex items-center justify-center">
                                    <img src="/logos/logo_transparent.svg" alt="Logo" className="text-black [&>path]:fill-black"/>
                                </div>
                            <h1 className="text-[4vw] font-dm-sans text-black font-thin tracking-tight md:mt-8">where are we heading today?</h1>

                                <span className="text-black font-dm-sans font-semibold text-[3vw] tracking-tighter">Matt Cabarrubias</span>
                            </div>
                            
                            <div className="flex space-x-3">
                                <a href="https://github.com/devliqht" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 transition-colors duration-200" aria-label="GitHub">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>
                                <a href="https://instagram.com/mxttgacab" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 transition-colors duration-200" aria-label="Instagram">
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