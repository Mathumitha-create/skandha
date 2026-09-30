import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function CustomCursor() {
  const location = useLocation();
  const isBookingPage = location.pathname === '/booking';

  const droneRef = useRef(null);
  const pathRef = useRef(null);
  const pathGlowRef = useRef(null);
  
  const mousePos = useRef({ x: -100, y: -100 });
  const dronePos = useRef({ x: -100, y: -100 });
  const droneAngle = useRef(0);
  const trailPoints = useRef([]);
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  // Manage body class for custom cursor visibility
  useEffect(() => {
    if (isBookingPage) {
      document.body.classList.add('disable-custom-cursor');
    } else {
      document.body.classList.remove('disable-custom-cursor');
    }
    return () => {
      document.body.classList.remove('disable-custom-cursor');
    };
  }, [isBookingPage]);

  useEffect(() => {
    // Check if the device supports hover and a fine pointer (mouse) or if we are on booking page
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice || isBookingPage) {
      return;
    }

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setIsHidden(false);

      // Detect hover on interactive elements
      const target = e.target;
      if (target) {
        const interactive = target.closest('a, button, input, select, textarea, [role="button"], .cursor-pointer');
        setIsHovering(!!interactive);
      }
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Animation frame loop
    let animationFrameId;
    let initialized = false;

    const updateCursor = () => {
      const targetX = mousePos.current.x;
      const targetY = mousePos.current.y;
      
      if (!initialized && targetX > 0 && targetY > 0) {
        dronePos.current = { x: targetX, y: targetY };
        initialized = true;
      }

      const currX = dronePos.current.x;
      const currY = dronePos.current.y;
      
      // Interpolate position (smooth drag effect)
      const nextX = currX + (targetX - currX) * 0.15;
      const nextY = currY + (targetY - currY) * 0.15;
      
      dronePos.current = { x: nextX, y: nextY };

      // Calculate speed and angle of displacement
      const dx = targetX - nextX;
      const dy = targetY - nextY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 1.5) {
        // Add 90 degrees since default drone orientation points upward
        const targetAngle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
        
        let diff = targetAngle - droneAngle.current;
        while (diff < -180) diff += 360;
        while (diff > 180) diff -= 360;
        
        droneAngle.current += diff * 0.15;
      }

      // Update drone DOM styles directly for maximum performance
      if (droneRef.current) {
        const scale = isHovering ? 1.4 : 0.85;
        droneRef.current.style.left = `${nextX}px`;
        droneRef.current.style.top = `${nextY}px`;
        droneRef.current.style.transform = `translate(-50%, -50%) scale(${scale}) rotate(${droneAngle.current}deg)`;
      }

      // Add points to trail
      trailPoints.current.push({ x: nextX, y: nextY });
      if (trailPoints.current.length > 25) {
        trailPoints.current.shift();
      }

      // Render trail paths
      if (pathRef.current && pathGlowRef.current && trailPoints.current.length > 1) {
        const pathData = trailPoints.current
          .map((p, idx) => `${idx === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
          .join(' ');
        
        pathRef.current.setAttribute('d', pathData);
        pathGlowRef.current.setAttribute('d', pathData);
      }

      animationFrameId = requestAnimationFrame(updateCursor);
    };

    animationFrameId = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovering, isBookingPage]);

  // Render nothing if touch device or on booking page
  if ((typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) || isBookingPage) {
    return null;
  }

  return (
    <div 
      className={`custom-drone-cursor-wrapper pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300 ${
        isHidden ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* SVG Flight Trail */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Dark drop shadow path for high contrast on light elements */}
        <path 
          ref={pathRef}
          fill="none" 
          stroke="rgba(0, 0, 0, 0.3)" 
          strokeWidth="3.5" 
          strokeDasharray="4 6" 
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* White glowing flight path */}
        <path 
          ref={pathGlowRef}
          fill="none" 
          stroke="rgba(255, 255, 255, 0.9)" 
          strokeWidth="1.5" 
          strokeDasharray="4 6" 
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: 'drop-shadow(0px 0px 2px rgba(255, 255, 255, 0.8))' }}
        />
      </svg>

      {/* Glowing White Drone Cursor */}
      <div 
        ref={droneRef}
        className="absolute w-12 h-12 pointer-events-none"
        style={{
          left: '-100px',
          top: '-100px',
          filter: 'drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.45)) drop-shadow(0px 0px 3px rgba(255, 255, 255, 0.25))',
          transform: 'translate(-50%, -50%) scale(0.85) rotate(0deg)'
        }}
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          {/* Main Diagonal Carbon Fiber Arms */}
          <line x1="22" y1="22" x2="78" y2="78" stroke="white" strokeWidth="6" strokeLinecap="round" />
          <line x1="78" y1="22" x2="22" y2="78" stroke="white" strokeWidth="6" strokeLinecap="round" />
          
          {/* Motor Hub mounts */}
          <circle cx="22" cy="22" r="7.5" fill="#1a1a1a" stroke="white" strokeWidth="3" />
          <circle cx="78" cy="78" r="7.5" fill="#1a1a1a" stroke="white" strokeWidth="3" />
          <circle cx="78" cy="22" r="7.5" fill="#1a1a1a" stroke="white" strokeWidth="3" />
          <circle cx="22" cy="78" r="7.5" fill="#1a1a1a" stroke="white" strokeWidth="3" />
          
          {/* Spin propeller blur paths */}
          <g opacity="0.75" className="propellers-group">
            {/* Top Left propeller blur */}
            <circle cx="22" cy="22" r="14" fill="none" stroke="white" strokeWidth="0.8" strokeDasharray="3 5" className="animate-propeller-1" style={{ transformOrigin: '22px 22px' }} />
            <circle cx="22" cy="22" r="10" fill="none" stroke="white" strokeWidth="0.5" opacity="0.4" />
            
            {/* Top Right propeller blur */}
            <circle cx="78" cy="22" r="14" fill="none" stroke="white" strokeWidth="0.8" strokeDasharray="3 5" className="animate-propeller-2" style={{ transformOrigin: '78px 22px' }} />
            <circle cx="78" cy="22" r="10" fill="none" stroke="white" strokeWidth="0.5" opacity="0.4" />
            
            {/* Bottom Left propeller blur */}
            <circle cx="22" cy="78" r="14" fill="none" stroke="white" strokeWidth="0.8" strokeDasharray="3 5" className="animate-propeller-3" style={{ transformOrigin: '22px 78px' }} />
            <circle cx="22" cy="78" r="10" fill="none" stroke="white" strokeWidth="0.5" opacity="0.4" />
            
            {/* Bottom Right propeller blur */}
            <circle cx="78" cy="78" r="14" fill="none" stroke="white" strokeWidth="0.8" strokeDasharray="3 5" className="animate-propeller-4" style={{ transformOrigin: '78px 78px' }} />
            <circle cx="78" cy="78" r="10" fill="none" stroke="white" strokeWidth="0.5" opacity="0.4" />
          </g>

          {/* Central Body canopy */}
          <rect x="36" y="28" width="28" height="44" rx="14" fill="white" stroke="#111" strokeWidth="2" />
          
          {/* LED blink light */}
          <circle cx="50" cy="50" r="4.5" fill="#ff0055" className="animate-pulse" />

          {/* Camera Gimbal mount at the nose */}
          <path d="M42 28 C42 22, 58 22, 58 28 Z" fill="white" stroke="#111" strokeWidth="2" />
          <circle cx="50" cy="23" r="3.5" fill="#111" />
        </svg>
      </div>
    </div>
  );
}
