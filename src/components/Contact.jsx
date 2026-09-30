import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollReveal from './ScrollReveal';
import Tilt3D from './Tilt3D';
import { 
  Phone, 
  Mail, 
  MapPin 
} from 'lucide-react';

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

export default function Contact({ isSection = false }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id="contact" className={`bg-white text-[#1a1a1a] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Shared Navigation Header */}
      {!isSection && <Header activePage="contact" />}

      {/* Main Container */}
      <main className={`relative max-w-7xl mx-auto px-6 md:px-12 ${isSection ? 'pt-6 pb-8' : 'py-12 md:py-20 pt-28 pb-16'} overflow-hidden`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 items-center">
          
          {/* LEFT COLUMN: Contact Information */}
          <ScrollReveal className="space-y-10" delay={150} type="3d-left">
            <Tilt3D maxTilt={6} scale={1.02} className="bg-white border border-gray-100/80 rounded-2xl p-8 shadow-sm">
              <section data-purpose="contact-info" className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold uppercase tracking-widest text-black mb-2">Contact Me</h2>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Let&apos;s create something amazing together.</p>
                </div>

                <div className="space-y-6 pt-2">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-black shrink-0 mt-0.5 border border-gray-100">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900 uppercase tracking-wider">Phone</p>
                      <a href="tel:+919790393433" className="text-gray-500 hover:text-black transition-colors text-sm mt-0.5 block">+91 97903 93433</a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-black shrink-0 mt-0.5 border border-gray-100">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900 uppercase tracking-wider">Email</p>
                      <a href="mailto:skandhastudios98@gmail.com" className="text-gray-500 hover:text-black transition-colors text-sm mt-0.5 block">skandhastudios98@gmail.com</a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-black shrink-0 mt-0.5 border border-gray-100">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900 uppercase tracking-wider">Location</p>
                      <p className="text-gray-500 text-sm mt-0.5">Eachanari, Coimbatore, Tamil Nadu, India</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-4" data-purpose="social-media">
                  <p className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">Follow Me</p>
                  <div className="flex space-x-6 text-gray-400">
                    <a className="hover:text-black transition-colors" href="https://www.instagram.com/skandha_dronography?utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <InstagramIcon className="w-5 h-5" />
                    </a>
                    <a className="hover:text-black transition-colors" href="https://www.facebook.com/share/1CTtqALG2U/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <FacebookIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </section>
            </Tilt3D>
          </ScrollReveal>

          {/* RIGHT COLUMN: Google Map */}
          <ScrollReveal className="w-full" delay={300} type="3d-right">
            <section data-purpose="contact-map-section" className="w-full">
              <Tilt3D maxTilt={4} scale={1.02} className="w-full h-80 md:h-[450px] rounded-xl overflow-hidden shadow-sm border border-gray-150 bg-gray-50 relative">
                <iframe 
                  title="Skandha Studio Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.3776214555026!2d76.9807577748056!3d10.916578089230554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b73646876c1%3A0x6446e1564757e7f1!2sArulmigu%20Eachanari%20Vinayagar%20Temple!5e0!3m2!1sen!2sin!4v1717666666666!5m2!1sen!2sin"
                  className="w-full h-full border-0 grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Tilt3D>
            </section>
          </ScrollReveal>

        </div>
      </main>

      {/* Footer */}
      {!isSection && <Footer />}
    </div>
  );
}

