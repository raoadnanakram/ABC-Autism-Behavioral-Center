import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center bg-white px-6 py-16 text-center font-sans">
      
      {/* Success Icon / Checkmark Emoji */}
      <div className="w-20 h-20 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center text-4xl shadow-sm mb-6 border border-teal-100">
        ✓
      </div>

      {/* Bold Heading */}
                <h1 className="text-4xl font-extrabold text-black tracking-wider uppercase bg-[#009689] px-6 py-3 inline-block">

        Thanks for reaching out
      </h1>

      {/* Description Text */}
      <p className="text-gray-600 text-sm sm:text-base max-w-md leading-relaxed mb-8">
        We appreciate your interest in us.<br />
        Your message has been successfully sent and it soon be dealt with.
      </p>

      {/* Back to Home Button */}
      <Link 
        to="/" 
        className="bg-[#2B8A87] hover:bg-[#23726f] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-md transition-all duration-200"
      >
        Back to Home
      </Link>

    </div>
  );
};

export default ThankYou;