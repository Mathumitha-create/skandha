import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollReveal from './ScrollReveal';
import Tilt3D from './Tilt3D';

// Import testimonial avatars
import avatar1 from '../assets/testimonials/avatar-1.jpg';
import avatar2 from '../assets/testimonials/avatar-2.jpg';
import avatar3 from '../assets/testimonials/avatar-3.jpg';


export default function Testimonials({ isSection = false }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Priya & Karthik',
      quote: '"Skandha Studio captured our wedding like a dream."',
      avatar: avatar1,
    },
    {
      id: 2,
      name: 'Daniel Jacob',
      quote: '"Professional, creative and truly talented team."',
      avatar: avatar2,
    },
    {
      id: 3,
      name: 'Rahul Sharma',
      quote: '"The quality and cinematic shots are outstanding!"',
      avatar: avatar3,
    },
  ];



  return (
    <div id="services" className={`bg-white text-brand-dark transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Shared Header Navigation */}
      {!isSection && <Header activePage="services" />}

      <main className={`${isSection ? 'pt-6 pb-6' : 'py-24'} px-4 sm:px-6 lg:px-8 ${isSection ? '' : 'mt-12'}`}>
        {/* Section Heading */}
        <ScrollReveal type="3d-down">
          <div className={`max-w-4xl mx-auto text-center ${isSection ? 'mb-6' : 'mb-16'}`} data-purpose="section-title-container">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-2 uppercase">
              Clients &amp; Testimonials
            </h1>
            <p className="text-lg text-gray-500">Trusted by amazing people and brands.</p>
          </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ${isSection ? 'mb-0' : 'mb-24'}`} data-purpose="testimonials-container">
          {testimonials.map((item, index) => (
            <ScrollReveal key={item.id} type="3d-up" delay={index * 150}>
              <Tilt3D maxTilt={10} scale={1.03} className="h-full">
                <article className="testimonial-card bg-white rounded-xl shadow-sm p-8 flex flex-col items-center text-center h-full border border-gray-100/60 hover:shadow-lg transition-all duration-300">
                  <div className="mb-6">
                    <img 
                      alt={item.name} 
                      className="w-24 h-24 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105" 
                      src={item.avatar} 
                    />
                  </div>
                  <blockquote className="text-gray-700 italic mb-8 flex-grow">
                    {item.quote}
                  </blockquote>
                  <cite className="not-italic font-semibold text-gray-900">{item.name}</cite>
                </article>
              </Tilt3D>
            </ScrollReveal>
          ))}
        </div>

      </main>

      {/* Footer */}
      {!isSection && <Footer />}
    </div>
  );
}
