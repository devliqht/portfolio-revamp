'use client';

import React from 'react';
import DomeGallery from '@/components/react-bits/components/dome-gallery';

// tech logos data from public/logos directory
const tech_logos = [
  { src: '/logos/react.png', alt: 'React' },
  { src: '/logos/nextdotjs.png', alt: 'Next.js' },
  { src: '/logos/typescript.png', alt: 'TypeScript' },
  { src: '/logos/javascript.png', alt: 'JavaScript' },
  { src: '/logos/html5.png', alt: 'HTML5' },
  { src: '/logos/css.png', alt: 'CSS3' },
  { src: '/logos/tailwindcss.png', alt: 'Tailwind CSS' },
  { src: '/logos/php.png', alt: 'PHP' },
  { src: '/logos/laravel.png', alt: 'Laravel' },
  { src: '/logos/python.png', alt: 'Python' },
  { src: '/logos/mongodb.png', alt: 'MongoDB' },
  { src: '/logos/mysql.png', alt: 'MySQL' },
  { src: '/logos/postgresql.png', alt: 'PostgreSQL' },
  { src: '/logos/firebase.png', alt: 'Firebase' },
  { src: '/logos/supabase.png', alt: 'Supabase' },
  { src: '/logos/vercel.png', alt: 'Vercel' },
  { src: '/logos/cloudflare.png', alt: 'Cloudflare' },
  { src: '/logos/digitalocean.png', alt: 'DigitalOcean' },
  { src: '/logos/googlecloud.png', alt: 'Google Cloud' },
  { src: '/logos/wordpress.png', alt: 'WordPress' },
  { src: '/logos/woocommerce.png', alt: 'WooCommerce' },
  { src: '/logos/elementor.png', alt: 'Elementor' },
  { src: '/logos/astro.png', alt: 'Astro' },
  { src: '/logos/tauri.png', alt: 'Tauri' },
  { src: '/logos/threedotjs.png', alt: 'Three.js' },
  { src: '/logos/zod.png', alt: 'Zod' },
  { src: '/logos/c.png', alt: 'C' },
  { src: '/logos/cplusplus.png', alt: 'C++' },
  { src: '/logos/claude.png', alt: 'Claude AI' },
  { src: '/logos/googlegemini.png', alt: 'Google Gemini' },
];

// tech page section
export default function TechPage() {
  return (
    <section id='tech' className='relative min-h-screen'>
      {/* dome gallery container */}
      <div className='relative w-full h-screen my-8'>
        <DomeGallery
          images={tech_logos}
          fit={0.6}
          fitBasis='auto'
          minRadius={400}
          maxRadius={800}
          padFactor={0.2}
          overlayBlurColor='#1e1b4b'
          maxVerticalRotationDeg={8}
          dragSensitivity={15}
          enlargeTransitionMs={400}
          segments={30}
          dragDampening={1.5}
          openedImageWidth='300px'
          openedImageHeight='300px'
          imageBorderRadius='20px'
          openedImageBorderRadius='25px'
          grayscale={false}
        />
      </div>

      {/* bottom instruction text */}
      {/*<div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm md:text-base text-gray-400 font-mono">
            drag to explore • click to zoom • esc to close
          </p>
        </div>
      </div>*/}
    </section>
  );
}
