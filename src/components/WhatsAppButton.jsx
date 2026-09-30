import React from 'react';

export default function WhatsAppButton() {
  const phoneNumber = "919790393433"; // Derived from +91 97903 93433 in Contact info
  const message = encodeURIComponent("Hello! I'm interested in booking a shoot with Skandha Studio.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] flex items-center justify-center w-14 h-14 bg-white text-black border border-gray-200 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.08)] hover:border-black hover:scale-110 transition-all duration-300 group hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
      aria-label="Contact on WhatsApp"
      data-purpose="whatsapp-float"
    >
      {/* Minimalist WhatsApp Outline SVG Icon */}
      <svg 
        viewBox="0 0 24 24" 
        className="w-7 h-7 transform group-hover:rotate-12 transition-transform duration-300"
      >
        {/* WhatsApp Bubble Outline */}
        <path 
          d="M12 21a9 9 0 0 1-4.9-1.4L3 21l1.4-4.1A9 9 0 1 1 12 21z" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        {/* Telephone Receiver Handset */}
        <path 
          d="M18.06 14.8c-.328-.164-1.942-.958-2.242-1.068-.3-.11-.518-.164-.737.164-.219.328-.848 1.068-1.039 1.286-.192.219-.383.246-.711.082-.328-.164-1.386-.51-2.64-1.627-.976-.87-1.635-1.947-1.826-2.275-.192-.328-.02-.505.144-.668.148-.147.328-.383.493-.574.164-.192.219-.328.328-.547.11-.219.055-.41-.027-.574-.082-.164-.737-1.777-1.011-2.434-.267-.64-.539-.553-.737-.563-.19-.01-.41-.01-.629-.01-.219 0-.575.082-.875.41-.3.328-1.148 1.12-1.148 2.73 0 1.61 1.175 3.167 1.339 3.386.164.219 2.313 3.532 5.6 4.95.782.338 1.39.54 1.866.69.786.25 1.5.214 2.065.13.629-.094 1.942-.793 2.215-1.558.273-.767.273-1.422.192-1.558-.082-.137-.3-.219-.629-.383z" 
          fill="currentColor" 
        />
      </svg>
    </a>
  );
}

