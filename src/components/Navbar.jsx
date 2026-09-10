import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ChevronDown, ChevronUp } from 'lucide-react';
import logo from '../assets/logo.png'; // Path check kar lein

/* =====================================================
   DROPDOWN ARROW
===================================================== */

const DropdownArrow = () => (
  <svg
    className="w-3.5 h-3.5 ml-1 fill-current transition-transform duration-200"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M7 10l5 5 5-5z" />
  </svg>
);

/* =====================================================
   NAVBAR
===================================================== */

const Navbar = () => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  // Desktop dropdown states
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [conditionOpen, setConditionOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  // Mobile accordion states
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileConditionOpen, setMobileConditionOpen] = useState(false);
  const [mobileNewsOpen, setMobileNewsOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);

  /* =====================================================
     ACTIVE PAGE CHECK
  ===================================================== */

  const isActive = (path) => location.pathname === path;

  const isAboutPage =
    location.pathname === '/about-us' ||
    location.pathname.startsWith('/about-us/');

  const isServicePage =
    location.pathname === '/services' ||
    location.pathname.startsWith('/services/');

  const isConditionPage =
    location.pathname === '/condition' ||
    location.pathname.startsWith('/condition/');

  const isNewsPage =
    location.pathname === '/news' ||
    location.pathname.startsWith('/news/') ||
    location.pathname === '/blog';

  const isMorePage =
    location.pathname === '/career' ||
    location.pathname === '/contact';

  /* =====================================================
     CLOSE ALL MENUS
  ===================================================== */

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileAboutOpen(false);
    setMobileServicesOpen(false);
    setMobileConditionOpen(false);
    setMobileNewsOpen(false);
    setMobileMoreOpen(false);
  };

  /* =====================================================
     DESKTOP DROPDOWN HANDLERS
  ===================================================== */

  const openAbout = () => {
    setAboutOpen(true);
    setServicesOpen(false);
    setConditionOpen(false);
    setNewsOpen(false);
    setMoreOpen(false);
  };

  const closeAbout = () => setAboutOpen(false);

  const openServices = () => {
    setServicesOpen(true);
    setAboutOpen(false);
    setConditionOpen(false);
    setNewsOpen(false);
    setMoreOpen(false);
  };

  const closeServices = () => setServicesOpen(false);

  const openCondition = () => {
    setConditionOpen(true);
    setAboutOpen(false);
    setServicesOpen(false);
    setNewsOpen(false);
    setMoreOpen(false);
  };

  const closeCondition = () => setConditionOpen(false);

  const openNews = () => {
    setNewsOpen(true);
    setAboutOpen(false);
    setServicesOpen(false);
    setConditionOpen(false);
    setMoreOpen(false);
  };

  const closeNews = () => setNewsOpen(false);

  const openMore = () => {
    setMoreOpen(true);
    setAboutOpen(false);
    setServicesOpen(false);
    setConditionOpen(false);
    setNewsOpen(false);
  };

  const closeMore = () => setMoreOpen(false);

  /* =====================================================
     STYLES
  ===================================================== */

  const mainLinkClass = (active = false) => `
    relative font-bold text-xs tracking-wider transition-all duration-200 cursor-pointer
    ${active ? 'text-[#0F766E]' : 'text-gray-800 hover:text-[#0F766E]'}
    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#F97373] after:transition-all after:duration-300
    ${active ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
  `;

  const dropdownParentClass = (active = false) => `
    relative flex items-center font-bold text-xs tracking-wider focus:outline-none transition-all duration-200 cursor-pointer
    ${active ? 'text-[#0F766E]' : 'text-gray-800 hover:text-[#0F766E]'}
    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#F97373] after:transition-all after:duration-300
    ${active ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
  `;

  const normalDropdownClass = (path) => {
    const active = isActive(path);
    return `
      group relative block px-4 py-2.5 text-xs tracking-wider transition-all duration-200 rounded-sm
      ${active ? 'bg-[#F97373] text-white font-bold shadow-sm' : 'text-gray-800 hover:bg-[#F0FDFA] hover:text-[#0F766E] font-semibold'}
    `;
  };

  return (
    <header className="sticky top-0 z-50 shadow-md bg-white font-sans">
      {/* TOP BAR */}
      <div
        className="text-white text-xs py-2 px-4 sm:px-6 lg:px-12 flex justify-between items-center font-medium"
        style={{ background: '#319B9B' }}
      >
        <div className="flex space-x-">
          <span className="hover:text-[#F97373] transition-colors cursor-pointer">AL REHMAN GARDEN</span>
        </div>

        <div className="flex items-center space-x-4 sm:space-x-6">
          {/* SOCIAL MEDIA ICONS (MATCHED WITH DESIGN IMAGE) */}
          <div className="flex items-center space-x-2">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-7 h-7 rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
              style={{ backgroundColor: '#80E0FF', color: '#000000' }}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-7 h-7 rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
              style={{ backgroundColor: '#FFB865', color: '#000000' }}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618-6.979-6.98-.059-1.28-.073-1.689-.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="w-7 h-7 rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
              style={{ backgroundColor: '#FF6B6B', color: '#000000' }}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.758.459 3.474 1.33 4.982l-1.412 5.161 5.282-1.385c1.455.793 3.093 1.21 4.786 1.21 5.508 0 9.991-4.478 9.992-9.985 0-2.667-1.038-5.175-2.927-7.062-1.888-1.887-4.396-2.925-7.061-2.925zm5.828 14.153c-.244.686-1.423 1.311-1.956 1.393-.497.076-1.144.108-1.839-.115-.422-.136-.967-.315-1.663-.615-2.937-1.267-4.845-4.238-4.992-4.433-.146-.196-1.196-1.591-1.196-3.036 0-1.445.757-2.155 1.026-2.448.269-.293.586-.366.782-.366.195 0 .391.002.562.01.181.008.425-.069.664.505.244.586.83 2.028.903 2.175.073.146.122.317.024.513-.098.195-.147.317-.293.488-.146.171-.308.382-.44.513-.146.146-.298.305-.128.598.17.293.757 1.248 1.624 2.019 1.115.992 2.055 1.3 2.348 1.446.293.146.464.122.635-.073.171-.195.733-.855.928-1.148.195-.293.391-.244.659-.146.269.098 1.71.806 2.003.953.293.146.489.22.562.342.073.122.073.708-.171 1.394z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-7 h-7 rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
              style={{ backgroundColor: '#1B64DA', color: '#FFFFFF' }}
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>

          {/* Search Box */}
          <div className="relative flex items-center">
            <input type="text" placeholder="Search..." className="bg-white/10 border border-white/20 text-white text-xs rounded-md px-2.5 py-1.5 pl-7 focus:outline-none focus:ring-1 focus:ring-[#F97373] placeholder-white/60 w-28 sm:w-40 transition-all" />
            <Search size={12} className="absolute left-2 text-white/70" />
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="bg-white py-3 sm:py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* LOGO */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" onClick={closeMobileMenu} className="flex items-center">
                <img 
                  src={logo} 
                  alt="Autism Behavioral Center" 
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                />
              </Link>
            </div>

            {/* DESKTOP MENU (lg and above) */}
            <div className="hidden lg:flex items-center space-x-6">
              <Link to="/" className={mainLinkClass(isActive('/'))}>HOME</Link>
              <span className="text-gray-200">|</span>

              {/* ABOUT */}
              <div className="relative" onMouseEnter={openAbout} onMouseLeave={closeAbout}>
                <Link to="/about-us" onClick={closeMobileMenu} className={dropdownParentClass(isAboutPage)}>
                  ABOUT <DropdownArrow />
                </Link>
                {aboutOpen && (
                  <div className="absolute left-0 top-full pt-2 w-48 z-50">
                    <div className="bg-white border border-gray-100 shadow-2xl rounded-lg py-2 overflow-hidden">
                      <Link to="/about-us/our-team" className={normalDropdownClass('/about-us/our-team')}>Our Team</Link>
                      <Link to="/about-us/our-policy" className={normalDropdownClass('/about-us/our-policy')}>Our Policy</Link>
                    </div>
                  </div>
                )}
              </div>
              <span className="text-gray-200">|</span>

              {/* SERVICES */}
              <div className="relative" onMouseEnter={openServices} onMouseLeave={closeServices}>
                <Link to="/services" onClick={closeMobileMenu} className={dropdownParentClass(isServicePage)}>
                  SERVICES <DropdownArrow />
                </Link>
                {servicesOpen && (
                  <div className="absolute left-0 top-full pt-2 w-80 z-50">
                    <div className="bg-white border border-gray-100 shadow-2xl rounded-lg py-2 overflow-hidden max-h-[70vh] overflow-y-auto">
                      <Link to="/#service-0" onClick={closeMobileMenu} className={normalDropdownClass('/services/center-based')}>PHYSIOTHERAPY</Link>
                      <Link to="/#service-1" onClick={closeMobileMenu} className={normalDropdownClass('/services/home-based')}>HOME BASED</Link>
                      <Link to="/#service-2" onClick={closeMobileMenu} className={normalDropdownClass('/services/shadow-aide')}>ABA THERAPY</Link>
                      <Link to="/#service-3" onClick={closeMobileMenu} className={normalDropdownClass('/services/awareness')}>AUTISM AWARENESS TALK</Link>
                      <Link to="/#service-4" onClick={closeMobileMenu} className={normalDropdownClass('/services/screening')}>FREE AUTISM SCREENING</Link>
                      <Link to="/#service-5" onClick={closeMobileMenu} className={normalDropdownClass('/services/diagnostic')}>DIAGNOSTIC ASSESSMENT</Link>
                      <Link to="/#service-6" onClick={closeMobileMenu} className={normalDropdownClass('/services/occupational-therapy')}>OCCUPATIONAL THERAPY</Link>
                      <Link to="/#service-7" onClick={closeMobileMenu} className={normalDropdownClass('/services/adaptive-fitness')}>NUTRITION DIETITIAN</Link>
                      <Link to="/#service-8" onClick={closeMobileMenu} className={normalDropdownClass('/services/speech-therapy')}>SPEECH THERAPY</Link>
                      <Link to="/#service-9" onClick={closeMobileMenu} className={normalDropdownClass('/services/early-intervention')}>MONTESSORI EDUCATION</Link>
                      <Link to="/#service-10" onClick={closeMobileMenu} className={normalDropdownClass('/services/early-intervention')}>PARENT TRAINING</Link>
                      <Link to="/#service-11" onClick={closeMobileMenu} className={normalDropdownClass('/services/early-intervention')}>EARLY CHILDHOOD EDUCATION</Link>
                    </div>
                  </div>
                )}
              </div>
              <span className="text-gray-200">|</span>

              {/* WHAT IS AUTISM */}
              <Link to="/what-is-autism" className={mainLinkClass(isActive('/what-is-autism'))}>
                WHAT IS AUTISM
              </Link>
              <span className="text-gray-200">|</span>

              {/* CONDITION */}
              <div className="relative" onMouseEnter={openCondition} onMouseLeave={closeCondition}>
                <Link to="#" onClick={closeMobileMenu} className={dropdownParentClass(isConditionPage)}>
                  CONDITION <DropdownArrow />
                </Link>
                {conditionOpen && (
                  <div className="absolute left-0 top-full pt-2 w-48 z-50">
                    <div className="bg-white border border-gray-100 shadow-2xl rounded-lg py-2 overflow-hidden">
                      <Link to="/condition/speech-delay" className={normalDropdownClass('/condition/speech-delay')}>Speech Delay</Link>
                      <Link to="/condition/adhd" className={normalDropdownClass('/condition/adhd')}>ADHD</Link>
                    </div>
                  </div>
                )}
              </div>
              <span className="text-gray-200">|</span>

              {/* NEWS & EVENTS */}
              <div className="relative" onMouseEnter={openNews} onMouseLeave={closeNews}>
                <Link to="/news/media" onClick={closeMobileMenu} className={dropdownParentClass(isNewsPage)}>
                  NEWS & EVENTS <DropdownArrow />
                </Link>
                {newsOpen && (
                  <div className="absolute left-0 top-full pt-2 w-48 z-50">
                    <div className="bg-white border border-gray-100 shadow-2xl rounded-lg py-2 overflow-hidden">
                      <Link to="/news/media" className={normalDropdownClass('/news/media')}>Media</Link>
                      <Link to="/news/events" className={normalDropdownClass('/news/events')}>Events</Link>
                      <Link to="/news/testimonials" className={normalDropdownClass('/news/testimonials')}>Testimonial</Link>
                      <Link to="/blog" className={normalDropdownClass('/blog')}>Blogs</Link>
                    </div>
                  </div>
                )}
              </div>
              <span className="text-gray-200">|</span>

              {/* MORE */}
              <div className="relative" onMouseEnter={openMore} onMouseLeave={closeMore}>
                <Link to="/career" onClick={closeMobileMenu} className={dropdownParentClass(isMorePage)}>
                  MORE <DropdownArrow />
                </Link>
                {moreOpen && (
                  <div className="absolute right-0 top-full pt-2 w-40 z-50">
                    <div className="bg-white border border-gray-100 shadow-2xl rounded-lg py-2 overflow-hidden">
                      <Link to="/career" className={normalDropdownClass('/career')}>Career</Link>
                      <Link to="/contact" className={normalDropdownClass('/contact')}>Contact</Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* MOBILE & TABLET TOGGLE BUTTON */}
            <div className="lg:hidden flex items-center">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#0F766E] hover:text-[#F97373] transition-colors focus:outline-none p-1"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* MOBILE & TABLET FULL MENU ACCORDION */}
          {isOpen && (
            <div className="lg:hidden mt-4 border-t border-gray-100 pt-3 pb-4 max-h-[80vh] overflow-y-auto">
              <div className="flex flex-col space-y-1">
                {/* Home */}
                <Link to="/" onClick={closeMobileMenu} className={`px-4 py-2.5 text-xs font-bold tracking-wider rounded-md transition-all ${isActive('/') ? 'text-white bg-[#F97373]' : 'text-gray-800 hover:bg-[#F0FDFA]'}`}>
                  HOME
                </Link>

                {/* About Accordion */}
                <div>
                  <button onClick={() => setMobileAboutOpen(!mobileAboutOpen)} className="w-full flex justify-between items-center px-4 py-2.5 text-xs font-bold tracking-wider text-gray-800 hover:bg-[#F0FDFA] rounded-md">
                    <span>ABOUT</span>
                    {mobileAboutOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {mobileAboutOpen && (
                    <div className="pl-6 flex flex-col space-y-1 my-1">
                      <Link to="/about-us/our-team" onClick={closeMobileMenu} className="px-3 py-2 text-xs font-semibold text-gray-600 hover:text-[#0F766E]">Our Team</Link>
                      <Link to="/about-us/our-policy" onClick={closeMobileMenu} className="px-3 py-2 text-xs font-semibold text-gray-600 hover:text-[#0F766E]">Our Policy</Link>
                    </div>
                  )}
                </div>

                {/* Services Accordion */}
                <div>
                  <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="w-full flex justify-between items-center px-4 py-2.5 text-xs font-bold tracking-wider text-gray-800 hover:bg-[#F0FDFA] rounded-md">
                    <span>SERVICES</span>
                    {mobileServicesOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-6 flex flex-col space-y-1 my-1">
                      <Link to="/#service-0" onClick={closeMobileMenu} className="px-3 py-2 text-xs font-semibold text-gray-600 hover:text-[#0F766E]">PHYSIOTHERAPY</Link>
                      <Link to="/#service-1" onClick={closeMobileMenu} className="px-3 py-2 text-xs font-semibold text-gray-600 hover:text-[#0F766E]">HOME BASED</Link>
                      <Link to="/#service-2" onClick={closeMobileMenu} className="px-3 py-2 text-xs font-semibold text-gray-600 hover:text-[#0F766E]">ABA THERAPY</Link>
                      <Link to="/#service-3" onClick={closeMobileMenu} className="px-3 py-2 text-xs font-semibold text-gray-600 hover:text-[#0F766E]">AUTISM AWARENESS TALK</Link>
                      <Link to="/#service-4" onClick={closeMobileMenu} className="px-3 py-2 text-xs font-semibold text-gray-600 hover:text-[#0F766E]">FREE AUTISM SCREENING</Link>
                      <Link to="/#service-5" onClick={closeMobileMenu} className="px-3 py-2 text-xs font-semibold text-gray-600 hover:text-[#0F766E]">DIAGNOSTIC ASSESSMENT</Link>
                      <Link to="/#service-6" onClick={closeMobileMenu} className="px-3 py-2 text-xs font-semibold text-gray-600 hover:text-[#0F766E]">OCCUPATIONAL THERAPY</Link>
                      <Link to="/#service-7" onClick={closeMobileMenu} className="px-3 py-2 text-xs font-semibold text-gray-600 hover:text-[#0F766E]">NUTRITION DIETITIAN</Link>
                      <Link to="/#service-8" onClick={closeMobileMenu} className="px-3 py-2 text-xs font-semibold text-gray-600 hover:text-[#0F766E]">SPEECH THERAPY</Link>
                      <Link to="/#service-9" onClick={closeMobileMenu} className="px-3 py-2 text-xs font-semibold text-gray-600 hover:text-[#0F766E]">MONTESSORI EDUCATION</Link>
                      <Link to="/#service-10" onClick={closeMobileMenu} className="px-3 py-2 text-xs font-semibold text-gray-600 hover:text-[#0F766E]">PARENT TRAINING</Link>
                      <Link to="/#service-11" onClick={closeMobileMenu} className="px-3 py-2 text-xs font-semibold text-gray-600 hover:text-[#0F766E]">EARLY CHILDHOOD EDUCATION</Link>
                    </div>
                  )}
                </div>

                {/* What is Autism */}
                <Link to="/what-is-autism" onClick={closeMobileMenu} className={`px-4 py-2.5 text-xs font-bold tracking-wider rounded-md transition-all ${isActive('/what-is-autism') ? 'text-white bg-[#F97373]' : 'text-gray-800 hover:bg-[#F0FDFA]'}`}>
                  WHAT IS AUTISM
                </Link>

                {/* Condition Accordion */}
                <div>
                  <button onClick={() => setMobileConditionOpen(!mobileConditionOpen)} className="w-full flex justify-between items-center px-4 py-2.5 text-xs font-bold tracking-wider text-gray-800 hover:bg-[#F0FDFA] rounded-md">
                    <span>CONDITION</span>
                    {mobileConditionOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {mobileConditionOpen && (
                    <div className="pl-6 flex flex-col space-y-1 my-1">
                      <Link to="/condition/speech-delay" onClick={closeMobileMenu} className="px-3 py-2 text-xs font-semibold text-gray-600 hover:text-[#0F766E]">Speech Delay</Link>
                      <Link to="/condition/adhd" onClick={closeMobileMenu} className="px-3 py-2 text-xs font-semibold text-gray-600 hover:text-[#0F766E]">ADHD</Link>
                    </div>
                  )}
                </div>

                {/* News & Events Accordion */}
                <div>
                  <button onClick={() => setMobileNewsOpen(!mobileNewsOpen)} className="w-full flex justify-between items-center px-4 py-2.5 text-xs font-bold tracking-wider text-gray-800 hover:bg-[#F0FDFA] rounded-md">
                    <span>NEWS & EVENTS</span>
                    {mobileNewsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {mobileNewsOpen && (
                    <div className="pl-6 flex flex-col space-y-1 my-1">
                      <Link to="/news/media" onClick={closeMobileMenu} className="px-3 py-2 text-xs font-semibold text-gray-600 hover:text-[#0F766E]">Media</Link>
                      <Link to="/news/events" onClick={closeMobileMenu} className="px-3 py-2 text-xs font-semibold text-gray-600 hover:text-[#0F766E]">Events</Link>
                      <Link to="/news/testimonials" onClick={closeMobileMenu} className="px-3 py-2 text-xs font-semibold text-gray-600 hover:text-[#0F766E]">Testimonial</Link>
                      <Link to="/blog" onClick={closeMobileMenu} className="px-3 py-2 text-xs font-semibold text-gray-600 hover:text-[#0F766E]">Blogs</Link>
                    </div>
                  )}
                </div>

                {/* More Accordion */}
                <div>
                  <button onClick={() => setMobileMoreOpen(!mobileMoreOpen)} className="w-full flex justify-between items-center px-4 py-2.5 text-xs font-bold tracking-wider text-gray-800 hover:bg-[#F0FDFA] rounded-md">
                    <span>MORE</span>
                    {mobileMoreOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {mobileMoreOpen && (
                    <div className="pl-6 flex flex-col space-y-1 my-1">
                      <Link to="/career" onClick={closeMobileMenu} className="px-3 py-2 text-xs font-semibold text-gray-600 hover:text-[#0F766E]">Career</Link>
                      <Link to="/contact" onClick={closeMobileMenu} className="px-3 py-2 text-xs font-semibold text-gray-600 hover:text-[#0F766E]">Contact</Link>
                    </div>
                  )}
                </div>

              </div>
            </div>
          )}

        </div>
      </nav>
    </header>
  );
};

export default Navbar;