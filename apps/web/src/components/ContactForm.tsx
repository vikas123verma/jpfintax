import React, { useState } from 'react';
import { ContactFormData } from '@jpfintax/types';
import { contactService } from '../lib/api/contactService';
import { Button } from './Button';
import { CheckCircle2, AlertCircle, Send } from 'lucide-react';
import { SERVICES_DATA } from '../data/services';

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  serviceRequired?: string;
  message?: string;
}

interface ContactFormProps {
  defaultService?: string;
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ defaultService = '', className = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceRequired: defaultService,
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<{
    referenceId?: string;
    message: string;
  } | null>(null);
  const [generalError, setGeneralError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailPattern.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    const cleanPhone = formData.phone.replace(/[\s-+()]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your contact phone number.';
    } else if (!/^\d{10,12}$/.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    if (!formData.serviceRequired) {
      newErrors.serviceRequired = 'Please select a service.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide brief details about your inquiry.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (generalError) {
      setGeneralError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setGeneralError(null);

    try {
      const response = await contactService.submitContactForm(formData);
      if (response.success) {
        setSubmissionSuccess({
          referenceId: response.referenceId,
          message: response.message,
        });
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          serviceRequired: defaultService,
          message: '',
        });
      } else {
        setGeneralError(response.message || 'Something went wrong. Please try again.');
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unable to submit right now. Please call us directly.';
      setGeneralError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submissionSuccess) {
    return (
      <div className="bg-white border border-[#DDE4E0] rounded-xl p-8 sm:p-10 text-center shadow-card">
        <div className="w-16 h-16 bg-[#F0F6F3] text-[#0F4D3A] rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl font-heading font-medium text-[#17201D] mb-3">
          Inquiry Received Successfully
        </h3>
        <p className="text-[#66736D] leading-relaxed max-w-md mx-auto mb-6 text-sm">
          {submissionSuccess.message}
        </p>
        {submissionSuccess.referenceId && (
          <div className="inline-block bg-[#F7F8F6] border border-[#DDE4E0] px-4 py-2 rounded-md mb-8">
            <span className="text-xs text-[#66736D] uppercase tracking-wider block">Reference Number</span>
            <span className="text-base font-mono font-semibold text-[#0F4D3A]">{submissionSuccess.referenceId}</span>
          </div>
        )}
        <div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSubmissionSuccess(null)}
          >
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`bg-white border border-[#DDE4E0] rounded-xl p-6 sm:p-8 md:p-10 shadow-card ${className}`}
    >
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-heading font-medium text-[#17201D]">
          Request a Consultation
        </h3>
        <p className="text-sm text-[#66736D] mt-1">
          Provide your details below and a qualified advisor will review your requirements.
        </p>
      </div>

      {generalError && (
        <div className="mb-6 p-4 rounded-md bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <span>{generalError}</span>
        </div>
      )}

      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-[#1C2421] mb-1.5">
            Full Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Ramesh Sharma"
            className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-[#1C2421] bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#0F4D3A] focus:border-transparent ${
              errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-[#DDE4E0] hover:border-[#BFDACD]'
            }`}
          />
          {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
        </div>

        {/* Email & Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#1C2421] mb-1.5">
              Email Address <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. ramesh@example.com"
              className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-[#1C2421] bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#0F4D3A] focus:border-transparent ${
                errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#DDE4E0] hover:border-[#BFDACD]'
              }`}
            />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#1C2421] mb-1.5">
              Phone Number <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 9876543210"
              className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-[#1C2421] bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#0F4D3A] focus:border-transparent ${
                errors.phone ? 'border-red-400 bg-red-50/20' : 'border-[#DDE4E0] hover:border-[#BFDACD]'
              }`}
            />
            {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
          </div>
        </div>

        {/* Service Required */}
        <div>
          <label htmlFor="serviceRequired" className="block text-xs font-semibold uppercase tracking-wider text-[#1C2421] mb-1.5">
            Service Required <span className="text-red-600">*</span>
          </label>
          <select
            id="serviceRequired"
            name="serviceRequired"
            value={formData.serviceRequired}
            onChange={handleChange}
            className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-[#1C2421] bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#0F4D3A] focus:border-transparent ${
              errors.serviceRequired ? 'border-red-400 bg-red-50/20' : 'border-[#DDE4E0] hover:border-[#BFDACD]'
            }`}
          >
            <option value="">-- Please select a service --</option>
            {SERVICES_DATA.map((srv) => (
              <option key={srv.slug} value={srv.title}>
                {srv.title}
              </option>
            ))}
            <option value="General Tax Consultation">General Tax Consultation</option>
            <option value="Other Financial Inquiry">Other Financial Inquiry</option>
          </select>
          {errors.serviceRequired && <p className="mt-1 text-xs text-red-600">{errors.serviceRequired}</p>}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#1C2421] mb-1.5">
            Brief Requirement / Message <span className="text-red-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your business or tax inquiry..."
            className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-[#1C2421] bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#0F4D3A] focus:border-transparent resize-y ${
              errors.message ? 'border-red-400 bg-red-50/20' : 'border-[#DDE4E0] hover:border-[#BFDACD]'
            }`}
          />
          {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
        </div>
      </div>

      <div className="mt-6">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full justify-center gap-2"
          isLoading={isSubmitting}
        >
          <span>Submit Consultation Request</span>
          <Send className="w-4 h-4" />
        </Button>
        <p className="text-[11px] text-[#66736D] text-center mt-3">
          Your information is held in strict professional confidence under Indian tax secrecy standards.
        </p>
      </div>
    </form>
  );
};
