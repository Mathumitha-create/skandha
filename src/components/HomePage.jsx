import React, { useState, useEffect } from 'react';
import Header from './Header';
import Portfolio from './Portfolio';
import Showreel from './Showreel';
import Footer from './Footer';
import Tilt3D from './Tilt3D';


export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0, scale: 1 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Calculate rotation angle (max 15 degrees)
    const rotateX = -(y / (rect.height / 2)) * 15;
    const rotateY = (x / (rect.width / 2)) * 15;
    
    setTilt({ x: rotateX, y: rotateY, scale: 1.03 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, scale: 1 });
  };

  return (
    <div className={`bg-white text-[#1a1a1a] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Shared Navigation Header */}
      <Header />

      {/* Hero Section */}
      <main className="hero-container relative overflow-hidden" id="home">
        {/* Left Column: Content */}
        <section className="w-full flex flex-col justify-center px-6 md:pl-12 md:pr-4 lg:pl-20 pt-28 pb-12 relative z-20" data-purpose="hero-content">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-2 block">Skandha Studio</span>
            <h2 className="text-5xl md:text-5xl lg:text-[64px] font-extrabold uppercase tracking-tight mb-4 leading-none text-black">Portfolio</h2>
            <p className="text-base font-semibold text-gray-800 mb-1">Aerial perspectives. Real stories.</p>
            <p className="text-xs text-gray-500 leading-relaxed max-w-[280px] md:max-w-xs mb-6">
              Cinematic drone photography and videography crafted from above.
            </p>
            
            {/* View All Projects Button wrapped in 3D tilt */}
            <Tilt3D maxTilt={8} scale={1.03} className="w-fit mb-6">
              <a 
                href="/portfolio"
                className="group flex items-center px-6 py-3 border border-gray-300 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white hover:border-black transition-all duration-300"
              >
                View All Projects
                <svg className="w-4 h-4 ml-3 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </a>
            </Tilt3D>

            {/* Statistics Row + Inline Icons wrapped in 3D tilt */}
            <Tilt3D maxTilt={4} scale={1.02} className="w-full">
              <div className="flex flex-wrap items-center pt-6 border-t border-gray-100">

              <div className="flex items-center">
                <div className="flex flex-col">
                  <span className="text-lg font-bold leading-tight">120+</span>
                  <span className="text-[7px] uppercase tracking-wider text-gray-400 leading-none mt-0.5">Projects<br />Completed</span>
                </div>
                <div className="stat-divider"></div>
                
                <div className="flex flex-col">
                  <span className="text-lg font-bold leading-tight">80+</span>
                  <span className="text-[7px] uppercase tracking-wider text-gray-400 leading-none mt-0.5">Happy<br />Clients</span>
                </div>
                <div className="stat-divider"></div>
                
                <div className="flex flex-col">
                  <span className="text-lg font-bold leading-tight">5+</span>
                  <span className="text-[7px] uppercase tracking-wider text-gray-400 leading-none mt-0.5">Years of<br />Experience</span>
                </div>
                <div className="stat-divider"></div>
                
                <div className="flex flex-col">
                  <span className="text-lg font-bold leading-tight">4K</span>
                  <span className="text-[7px] uppercase tracking-wider text-gray-400 leading-none mt-0.5">Cinematic<br />Quality</span>
                </div>
              </div>

              {/* Inline mini icons to the right of statistics */}
              <div className="flex items-center space-x-3.5 ml-6 lg:ml-8 mt-4 lg:mt-0 opacity-40">
                {/* Gimbal/Camera Icon */}
                <svg className="w-5 h-5 hover:opacity-100 hover:scale-110 transition-all duration-200 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {/* Propeller/Drone Icon */}
                <svg className="w-5 h-5 hover:opacity-100 hover:scale-110 transition-all duration-200 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707-.707" />
                </svg>
                {/* Hangar/Studio Icon */}
                <svg className="w-5 h-5 hover:opacity-100 hover:scale-110 transition-all duration-200 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                {/* Battery Icon */}
                <svg className="w-5 h-5 hover:opacity-100 hover:scale-110 transition-all duration-200 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12H3m14-4v8m-4-8v8m-4-8v8" />
                  <rect x="2" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
                </svg>
                {/* Profile/Person Icon */}
                <svg className="w-5 h-5 hover:opacity-100 hover:scale-110 transition-all duration-200 cursor-pointer" fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            </Tilt3D>
          </div>
        </section>

        {/* Right Column: Visuals */}
        <section 
          className="w-full h-full relative flex items-center justify-center min-h-[50vh] md:min-h-screen overflow-hidden perspective-container" 
          data-purpose="hero-visual"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Heads-Up Display (HUD) Telemetry Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center select-none z-0">
            {/* Pulsing Radar Ring */}
            <div className="absolute w-[80%] aspect-square rounded-full border border-black/[0.03] animate-pulse"></div>
            <div className="absolute w-[50%] aspect-square rounded-full border border-black/[0.04] animate-ping" style={{ animationDuration: '4s' }}></div>
            <div className="absolute w-[30%] aspect-square rounded-full border border-black/[0.05]"></div>

            {/* Crosshair target in the center */}
            <div className="absolute w-8 h-8 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-black/10 rounded-full"></div>
              <div className="absolute w-full h-[1px] bg-black/10"></div>
              <div className="absolute h-full w-[1px] bg-black/10"></div>
            </div>

            {/* HUD corner borders */}
            <div className="absolute top-10 left-10 w-6 h-6 border-t border-l border-black/10"></div>
            <div className="absolute top-10 right-10 w-6 h-6 border-t border-r border-black/10"></div>
            <div className="absolute bottom-10 left-10 w-6 h-6 border-b border-l border-black/10"></div>
            <div className="absolute bottom-10 right-10 w-6 h-6 border-b border-r border-black/10"></div>



            {/* Horizon indicator lines that tilt with mouse */}
            <div 
              className="absolute w-60 h-40 flex items-center justify-center transition-transform duration-300 ease-out hidden md:flex"
              style={{ transform: `rotate(${tilt.y * -1.5}deg) translateY(${tilt.x * -1.5}px)` }}
            >
              {/* Center Horizon Ladder */}
              <div className="relative w-full flex justify-between items-center px-4">
                {/* Left ladder bar */}
                <div className="flex flex-col items-end space-y-4 text-[8px] font-mono text-black/25">
                  <div className="w-8 border-t border-black/20 flex items-center justify-end pr-1">+10</div>
                  <div className="w-12 border-t-2 border-black/30 flex items-center justify-end pr-1 font-bold">--- 00</div>
                  <div className="w-8 border-t border-black/20 flex items-center justify-end pr-1">-10</div>
                </div>

                {/* Right ladder bar */}
                <div className="flex flex-col items-start space-y-4 text-[8px] font-mono text-black/25">
                  <div className="w-8 border-t border-black/20 flex items-center justify-start pl-1">+10</div>
                  <div className="w-12 border-t-2 border-black/30 flex items-center justify-start pl-1 font-bold">00 ---</div>
                  <div className="w-8 border-t border-black/20 flex items-center justify-start pl-1">-10</div>
                </div>
              </div>
            </div>
          </div>

          {/* Drone Image Wrapper (Floating + Interactive Tilt) */}
          <div className={`drone-image-wrapper drone-hover-anim transition-opacity duration-1000 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div 
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.scale})`,
                transition: 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)',
                transformStyle: 'preserve-3d',
              }}
              className="w-full h-full flex items-center justify-center"
            >
              <img 
                alt="Professional Drone with Camera" 
                className="w-full h-auto object-contain mix-blend-multiply" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp3cFjeHST5aPuNm3HzY_gDGXabrTxxFYm6WcmQnf1KeZWj9O0XYSZllioX67vw-sOIqdt33lgRFZvuJfLU7tCWtS1c38T0t1Bj4m0KyAYGWZBg5DviQBYS3pzxo7YNQXphTJEz9mv_jETXarYs7FmDO-uq0CHOi0rDbvvlUwtXKnGkTsbXcy1nW9SKbGXTIjK1ylj-uq4jD-juPCA2p-edhVgpV6IaEPOir7Wl30wom2PXp8GcJWh5Yplj91h-BhqkPubnp1oyXc" 
              />
            </div>
          </div>
        </section>

        {/* Book a Shoot CTA Card wrapped in 3D Tilt */}
        <Tilt3D maxTilt={8} scale={1.02} className="book-shoot-cta">
          <p className="text-[10px] text-gray-200 uppercase tracking-widest mb-1">Let's Create Your Story</p>
          <a className="flex items-center justify-start gap-4 group w-fit" href="/booking">
            <span className="text-white text-lg lg:text-xl font-light">Book a Shoot</span>
            <div className="w-9 h-9 border border-white/30 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-gray-800 transition-all duration-300">
              <svg className="w-4 h-4 text-white group-hover:text-gray-800 transform group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </a>
        </Tilt3D>
      </main>


      {/* Sequential Sections */}
      <Portfolio isSection={true} />
      <Showreel isSection={true} />

      {/* Global Unified Footer */}
      <Footer />
    </div>
  );
}
