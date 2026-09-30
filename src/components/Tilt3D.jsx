import React, { useState, useRef } from 'react';

export default function Tilt3D({ 
  children, 
  maxTilt = 10, 
  scale = 1.03, 
  perspective = 1000, 
  className = "",
  ...props
}) {
  const [tiltStyle, setTiltStyle] = useState({});
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse position relative to the element
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate normalized position from -0.5 to 0.5
    const xPos = (mouseX / width) - 0.5;
    const yPos = (mouseY / height) - 0.5;

    // Calculate rotation angles
    const rotateY = xPos * maxTilt * 2;
    const rotateX = -yPos * maxTilt * 2;

    setTiltStyle({
      transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
      transition: 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)',
      transformStyle: 'preserve-3d',
    });

    if (props.onMouseMove) {
      props.onMouseMove(e);
    }
  };

  const handleMouseLeave = (e) => {
    setTiltStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`,
      transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
      transformStyle: 'preserve-3d',
    });

    if (props.onMouseLeave) {
      props.onMouseLeave(e);
    }
  };

  return (
    <div
      ref={cardRef}
      style={tiltStyle}
      className={`will-change-transform ${className}`}
      {...props}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
