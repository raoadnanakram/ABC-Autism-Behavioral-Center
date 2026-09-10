import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Contact = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('bangsar');

  const [formData, setFormData] = useState({
    parentName: '',
    childAge: '',
    countryCode: '+60',
    contactNumber: '',
    email: '',
    serviceEnquiry: 'Home Based',
    location: 'Bangsar',
    message: '',
  });

  const [attachment, setAttachment] = useState(null);
  const [loading, setLoading] = useState(false);

const locations = {
    bangsar: {
      name: 'ABC (Autism Behavioral Center) - Al Rehman Hospital',
      address: 'H6WM+HRM, Main Sharqpur Road، near Al Rehman Garden Phase 2 Near Faizpur Interchange, Phase II Al Rehman Garden Phase 2, Lahore, 54950, Pakistan',
       // Updated configuration
mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.0!2d74.2504538!3d31.5902768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391911e609661487%3A0x359c64374c1f3a92!2sABC%20Autism%20Behavioral%20Center!5e0!3m2!1sen!2spk!4v1710000000000!5m2!1sen!2spk',      image: 'https://alrehmandevelopers.com/wp-content/uploads/2024/02/Al-Rehman-Garden-Phase-2-Hospital.png',
    },
  };
  const currentLoc = locations[activeTab];

  const countryCodes = [
  
    { name: 'Pakistan', code: '+92' },
    { name: 'India', code: '+91' },
    { name: 'Singapore', code: '+65' },
    { name: 'Indonesia', code: '+62' },
    { name: 'Thailand', code: '+66' },
    { name: 'Vietnam', code: '+84' },
    { name: 'Philippines', code: '+63' },
    { name: 'Australia', code: '+61' },
    { name: 'New Zealand', code: '+64' },
    { name: 'Japan', code: '+81' },
    { name: 'South Korea', code: '+82' },
    { name: 'China', code: '+86' },
    { name: 'Fiji', code: '+679' },
    { name: 'Papua New Guinea', code: '+675' },
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setAttachment(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleClear = () => {
    setFormData({
      parentName: '',
      childAge: '',
      countryCode: '+92',
      contactNumber: '',
      email: '',
      serviceEnquiry: 'Home Based',
      location: 'Al Rehman Hospital,Lahore',
      message:'',   });
    setAttachment(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append('parentName', formData.parentName);
    data.append('childAge', formData.childAge);
    data.append('contactNumber', `${formData.countryCode} ${formData.contactNumber}`);
    data.append('email', formData.email);
    data.append('serviceType', formData.serviceEnquiry);
    data.append('branch', formData.location);
    data.append('message', formData.message);
    if (attachment) {
      data.append('attachment', attachment);
    }

    try {
      const response = await axios.post('http://localhost:5000/api/contact', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        navigate('/thank-you');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-white font-sans">
      
      {/* CONTACT PAGE HERO SECTION */}
      <div className="relative w-full h-56 sm:h-72 lg:h-96 overflow-hidden bg-gray-900 flex items-center justify-center">
        <img 
          src="https://i.pinimg.com/1200x/76/f5/1c/76f51cd7adb31df7e98d11e9bf3a098f.jpg" 
          alt="Contact Banner" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-wide drop-shadow-lg mb-2">
            Contact Us
          </h1>
          <div className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-gray-200 tracking-wider">
            <Link to="/" className="hover:text-amber-300 transition-colors duration-200 underline underline-offset-4">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-300">Contact</span>
          </div>
        </div>
      </div>

     {/* LOCATE US SECTION - SINGLE LOCATION */}
<section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12">
  <div className="text-center mb-8">
    <h2 className="text-4xl font-extrabold text-black tracking-wider uppercase bg-[#000000] px-6 py-3 inline-block text-white">
      LOCATE US
    </h2>
    <div className="w-16 h-1 bg-teal-700 mx-auto mt-2 rounded-full"></div>
  </div>

  {/* SINGLE TAB / BUTTON */}
  <div className="flex justify-center mb-10">
    <div className="px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold uppercase bg-teal-700 text-white shadow-md">
      Al Rehman Hospital,Lahore
    </div>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
    {/* MAP & ADDRESS CONTAINER */}
    <div className="w-full h-[350px] sm:h-[420px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100 flex flex-col justify-between p-4">
      <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-sm text-xs sm:text-sm text-gray-800 space-y-1">
        <p className="font-bold text-gray-900">{currentLoc.name}</p>
        <p className="text-gray-600">{currentLoc.address}</p>
      </div>
      <div className="w-full h-full mt-3 rounded-lg overflow-hidden">
        <iframe 
          title={currentLoc.name}
          src={currentLoc.mapSrc} 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>
    </div>

    {/* IMAGE CONTAINER */}
    <div className="w-full h-[350px] sm:h-[420px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-900 flex items-center justify-center relative">
      <img 
        src={currentLoc.image} 
        alt={currentLoc.name} 
        className="w-full h-full object-cover object-center transition-all duration-500"
      />
      <div className="absolute inset-0 bg-black/10" />
    </div>
  </div>
</section>

      {/* FIND US NOW & CONTACT FORM SECTION */}
      <section className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          <div className="bg-[#2B8A87] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide uppercase">
              FIND US NOW
            </h2>

           <div className="space-y-1 text-xs sm:text-sm leading-relaxed">
  <p className="font-bold">
    📍 ABC (Autism Behavioral Center) - Al Rehman Hospital
  </p>

<p>
    20 Plaza Main Boulevard, Hasan Commercial,<br />
    Al-Rehman Garden Phase 2,<br />
    Main Sharqpur Road, Near Faizpur Interchange,<br />
    Lahore, 54000, Pakistan
  </p>

  <p>
    Tel: +92345-8471693 / +92300-1330450
  </p>

  <p>
    Email: abcautismbehavious@gmail.com
  </p>
</div>
          </div>

          <div className="bg-[#E76E65] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide uppercase mb-2">
              CONTACT FORM
            </h2>
            <p className="text-xs sm:text-sm mb-8 leading-relaxed opacity-95">
              For Information, or to find out how we can help you and your child, please contact us using the form below.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <input 
                  type="text" 
                  name="parentName" 
                  required 
                  value={formData.parentName}
                  onChange={handleChange}
                  placeholder="Parent Name" 
                  className="w-full bg-white/20 border border-white/40 rounded px-4 py-3 text-sm text-white placeholder-white/80 focus:outline-none focus:bg-white/30 transition-all"
                />
              </div>

              <div>
                <input 
                  type="text" 
                  name="childAge" 
                  required 
                  value={formData.childAge}
                  onChange={handleChange}
                  placeholder="Child Age" 
                  className="w-full bg-white/20 border border-white/40 rounded px-4 py-3 text-sm text-white placeholder-white/80 focus:outline-none focus:bg-white/30 transition-all"
                />
              </div>

              <div className="flex gap-2">
                <select 
                  name="countryCode" 
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="w-32 bg-white/20 border border-white/40 rounded px-2 py-3 text-xs sm:text-sm text-white focus:outline-none focus:bg-white/30 transition-all cursor-pointer"
                >
                  {countryCodes.map((c, index) => (
                    <option key={index} value={c.code} className="text-gray-900">
                      {c.name} ({c.code})
                    </option>
                  ))}
                </select>

                <input 
                  type="tel" 
                  name="contactNumber" 
                  required 
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Contact" 
                  className="flex-1 bg-white/20 border border-white/40 rounded px-4 py-3 text-sm text-white placeholder-white/80 focus:outline-none focus:bg-white/30 transition-all"
                />
              </div>

              <div>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email" 
                  className="w-full bg-white/20 border border-white/40 rounded px-4 py-3 text-sm text-white placeholder-white/80 focus:outline-none focus:bg-white/30 transition-all"
                />
              </div>

              <div>
                <select 
                  name="serviceEnquiry" 
                  value={formData.serviceEnquiry}
                  onChange={handleChange}
                  className="w-full bg-white text-gray-900 border border-white/40 rounded px-4 py-3 text-sm focus:outline-none cursor-pointer"
                >
                  <option value="- Service Enquiry -">- Service Enquiry -</option>
                  <option value="Center Based">Center Based</option>
                  <option value="Home Based">Home Based</option>
                  <option value="Shadow Aide / PLA Support">Shadow Aide / PLA Support</option>
                  <option value="Parent & Teacher Workshops">Parent & Teacher Workshops</option>
                  <option value="Free Autism Screenings & Autism Awareness Talk">Free Autism Screenings & Autism Awareness Talk</option>
                  <option value="Diagnostic Assessment and Evaluation">Diagnostic Assessment and Evaluation</option>
                  <option value="Occupational Therapy">Occupational Therapy</option>
                  <option value="Adaptive Fitness Sessions">Adaptive Fitness Sessions</option>
                  <option value="Speech Therapy">Speech Therapy</option>
                </select>
              </div>

              <div>
                <select 
                  name="location" 
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full bg-white text-gray-900 border border-white/40 rounded px-4 py-3 text-sm focus:outline-none cursor-pointer"
                >
                  <option value="Al Rehman Garden">Al Rehman Garden</option>
                </select>
              </div>

              <div>
                <textarea 
                  name="message" 
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message" 
                  className="w-full bg-white/20 border border-white/40 rounded p-4 text-sm text-white placeholder-white/80 focus:outline-none focus:bg-white/30 transition-all resize-none"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-white mb-2">
                  Attachment (Max 2MB)
                </label>
                <input 
                  type="file" 
                  name="attachment"
                  onChange={handleChange}
                  className="w-full text-xs text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-white file:text-gray-900 hover:file:bg-gray-100 cursor-pointer bg-white/10 border border-white/30 rounded p-2"
                />
              </div>

              <div className="pt-4 flex gap-4">
                <button 
                  type="button"
                  onClick={handleClear}
                  className="w-1/2 py-3 bg-transparent hover:bg-white/10 border border-white text-white font-bold text-xs uppercase tracking-widest rounded transition-all"
                >
                  CLEAR
                </button>
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-1/2 py-3 bg-transparent hover:bg-white/10 border border-white text-white font-bold text-xs uppercase tracking-widest rounded transition-all"
                >
                  {loading ? 'SUBMITTING...' : 'SUBMIT'}
                </button>
              </div>

            </form>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;