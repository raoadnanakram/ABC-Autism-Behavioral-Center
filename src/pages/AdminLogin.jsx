import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ phone: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
     const res = await axios.post('https://abcautismbehavioralcenter.com/admin-login/', {
  phone: credentials.phone,
  password: credentials.password
});
      
      if (res.data.success) {
        // 5 minutes session timer
        const expiryTime = new Date().getTime() + 5 * 60 * 1000;
        
        localStorage.setItem('adminLoggedIn', 'true');
        localStorage.setItem('adminExpiry', expiryTime);
        
        navigate('/admin-panel');
      }
    } catch (err) {
      setError('Invalid phone number or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#2d545e] font-sans px-4">
      
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-light text-white tracking-widest mb-8 uppercase">
        ADMIN LOGIN
      </h1>

      {/* Main Card */}
      <div className="w-full max-w-md bg-[#122329] p-8 sm:p-10 rounded shadow-2xl border border-[#2d545e]">
        
        {error && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500 text-red-200 text-xs text-center rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          
          {/* Phone Number Input with Icon */}
          <div className="flex items-center bg-[#e0e0e0] rounded overflow-hidden shadow-inner">
            <div className="bg-[#d0d0d0] px-4 py-3.5 flex items-center justify-center text-gray-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <input 
              type="text" 
              required
              value={credentials.phone}
              onChange={(e) => setCredentials({...credentials, phone: e.target.value})}
              placeholder="Phone Number" 
              className="w-full bg-transparent px-4 py-3 text-sm text-gray-800 placeholder-gray-500 focus:outline-none font-medium"
            />
          </div>

          {/* Password Input with Icon */}
          <div className="flex items-center bg-[#e0e0e0] rounded overflow-hidden shadow-inner">
            <div className="bg-[#d0d0d0] px-4 py-3.5 flex items-center justify-center text-gray-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
              </svg>
            </div>
            <input 
              type="password" 
              required
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              placeholder="Password" 
              className="w-full bg-transparent px-4 py-3 text-sm text-gray-800 placeholder-gray-500 focus:outline-none font-medium"
            />
          </div>

          {/* Login Button */}
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[#4f8a96] hover:bg-[#3d6e79] text-white font-semibold py-3.5 rounded text-sm tracking-widest uppercase transition-all shadow-md flex items-center justify-center gap-2"
          >
            {loading ? 'LOGGING IN...' : 'LOGIN'}
          </button>

        </form>

      </div>

    </div>
  );
};

export default AdminLogin;