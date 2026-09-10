import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      
      {/* =====================================================
          SERVICES PAGE HERO SECTION (With New Fitted Image)
      ===================================================== */}
      <div className="relative w-full h-56 sm:h-72 lg:h-96 overflow-hidden bg-gray-900 flex items-center justify-center">
        
        {/* Banner Image fitted horizontally across full width */}
        <img 
          src="https://i.pinimg.com/1200x/76/f5/1c/76f51cd7adb31df7e98d11e9bf3a098f.jpg" 
          alt="Services Banner" 
          className="w-full h-full object-cover object-center"
        />

        {/* Optional light dark overlay for clear text visibility */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Centered Content with Home link */}
        <div className="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col justify-center items-center text-center z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-wide drop-shadow-lg mb-2">
            Services
          </h1>
          
          <div className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-gray-200 tracking-wider drop-shadow-sm">
            <Link 
              to="/" 
              className="hover:text-amber-300 transition-colors duration-200 underline underline-offset-4"
            >
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-300">Services</span>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN SERVICES CONTENT SECTION
      ===================================================== */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Our Professional Services
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We provide specialized behavioral therapy and support programs tailored to meet the unique needs of every individual on the autism spectrum.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Services;