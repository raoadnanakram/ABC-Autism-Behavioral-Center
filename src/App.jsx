import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ThankYou from './components/ThankYou';

import Home from './pages/Home';
import AboutUs from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import WhatIsAutism from './pages/WhatIsAutism';
import Services from './pages/Services';
import OurPolicies from './pages/OurPolicies';
import SpeechDelay from './pages/SpeechDelay';
import ADHD from './pages/ADHD';
import Media from './pages/Media';
import Events from './pages/Events';
import Testimonials from './pages/Testimonials';

/* =========================================================
   ADMIN IMPORTS
   ========================================================= */
import AdminLogin from './pages/AdminLogin';
import AdminPanel from './pages/AdminPanel';

/* =========================================================
   TEMPORARY PAGE COMPONENT
   ========================================================= */

const SimplePage = ({ title, description }) => {
  return (
    <main className="min-h-[500px] bg-white">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h1>

        {description && (
          <p className="text-gray-600 max-w-3xl leading-7">
            {description}
          </p>
        )}
      </section>
    </main>
  );
};

const CenterBased = () => <SimplePage title="Center Based" description="Center based autism therapy and support services." />;
const HomeBased = () => <SimplePage title="Home Based" description="Home based autism therapy and support services." />;
const ShadowAide = () => <SimplePage title="Shadow Aide / PLA Support" description="Shadow aide and PLA support services." />;
const Awareness = () => <SimplePage title="Autism Awareness Talk in Schools/Organizations" description="Autism awareness talks for schools and organizations." />;
const Screening = () => <SimplePage title="Free Autism Screening" description="Free autism screening service." />;
const Diagnostic = () => <SimplePage title="Diagnostic Assessment and Evaluation" description="Diagnostic assessment and evaluation services." />;
const OccupationalTherapy = () => <SimplePage title="Occupational Therapy" description="Occupational therapy services." />;
const AdaptiveFitness = () => <SimplePage title="Adaptive Fitness Sessions" description="Adaptive fitness sessions and activities." />;
const SpeechTherapy = () => <SimplePage title="Speech Therapy" description="Speech therapy services." />;
const EarlyIntervention = () => <SimplePage title="Early Intervention Program" description="Early intervention program for children." />;

const Condition = () => <SimplePage title="Condition" description="Information about different conditions." />;
const News = () => <SimplePage title="News & Events" description="Latest news and events." />;

/* =========================================================
   MAIN WEBSITE LAYOUT
   ========================================================= */

const WebsiteLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          
          {/* SERVICES */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/center-based" element={<CenterBased />} />
          <Route path="/services/home-based" element={<HomeBased />} />
          <Route path="/services/shadow-aide" element={<ShadowAide />} />
          <Route path="/services/awareness" element={<Awareness />} />
          <Route path="/services/screening" element={<Screening />} />
          <Route path="/services/diagnostic" element={<Diagnostic />} />
          <Route path="/services/occupational-therapy" element={<OccupationalTherapy />} />
          <Route path="/services/adaptive-fitness" element={<AdaptiveFitness />} />
          <Route path="/services/speech-therapy" element={<SpeechTherapy />} />
          <Route path="/services/early-intervention" element={<EarlyIntervention />} />

          {/* OTHER PAGES */}
          <Route path="/what-is-autism" element={<WhatIsAutism />} />
          <Route path="/condition" element={<Condition />} />
          <Route path="/condition/speech-delay" element={<SpeechDelay />} />
          <Route path="/condition/adhd" element={<ADHD />} />
          
          <Route path="/news" element={<News />} />
          <Route path="/news/media" element={<Media />} />
          <Route path="/news/events" element={<Events />} />
          <Route path="/news/testimonials" element={<Testimonials />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/career" element={<Careers />} />
          
          <Route path="/policies" element={<OurPolicies />} />
          <Route path="/about-us/our-policy" element={<OurPolicies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />

          {/* 404 */}
          <Route
            path="*"
            element={
              <SimplePage
                title="404 - Page Not Found"
                description="The page you are looking for does not exist."
              />
            }
          />
        </Routes>
      </div>

      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

/* =========================================================
   APP
   ========================================================= */

function App() {
  return (
    <Router>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/admin-login" element={<AdminLogin />} />
        {/* Support both /admin and /admin-panel */}
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        
        <Route path="*" element={<WebsiteLayout />} />
      </Routes>
    </Router>
  );
}

export default App;