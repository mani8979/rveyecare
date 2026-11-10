import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  AlertCircle, 
  Sparkles,
  Search,
  CheckCircle2
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { blogsData } from '../data/blogs';

export default function Blogs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Cataract Education', 'Preventive Care', 'Glaucoma Care', 'Symptoms & Care', 'Vision Wellness', 'Cornea Health'];

  const filteredBlogs = blogsData.filter((b) => {
    const matchesSearch = b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          b.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || b.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="blogs-page overflow-hidden">
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#142F80] via-[#0E2364] to-[#0A1A4A] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <ScrollReveal animation="fade-up" duration={600}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#F36B16] text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F36B16]" />
              PATIENT EDUCATION & AWARENESS
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Eye Health & Wellness Library
            </h1>

            <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-2xl mx-auto mb-8">
              Empowering patients with reliable, evidence-informed knowledge on common vision disorders, preventive screening, and daily eye protection.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search topics (e.g. Cataract, Glaucoma, Dry Eye)..."
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white text-gray-900 placeholder-gray-400 text-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-[#F36B16]"
              />
              <Search size={18} className="absolute left-4 top-3.5 text-gray-400 pointer-events-none" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-[#F8FAFD]">
        <div className="container">
          
          {/* Medical Disclaimer Banner */}
          <ScrollReveal animation="fade-up" duration={600}>
            <div className="p-4 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] flex items-start gap-3 max-w-4xl mx-auto mb-10 shadow-xs">
              <AlertCircle size={20} className="text-[#D97706] flex-shrink-0 mt-0.5" />
              <div className="text-xs text-[#92400E] leading-relaxed">
                <strong>Clinical Advisory:</strong> Articles provided in this section are meant exclusively for public education and health literacy. They do not constitute formal medical diagnosis or specific clinical treatment plans. Please consult an ophthalmologist for individual eye issues.
              </div>
            </div>
          </ScrollReveal>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#142F80] text-white shadow-sm'
                    : 'bg-white text-gray-700 hover:bg-[#EDF3FC] border border-[#E3E9F4]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blogs Grid with Staggered Scroll Fade */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, idx) => (
              <ScrollReveal 
                key={blog.id} 
                animation="fade-up" 
                delay={(idx % 3) * 100}
                duration={650}
              >
                <article className="card card-hover group flex flex-col h-full bg-white border border-[#E3E9F4] rounded-2xl overflow-hidden transition-all">
                  {/* Featured Image */}
                  <div className="relative h-52 overflow-hidden bg-gray-100">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      width={400}
                      height={208}
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="badge badge-navy text-[11px] bg-white/95 text-[#142F80] shadow-sm">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  {/* Article Body */}
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Read Time & Date */}
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                        <div className="flex items-center gap-1">
                          <Clock size={13} className="text-[#F36B16]" />
                          <span>{blog.readTime}</span>
                        </div>
                        <span>&bull;</span>
                        <span>{blog.publishDate}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-[#142F80] group-hover:text-[#F36B16] transition-colors leading-snug mb-3">
                        <Link to={`/blogs/${blog.id}`} className="hover:text-[#F36B16]">
                          {blog.title}
                        </Link>
                      </h3>

                      {/* Excerpt */}
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                        {blog.excerpt}
                      </p>
                    </div>

                    {/* Read More Action */}
                    <div className="pt-3 border-t border-gray-100">
                      <Link
                        to={`/blogs/${blog.id}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#142F80] group-hover:text-[#F36B16] transition-colors"
                      >
                        <span>Read Educational Article</span>
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
