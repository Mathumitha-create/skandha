import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import thumbnailImage from '../assets/showreel/thumbnail.jpg';
import showreelVideo from '../../video/4.mp4';
import ScrollReveal from './ScrollReveal';
import Tilt3D from './Tilt3D';

export default function Showreel({ isSection = false }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleTriggerPlay = () => {
      const video = videoRef.current;
      if (!video) return;
      video.muted = false;
      setIsMuted(false);
      video.play().catch(err => {});
    };

    window.addEventListener('play-showreel', handleTriggerPlay);
    return () => {
      window.removeEventListener('play-showreel', handleTriggerPlay);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleTimeUpdate = () => {
      if (video.currentTime < 3.0) {
        video.currentTime = 3.0;
      }
      setCurrentTime(video.currentTime);
    };
    const handleDurationChange = () => setDuration(video.duration);
    const handleVolumeChange = () => setIsMuted(video.muted);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('durationchange', handleDurationChange);
    video.addEventListener('volumechange', handleVolumeChange);

    // If metadata is already loaded
    if (video.duration) {
      setDuration(video.duration);
    }

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('durationchange', handleDurationChange);
      video.removeEventListener('volumechange', handleVolumeChange);
    };
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(err => {});
    }
  };

  const handleSeek = (e) => {
    if (!videoRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) {
      videoRef.current.msRequestFullscreen();
    }
  };

  const formatTime = (secs) => {
    const s = Math.floor(secs);
    const minutes = Math.floor(s / 60);
    const seconds = s % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div id="showreel" className={`bg-white text-brand-dark transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Shared Navigation Header */}
      {!isSection && <Header activePage="" />}

      {/* Main Content Area */}
      <main className={`max-w-7xl mx-auto px-6 md:px-12 ${isSection ? 'pt-8 pb-8' : 'pt-28 pb-16'}`} data-purpose="main-content-area">
        {/* Section Heading */}
        <ScrollReveal type="3d-down">
          <section className="text-center mb-10" data-purpose="page-title">
            <h2 className="text-4xl font-bold tracking-widest text-black uppercase">WATCH SHOWREEL</h2>
          </section>
        </ScrollReveal>

        {/* Video Player Container */}
        <ScrollReveal delay={200}>
          <Tilt3D maxTilt={5} scale={1.01} className="max-w-3xl mx-auto w-full">
            <section 
              className="relative group cursor-pointer p-1.5 bg-black border-2 border-black/90 rounded-2xl shadow-xl hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)] transition-all duration-500 ease-out" 
              data-purpose="video-player"
              onClick={togglePlay}
            >
              {/* Video Element */}
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-900 relative shadow-2xl border border-amber-400/20 group-hover:border-amber-400/70 transition-colors duration-500 ease-out">
              <video 
                ref={videoRef}
                src={showreelVideo}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]" 
                playsInline
                autoPlay
                muted
                loop
              />

              {/* HUD Telemetry Corner Borders */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-amber-400/30 pointer-events-none group-hover:border-amber-400 group-hover:-translate-x-2.5 group-hover:-translate-y-2.5 transition-all duration-500 ease-out z-10 rounded-tl-sm"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-amber-400/30 pointer-events-none group-hover:border-amber-400 group-hover:translate-x-2.5 group-hover:-translate-y-2.5 transition-all duration-500 ease-out z-10 rounded-tr-sm"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-amber-400/30 pointer-events-none group-hover:border-amber-400 group-hover:-translate-x-2.5 group-hover:translate-y-2.5 transition-all duration-500 ease-out z-10 rounded-bl-sm"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-amber-400/30 pointer-events-none group-hover:border-amber-400 group-hover:translate-x-2.5 group-hover:translate-y-2.5 transition-all duration-500 ease-out z-10 rounded-br-sm"></div>

              {/* Hover Telemetry HUD Texts */}
              <div className="absolute top-8 left-8 text-[9px] font-mono text-white/50 tracking-[0.25em] pointer-events-none opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out z-10">
                SYS.ACTIVE // ALT.120M
              </div>
              <div className="absolute top-8 right-8 text-[9px] font-mono text-amber-400/80 tracking-[0.25em] pointer-events-none opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out z-10 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span> REC • 4K 60FPS
              </div>

              {/* Center Play/Pause Text Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] tracking-[0.3em] px-6 py-3 rounded-full font-bold shadow-2xl opacity-0 scale-95 -translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  {isPlaying ? 'PAUSE PREVIEW' : 'PLAY SHOWREEL'}
                </div>
              </div>

              {/* Video Controls Bar */}
              <div 
                className="absolute bottom-0 left-0 right-0 p-6 video-overlay-gradient flex flex-col space-y-4" 
                data-purpose="video-controls"
                onClick={(e) => e.stopPropagation()} // Prevent controls bar clicks from triggering play/pause toggle
              >
                {/* Progress Bar Area */}
                <div className="w-full flex items-center space-x-4">
                  <span className="text-white text-xs font-mono">{formatTime(currentTime)}</span>
                  <div 
                    className="flex-grow custom-progress-bar rounded-full overflow-hidden cursor-pointer"
                    onClick={handleSeek}
                  >
                    <div className="custom-progress-inner" style={{ width: `${progressPercent}%` }}></div>
                  </div>
                  <span className="text-white text-xs font-mono">{formatTime(duration)}</span>
                </div>

                {/* Interaction Icons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6 text-white">
                    {/* Play/Pause Button */}
                    <button onClick={togglePlay} className="hover:text-gray-300 transition-colors">
                      {isPlaying ? (
                        // Pause Icon
                        <svg fill="currentColor" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                        </svg>
                      ) : (
                        // Play Icon
                        <svg fill="currentColor" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-white">
                    {/* Volume Icon */}
                    <button onClick={toggleMute} className="hover:text-gray-300 transition-colors">
                      {isMuted ? (
                        // Muted Icon
                        <svg fill="currentColor" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM19 12c0 2.94-1.88 5.44-4.5 6.32v2.06c3.74-.91 6.5-4.3 6.5-8.38s-2.76-7.47-6.5-8.38v2.06c2.62.88 4.5 3.38 4.5 6.32zM3 9v6h4l5 5V4L7 9H3z"/>
                        </svg>
                      ) : (
                        // Sound/Speaker Icon
                        <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11 5L6 9H2v6h4l5 4V5z" />
                          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                        </svg>
                      )}
                    </button>
                    {/* Subtitles/CC Icon */}
                    <button className="hover:text-gray-300 transition-colors">
                      <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="20" xmlns="http://www.w3.org/2000/svg">
                        <rect height="14" rx="2" ry="2" width="18" x="3" y="5" />
                        <path d="M7 15h4M13 15h4" />
                      </svg>
                    </button>
                    {/* Fullscreen Icon */}
                    <button onClick={toggleFullscreen} className="hover:text-gray-300 transition-colors">
                      <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </Tilt3D>
        </ScrollReveal>
      </main>
    </div>
  );
}
