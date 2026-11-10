import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Calendar, Phone, ArrowRight, ShieldAlert, Sparkles, MapPin } from 'lucide-react';
import Logo from './Logo';
import { availableServices } from '../data/services';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // Lock background scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle Escape key to close mobile drawer or dropdown
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
        setMobileServicesOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle sticky shadow on scroll with requestAnimationFrame and passive listener
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <>
      <header 
        className={`sticky top-0 z-40 bg-white transition-[box-shadow,border-color,background-color] duration-200 ${
          scrolled ? 'shadow-md border-b border-gray-100' : 'border-b border-[#E3E9F4]'
        }`}
      >
      <div className="container">
        <div className="flex items-center justify-between min-h-[86px] sm:min-h-[96px] py-2">
          {/* Brand Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="desktop-nav hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((item) => {
              if (item.hasDropdown) {
                const isServicesActive = location.pathname.startsWith('/services');
                return (
                  <div 
                    key={item.name} 
                    className="relative"
                    ref={dropdownRef}
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setServicesDropdownOpen((prev) => !prev)}
                      className={`flex items-center gap-1.5 text-[15px] font-semibold transition-colors py-2 cursor-pointer outline-none ${
                        servicesDropdownOpen || isServicesActive
                          ? 'text-[#F36B16]' 
                          : 'text-[#142F80] hover:text-[#F36B16]'
                      }`}
                      aria-expanded={servicesDropdownOpen}
                      aria-haspopup="true"
                    >
                      <span>{item.name}</span>
                      <ChevronDown 
                        size={15} 
                        className={`transition-transform duration-200 ${
                          servicesDropdownOpen ? 'rotate-180 text-[#F36B16]' : 'text-[#142F80]'
                        }`} 
                      />
                    </button>

                    {/* Services Dropdown Menu (Desktop) */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-[380px] bg-white rounded-2xl shadow-2xl border border-[#E3E9F4] p-3.5 mt-1 animate-fadeIn z-50">
                        {/* Header Badge Row */}
                        <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-3 pb-2.5 border-b border-gray-100 mb-2">
                          <span>AVAILABLE SCOPE OF SERVICES</span>
                        </div>

                        {/* List of 6 Available Services */}
                        <div className="space-y-1">
                          {availableServices.map((svc) => (
                            <Link
                              key={svc.id}
                              to={`/services/${svc.slug}`}
                              className="group flex flex-col px-3 py-2 rounded-xl hover:bg-[#F3F6FC] transition-colors"
                              onClick={() => setServicesDropdownOpen(false)}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-[14px] font-bold text-[#142F80] group-hover:text-[#F36B16] transition-colors">
                                  {svc.title}
                                </span>
                                <ArrowRight size={13} className="text-gray-300 group-hover:text-[#F36B16] group-hover:translate-x-0.5 transition-all" />
                              </div>
                              <span className="text-[11.5px] text-gray-500 line-clamp-1 mt-0.5">
                                {svc.shortDescription}
                              </span>
                            </Link>
                          ))}
                        </div>

                        {/* Non-scope quick link notice in dropdown */}
                        <div className="mt-2.5 pt-2.5 border-t border-gray-100 px-3 flex flex-col gap-2">
                          <Link
                            to="/services#non-scope"
                            className="flex items-center gap-2 text-[12px] text-[#C2410C] hover:text-[#9A3412] font-semibold py-1 transition-colors"
                            onClick={() => setServicesDropdownOpen(false)}
                          >
                            <ShieldAlert size={14} className="flex-shrink-0" />
                            <span>View Non-Scope Services Notice</span>
                          </Link>

                          <Link
                            to="/services"
                            className="flex items-center justify-between text-[11.5px] font-bold text-[#142F80] hover:text-[#F36B16] py-1 border-t border-gray-50 transition-colors"
                            onClick={() => setServicesDropdownOpen(false)}
                          >
                            <span>Explore All Services Directory</span>
                            <ArrowRight size={13} />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-[15px] font-semibold transition-colors py-2 relative ${
                      isActive 
                        ? 'text-[#F36B16]' 
                        : 'text-[#142F80] hover:text-[#F36B16]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#F36B16] rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action: Book Appointment Button (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/appointment"
              className="btn btn-primary shadow-sm hover:shadow-orange"
            >
              <Calendar size={17} />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button (Three Lines) */}
          <button
            type="button"
            className="mobile-menu-btn flex lg:hidden items-center justify-center w-11 h-11 rounded-xl text-[#142F80] hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu size={26} />
          </button>
        </div>
      </div>
    </header>

    {/* MOBILE SLIDE-IN DRAWER (Rendered via Portal to Document Body - Full Screen Viewport) */}
    {mounted && createPortal(
      <div className="lg:hidden">
        {/* Dark Backdrop Overlay */}
        <div 
          className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Off-Canvas Drawer Sliding in from Left to Right */}
        <aside 
          className={`fixed inset-y-0 left-0 h-full h-[100dvh] w-[88%] max-w-[360px] bg-white z-50 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out transform ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          aria-label="Mobile Navigation Menu"
          aria-hidden={!mobileMenuOpen}
        >
          {/* Drawer Header: Logo on left, 'X' button on right */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-[#F8FAFD] flex-shrink-0">
            <Logo onClick={() => setMobileMenuOpen(false)} showTagline={false} />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-xl bg-white border border-[#E3E9F4] text-[#142F80] hover:text-[#F36B16] hover:bg-orange-50 flex items-center justify-center transition-colors shadow-xs"
              aria-label="Close mobile navigation"
            >
              <X size={22} />
            </button>
          </div>

          {/* Drawer Body: Navigation Links */}
          <div className="flex-1 min-h-0 overflow-y-auto px-4 py-4 space-y-1.5">
            <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 px-3 pb-1">
              Menu Navigation
            </div>

            {navLinks.map((item) => {
              if (item.hasDropdown) {
                const isServicesActive = location.pathname.startsWith('/services');
                return (
                  <div key={item.name} className="flex flex-col">
                    {/* Interactive Services Item with Chevron */}
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((prev) => !prev)}
                      className={`px-3.5 py-3 rounded-xl text-base font-bold flex items-center justify-between transition-all w-full text-left cursor-pointer ${
                        mobileServicesOpen || isServicesActive
                          ? 'bg-[#EDF3FC] text-[#F36B16] shadow-xs' 
                          : 'text-[#142F80] hover:bg-gray-50 hover:text-[#F36B16]'
                      }`}
                      aria-expanded={mobileServicesOpen}
                    >
                      <span>{item.name}</span>
                      <ChevronDown 
                        size={18} 
                        className={`transition-transform duration-200 ${
                          mobileServicesOpen ? 'rotate-180 text-[#F36B16]' : 'text-[#142F80]'
                        }`} 
                      />
                    </button>

                    {/* Collapsible Mobile Dropdown Card */}
                    {mobileServicesOpen && (
                      <div className="mt-2 mb-2 p-3.5 bg-white rounded-2xl border border-[#CBD9F5] shadow-md space-y-2 animate-fadeIn">
                        {/* Header Row */}
                        <div className="pb-2 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                          <span>AVAILABLE SCOPE OF SERVICES</span>
                        </div>

                        {/* 6 Available Services List */}
                        <div className="space-y-1">
                          {availableServices.map((svc) => (
                            <Link
                              key={svc.id}
                              to={`/services/${svc.slug}`}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileServicesOpen(false);
                              }}
                              className="group block px-2.5 py-2 rounded-xl hover:bg-[#F3F6FC] transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-[13.5px] font-bold text-[#142F80] group-hover:text-[#F36B16] transition-colors">
                                  {svc.title}
                                </span>
                                <ArrowRight size={13} className="text-gray-300 group-hover:text-[#F36B16] group-hover:translate-x-0.5 transition-all" />
                              </div>
                              <p className="text-[11px] text-gray-500 line-clamp-1 mt-0.5 m-0 leading-normal">
                                {svc.shortDescription}
                              </p>
                            </Link>
                          ))}
                        </div>

                        {/* Non-Scope Notice & Full Services Directory Link */}
                        <div className="pt-2 border-t border-gray-100 space-y-1.5">
                          <Link
                            to="/services#non-scope"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileServicesOpen(false);
                            }}
                            className="flex items-center gap-2 text-xs font-semibold text-[#C2410C] hover:text-[#9A3412] px-2 py-1.5 rounded-lg hover:bg-orange-50/50 transition-colors"
                          >
                            <ShieldAlert size={14} className="flex-shrink-0" />
                            <span>View Non-Scope Services Notice</span>
                          </Link>

                          <Link
                            to="/services"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileServicesOpen(false);
                            }}
                            className="flex items-center justify-between text-xs font-bold text-[#142F80] hover:text-[#F36B16] px-2 py-1.5 rounded-lg hover:bg-blue-50/50 transition-colors"
                          >
                            <span>Explore All Services Directory</span>
                            <ArrowRight size={13} />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3.5 py-3 rounded-xl text-base font-bold flex items-center justify-between transition-all ${
                      isActive 
                        ? 'bg-[#EDF3FC] text-[#F36B16] shadow-xs' 
                        : 'text-[#142F80] hover:bg-gray-50 hover:text-[#F36B16]'
                    }`
                  }
                >
                  <span>{item.name}</span>
                  <ArrowRight size={16} className="text-gray-400" />
                </NavLink>
              );
            })}
          </div>

          {/* Drawer Footer: Actions & Emergency Contact */}
          <div className="p-4 border-t border-gray-100 bg-[#F8FAFD] space-y-2.5 flex-shrink-0">
            <Link
              to="/appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary w-full py-3 shadow-md"
            >
              <Calendar size={18} />
              <span>Book Appointment</span>
            </Link>

            <a
              href="tel:+918523815336"
              className="btn btn-outline-navy w-full py-2.5 text-xs font-bold"
            >
              <Phone size={15} />
              <span>Emergency: +91 85238 15336</span>
            </a>

            <a
              href="https://www.google.com/maps/place/RV+SUPERSPECIALITY+EYE+CARE/@17.8033596,83.2092257,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3967437b24e9bb:0x98714ec42492ed93!8m2!3d17.8033596!4d83.2092257!16s%2Fg%2F11syxd8sfs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 text-xs font-semibold text-[#142F80] hover:text-[#F36B16] pt-1 transition-colors"
            >
              <MapPin size={13} className="text-[#F36B16]" />
              <span>Pendurthi, Visakhapatnam</span>
            </a>

            <div className="text-[9.5px] text-center text-gray-400 pt-1 uppercase font-semibold tracking-wider">
              RIGHT PLACE FOR YOUR BRIGHT VISION
            </div>
          </div>
        </aside>
      </div>,
      document.body
    )}
    </>
  );
}
