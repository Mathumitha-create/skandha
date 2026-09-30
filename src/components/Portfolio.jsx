import React, { useState, useEffect } from 'react';
import Header from './Header';
import ScrollReveal from './ScrollReveal';
import Tilt3D from './Tilt3D';

// Import local video assets
import video1 from '../../video/1.mp4';
import video2 from '../../video/2.mp4';
import video3 from '../../video/3.mp4';
import video4 from '../../video/4.mp4';
import video5 from '../../video/5.mp4';

function VideoCard({ project, onClick }) {
  return (
    <Tilt3D
      maxTilt={10}
      scale={1.03}
      className={`w-full h-full ${project.aspect}`}
    >
      <div 
        className="w-full h-full relative group cursor-pointer overflow-hidden rounded-md bg-gray-100"
        onClick={() => onClick(project)}
      >
        <video
          src={project.videoSrc}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          muted
          loop
          playsInline
          autoPlay
          onTimeUpdate={(e) => {
            if (e.target.currentTime < 3.0) {
              e.target.currentTime = 3.0;
            }
          }}
        />
        
        {/* HUD Telemetry Corner Borders */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white/40 pointer-events-none group-hover:border-white group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 z-10 rounded-tl-sm"></div>
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white/40 pointer-events-none group-hover:border-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 z-10 rounded-tr-sm"></div>
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white/40 pointer-events-none group-hover:border-white group-hover:-translate-x-0.5 group-hover:translate-y-0.5 transition-all duration-300 z-10 rounded-bl-sm"></div>
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white/40 pointer-events-none group-hover:border-white group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all duration-300 z-10 rounded-br-sm"></div>

        {/* Hover Telemetry HUD Texts */}
        <div className="absolute top-4 left-4 text-[8px] font-mono text-white/50 tracking-[0.2em] pointer-events-none opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out z-10">
          SYS.OK // CAM.0{project.id}
        </div>
        <div className="absolute top-4 right-4 text-[8px] font-mono text-amber-400/80 tracking-[0.2em] pointer-events-none opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out z-10">
          4K UHD
        </div>

        {/* Central Interactive Hover Title & Button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 z-10 opacity-0 scale-95 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0">
          <h3 className="text-white text-base font-extrabold uppercase tracking-[0.25em] mb-1.5 drop-shadow-md text-center px-4">
            {project.title}
          </h3>
          {project.description && (
            <p className="text-amber-400 text-[9px] font-bold tracking-[0.2em] uppercase mb-4 drop-shadow-sm text-center px-4">
              {project.description}
            </p>
          )}
          <span className="bg-white/10 backdrop-blur-md border border-white/30 text-white text-[9px] tracking-[0.2em] px-4 py-1.5 rounded-full font-bold shadow-lg transition-all duration-300 hover:bg-white hover:text-black hover:border-white uppercase">
            View Video
          </span>
        </div>

        {/* Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <span className="text-white text-[10px] font-bold tracking-wider uppercase">{project.category}</span>
          <p className="text-gray-200 text-[10px] mt-0.5 truncate">{project.alt}</p>
        </div>
      </div>
    </Tilt3D>
  );
}

export default function Portfolio({ isSection = false }) {
  const [activeTab, setActiveTab] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ['All', 'Wedding', 'Real Estate', 'Travel', 'Commercial', 'Events'];

  const projects = [
    // Representative mix for the first few items (All tab shows 1 of each of the first 3 categories)
    { id: 1, type: 'video', category: 'Travel', videoSrc: video1, alt: 'Coastal Travel Perspective', title: 'Coastal Perspective', description: 'Shoreline Flight & Ocean Swell', aspect: 'aspect-landscape' },
    { id: 2, type: 'video', category: 'Real Estate', videoSrc: video2, alt: 'Premium Real Estate Aerial', title: 'Premium Estate', description: 'Architectural Flyover & Luxury Property', aspect: 'aspect-landscape' },
    { id: 3, type: 'video', category: 'Commercial', videoSrc: video3, alt: 'Corporate Commercial View', title: 'Corporate Drone', description: 'Brand Promotion & Industrial Footage', aspect: 'aspect-landscape' },
    { id: 4, type: 'video', category: 'Wedding', videoSrc: video4, alt: 'Cinematic Wedding Shoot', title: 'Cinematic Wedding', description: 'Love Story & Memorable Highlights', aspect: 'aspect-landscape' },
    { id: 5, type: 'video', category: 'Events', videoSrc: video5, alt: 'Dynamic Events Coverage', title: 'Dynamic Events', description: 'Festival Energy & Concert Scale', aspect: 'aspect-landscape' },

    // Additional items properly mapped to their respective category video
    { id: 6, type: 'video', category: 'Travel', videoSrc: video1, alt: 'Mountain Travel Drone', title: 'Mountain Drone', description: 'Peak Exploration & Alpine Heights', aspect: 'aspect-landscape' },
    { id: 7, type: 'video', category: 'Travel', videoSrc: video1, alt: 'Tropical Island Aerial', title: 'Tropical Island', description: 'Island Escape & Turquoise Water', aspect: 'aspect-landscape' },
    
    { id: 8, type: 'video', category: 'Real Estate', videoSrc: video2, alt: 'Modern Suburbs Flight', title: 'Suburbs Flight', description: 'Modern Housing & Neighborhood Overview', aspect: 'aspect-landscape' },
    { id: 9, type: 'video', category: 'Real Estate', videoSrc: video2, alt: 'Luxury Estate Flyover', title: 'Estate Flyover', description: 'Exclusive Property & Panoramic View', aspect: 'aspect-landscape' },
    
    { id: 10, type: 'video', category: 'Commercial', videoSrc: video3, alt: 'Industrial Complex Drone', title: 'Industrial Drone', description: 'Factory Operations & Power Cinematography', aspect: 'aspect-landscape' },
    { id: 11, type: 'video', category: 'Commercial', videoSrc: video3, alt: 'Urban High-Rise Perspective', title: 'Urban High-Rise', description: 'Skyscraper Sweep & Cityscape View', aspect: 'aspect-landscape' },
    
    { id: 12, type: 'video', category: 'Wedding', videoSrc: video4, alt: 'Wedding Reception Aerial', title: 'Reception Highlights', description: 'Celebration Dance & Glowing Lights', aspect: 'aspect-landscape' },
    { id: 13, type: 'video', category: 'Wedding', videoSrc: video4, alt: 'Outdoor Ceremony Drone', title: 'Outdoor Ceremony', description: 'Forest Wedding & Garden Altar', aspect: 'aspect-landscape' },
    
    { id: 14, type: 'video', category: 'Events', videoSrc: video5, alt: 'Festival Highlights Drone', title: 'Festival Highlights', description: 'Carnival Spirit & Music Festival', aspect: 'aspect-landscape' },
    { id: 15, type: 'video', category: 'Events', videoSrc: video5, alt: 'Concert Stage Aerial', title: 'Stage Performance', description: 'Live Show & Pyrotechnic Coverage', aspect: 'aspect-landscape' },
  ];

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter(p => p.category === activeTab);

  return (
    <div id="portfolio" className={`bg-white text-[#333] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Shared Navigation Header */}
      {!isSection && <Header activePage="portfolio" />}

      {/* Main Content */}
      <main className={`max-w-7xl mx-auto px-6 md:px-12 ${isSection ? 'pt-8 pb-8' : 'pt-28 pb-16'}`}>
        {/* Page Heading */}
        <ScrollReveal type="3d-down">
          <section className="text-center mb-8" data-purpose="page-title">
            <h2 className="text-4xl font-bold tracking-widest text-black uppercase">PORTFOLIO</h2>
          </section>
        </ScrollReveal>

        {/* Filter Tabs */}
        <ScrollReveal delay={100} type="3d-down">
          <section className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12 text-sm font-semibold text-gray-400" data-purpose="filter-tabs">
            {categories.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`transition-colors duration-200 pb-1 ${
                  activeTab === tab
                    ? 'text-black border-b-2 border-black'
                    : 'hover:text-black'
                }`}
              >
                {tab}
              </button>
            ))}
          </section>
        </ScrollReveal>

        {/* Projects Grid */}
        <ScrollReveal delay={200} type="3d-up">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto" data-purpose="project-gallery">
            {(isSection ? filteredProjects.slice(0, 3) : filteredProjects).map(project => (
              <VideoCard
                key={project.id}
                project={project}
                onClick={setActiveVideo}
              />
            ))}
          </section>
        </ScrollReveal>
      </main>

      {/* Lightbox Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 transition-all duration-300"
          onClick={() => setActiveVideo(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white hover:scale-110 transition-all z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full"
            onClick={() => setActiveVideo(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div 
            className="relative max-w-5xl w-full bg-black rounded-lg overflow-hidden aspect-video shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video 
              src={activeVideo.videoSrc}
              controls
              autoPlay
              className="w-full h-full object-contain"
              onTimeUpdate={(e) => {
                if (e.target.currentTime < 3.0) {
                  e.target.currentTime = 3.0;
                }
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
