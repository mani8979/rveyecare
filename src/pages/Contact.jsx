import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Info, 
  MessageSquare, 
  Calendar, 
  ExternalLink, 
  HelpCircle, 
  ChevronDown 
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // FAQ state
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: 'Do I need prior appointment for an eye check-up?',
      a: 'While walk-in patients are warmly accommodated during regular OPD hours, booking an appointment in advance helps minimize waiting times and guarantees your preferred consultation slot.'
    },
    {
      q: 'Will my eyes be dilated with drops during the consultation?',
      a: 'For comprehensive retina, optic nerve, and pediatric refraction evaluations, pupillary dilation with specialized drops is necessary. Dilation causes mild temporary blurriness in near vision for 2–3 hours. We advise bringing sunglasses and avoiding driving immediately afterward.'
    },
    {
      q: 'What documents should I bring for my first consultation?',
      a: 'Please bring your current eyeglasses, recent lens prescriptions, any existing ophthalmic medical reports, and a list of your current systemic medications (especially for diabetes and hypertension).'
    },
    {
      q: 'Are all eye conditions treated at this facility?',
      a: 'RV Superspeciality Eye Care specializes in 6 core disciplines: General Check-up, Cataract Services, Cornea Services, Glaucoma Services, Medical Retina Services, and Opticals. Services outside our scope (such as Eye Bank, Squint Surgery, and Vitreoretinal Surgery) are not performed on-site; we provide initial evaluation and formal referral guidance.'
    }
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = 'Enter a valid 10-digit mobile number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please enter your message';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: ''
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="contact-page overflow-hidden">
      <SEO
        title="Contact Us & Hospital Location | Pendurthi, Visakhapatnam"
        description="Visit RV Superspeciality Eye Care on Araku Road, Ratnagiri Nagar, Pendurthi, Visakhapatnam. Get Google Maps directions, OPD timings, and helpline contact info."
        path="/contact"
      />
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#142F80] via-[#0E2364] to-[#0A1A4A] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <ScrollReveal animation="fade-up" duration={600}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#F36B16] text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F36B16]" />
              PATIENT HELPDESK & LOCATION
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Contact RV Superspeciality Eye Care
            </h1>

            <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-2xl mx-auto">
              Have questions regarding our scope of services, consultation timings, or appointment slots? Our hospital desk is here to assist you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section bg-[#F8FAFD]">
        <div className="container">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Contact Cards & Info (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <ScrollReveal animation="fade-up" duration={600}>
                <SectionHeading
                  badge="DIRECT CHANNELS"
                  title="Hospital"
                  highlight="Contact Details"
                  subtitle="Reach out via phone, email, or visit our consultation facility during OPD working hours."
                  className="mb-6"
                />
              </ScrollReveal>

              {/* Card 1: Address */}
              <ScrollReveal animation="fade-up" delay={50}>
                <div className="card p-6 bg-white border border-[#E3E9F4] rounded-2xl flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FFF5EE] text-[#F36B16] flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#142F80] uppercase tracking-wider mb-1">
                      Hospital Location
                    </h4>
                    <p className="text-sm text-gray-800 font-semibold mb-1">
                      RV SUPERSPECIALITY EYE CARE
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Araku - Srungavarapukota Road, Ratnagiri Nagar,<br />
                      Pendurthi, Visakhapatnam, Andhra Pradesh – 530051
                    </p>
                    <a
                      href="https://www.google.com/maps/place/RV+SUPERSPECIALITY+EYE+CARE/@17.8033596,83.2092257,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3967437b24e9bb:0x98714ec42492ed93!8m2!3d17.8033596!4d83.2092257!16s%2Fg%2F11syxd8sfs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#F36B16] font-bold hover:underline inline-block mt-2"
                    >
                      Open in Google Maps &rarr;
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 2: Phone */}
              <ScrollReveal animation="fade-up" delay={150}>
                <div className="card p-6 bg-white border border-[#E3E9F4] rounded-2xl flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EDF3FC] text-[#142F80] flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#142F80] uppercase tracking-wider mb-1">
                      Phone & Emergency Helpline
                    </h4>
                    <p className="text-sm font-bold text-gray-800">
                      <a href="tel:+918523815336" className="text-[#142F80] hover:text-[#F36B16] transition-colors">
                        +91 85238 15336
                      </a>
                    </p>
                    <p className="text-xs text-gray-600 mt-0.5">
                      Available during clinic hours for bookings & queries.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 3: Email */}
              <ScrollReveal animation="fade-up" delay={250}>
                <div className="card p-6 bg-white border border-[#E3E9F4] rounded-2xl flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FFF5EE] text-[#F36B16] flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#142F80] uppercase tracking-wider mb-1">
                      Email Correspondence
                    </h4>
                    <p className="text-sm font-bold text-gray-800">
                      <a href="mailto:info@rveyecare.com" className="text-[#142F80] hover:text-[#F36B16] transition-colors">
                        info@rveyecare.com
                      </a>
                    </p>
                    <p className="text-xs text-gray-600 mt-0.5">
                      For corporate queries, records, and general enquiries.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 4: Working Hours */}
              <ScrollReveal animation="fade-up" delay={350}>
                <div className="card p-6 bg-white border border-[#E3E9F4] rounded-2xl flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EDF3FC] text-[#142F80] flex items-center justify-center flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#142F80] uppercase tracking-wider mb-1">
                      OPD Consultation Timings
                    </h4>
                    <p className="text-xs text-gray-800 font-semibold">
                      Monday – Saturday: 9:00 AM – 7:30 PM
                    </p>
                    <p className="text-xs text-gray-600">
                      Sunday: 9:00 AM – 1:00 PM (Emergency on-call)
                    </p>
                  </div>
                </div>
              </ScrollReveal>

            </div>

            {/* Right Column: Contact Enquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <ScrollReveal animation="fade-up" delay={100} duration={700}>
                <div className="card p-6 sm:p-10 bg-white border border-[#E3E9F4] rounded-3xl shadow-sm">
                  
                  {submitted ? (
                    <div className="py-8 text-center animate-fadeIn">
                      <div className="w-16 h-16 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center mx-auto mb-4">
                        <CheckCircle size={36} />
                      </div>
                      <h3 className="text-2xl font-bold text-[#065F46] mb-2">
                        Enquiry Submitted (Demonstration)
                      </h3>
                      <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
                        Thank you for contacting RV Superspeciality Eye Care. Your enquiry fields have been validated.
                      </p>

                      {/* Notice */}
                      <div className="p-4 rounded-xl bg-[#FFFBEB] border border-[#FDE68A] text-left text-xs text-[#92400E] mb-6 max-w-md mx-auto">
                        <strong>Frontend Notice:</strong> This is a client-side prototype. In live production, this message is dispatched to the hospital helpdesk inbox.
                      </div>

                      <button
                        type="button"
                        onClick={handleReset}
                        className="btn btn-outline-navy"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate>
                      <div className="mb-6 pb-4 border-b border-gray-100">
                        <h3 className="text-2xl font-bold text-[#142F80]">
                          Send an Enquiry
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">
                          Fill out the details below and our team will get back to you.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Name */}
                        <div className="form-group">
                          <label className="form-label" htmlFor="name">
                            Your Full Name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Anand Sharma"
                            className={`form-input ${errors.name ? 'error' : ''}`}
                          />
                          {errors.name && <div className="form-error"><AlertCircle size={13} /><span>{errors.name}</span></div>}
                        </div>

                        {/* Phone */}
                        <div className="form-group">
                          <label className="form-label" htmlFor="contactPhone">
                            Mobile Number <span className="required">*</span>
                          </label>
                          <input
                            type="tel"
                            id="contactPhone"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="e.g. 8523815336"
                            className={`form-input ${errors.phone ? 'error' : ''}`}
                          />
                          {errors.phone && <div className="form-error"><AlertCircle size={13} /><span>{errors.phone}</span></div>}
                        </div>
                      </div>

                      {/* Email */}
                      <div className="form-group">
                        <label className="form-label" htmlFor="contactEmail">
                          Email Address <span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          id="contactEmail"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. anand@example.com"
                          className={`form-input ${errors.email ? 'error' : ''}`}
                        />
                        {errors.email && <div className="form-error"><AlertCircle size={13} /><span>{errors.email}</span></div>}
                      </div>

                      {/* Subject */}
                      <div className="form-group">
                        <label className="form-label" htmlFor="subject">
                          Subject / Query Type
                        </label>
                        <input
                          type="text"
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="e.g. Cataract consultation inquiry or optical prescription query"
                          className="form-input"
                        />
                      </div>

                      {/* Message */}
                      <div className="form-group">
                        <label className="form-label" htmlFor="contactMessage">
                          Your Message <span className="required">*</span>
                        </label>
                        <textarea
                          id="contactMessage"
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Please write your query or details here..."
                          className={`form-textarea ${errors.message ? 'error' : ''}`}
                        />
                        {errors.message && <div className="form-error"><AlertCircle size={13} /><span>{errors.message}</span></div>}
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn btn-primary btn-lg w-full sm:w-auto shadow-md"
                        >
                          {isSubmitting ? (
                            <span>Validating...</span>
                          ) : (
                            <>
                              <Send size={17} />
                              <span>Submit Enquiry</span>
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}

                </div>
              </ScrollReveal>
            </div>

          </div>

          {/* GOOGLE MAPS SECTION */}
          <div className="mt-16">
            <ScrollReveal animation="fade-up" duration={700}>
              <div className="card p-6 sm:p-8 bg-white border border-[#E3E9F4] rounded-3xl shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <span className="badge badge-navy text-[10px] mb-1">
                      OFFICIAL HOSPITAL LOCATION
                    </span>
                    <h3 className="text-xl font-bold text-[#142F80]">
                      Find RV Superspeciality Eye Care
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Araku - Srungavarapukota Road, Ratnagiri Nagar, Pendurthi, Visakhapatnam – 530051
                    </p>
                  </div>

                  <div>
                    <a
                      href="https://www.google.com/maps/place/RV+SUPERSPECIALITY+EYE+CARE/@17.8033596,83.2092257,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3967437b24e9bb:0x98714ec42492ed93!8m2!3d17.8033596!4d83.2092257!16s%2Fg%2F11syxd8sfs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm inline-flex items-center justify-center gap-1.5 w-full sm:w-auto shadow-sm"
                    >
                      <ExternalLink size={14} />
                      <span>Get Driving Directions in Google Maps</span>
                    </a>
                  </div>
                </div>

                {/* Interactive Google Map Embed */}
                <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-[#CBD9F5] shadow-inner bg-gray-100">
                  <iframe
                    title="RV Superspeciality Eye Care Location"
                    src="https://maps.google.com/maps?q=17.8033596,83.2092257&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* FREQUENTLY ASKED QUESTIONS (FAQs) */}
          <div className="mt-16 max-w-3xl mx-auto">
            <ScrollReveal animation="fade-up" duration={700}>
              <SectionHeading
                badge="HELP & CLARIFICATIONS"
                title="Frequently Asked"
                highlight="Questions"
                subtitle="Helpful information regarding hospital consultations, appointments, and scope services."
                centered
              />
            </ScrollReveal>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <ScrollReveal key={index} animation="fade-up" delay={index * 80}>
                    <div className="card border border-[#E3E9F4] rounded-2xl overflow-hidden bg-white transition-all">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#142F80] hover:text-[#F36B16] transition-colors"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 flex-shrink-0 text-gray-400 ${
                            isOpen ? 'rotate-180 text-[#F36B16]' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3 animate-fadeIn">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
