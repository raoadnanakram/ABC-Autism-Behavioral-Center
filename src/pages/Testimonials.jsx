import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Testimonials = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/testimonials').then(res => setData(res.data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Parent Testimonials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {data.map((item) => (
          <div key={item._id} className="p-6 bg-gray-50 rounded-lg shadow-sm border">
            <h2 className="text-lg font-bold mb-4">Parent's Name : {item.parentName}</h2>
            {item.type === 'video' ? (
              <iframe 
                className="w-full h-64 rounded"
                src={item.youtubeUrl.replace("watch?v=", "embed/")} 
                title="YouTube video" 
              />
            ) : (
              <p className="text-gray-700 leading-relaxed">{item.message}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;