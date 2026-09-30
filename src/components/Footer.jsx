import React from 'react';
import footerBg from '../assets/footer-bg.png';

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
  </svg>
);


export default function Footer() {
  return (
    <footer 
      className="relative bg-cover bg-center bg-no-repeat text-white overflow-hidden py-16 md:py-20"
      style={{ backgroundImage: `url(${footerBg})` }}
      data-purpose="unified-footer"
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center space-y-8">
        {/* Logo & Brand */}
        <div className="flex flex-col items-center space-y-3">
          <div className="flex items-center space-x-3.5">
            <svg className="w-10 h-10 text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="50,5 93.3,30 93.3,80 50,95 6.7,80 6.7,30" stroke="currentColor" strokeWidth="10" strokeLinejoin="round" fill="none" />
              <path d="M68,35 L40,35 C32,35 32,48 40,48 L60,52 C68,52 68,65 60,65 L32,65" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            <div className="text-left">
              <h2 className="text-xl font-bold tracking-[0.2em] uppercase leading-none text-white">Skandha Studio</h2>
              <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-gray-300 mt-1">Aerial Visuals</p>
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <div className="text-sm md:text-base font-light text-gray-200 tracking-wide leading-relaxed">
          <p>Capturing perspectives.</p>
          <p>Creating memories.</p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-8 text-gray-300">
          <a href="https://www.instagram.com/skandha_dronography?utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
            <InstagramIcon className="w-5 h-5" />
          </a>
          <a href="https://www.facebook.com/share/1CTtqALG2U/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
            <FacebookIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Navigation Links with border */}
        <div className="w-full max-w-2xl border-t border-white/10 pt-6">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-xs font-semibold tracking-wider text-gray-300">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full max-w-2xl border-t border-white/10 pt-6 text-[10px] tracking-widest text-gray-400">
          © 2024 Skandha Studio. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
