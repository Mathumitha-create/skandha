import React, { useState, useEffect } from 'react';

export default function Header({ activePage: propActivePage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(propActivePage || 'home');

  useEffect(() => {
    if (propActivePage) {
      setActiveSection(propActivePage);
      return;
    }

    const pathname = window.location.pathname;

    if (pathname === '/portfolio') {
      setActiveSection('portfolio');
      return;
    }
    if (pathname === '/about') {
      setActiveSection('about');
      return;
    }
    if (pathname === '/services') {
      setActiveSection('services');
      return;
    }
    if (pathname === '/booking') {
      setActiveSection('booking');
      return;
    }
    if (pathname === '/contact') {
      setActiveSection('contact');
      return;
    }

    // Scroll-based tracking for HomePage (Home, Portfolio, Showreel)
    const handleScroll = () => {
      const sections = ['home', 'portfolio', 'showreel'];
      let currentSection = 'home';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection === 'showreel' ? 'portfolio' : currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial trigger
    return () => window.removeEventListener('scroll', handleScroll);
  }, [propActivePage]);

  const getLinkClass = (pageName) => {
    return activeSection === pageName
      ? "text-black font-bold border-b-2 border-black pb-1"
      : "text-gray-400 hover:text-black transition-colors";
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex md:grid md:grid-cols-[70%_30%] items-center justify-between px-6 md:px-12 py-4 md:py-6 bg-white/80 backdrop-blur-md md:bg-white/80 md:backdrop-blur-md" data-purpose="main-navigation">
        {/* Left 70%: Logo + Centered Links */}
        <div className="flex items-center justify-between pr-8 w-full md:w-auto">
          {/* Logo Section */}
          <a href="/#home" className="flex items-center space-x-3">
            <svg className="w-8 h-8 text-black" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="50,5 93.3,30 93.3,80 50,95 6.7,80 6.7,30" stroke="currentColor" strokeWidth="10" strokeLinejoin="round" fill="none" />
              <path d="M68,35 L40,35 C32,35 32,48 40,48 L60,52 C68,52 68,65 60,65 L32,65" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            <div>
              <h1 className="text-xs font-extrabold tracking-widest uppercase leading-none text-black">Skandha Studio</h1>
              <p className="text-[8px] font-medium tracking-[0.2em] uppercase text-gray-500 mt-0.5">Aerial Visuals</p>
            </div>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[11px] font-bold uppercase tracking-widest">
            <a className={getLinkClass('home')} href="/#home">Home</a>
            <a className={getLinkClass('portfolio')} href="/portfolio">Portfolio</a>
            <a className={getLinkClass('about')} href="/about">About</a>
            <a className={getLinkClass('services')} href="/services">Services</a>
            <a className={getLinkClass('booking')} href="/booking">Booking</a>
            <a className={getLinkClass('contact')} href="/contact">Contact</a>
          </div>
        </div>

        {/* Right 30%: Booking Button & Mobile Menu Toggle */}
        <div className="flex items-center justify-end space-x-4 md:space-x-6">
          <a 
            href="/booking" 
            className="hidden md:inline-block bg-black text-white hover:bg-gray-800 transition-colors px-6 py-2.5 rounded-md text-[11px] font-bold uppercase tracking-widest text-center"
          >
            Booking
          </a>
          {/* Mobile Menu Toggle Button */}
          <button 
            aria-label="Toggle Menu" 
            className="md:hidden text-gray-700 hover:text-black p-1 focus:outline-none z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <div className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-md flex flex-col justify-center items-center space-y-8 text-sm font-bold uppercase tracking-widest transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <a className="text-black text-lg" href="/#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
        <a className="text-black text-lg" href="/portfolio" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</a>
        <a className="text-black text-lg" href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
        <a className="text-black text-lg" href="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
        <a className="text-black text-lg" href="/booking" onClick={() => setIsMobileMenuOpen(false)}>Booking</a>
        <a className="text-black text-lg" href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
      </div>
    </>
  );
}
