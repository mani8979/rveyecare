import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Doctors from './pages/Doctors';
import Gallery from './pages/Gallery';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#202638] w-full max-w-full relative" style={{ overflowX: 'clip' }}>
      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* Top slim information bar */}
      <TopBar />

      {/* Main sticky navigation header */}
      <Header />

      {/* Primary Page Content */}
      <main className="flex-1 w-full max-w-full" style={{ overflowX: 'clip' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetails />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          {/* 404 Catch-All Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Deep Navy-Blue Footer */}
      <Footer />
    </div>
  );
}

