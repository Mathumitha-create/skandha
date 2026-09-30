import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import cinemaDrone from '../assets/booking/cinema-drone.jpg';
import ScrollReveal from './ScrollReveal';
import Tilt3D from './Tilt3D';

import { 
  Clock, 
  Phone, 
  Mail, 
  MapPin, 
  Video, 
  Heart, 
  Building2, 
  Megaphone, 
  Camera, 
  Calendar, 
  ShieldCheck, 
  Cpu, 
  Headphones, 
  ArrowRight 
} from 'lucide-react';

export default function Booking({ isSection = false }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '',
    phoneNumber: '',
    emailAddress: '',
    eventType: '',
    numberOfDays: '1',
    eventDate: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    eventLocation: '',
    notes: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful form submission
    setIsSubmitted(true);
  };

  const handleCloseModal = () => {
    setIsSubmitted(false);
    setFormData({
      customerName: '',
      phoneNumber: '',
      emailAddress: '',
      eventType: '',
      numberOfDays: '1',
      eventDate: '',
      startDate: '',
      endDate: '',
      startTime: '',
      endTime: '',
      eventLocation: '',
      notes: ''
    });
  };

  return (
    <div id="booking" className={`bg-white text-[#1a1a1a] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Shared Navigation Header */}
      {!isSection && <Header activePage="booking" />}

      {/* Main Container */}
      <main className={`max-w-7xl mx-auto px-6 md:px-12 lg:px-20 ${isSection ? 'pt-6 pb-8' : 'pt-28 pb-16'}`}>
        {/* Page Title */}
        <ScrollReveal type="3d-down">
          <section className={`text-center ${isSection ? 'mb-6' : 'mb-12'}`} data-purpose="page-title">
            <h2 className="text-4xl font-bold tracking-widest text-black uppercase">BOOK A SHOOT</h2>
            <p className="text-xs text-gray-500 mt-2 uppercase tracking-wider">Plan your next production with Skandha Studio</p>
          </section>
        </ScrollReveal>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info & Highlights (5 Cols) */}
          <ScrollReveal className="lg:col-span-5 space-y-8" delay={150} type="3d-left">
            
            {/* Local Cinema Drone Image wrapped in 3D tilt */}
            <Tilt3D maxTilt={10} scale={1.04} className="rounded-xl overflow-hidden shadow-md aspect-[16/10] bg-gray-100">
              <img 
                src={cinemaDrone} 
                alt="Cinematic Drone Flight" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
              />
            </Tilt3D>

            {/* Contact Details wrapped in 3D tilt */}
            <Tilt3D maxTilt={6} scale={1.02} className="bg-gray-50/50 border border-gray-100 rounded-xl p-6 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-black pb-2 border-b border-gray-200/60">Studio Contact Info</h3>
              
              <div className="flex items-start gap-3.5 text-xs text-gray-600">
                <Phone className="w-4 h-4 text-black shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-900">Call Us</p>
                  <a href="tel:+919790393433" className="hover:text-black transition-colors mt-0.5 block">+91 97903 93433</a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs text-gray-600">
                <Mail className="w-4 h-4 text-black shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-900">Email Us</p>
                  <a href="mailto:skandhastudios98@gmail.com" className="hover:text-black transition-colors mt-0.5 block">skandhastudios98@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs text-gray-600">
                <MapPin className="w-4 h-4 text-black shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-900">Visit Us</p>
                  <p className="mt-0.5">Eachanari, Coimbatore, Tamil Nadu, India</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs text-gray-600">
                <Clock className="w-4 h-4 text-black shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-900">Studio Hours</p>
                  <p className="mt-0.5">Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </Tilt3D>

            {/* Services highlights */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-black mb-3">Our Core Specializations</h3>
              
              <Tilt3D maxTilt={8} scale={1.03}>
                <div className="flex items-center gap-3.5 text-xs text-gray-700 bg-white p-3 border border-gray-100 rounded-lg hover:border-gray-300 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                    <Heart className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Wedding &amp; Couple Shoots</p>
                    <p className="text-[10px] text-gray-500">Capture intimate moments from breathtaking angles.</p>
                  </div>
                </div>
              </Tilt3D>

              <Tilt3D maxTilt={8} scale={1.03}>
                <div className="flex items-center gap-3.5 text-xs text-gray-700 bg-white p-3 border border-gray-100 rounded-lg hover:border-gray-300 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                    <Building2 className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Real Estate Photography</p>
                    <p className="text-[10px] text-gray-500">High-end architecture and estate sweeps.</p>
                  </div>
                </div>
              </Tilt3D>

              <Tilt3D maxTilt={8} scale={1.03}>
                <div className="flex items-center gap-3.5 text-xs text-gray-700 bg-white p-3 border border-gray-100 rounded-lg hover:border-gray-300 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                    <Video className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Commercial Productions</p>
                    <p className="text-[10px] text-gray-500">Cinematic scaling for brands and corporations.</p>
                  </div>
                </div>
              </Tilt3D>
            </div>

          </ScrollReveal>

          {/* Right Column: Form & Value Props (7 Cols) */}
          <ScrollReveal className="lg:col-span-7 space-y-8" delay={300} type="3d-right">

            
            {/* Booking Form Card */}
            <Tilt3D maxTilt={3} scale={1.01} className="bg-white border border-gray-150 rounded-xl p-8 shadow-sm">
              <h3 className="text-lg font-bold text-black mb-1">Request a Session</h3>
              <p className="text-xs text-gray-500 mb-6">Complete the details below, and our creative coordinator will get in touch.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Customer Name</label>
                    <input 
                      type="text" 
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleChange}
                      required 
                      placeholder="e.g. Priya Sharma"
                      className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-black focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required 
                      placeholder="e.g. 97903 93433"
                      className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-black focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleChange}
                      required 
                      placeholder="e.g. priya@domain.com"
                      className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-black focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Event Type</label>
                    <select 
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-black focus:bg-white transition-all"
                    >
                      <option value="">Select event category</option>
                      <option value="Wedding Shoot">Wedding Photography</option>
                      <option value="Real Estate Shoot">Real Estate Video</option>
                      <option value="Travel Shoot">Travel Campaign</option>
                      <option value="Commercial Shoot">Commercial Production</option>
                      <option value="Event Shoot">Outdoor Event</option>
                      <option value="Other Shoot">Other Visual Request</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Number of Days</label>
                    <input 
                      type="number" 
                      name="numberOfDays"
                      min="1"
                      value={formData.numberOfDays}
                      onChange={handleChange}
                      required 
                      className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-black focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Event Location</label>
                    <input 
                      type="text" 
                      name="eventLocation"
                      value={formData.eventLocation}
                      onChange={handleChange}
                      required 
                      placeholder="e.g. Eachanari, Coimbatore"
                      className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-black focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {parseInt(formData.numberOfDays, 10) >= 2 ? (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">From Date</label>
                        <input 
                          type="date" 
                          name="startDate"
                          value={formData.startDate}
                          onChange={handleChange}
                          required 
                          className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-black focus:bg-white transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">To Date</label>
                        <input 
                          type="date" 
                          name="endDate"
                          value={formData.endDate}
                          onChange={handleChange}
                          required 
                          className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-black focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">From Timing</label>
                        <input 
                          type="time" 
                          name="startTime"
                          value={formData.startTime}
                          onChange={handleChange}
                          required 
                          className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-black focus:bg-white transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">To Timing</label>
                        <input 
                          type="time" 
                          name="endTime"
                          value={formData.endTime}
                          onChange={handleChange}
                          required 
                          className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-black focus:bg-white transition-all"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Preferred Date</label>
                    <input 
                      type="date" 
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      required 
                      className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-black focus:bg-white transition-all"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Special Details &amp; Notes</label>
                  <textarea 
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="4" 
                    placeholder="Describe your vision, timeline, dynamic camera requirements..."
                    className="w-full text-xs px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-black focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="w-full group flex items-center justify-center gap-2 py-3 bg-black text-white hover:bg-gray-900 rounded-md font-bold uppercase tracking-widest text-[10px] transition-all duration-300 shadow-sm"
                  >
                    <span>Request Booking</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </form>
            </Tilt3D>

            {/* Value Propositions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Tilt3D maxTilt={6} scale={1.03} className="h-full">
                <div className="flex items-start gap-3 bg-gray-50/50 p-4 border border-gray-100 rounded-xl h-full">
                  <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                    <Cpu className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-800 uppercase tracking-wide">Latest Drone Technology</h4>
                    <p className="text-[9px] text-gray-500 mt-0.5 leading-normal">High-performance GPS stabilized cinema drones capturing up to 6K RAW.</p>
                  </div>
                </div>
              </Tilt3D>

              <Tilt3D maxTilt={6} scale={1.03} className="h-full">
                <div className="flex items-start gap-3 bg-gray-50/50 p-4 border border-gray-100 rounded-xl h-full">
                  <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                    <Headphones className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-800 uppercase tracking-wide">Premium Support</h4>
                    <p className="text-[9px] text-gray-500 mt-0.5 leading-normal">24/7 communications, location pre-scouting, and local permitting assistance.</p>
                  </div>
                </div>
              </Tilt3D>
            </div>

          </ScrollReveal>

        </div>
      </main>

      {/* Success Dialog Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity duration-300">
          <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-xl border border-gray-100 text-center relative animate-in fade-in zoom-in-95 duration-200">
            <div className="mx-auto w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            
            <h3 className="text-lg font-bold text-gray-900 mb-2">Booking Requested Successfully!</h3>
            
            <div className="text-xs text-gray-600 space-y-2 mb-6">
              <p>Thank you, <strong className="text-black">{formData.customerName}</strong>. We have successfully received your request for a <strong className="text-black">{formData.eventType || "Visual Shoot"}</strong>.</p>
              
              {parseInt(formData.numberOfDays, 10) >= 2 ? (
                <>
                  <p>Date Range: <strong className="text-black">{formData.startDate} to {formData.endDate}</strong></p>
                  <p>Timing: <strong className="text-black">{formData.startTime} - {formData.endTime}</strong></p>
                </>
              ) : (
                <p>Preferred Date: <strong className="text-black">{formData.eventDate}</strong></p>
              )}
              
              <p>Duration: <strong className="text-black">{formData.numberOfDays} Day(s)</strong></p>
              <p>Location: <strong className="text-black">{formData.eventLocation}</strong></p>
              <p className="pt-2 border-t border-gray-150 text-[10px] text-gray-500">A production coordinator will reach out to you within 24 hours to finalize details.</p>
            </div>

            <button 
              onClick={handleCloseModal}
              className="w-full py-2.5 bg-black hover:bg-gray-900 text-white rounded-lg font-bold uppercase tracking-widest text-[10px] transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      {!isSection && <Footer />}
    </div>
  );
}
