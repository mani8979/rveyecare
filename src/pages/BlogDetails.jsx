import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  Share2, 
  BookOpen 
} from 'lucide-react';
import { blogsData } from '../data/blogs';

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogsData.find((b) => b.id === id);

  if (!blog) {
    return <Navigate to="/blogs" replace />;
  }

  // Related articles (excluding current)
  const relatedBlogs = blogsData.filter((b) => b.id !== blog.id).slice(0, 3);

  return (
    <div className="blog-details-page bg-[#F8FAFD] py-12 md:py-16">
      <div className="container">
        
        {/* Breadcrumb / Back Link */}
        <div className="mb-6">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#142F80] hover:text-[#F36B16] transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to All Articles</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Article Content (8 cols) */}
          <article className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-3xl border border-[#E3E9F4] shadow-sm">
            
            {/* Category & Metadata */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="badge badge-navy">
                {blog.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <Clock size={13} className="text-[#F36B16]" />
                <span>{blog.readTime}</span>
              </div>
              <span className="text-gray-300">&bull;</span>
              <span className="text-xs text-gray-500">{blog.publishDate}</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111B33] leading-tight mb-6">
              {blog.title}
            </h1>

            {/* Lead Excerpt */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium mb-6 pb-6 border-b border-gray-100">
              {blog.excerpt}
            </p>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden mb-8 border border-gray-100 shadow-sm">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[360px] sm:h-[420px] object-cover"
              />
            </div>

            {/* Markdown-style Content Formatting */}
            <div className="prose max-w-none text-gray-800 leading-relaxed space-y-5 text-sm sm:text-base">
              {blog.content.split('\n\n').map((paragraph, idx) => {
                const trimmed = paragraph.trim();
                if (!trimmed) return null;

                // Check for H3 heading
                if (trimmed.startsWith('### ')) {
                  return (
                    <h3 
                      key={idx} 
                      className="text-xl sm:text-2xl font-bold text-[#142F80] mt-8 mb-3"
                    >
                      {trimmed.replace('### ', '')}
                    </h3>
                  );
                }

                // Check for bullet list items
                if (trimmed.startsWith('* ') || trimmed.startsWith('1. ')) {
                  const lines = trimmed.split('\n');
                  return (
                    <ul key={idx} className="space-y-2 my-4 pl-2">
                      {lines.map((line, lIdx) => (
                        <li key={lIdx} className="flex items-start gap-2.5 text-sm sm:text-base">
                          <CheckCircle2 size={16} className="text-[#F36B16] flex-shrink-0 mt-1" />
                          <span>
                            {line.replace(/^(\*|\d+\.)\s*/, '')}
                          </span>
                        </li>
                      ))}
                    </ul>
                  );
                }

                // Standard Paragraph
                return (
                  <p key={idx} className="text-gray-700 leading-relaxed">
                    {trimmed}
                  </p>
                );
              })}
            </div>

            {/* Mandatory Medical Disclaimer Notice */}
            <div className="mt-10 p-5 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] flex items-start gap-3">
              <AlertCircle size={20} className="text-[#D97706] flex-shrink-0 mt-0.5" />
              <div className="text-xs text-[#92400E] leading-relaxed">
                <strong>Medical Content Disclaimer:</strong> The information contained in this article is provided solely for educational and general eye health awareness. It is not intended to be a substitute for professional medical advice, clinical diagnosis, or individual ophthalmology consultation. Always seek the advice of a qualified eye doctor regarding any ocular symptoms or vision changes.
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
              <Link to="/blogs" className="btn btn-outline-navy btn-sm">
                <ArrowLeft size={15} />
                <span>All Articles</span>
              </Link>

              <Link to="/appointment" className="btn btn-primary btn-sm">
                <span>Schedule an Eye Consultation</span>
              </Link>
            </div>

          </article>

          {/* Right Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* Consultation CTA Widget */}
            <div className="bg-[#142F80] text-white p-7 rounded-3xl shadow-md text-center">
              <span className="badge badge-white text-[10px] mb-3">
                PATIENT CONSULTATION
              </span>
              <h3 className="text-xl font-bold mb-2">
                Experiencing Vision Changes?
              </h3>
              <p className="text-xs text-blue-100 leading-relaxed mb-5">
                Early clinical evaluation prevents irreversible visual complications. Book your slot with RV Superspeciality Eye Care.
              </p>
              <Link to="/appointment" className="btn btn-primary w-full py-2.5 shadow-sm">
                <span>Book Appointment</span>
              </Link>
            </div>

            {/* Related Articles */}
            <div className="bg-white p-6 rounded-3xl border border-[#E3E9F4] shadow-xs">
              <h4 className="text-base font-bold text-[#142F80] uppercase tracking-wider mb-4 border-l-2 border-[#F36B16] pl-2.5">
                Related Articles
              </h4>
              <div className="space-y-4">
                {relatedBlogs.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/blogs/${rel.id}`}
                    className="group flex gap-3 items-center"
                  >
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-16 h-16 rounded-xl object-cover flex-shrink-0 group-hover:opacity-90 transition-opacity"
                    />
                    <div>
                      <span className="text-[10.5px] font-bold text-[#F36B16] uppercase block">
                        {rel.category}
                      </span>
                      <h5 className="text-xs font-bold text-[#142F80] group-hover:text-[#F36B16] transition-colors line-clamp-2 leading-snug">
                        {rel.title}
                      </h5>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </aside>

        </div>

      </div>
    </div>
  );
}

