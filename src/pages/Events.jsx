import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming'); // 'upcoming' ya 'past'
  const [eventsList, setEventsList] = useState([]);
  const [openIndex, setOpenIndex] = useState(0); // Pehla wala default open rahega

  useEffect(() => {
    axios.get('http://localhost:5000/api/events')
      .then(res => setEventsList(res.data))
      .catch(err => console.error(err));
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Tab ke hisab se filter karna
  const filteredEvents = eventsList.filter(ev => ev.category === activeTab);

  return (
    <div className="w-full font-sans text-gray-800 bg-white min-h-screen">

      {/* Banner Section */}
      <div className="relative w-full h-[250px] sm:h-[300px] bg-gray-900 overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop"
          alt="Events Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wider uppercase mb-2">Events</h1>
          <p className="text-xs sm:text-sm font-medium tracking-wide text-gray-200">
            <a href="/" className="hover:underline">Home</a> <span className="mx-2">/</span> <span className="text-teal-300">Events</span>
          </p>
        </div>
      </div>

      {/* Main Container */}
      <section className="max-w-5xl mx-auto px-6 sm:px-12 py-16">
        
        {/* Tabs Switcher (Upcoming / Past) */}
        <div className="flex border-b border-gray-200 mb-10">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-6 py-3 font-bold text-sm transition border-b-2 ${activeTab === 'upcoming' ? 'border-[#41a2a6] text-[#41a2a6] bg-gray-50' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
          >
            UPCOMING EVENTS
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`px-6 py-3 font-bold text-sm transition border-b-2 ${activeTab === 'past' ? 'border-[#41a2a6] text-[#41a2a6] bg-gray-50' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
          >
            PAST EVENTS
          </button>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredEvents.length === 0 ? (
            <p className="text-center text-gray-500 py-10 font-medium">No events found in this category.</p>
          ) : (
            filteredEvents.map((event, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={event._id} className="border border-gray-200 rounded shadow-sm overflow-hidden">
                  
                  {/* Accordion Header Bar */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between px-6 py-4 bg-[#41a2a6] hover:bg-[#358589] text-white font-medium text-left transition"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-lg font-bold">{isOpen ? '−' : '+'}</span>
                      <span className="text-base font-semibold">{event.title}</span>
                    </span>
                  </button>

                  {/* Accordion Content Box */}
                  {isOpen && (
                    <div className="bg-white p-6 sm:p-8 space-y-6 text-gray-700">
                      
                      {/* Orange Sub-header title inside content */}
                      <div className="bg-[#fca139] text-white px-6 py-3 rounded font-bold text-center text-sm sm:text-base tracking-wide shadow-sm">
                        {event.title}
                      </div>

                      {/* Event Poster / Image */}
                      {event.imagePath && (
                        <div className="flex justify-center my-4">
                          <img 
                            src={`http://localhost:5000/${event.imagePath}`} 
                            alt={event.title} 
                            className="w-full max-w-2xl h-auto object-contain rounded border border-gray-200 shadow"
                          />
                        </div>
                      )}

                      {/* Event Description / Content */}
                      {event.description && (
                        <p className="text-sm leading-relaxed text-gray-700 whitespace-pre-line">
                          {event.description}
                        </p>
                      )}

                    </div>
                  )}

                </div>
              );
            })
          )}
        </div>

      </section>

    </div>
  );
};

export default Events;