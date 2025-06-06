'use client';
import React, { useEffect, useState, useRef } from 'react';
import { MdOutlineWeb } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import { CgIfDesign } from "react-icons/cg";
import { MdOutlineGraphicEq } from "react-icons/md";
import { MdPhoto } from "react-icons/md";
import { SiAdobelightroomclassic } from "react-icons/si";
import { PiFileCpp } from "react-icons/pi";

const iconSize: number = 30;
const ComputerSkills = [
    { 
        icon: <MdOutlineWeb size={iconSize}/>, 
        name: "Web Development",
        description: "Built responsive and interactive web applications using modern frameworks like React.js and TailwindCSS for school, personal projects, and business needs."
    },
    { 
        icon: <FaPhotoVideo size={iconSize}/>, 
        name: "Video Editing",
        description: "Edited videos ranging from motion graphics and short-form content to professional campaign and promotional videos using software like Vegas PRO, Adobe After Effects and DaVinci Resolve."
    },
    { 
        icon: <CgIfDesign size={iconSize}/>, 
        name: "UI/UX Design",
        description: "Designed intuitive and aesthetically pleasing user interfaces, focusing on user experience principles using Figma and Canva."
    },
    { 
        icon: <MdOutlineGraphicEq size={iconSize}/>, 
        name: "Graphic Design",
        description: "Created visually appealing designs, including branding materials, posters, social media graphics, and digital illustrations using Paint.NET and Canva."
    },
    { 
        icon: <MdPhoto size={iconSize}/>, 
        name: "Photography",
        description: "Captured and edited high-quality photographs for creative and professional use, including portraits, landscapes, and personal photos."
    },
    { 
        icon: <SiAdobelightroomclassic size={iconSize}/>, 
        name: "Color Grading",
        description: "Enhanced and corrected colors in photos and videos to achieve cinematic and stylistic effects using Adobe Lightroom Classic, DaVinci Resolve and Magic Bullet Suite."
    },
    { 
        icon: <PiFileCpp size={iconSize}/>, 
        name: "Systems Programming (C, C++)",
        description: "Developed low-level applications using C and C++, with a focus on memory management and manipulation, engaging in low-level memory manipulation of games such as Minecraft Bedrock Edition."
    },
];

const ComputerSkillsContainer: React.FC = () => {
    return (
        <>   
            {ComputerSkills.map((item, index) => (
                <div key={index} className="flex flex-col gap-2 p-4 my-4 bg-black border-[1px] border-neutral-700 rounded-lg">
                    <div className="flex flex-row items-center gap-4 text-white">
                        {item.icon}
                        <span className="text-lg md:text-2xl tracking-tightest font-dm-sans font-extralight">{item.name}</span>
                    </div>
                    <p className="font-dm-sans text-lg font-thin text-left leading-8">
                        {item.description}
                    </p>
                </div>
            ))}
        </>
    );
};

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('Intersection observed:', entry.isIntersecting, entry.intersectionRatio);
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Fallback: show content after 2 seconds if intersection observer doesn't work
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  console.log('isVisible:', isVisible);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-white dark:bg-black relative overflow-hidden"
      id="about"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-neutral-200/10 dark:bg-neutral-800/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-neutral-300/10 dark:bg-neutral-700/10 rounded-full blur-3xl" />
        
        <div className="absolute inset-0 opacity-[0.1] dark:opacity-[0.02]" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className={`text-center mb-16 mt-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-[14vw] sm:text-6xl md:lg:text-[6vw] font-dm-sans font-semibold text-black dark:text-white tracking-tight mb-4 hover:cursor-pointer hover:text-transparent hover:[-webkit-text-stroke:2px_black] dark:hover:text-black dark:hover:[-webkit-text-stroke:2px_white]">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-black to-neutral-500 dark:from-white dark:to-neutral-400 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className={`space-y-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div>
              <h3 className="text-3xl md:text-6xl font-dm-sans font-light text-black dark:text-white mb-6 tracking-tighter">
                Full-Stack Developer
              </h3>
              <div className="space-y-4 text-2xl tracking-tight font-extralight text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <p>
                I am a 19 year old BSCS student at the University of San Carlos, specializing in web development, UI/UX design, and video editing. As a quick learner with a lifelong passion for coding, I bring creativity and technical expertise to my projects. I thrive in collaborative settings, often stepping up as a group leader, and I approach challenges methodically, driven by curiosity and a desire to solve problems effectively.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl md:text-6xl font-dm-sans font-light text-black dark:text-white mb-6 tracking-tighter">
                Education
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-black dark:border-white pl-6">
                  <h4 className="text-xl font-dm-sans font-medium text-black dark:text-white">
                    Bachelor of Science in Computer Science
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-400 font-light">
                    University of San Carlos 2024 - 2027
                  </p>
                  <p className="text-neutral-700 dark:text-neutral-300 mt-2">
                    Specialized in Software Engineering and Web Development. 
                    Relevant coursework included Data Structures, Algorithms, Database Systems, 
                    and Software Engineering Principles.
                  </p>
                </div>
                <div className="border-l-4 border-black dark:border-white pl-6">
                  <h4 className="text-xl font-dm-sans font-medium text-black dark:text-white">
                    Senior High School - STEM 
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-400 font-light">
                    University of San Carlos 2022 - 2024
                  </p>
                  <p className="text-neutral-700 dark:text-neutral-300 mt-2">
                    Enrolled in Technology Track of the Philippines' STEM curriculum. Relevant coursework include Computer Fundamentals and Programming.
                  </p>
                </div>
                
                <div className="border-l-4 border-neutral-400 dark:border-neutral-600 pl-6">
                  <h4 className="text-lg font-dm-sans font-medium text-neutral-800 dark:text-neutral-200">
                    Relevant Certifications
                  </h4>
                  <ul className="text-neutral-600 dark:text-neutral-400 mt-2 space-y-1">
                    <li>• CCNA: Introduction to Networking Certification</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <h3 className="text-2xl md:text-6xl font-dm-sans font-light text-black dark:text-white mb-6 tracking-tighter">
              Skills & Technologies
            </h3>

            <div className="space-y-6">
              <ComputerSkillsContainer />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-in-bottom {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float-in-bottom {
          animation: float-in-bottom 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default AboutSection; 