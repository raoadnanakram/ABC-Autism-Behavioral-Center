import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Careers = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    age: '',
    countryCode: '+60',
    contactNumber: '',
    email: '',
    academyQualification: '',
    address: '',
    aboutYourself: '',
    branch: 'Bangsar',
    position: 'Interventionist',
  });

  const [cvFile, setCvFile] = useState(null);

  const countryCodes = [
    { name: 'Pakistan (+92)', code: '+92' },
    { name: 'India (+91)', code: '+91' },
    { name: 'Singapore (+65)', code: '+65' },
    { name: 'Indonesia (+62)', code: '+62' },
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setCvFile(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleClear = () => {
    setFormData({
      name: '',
      gender: '',
      age: '',
      countryCode: '+92',
      contactNumber: '',
      email: '',
      academyQualification: '',
      address: '',
      aboutYourself: '',
      branch: 'Al Rehman Garden',
      position: 'Interventionist',
    });
    setCvFile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append('name', formData.name);
    data.append('gender', formData.gender);
    data.append('age', formData.age);
    data.append('contactNumber', `${formData.countryCode} ${formData.contactNumber}`);
    data.append('email', formData.email);
    data.append('academyQualification', formData.academyQualification);
    data.append('address', formData.address);
    data.append('aboutYourself', formData.aboutYourself);
    data.append('branch', formData.branch);
    data.append('position', formData.position);
    
    if (cvFile) {
      data.append('cvFile', cvFile);
    }

    try {
      const response = await axios.post('http://localhost:5000/api/career', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        navigate('/thank-you');
      }
    } catch (error) {
      console.error('Error submitting career form:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-white font-sans">
      
      {/* CAREER PAGE HERO SECTION */}
      <div className="relative w-full h-56 sm:h-72 lg:h-96 overflow-hidden bg-gray-900 flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop" 
          alt="Careers Banner" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-wide drop-shadow-lg mb-2">
            Join Our Team / Careers
          </h1>
          <div className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-gray-200 tracking-wider">
            <Link to="/" className="hover:text-amber-300 transition-colors duration-200 underline underline-offset-4">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-300">Careers</span>
          </div>
        </div>
      </div>

      {/* CAREER FORM SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-black tracking-wider uppercase bg-black px-6 py-3 inline-block text-white">
            CAREER APPLICATION FORM
          </h2>
          <div className="w-16 h-1 bg-teal-600 mx-auto mt-2 rounded-full"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-xl shadow-md border border-gray-200">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input 
                type="text" 
                name="name" 
                required 
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name" 
                className="w-full bg-white border border-gray-300 rounded p-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Gender *</label>
              <select 
                name="gender" 
                required
                value={formData.gender}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 rounded p-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 cursor-pointer"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Age *</label>
              <input 
                type="number" 
                name="age" 
                required 
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter your age" 
                className="w-full bg-white border border-gray-300 rounded p-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>

            {/* Contact Number with Country Code */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number *</label>
              <div className="flex gap-2">
                <select 
                  name="countryCode" 
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="w-36 bg-white border border-gray-300 rounded p-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 cursor-pointer"
                >
                  {countryCodes.map((c, index) => (
                    <option key={index} value={c.code}>{c.name}</option>
                  ))}
                </select>
                <input 
                  type="tel" 
                  name="contactNumber" 
                  required 
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Contact Number" 
                  className="flex-1 bg-white border border-gray-300 rounded p-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
              <input 
                type="email" 
                name="email" 
                required 
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address" 
                className="w-full bg-white border border-gray-300 rounded p-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>

            {/* Academy Qualification */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Academy Qualification *</label>
              <input 
                type="text" 
                name="academyQualification" 
                required 
                value={formData.academyQualification}
                onChange={handleChange}
                placeholder="e.g. Bachelors in Psychology" 
                className="w-full bg-white border border-gray-300 rounded p-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>

            {/* Branch */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Branch *</label>
              <select 
                name="branch" 
                value={formData.branch}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 rounded p-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 cursor-pointer"
              >
                <option value="Bangsar">Al Rehman Garden</option>
                
              </select>
            </div>

            {/* Position */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Position Applying For *</label>
              <select 
                name="position" 
                value={formData.position}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 rounded p-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 cursor-pointer"
              >
                <option value="Interventionist">Interventionist</option>
                <option value="Case Supervisor">Case Supervisor</option>
                <option value="Speech Therapist">Speech Therapist</option>
                <option value="Occupational Therapist">Occupational Therapist</option>
                <option value="Shadow Aide">Shadow Aide</option>
              </select>
            </div>

          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Residential Address *</label>
            <textarea 
              name="address" 
              rows="2"
              required
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address" 
              className="w-full bg-white border border-gray-300 rounded p-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 resize-none"
            ></textarea>
          </div>

          {/* About Yourself */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">About Yourself</label>
            <textarea 
              name="aboutYourself" 
              rows="3"
              value={formData.aboutYourself}
              onChange={handleChange}
              placeholder="Tell us a little bit about yourself..." 
              className="w-full bg-white border border-gray-300 rounded p-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 resize-none"
            ></textarea>
          </div>

          {/* CV / File Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Attach Your Cover Letter and CV (Max 2MB)</label>
            <input 
              type="file" 
              name="cvFile"
              onChange={handleChange}
              className="w-full text-xs text-gray-700 file:mr-4 file:py-2.5 file:px-4 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-teal-700 file:text-white hover:file:bg-teal-800 cursor-pointer bg-white border border-gray-300 rounded p-2 mb-2"
            />
          </div>

          {/* Clear and Submit Buttons with Circle Spinner */}
          <div className="pt-4 flex items-center justify-end gap-4">
            <button 
              type="button"
              onClick={handleClear}
              className="px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold text-xs uppercase tracking-widest rounded transition-all"
            >
              CLEAR
            </button>
            <div className="flex items-center gap-3">
              <button 
                type="submit"
                disabled={loading}
                className="px-8 py-3 bg-white border border-red-600 text-red-600 hover:bg-red-50 font-bold text-xs uppercase tracking-widest rounded transition-all shadow-sm"
              >
                SUBMIT
              </button>
              
              {/* Circle Spinner Loader */}
              {loading && (
                <div className="w-6 h-6 border-2 border-gray-400 border-t-gray-700 rounded-full animate-spin"></div>
              )}
            </div>
          </div>

        </form>
      </section>

    </div>
  );
};

export default Careers;