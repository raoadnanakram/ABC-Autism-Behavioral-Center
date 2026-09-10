import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Media = () => {
  const [mediaList, setMediaList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/media')
      .then(res => {
        setMediaList(res.data);
      })
      .catch(err => {
        console.error('Error fetching media:', err);
      });
  }, []);

  return (
    <div className="w-full font-sans text-gray-800 bg-white min-h-screen">

      {/* =========================================================
          1. BANNER SECTION
      ========================================================= */}
      <div className="relative w-full h-[250px] sm:h-[300px] bg-gray-900 overflow-hidden flex items-center justify-center">
        <img
          src="https://abcautism.com.my/wp-content/uploads/2024/05/speech-delay.jpg"
          alt="Media Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wider uppercase mb-2 drop-shadow-lg">
            Media
          </h1>

          <p className="text-xs sm:text-sm font-medium tracking-wide text-gray-100 drop-shadow-md">
            <a href="/" className="hover:underline hover:text-teal-300 transition">Home</a>
            <span className="mx-2">/</span>
            <span className="text-teal-300">Media</span>
          </p>
        </div>
      </div>

      {/* =========================================================
          2. MEDIA LIST SECTION
      ========================================================= */}
      <section className="max-w-5xl mx-auto px-6 sm:px-12 py-16 space-y-10">
        {mediaList.length === 0 ? (
          <p className="text-center text-gray-500 py-10 font-medium">No media or certificates uploaded yet.</p>
        ) : (
          mediaList.map((item) => (
            <div 
              key={item._id} 
              className="flex flex-col sm:flex-row items-center sm:items-start gap-8 pb-10 border-b border-gray-200"
            >
              {/* Left Side: Thumbnail Image */}
              <div className="w-full sm:w-[220px] flex-shrink-0 bg-gray-50 border border-gray-200 p-3 rounded shadow-sm flex justify-center">
                <img 
                  src={`http://localhost:5000/${item.thumbnailImage}`} 
                  alt={item.title} 
                  className="w-full max-w-[180px] h-[140px] object-cover rounded shadow-inner"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800&auto=format&fit=crop";
                  }}
                />
              </div>

              {/* Right Side: Title, Date & More Details Button */}
              <div className="flex-grow space-y-3 text-center sm:text-left">
                            <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider leading-snug" style={{ color: '#111111' }}>

                  {item.title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">
                  {item.date}
                </p>
                <div className="pt-2">
                  <a
                    href={`http://localhost:5000/${item.pdfFile}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#41a2a6] hover:bg-[#358589] text-white font-bold text-xs uppercase px-6 py-2.5 tracking-wider transition rounded shadow-sm"
                  >
                    MORE DETAILS
                  </a>
                </div>
              </div>

            </div>
          ))
        )}
      </section>

    </div>
  );
};

export default Media;