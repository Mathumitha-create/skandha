import React, { useState, useEffect, useRef } from 'react';

export default function ScrollReveal({ 
  children, 
  className = '', 
  delay = 0, 
  distance = 40, 
  duration = 1000,
  type = 'slide'
}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px' // triggers slightly before elements enter viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (isIntersecting) {
      if (type.startsWith('3d')) {
        return 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateX(0) translateY(0) translateZ(0) scale(1)';
      }
      return 'translateY(0) scale(1)';
    }

    switch (type) {
      case 'fade':
        return 'none';
      case '3d-up':
        return `perspective(1200px) rotateX(-15deg) translateY(${distance}px) translateZ(-80px) scale(0.95)`;
      case '3d-down':
        return `perspective(1200px) rotateX(15deg) translateY(${-distance}px) translateZ(-80px) scale(0.95)`;
      case '3d-left':
        return `perspective(1200px) rotateY(-15deg) translateX(${-distance}px) translateZ(-80px) scale(0.95)`;
      case '3d-right':
        return `perspective(1200px) rotateY(15deg) translateX(${distance}px) translateZ(-80px) scale(0.95)`;
      case 'slide':
      default:
        return `translateY(${distance}px) scale(0.96)`;
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transform: getTransform(),
        opacity: isIntersecting ? 1 : 0,
        transformStyle: type.startsWith('3d') ? 'preserve-3d' : 'flat'
      }}
      className={`transition-all cubic-bezier(0.215, 0.61, 0.355, 1) ${className}`}
    >
      {children}
    </div>
  );
}

