'use client';
import { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  delay: number;
  infinite?: boolean;
  onComplete?: () => void;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  delay,
  infinite,
  onComplete,
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= text.length) {
      if (onComplete && currentIndex === text.length) {
        onComplete();
      }

      if (infinite) {
        setTimeout(() => {
          setCurrentIndex(0);
          setCurrentText('');
        }, delay);
      }
      return;
    }

    const timeout = window.setTimeout(() => {
      setCurrentText(prevText => prevText + text[currentIndex]);
      setCurrentIndex(prevIndex => prevIndex + 1);
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text, onComplete]);

  return (
    <span className='relative'>
      <span className='invisible'>{text}</span>
      <span className='absolute inset-0 flex items-baseline'>
        <span className='bg-linear-to-r hover:bg-none from-neutral-800 via-neutral-700 to-neutral-800 dark:from-neutral-100 dark:via-neutral-300 dark:to-neutral-400 bg-clip-text text-transparent font-semibold tracking-tight hover:cursor-pointer hover:text-transparent hover:[-webkit-text-stroke:2px_#111827] dark:hover:[-webkit-text-stroke:2px_#f3f4f6]'>
          {currentText}
        </span>
        <span className='animate-cursor-blink w-0.5 h-[1em] bg-current ml-1 shrink-0'></span>
      </span>
    </span>
  );
};

export default Typewriter;
