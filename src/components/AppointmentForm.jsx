import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight,
  Info,
  Sparkles,
  Printer,
  RotateCcw
} from 'lucide-react';
import { availableServices } from '../data/services';

export default function AppointmentForm({ 
  preselectedService = '',
  className = '' 
}) {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    email: '',
    service: preselectedService || '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState(null);

  // Time slots
  const timeSlots = [
    '09:30 AM – 10:30 AM',
    '10:30 AM – 11:30 AM',
    '11:30 AM – 12:30 PM',
    '02:30 PM – 03:30 PM',
    '03:30 PM – 04:30 PM',
    '04:30 PM – 05:30 PM',
    '05:30 PM – 06:30 PM'
  ];

  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Patient full name is required';
    } else if (formData.patientName.trim().length < 3) {
      newErrors.patientName = 'Name must be at least 3 characters';
    }

    // Phone validation (10 digits Indian format standard or generic 10 digits)
    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required for appointment confirmation';
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone) && cleanPhone.length !== 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Service validation - MUST be one of the 6 available services
    if (!formData.service) {
      newErrors.service = 'Please select a service from our available scope';
    }

    // Date validation
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select your preferred consultation date';
    } else {
      const selectedDate = new Date(formData.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.preferredDate = 'Consultation date cannot be in the past';
      }
    }

    // Time slot validation
    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select a preferred consultation time slot';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error upon typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate instant frontend validation and generate booking slip preview
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedSlip = {
        bookingId: `RV-${Math.floor(100000 + Math.random() * 900000)}`,
        timestamp: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
        ...formData
      };
      setSubmittedBooking(generatedSlip);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      patientName: '',
      phone: '',
      email: '',
      service: '',
      preferredDate: '',
      preferredTime: '',
      message: ''
    });
    setErrors({});
    setSubmittedBooking(null);
  };

  // Get tomorrow's date for datepicker min attribute
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <div className={`card appointment-card p-6 sm:p-10 border border-[#E3E9F4] shadow-lg rounded-3xl bg-white ${className}`}>
      
      {/* If booking preview is generated */}
      {submittedBooking ? (
        <div className="animate-fadeIn">
          {/* Success Banner */}
          <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-2xl p-6 text-center mb-8">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#059669] mx-auto mb-3 shadow-sm">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-2xl font-extrabold text-[#065F46] mb-1">
              Consultation Request Received (Preview)
            </h3>
            <p className="text-sm text-[#047857] max-w-md mx-auto">
              Your appointment request details have been validated successfully.
            </p>
          </div>

          {/* Transparent Notice */}
          <div className="p-4 rounded-xl bg-[#FFFBEB] border border-[#FDE68A] flex items-start gap-3 mb-6">
            <Info size={18} className="text-[#D97706] flex-shrink-0 mt-0.5" />
            <div className="text-xs text-[#92400E] leading-relaxed">
              <strong>Frontend Demonstration Notice:</strong> This website operates on the client-side without an active live backend server. In production, this form connects to the hospital's reception/HMS desk for telephonic verification and calendar allocation.
            </div>
          </div>

          {/* Generated Appointment Slip Card */}
          <div className="bg-[#F8FAFD] border-2 border-dashed border-[#CBD5E1] rounded-2xl p-6 mb-8 relative">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block">
                  RV SUPERSPECIALITY EYE CARE
                </span>
                <span className="text-lg font-bold text-[#142F80]">
                  Appointment Request Slip
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono font-bold text-[#F36B16] bg-orange-50 px-2.5 py-1 rounded border border-orange-200">
                  {submittedBooking.bookingId}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-4">
              <div>
                <span className="text-xs text-gray-500 block">Patient Name:</span>
                <strong className="text-gray-900">{submittedBooking.patientName}</strong>
              </div>
              <div>
                <span className="text-xs text-gray-500 block">Phone Number:</span>
                <strong className="text-gray-900">{submittedBooking.phone}</strong>
              </div>
              <div>
                <span className="text-xs text-gray-500 block">Selected Service:</span>
                <strong className="text-[#142F80]">
                  {availableServices.find(s => s.id === submittedBooking.service)?.title || submittedBooking.service}
                </strong>
              </div>
              <div>
                <span className="text-xs text-gray-500 block">Preferred Schedule:</span>
                <strong className="text-gray-900">
                  {submittedBooking.preferredDate} ({submittedBooking.preferredTime})
                </strong>
              </div>
              <div>
                <span className="text-xs text-gray-500 block">Email Address:</span>
                <span className="text-gray-800">{submittedBooking.email}</span>
              </div>
              <div>
                <span className="text-xs text-gray-500 block">Generated On:</span>
                <span className="text-gray-600 text-xs">{submittedBooking.timestamp}</span>
              </div>
            </div>

            {submittedBooking.message && (
              <div className="pt-3 border-t border-gray-200 text-xs">
                <span className="text-gray-500 block mb-0.5">Patient Notes / Symptoms:</span>
                <p className="text-gray-700 italic">"{submittedBooking.message}"</p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 w-full">
            <button
              type="button"
              onClick={handleReset}
              className="btn btn-outline-navy flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <RotateCcw size={16} />
              <span>Book Another Appointment</span>
            </button>

            <button
              type="button"
              onClick={() => window.print()}
              className="btn btn-navy flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Printer size={16} />
              <span>Print / Save Slip</span>
            </button>
          </div>
        </div>
      ) : (
        /* The Booking Form */
        <form onSubmit={handleSubmit} noValidate>
          
          <div className="mb-6 pb-4 border-b border-gray-100 flex items-center justify-between flex-wrap gap-2">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#142F80]">
                Schedule an Eye Care Consultation
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Select from our 6 verified ophthalmic scope services.
              </p>
            </div>
            <span className="badge badge-orange font-mono text-[11px]">
              Available Services Only
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Field: Patient Name */}
            <div className="form-group">
              <label htmlFor="patientName" className="form-label">
                Patient Full Name <span className="required">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="patientName"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleChange}
                  placeholder="e.g. Ramesh Kumar"
                  className={`form-input ${errors.patientName ? 'error' : ''}`}
                />
                <User size={17} className="absolute right-3.5 top-3.5 text-gray-400 pointer-events-none" />
              </div>
              {errors.patientName && (
                <div className="form-error">
                  <AlertCircle size={13} />
                  <span>{errors.patientName}</span>
                </div>
              )}
            </div>

            {/* Field: Phone Number */}
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Mobile Number <span className="required">*</span>
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 9876543210"
                  maxLength={13}
                  className={`form-input ${errors.phone ? 'error' : ''}`}
                />
                <Phone size={17} className="absolute right-3.5 top-3.5 text-gray-400 pointer-events-none" />
              </div>
              {errors.phone && (
                <div className="form-error">
                  <AlertCircle size={13} />
                  <span>{errors.phone}</span>
                </div>
              )}
            </div>

            {/* Field: Email */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address <span className="required">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. ramesh@example.com"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                />
                <Mail size={17} className="absolute right-3.5 top-3.5 text-gray-400 pointer-events-none" />
              </div>
              {errors.email && (
                <div className="form-error">
                  <AlertCircle size={13} />
                  <span>{errors.email}</span>
                </div>
              )}
            </div>

            {/* Field: Select Service (Strictly the 6 available services) */}
            <div className="form-group">
              <label htmlFor="service" className="form-label">
                Select Eye Care Service <span className="required">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`form-select ${errors.service ? 'error' : ''}`}
              >
                <option value="">-- Choose an Available Service --</option>
                {availableServices.map((svc) => (
                  <option key={svc.id} value={svc.id}>
                    {svc.title} ({svc.teluguTitle})
                  </option>
                ))}
              </select>
              {errors.service && (
                <div className="form-error">
                  <AlertCircle size={13} />
                  <span>{errors.service}</span>
                </div>
              )}
              <span className="text-[11px] text-gray-400 mt-1 block">
                Note: Eye Bank, Squint Surgery & Vitreoretinal Surgery are not offered at this facility.
              </span>
            </div>

            {/* Field: Preferred Date */}
            <div className="form-group">
              <label htmlFor="preferredDate" className="form-label">
                Preferred Date <span className="required">*</span>
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  min={todayStr}
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className={`form-input ${errors.preferredDate ? 'error' : ''}`}
                />
              </div>
              {errors.preferredDate && (
                <div className="form-error">
                  <AlertCircle size={13} />
                  <span>{errors.preferredDate}</span>
                </div>
              )}
            </div>

            {/* Field: Preferred Time Slot */}
            <div className="form-group">
              <label htmlFor="preferredTime" className="form-label">
                Preferred Time Slot <span className="required">*</span>
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className={`form-select ${errors.preferredTime ? 'error' : ''}`}
              >
                <option value="">-- Choose a Convenient Time Slot --</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              {errors.preferredTime && (
                <div className="form-error">
                  <AlertCircle size={13} />
                  <span>{errors.preferredTime}</span>
                </div>
              )}
            </div>

          </div>

          {/* Field: Message / Symptoms */}
          <div className="form-group mt-1">
            <label htmlFor="message" className="form-label">
              Brief Symptoms or Reason for Visit (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="e.g. Experiencing mild blurriness in left eye during evening driving, or routine annual checkup."
              className="form-textarea"
            />
          </div>

          {/* Form Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-gray-500 flex items-center gap-1.5">
              <Info size={14} className="text-[#142F80]" />
              <span>We respect your medical privacy. No spam guarantee.</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary btn-lg w-full sm:w-auto shadow-md hover:shadow-orange"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Validating Request...</span>
                </>
              ) : (
                <>
                  <Calendar size={18} />
                  <span>Confirm Appointment Request</span>
                </>
              )}
            </button>
          </div>

        </form>
      )}

    </div>
  );
}

