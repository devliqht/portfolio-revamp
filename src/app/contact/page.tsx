'use client';
import React, { useEffect, useState, useRef } from 'react';
import { MdEmail, MdPhone, MdLocationOn, MdSend } from 'react-icons/md';
import { SiGithub, SiLinkedin, SiInstagram, SiX } from 'react-icons/si';

const ContactSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    formData.append('access_key', '2f6bdf8b-9674-4943-9abe-5df3b5e05388');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        formRef.current?.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MdEmail className="w-6 h-6" />,
      label: "Email",
      value: "matt.cabarrubias@gmail.com",
      href: "mailto:matt.cabarrubias@gmail.com"
    },
    {
      icon: <MdPhone className="w-6 h-6" />,
      label: "Phone",
      value: "+63 969 609 5336",
      href: "tel:+639696095336"
    },
    {
      icon: <MdLocationOn className="w-6 h-6" />,
      label: "Location",
      value: "Cebu City, Philippines",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <SiGithub className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/devliqht",
      hoverColor: "hover:text-[#333] dark:hover:text-[#f0f6fc]"
    },
    {
      icon: <SiLinkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/mattcabarrubias",
      hoverColor: "hover:text-[#0077B5]"
    },
    {
      icon: <SiInstagram className="w-6 h-6" />,
      label: "Instagram",
      href: "https://instagram.com/devliqht",
      hoverColor: "hover:text-[#E4405F]"
    },
    {
      icon: <SiX className="w-6 h-6" />,
      label: "X (Twitter)",
      href: "https://x.com/devliqht",
      hoverColor: "hover:text-[#1DA1F2]"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-white dark:bg-black relative overflow-hidden"
      id="contact"
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
            Get In Touch
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className={`space-y-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div>
              <h3 className="text-3xl md:text-6xl font-dm-sans font-light text-black dark:text-white mb-6 tracking-tighter">
                Let&apos;s Connect
              </h3>
              <div className="space-y-4 text-2xl tracking-tight font-extralight text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <p>
                  I&apos;m always open to discussing new opportunities, collaborations, or just having a conversation about technology and development. 
                  Feel free to reach out through any of the channels below.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-2xl md:text-4xl font-dm-sans font-light text-black dark:text-white mb-4 tracking-tighter">
                Contact Information
              </h4>
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-black/5 dark:bg-white/5 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300">
                  <div className="text-black dark:text-white">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm font-dm-sans font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
                      {info.label}
                    </div>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        className="text-lg font-dm-sans text-black dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-lg font-dm-sans text-black dark:text-white">
                        {info.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h4 className="text-2xl md:text-4xl font-dm-sans font-light text-black dark:text-white mb-4 tracking-tighter">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-black/5 dark:bg-white/5 rounded-lg text-black dark:text-white ${social.hoverColor} hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <h3 className="text-2xl md:text-6xl font-dm-sans font-light text-black dark:text-white mb-6 tracking-tighter">
              Send a Message
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-dm-sans font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-transparent border border-neutral-300 dark:border-neutral-700 rounded-lg text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all duration-300"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-dm-sans font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-transparent border border-neutral-300 dark:border-neutral-700 rounded-lg text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-dm-sans font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-transparent border border-neutral-300 dark:border-neutral-700 rounded-lg text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-dm-sans font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-transparent border border-neutral-300 dark:border-neutral-700 rounded-lg text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg font-dm-sans font-medium tracking-wide transition-all duration-300 hover:bg-neutral-800 dark:hover:bg-neutral-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 dark:border-black/30 border-t-white dark:border-t-black rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <MdSend className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-green-800 dark:text-green-200 font-dm-sans">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-red-800 dark:text-red-200 font-dm-sans">
                    Something went wrong. Please try again or contact me directly.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
