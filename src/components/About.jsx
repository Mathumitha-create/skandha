import React, { useEffect, useState } from 'react';
import Header from './Header';
import portraitImage from '../../video/About_Page_Pic.jpeg';
import Footer from './Footer';
import ScrollReveal from './ScrollReveal';
import Tilt3D from './Tilt3D';

export default function About({ isSection = false }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id="about" className={`bg-white text-brand-dark transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Shared Header Navigation */}
      {!isSection && <Header activePage="about" />}

      {/* Main Container */}
      <main className={`max-w-7xl mx-auto px-4 md:px-8 ${isSection ? 'pt-6 pb-6' : 'pt-12 pb-12 md:pt-16 md:pb-20'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content Area */}
          <ScrollReveal type="3d-left">
            <section data-purpose="about-text-content">
              <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-2 text-brand-dark">ABOUT ME</h2>
              <h3 className="text-3xl font-semibold mb-6 text-brand-dark">Aravind</h3>
              <p className="text-sm font-medium text-brand-gray mb-10 tracking-wide">
                Drone Pilot | Cinematographer | Visual Storyteller
              </p>
              <div className="text-brand-gray space-y-2 mb-10 text-lg leading-relaxed max-w-md">
                <p>I believe every place has a story,</p>
                <p>and my drone helps me tell it from a</p>
                <p>perspective few get to see.</p>
              </div>
              {/* Signature */}
              <div className="mt-8">
                <span className="font-signature text-4xl md:text-5xl text-brand-dark opacity-80">Aravind</span>
              </div>
            </section>
          </ScrollReveal>

          {/* Image Area */}
          <ScrollReveal delay={200} type="3d-right">
            <section className="flex justify-center md:justify-end" data-purpose="hero-image-container">
              <Tilt3D maxTilt={8} scale={1.03} className="hero-image-clip relative w-full aspect-[4/5] max-w-md bg-gray-100 shadow-2xl group cursor-pointer overflow-hidden border border-black/5 p-1.5 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:border-black/10">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <img 
                    alt="Aravind Portrait" 
                    className="w-full h-full object-cover about-portrait-img" 
                    src={portraitImage} 
                  />
                  {/* HUD Viewfinder corner brackets */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-white/40 pointer-events-none group-hover:border-white group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-500 ease-out z-10 rounded-tl-sm"></div>
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-white/40 pointer-events-none group-hover:border-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 ease-out z-10 rounded-tr-sm"></div>
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-white/40 pointer-events-none group-hover:border-white group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-500 ease-out z-10 rounded-bl-sm"></div>
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-white/40 pointer-events-none group-hover:border-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 ease-out z-10 rounded-br-sm"></div>
                </div>
              </Tilt3D>
            </section>
          </ScrollReveal>
        </div>
      </main>

      {/* Statistics Section */}
      <section className="border-t border-brand-lightGray" data-purpose="statistics-section">
        <div className={`max-w-7xl mx-auto px-4 md:px-8 ${isSection ? 'py-6' : 'py-12'}`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 text-center">
            {/* Stat Item 1 */}
            <div className="about-stat-divider px-4">
              <ScrollReveal delay={0} type="3d-up">
                <Tilt3D maxTilt={12} scale={1.05} className="py-4 px-2 rounded-xl hover:shadow-md hover:bg-gray-50/80 transition-all duration-300">
                  <p className="text-3xl font-bold mb-1 text-brand-dark">120+</p>
                  <p className="text-xs uppercase tracking-widest text-brand-gray leading-tight">Projects<br />Completed</p>
                </Tilt3D>
              </ScrollReveal>
            </div>
            {/* Stat Item 2 */}
            <div className="about-stat-divider px-4">
              <ScrollReveal delay={100} type="3d-up">
                <Tilt3D maxTilt={12} scale={1.05} className="py-4 px-2 rounded-xl hover:shadow-md hover:bg-gray-50/80 transition-all duration-300">
                  <p className="text-3xl font-bold mb-1 text-brand-dark">5+</p>
                  <p className="text-xs uppercase tracking-widest text-brand-gray leading-tight">Years of<br />Experience</p>
                </Tilt3D>
              </ScrollReveal>
            </div>
            {/* Stat Item 3 */}
            <div className="about-stat-divider px-4">
              <ScrollReveal delay={200} type="3d-up">
                <Tilt3D maxTilt={12} scale={1.05} className="py-4 px-2 rounded-xl hover:shadow-md hover:bg-gray-50/80 transition-all duration-300">
                  <p className="text-3xl font-bold mb-1 text-brand-dark">300+</p>
                  <p className="text-xs uppercase tracking-widest text-brand-gray leading-tight">Flying<br />Hours</p>
                </Tilt3D>
              </ScrollReveal>
            </div>
            {/* Stat Item 4 */}
            <div className="px-4">
              <ScrollReveal delay={300} type="3d-up">
                <Tilt3D maxTilt={12} scale={1.05} className="py-4 px-2 rounded-xl hover:shadow-md hover:bg-gray-50/80 transition-all duration-300">
                  <p className="text-3xl font-bold mb-1 text-brand-dark">40+</p>
                  <p className="text-xs uppercase tracking-widest text-brand-gray leading-tight">Locations<br />Covered</p>
                </Tilt3D>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {!isSection && <Footer />}
    </div>
  );
}

