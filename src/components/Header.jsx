import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Calendar, Phone, ArrowRight, ShieldAlert } from 'lucide-react';
import Logo from './Logo';
import { availableServices } from '../data/services';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
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

  // Handle Escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle sticky shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside dropdown
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
    <header 
      className={`sticky top-0 z-40 bg-white transition-all duration-300 ${
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
                return (
                  <div 
                    key={item.name} 
                    className="relative"
                    ref={dropdownRef}
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center gap-1 text-[15px] font-semibold transition-colors py-2 ${
                          isActive 
                            ? 'text-[#F36B16]' 
                            : 'text-[#142F80] hover:text-[#F36B16]'
                        }`
                      }
                    >
                      <span>{item.name}</span>
                      <ChevronDown 
                        size={15} 
                        className={`transition-transform duration-200 ${
                          servicesDropdownOpen ? 'rotate-180 text-[#F36B16]' : 'text-[#142F80]'
                        }`} 
                      />
                    </NavLink>

                    {/* Services Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-[#E3E9F4] p-3 py-3 mt-0 animate-fadeIn z-50">
                        <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-3 pb-2 border-b border-gray-100 mb-2 flex items-center justify-between">
                          <span>Available Scope of Services</span>
                          <span className="text-[10px] text-green-700 bg-green-50 px-1.5 py-0.5 rounded font-semibold">6 Services</span>
                        </div>

                        <div className="space-y-1">
                          {availableServices.map((svc) => (
                            <Link
                              key={svc.id}
                              to={`/services#${svc.id}`}
                              className="group flex flex-col px-3 py-2 rounded-lg hover:bg-[#F3F6FC] transition-colors"
                              onClick={() => setServicesDropdownOpen(false)}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-semibold text-[#142F80] group-hover:text-[#F36B16] transition-colors">
                                  {svc.title}
                                </span>
                                <span className="text-[11px] font-telugu text-gray-500 font-medium">
                                  {svc.teluguTitle}
                                </span>
                              </div>
                              <span className="text-[11.5px] text-gray-500 line-clamp-1 mt-0.5">
                                {svc.shortDescription}
                              </span>
                            </Link>
                          ))}
                        </div>

                        {/* Non-scope quick link notice in dropdown */}
                        <div className="mt-2 pt-2 border-t border-gray-100 px-3">
                          <Link
                            to="/services#non-scope"
                            className="flex items-center gap-2 text-[11.5px] text-[#C2410C] hover:text-[#9A3412] font-semibold py-1"
                            onClick={() => setServicesDropdownOpen(false)}
                          >
                            <ShieldAlert size={13} className="flex-shrink-0" />
                            <span>View Non-Scope Services Notice</span>
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

      {/* MOBILE SLIDE-IN DRAWER (Comes from Left to Right - Mobile View Only) */}
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
          className={`fixed top-0 left-0 bottom-0 w-[86%] max-w-[340px] bg-white z-50 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out transform ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          aria-label="Mobile Navigation Menu"
          aria-hidden={!mobileMenuOpen}
        >
          {/* Drawer Header: Logo on left, 'X' button on right */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-[#F8FAFD]">
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
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1.5">
            <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 px-3 pb-1">
              Menu Navigation
            </div>

            {navLinks.map((item) => (
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
            ))}

            {/* Quick Scope Services Preview */}
            <div className="mt-4 pt-3 border-t border-gray-100 px-1">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2 px-2">
                Scope Services (6):
              </span>
              <div className="space-y-1">
                {availableServices.map((svc) => (
                  <Link
                    key={svc.id}
                    to={`/services#${svc.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold text-gray-700 hover:text-[#F36B16] hover:bg-gray-50"
                  >
                    <span>{svc.title}</span>
                    <span className="font-telugu text-[10.5px] text-gray-400">{svc.teluguTitle}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Drawer Footer: Actions & Emergency Contact */}
          <div className="p-4 border-t border-gray-100 bg-[#F8FAFD] space-y-2.5">
            <Link
              to="/appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary w-full py-3 shadow-md"
            >
              <Calendar size={18} />
              <span>Book Appointment</span>
            </Link>

            <a
              href="tel:+919876543210"
              className="btn btn-outline-navy w-full py-2.5 text-xs font-bold"
            >
              <Phone size={15} />
              <span>Emergency: +91 98765 43210</span>
            </a>

            <div className="text-[9.5px] text-center text-gray-400 pt-1 uppercase font-semibold tracking-wider">
              RIGHT PLACE FOR YOUR BRIGHT VISION
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
