import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const countries = [
  { name: "Malaysia (+60)", code: "+60" },
  { name: "Afghanistan (+93)", code: "+93" },
  { name: "Albania (+355)", code: "+355" }, 
  { name: "Algeria (+213)", code: "+213" },
  { name: "Argentina (+54)", code: "+54" },
  { name: "Australia (+61)", code: "+61" },
  { name: "Austria (+43)", code: "+43" },
  { name: "Bahrain (+973)", code: "+973" },
  { name: "Bangladesh (+880)", code: "+880" },
  { name: "Belgium (+32)", code: "+32" },
  { name: "Brazil (+55)", code: "+55" },
  { name: "Brunei (+673)", code: "+673" },
  { name: "Canada (+1)", code: "+1" },
  { name: "China (+86)", code: "+86" },
  { name: "Denmark (+45)", code: "+45" },
  { name: "Egypt (+20)", code: "+20" },
  { name: "Finland (+358)", code: "+358" },
  { name: "France (+33)", code: "+33" },
  { name: "Germany (+49)", code: "+49" },
  { name: "Greece (+30)", code: "+30" },
  { name: "Hong Kong (+852)", code: "+852" },
  { name: "India (+91)", code: "+91" },
  { name: "Indonesia (+62)", code: "+62" },
  { name: "Iran (+98)", code: "+98" },
  { name: "Iraq (+964)", code: "+964" },
  { name: "Ireland (+353)", code: "+353" },
  { name: "Italy (+39)", code: "+39" },
  { name: "Japan (+81)", code: "+81" },
  { name: "Jordan (+962)", code: "+962" },
  { name: "Kuwait (+965)", code: "+965" },
  { name: "Lebanon (+961)", code: "+961" },
  { name: "Macau (+853)", code: "+853" },
  { name: "Maldives (+960)", code: "+960" },
  { name: "Mexico (+52)", code: "+52" },
  { name: "Myanmar (+95)", code: "+95" },
  { name: "Nepal (+977)", code: "+977" },
  { name: "Netherlands (+31)", code: "+31" },
  { name: "New Zealand (+64)", code: "+64" },
  { name: "Norway (+47)", code: "+47" },
  { name: "Oman (+968)", code: "+968" },
  { name: "Pakistan (+92)", code: "+92" },
  { name: "Philippines (+63)", code: "+63" },
  { name: "Poland (+48)", code: "+48" },
  { name: "Portugal (+351)", code: "+351" },
  { name: "Qatar (+974)", code: "+974" },
  { name: "Russia (+7)", code: "+7" },
  { name: "Saudi Arabia (+966)", code: "+966" },
  { name: "Singapore (+65)", code: "+65" },
  { name: "South Africa (+27)", code: "+27" },
  { name: "South Korea (+82)", code: "+82" },
  { name: "Spain (+34)", code: "+34" },
  { name: "Sri Lanka (+94)", code: "+94" },
  { name: "Sweden (+46)", code: "+46" },
  { name: "Switzerland (+41)", code: "+41" },
  { name: "Taiwan (+886)", code: "+886" },
  { name: "Thailand (+66)", code: "+66" },
  { name: "Turkey (+90)", code: "+90" },
  { name: "United Arab Emirates (+971)", code: "+971" },
  { name: "United Kingdom (+44)", code: "+44" },
  { name: "United States (+1)", code: "+1" },
  { name: "Vietnam (+84)", code: "+84" }
];

const Footer = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    parentName: '',
    childAge: '',
    country: '+92',
    contact: '',
    email: '',
    service: '',
    branch: '',
    message: '',
    file: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append('parentName', formData.parentName);
    data.append('childAge', formData.childAge);
    data.append('contactNumber', `${formData.country} ${formData.contact}`);
    data.append('email', formData.email);
    data.append('serviceType', formData.service);
    data.append('branch', formData.branch);
    data.append('message', formData.message);
    if (formData.file) {
      data.append('attachment', formData.file);
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

  const handleClear = () => {
    setFormData({
      parentName: '',
      childAge: '',
      country: '+60',
      contact: '',
      email: '',
      service: '',
      branch: '',
      message: '',
      file: null
    });
  };

  return (
    <footer id="footer-section" className="bg-[#4a4a52] text-gray-300 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-600">
        
        {/* Column 1: Menu */}
        <div>
          <h3 className="text-[#38959c] font-bold text-sm tracking-wider uppercase mb-6">MENU</h3>
          <ul className="space-y-3 font-medium">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link to="/our-policies" className="hover:text-white transition">Our Policies</Link></li>
            <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
            <li><Link to="/what-is-autism" className="hover:text-white transition">What is Autism</Link></li>
            <li><Link to="/news" className="hover:text-white transition">News & Events</Link></li>
            <li><Link to="/career" className="hover:text-white transition">Career</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
            <li><Link to="/blog" className="hover:text-white transition">Blogs</Link></li>
          </ul>
        </div>

        {/* Column 2: Our Location */}
        <div className="space-y-6">
          <h3 className="text-[#38959c] font-bold text-sm tracking-wider uppercase mb-6">OUR LOCATION</h3>
          

          <div>
            <p className="font-bold text-white">ABC (Autism Behavioral Center) (Al Rehman Hospital)</p>
            <p>Plot No. 21 ,Hassan Commercial,Near Al Rehman Garden Phase-2 Lahore </p>
            <p>Tel: +92345-8471692  / +92300-1330450</p>
            <p>Email:abcautism@gmail.com </p>
          </div>
        </div>

        {/* Column 3: Enquiry Form */}
        <div>
          <h3 className="text-[#38959c] font-bold text-sm tracking-wider uppercase mb-6">ENQUIRY FORM</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="text" 
              placeholder="Parent Name" 
              value={formData.parentName}
              onChange={(e) => setFormData({...formData, parentName: e.target.value})}
              required 
              className="w-full bg-white text-gray-800 placeholder-gray-400 p-2.5 rounded-sm text-xs focus:outline-none"
            />
            
            <input 
              type="text" 
              placeholder="Child Age" 
              value={formData.childAge}
              onChange={(e) => setFormData({...formData, childAge: e.target.value})}
              className="w-full bg-white text-gray-800 placeholder-gray-400 p-2.5 rounded-sm text-xs focus:outline-none"
            />

            <div className="flex space-x-2">
              <select 
                value={formData.country}
                onChange={(e) => setFormData({...formData, country: e.target.value})}
                className="bg-white text-gray-800 p-2.5 rounded-sm text-xs focus:outline-none w-1/2"
              >
                {countries.map((c, index) => (
                  <option key={index} value={c.code}>{c.name}</option>
                ))}
              </select>

              <input 
                type="text" 
                placeholder="Contact" 
                value={formData.contact}
                onChange={(e) => setFormData({...formData, contact: e.target.value})}
                required 
                className="w-1/2 bg-white text-gray-800 placeholder-gray-400 p-2.5 rounded-sm text-xs focus:outline-none"
              />
            </div>

            <input 
              type="email" 
              placeholder="Email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required 
              className="w-full bg-white text-gray-800 placeholder-gray-400 p-2.5 rounded-sm text-xs focus:outline-none"
            />

            <select 
              value={formData.service}
              onChange={(e) => setFormData({...formData, service: e.target.value})}
              className="w-full bg-white text-gray-800 p-2.5 rounded-sm text-xs focus:outline-none"
            >
              <option value="">- Service Enquiry -</option>
              <option value="Center Based">Center Based</option>
              <option value="Home Based">Home Based</option>
              <option value="Shadow Aide">Shadow Aide</option>
              <option value="Speech Therapy">Speech Therapy</option>
              <option value="Occupational Therapy">Occupational Therapy</option>
            </select>

            <select 
              value={formData.branch}
              onChange={(e) => setFormData({...formData, branch: e.target.value})}
              className="w-full bg-white text-gray-800 p-2.5 rounded-sm text-xs focus:outline-none"
            >
              <option value="">ABC (Autism Behavioral Center)</option>
            
            </select>

            <textarea 
              rows="3" 
              placeholder="Message" 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-white text-gray-800 placeholder-gray-400 p-2.5 rounded-sm text-xs focus:outline-none resize-none"
            ></textarea>

            <div>
              <label className="block text-[11px] text-gray-300 mb-1">Attachment (Max 2MB)</label>
              <input 
                type="file" 
                onChange={(e) => setFormData({...formData, file: e.target.files[0]})}
                className="text-[11px] text-gray-300 file:mr-4 file:py-1.5 file:px-4 file:rounded-sm file:border-0 file:text-xs file:font-semibold file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300" 
              />
            </div>

            <div className="flex space-x-4 pt-2">
              <button 
                type="button" 
                onClick={handleClear}
                className="bg-[#38959c] hover:bg-[#2f7d83] text-white font-bold px-8 py-2.5 uppercase tracking-widest text-xs rounded-sm transition"
              >
                CLEAR
              </button>
              <button 
                type="submit" 
                disabled={loading}
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-2.5 uppercase tracking-widest text-xs rounded-sm transition"
              >
                {loading ? 'SUBMITTING...' : 'SUBMIT'}
              </button>
            </div>
          </form>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="bg-[#38959c] py-3 text-center text-white text-xs font-medium">
        2026 &copy; Copyright Autism Behavioral Center. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;