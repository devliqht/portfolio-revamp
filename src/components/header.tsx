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
            }, 800); 
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
                                <div key={item.en} className={`animate-float-in-left`} style={{animationDelay: `${0.3 + index * 0.1}s`}}>
                                    <a href={`#${item.en}`} className="block text-[6vw] font-dm-sans text-black font-semibold tracking-tight hover:cursor-pointer hover:text-transparent hover:[-webkit-text-stroke:2px_black] transition-all duration-300" onClick={handleNavClick}>
                                        {item.en}
                                    </a>
                                    <p className="text-4xl font-baybayin text-black font-semibold tracking-tight opacity-70 -mt-4">
                                        {item.baybayin}
                                    </p>
                                </div>
                            ))}
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
}