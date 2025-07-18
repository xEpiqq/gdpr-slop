'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    message: '',
    // Opt-in preferences
    marketingOptIn: false,
    productUpdatesOptIn: false,
    phoneContactOptIn: false,
    smsOptIn: false,
    // Opt-out preferences for existing customers
    marketingOptOut: false,
    productUpdatesOptOut: false,
    phoneContactOptOut: false,
    allCommunicationsOptOut: false,
    smsOptOut: false,
    agreeToTerms: false,
    // Customer status
    existingCustomer: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-green-50 p-8 rounded-2xl">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-xl text-gray-600 mb-6">
              Your request for free credits has been received! Our sales team will contact you within 24 hours to get you started.
            </p>
            {(formData.marketingOptOut || formData.productUpdatesOptOut || formData.phoneContactOptOut || formData.smsOptOut || formData.allCommunicationsOptOut) && (
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <p className="text-blue-800 text-sm">
                  <strong>Opt-out requests processed:</strong> Your communication preferences have been updated. 
                  You will receive a confirmation email at {formData.email} within 48 hours.
                </p>
              </div>
            )}
            <p className="text-gray-500 mb-8">
              A confirmation email with your free credits information has been sent to {formData.email}
            </p>
            <Link 
              href="/" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Your Free Credits
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your customer communication? Get started with free credits and connect with our sales team for a personalized consultation.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Personal Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 ${
                        errors.firstName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 ${
                        errors.lastName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                    <p className="text-gray-500 text-xs mt-1">
                      Our sales team will use this number to contact you about your free credits and consultation
                    </p>
                  </div>
                </div>
              </div>

              {/* Company Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Company Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 ${
                        errors.company ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your company name"
                    />
                    {errors.company && (
                      <p className="text-red-500 text-sm mt-1">{errors.company}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                      placeholder="Enter your job title"
                    />
                  </div>
                </div>

                {/* Customer Status */}
                <div className="mt-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="existingCustomer"
                      name="existingCustomer"
                      checked={formData.existingCustomer}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="existingCustomer" className="ml-2 text-sm text-gray-700">
                      I am an existing customer or subscriber
                    </label>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  How can we help you? <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Tell us about your business and how you'd like to use your free credits..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* GDPR Consent Options */}
              <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Communication Preferences (GDPR Compliant)</h2>
                <p className="text-gray-600 mb-6">
                  In compliance with GDPR, please specify how you'd like us to communicate with you. 
                  You can update these preferences at any time.
                </p>

                {/* Opt-In Section for New Customers */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">✅ Opt-In Preferences (New Communications)</h3>
                  <p className="text-sm text-gray-600 mb-4">Select the communications you would like to receive:</p>
                  
                  <div className="space-y-4 pl-4">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="marketingOptIn"
                        name="marketingOptIn"
                        checked={formData.marketingOptIn}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="marketingOptIn" className="ml-3 text-sm text-gray-700">
                        <strong>Marketing Communications:</strong> I consent to receive marketing emails about 
                        Contacted AI products, services, and industry insights. You can unsubscribe at any time.
                      </label>
                    </div>

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="productUpdatesOptIn"
                        name="productUpdatesOptIn"
                        checked={formData.productUpdatesOptIn}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="productUpdatesOptIn" className="ml-3 text-sm text-gray-700">
                        <strong>Product Updates:</strong> I would like to receive notifications about 
                        new features, updates, and important service announcements.
                      </label>
                    </div>

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="phoneContactOptIn"
                        name="phoneContactOptIn"
                        checked={formData.phoneContactOptIn}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="phoneContactOptIn" className="ml-3 text-sm text-gray-700">
                        <strong>Phone Contact:</strong> I consent to be contacted by phone for sales consultations, 
                        support, and account-related matters using the toll-free number provided.
                      </label>
                    </div>

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="smsOptIn"
                        name="smsOptIn"
                        checked={formData.smsOptIn}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="smsOptIn" className="ml-3 text-sm text-gray-700">
                        <strong>SMS/Text Messages:</strong> By submitting this form, 
                        I agree to receive SMS/text messages from Contacted AI at the phone number provided 
                        regarding my free credits, consultation scheduling, and sales communications. 
                        Message and data rates may apply. Text STOP to opt out at any time.
                      </label>
                    </div>
                  </div>
                </div>

                {/* Opt-Out Section for Existing Customers */}
                <div className="mb-8 border-t border-gray-300 pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🚫 Opt-Out Preferences (Stop Existing Communications)</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    If you're already receiving communications from us and want to stop specific types:
                  </p>
                  
                  <div className="space-y-4 pl-4">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="allCommunicationsOptOut"
                        name="allCommunicationsOptOut"
                        checked={formData.allCommunicationsOptOut}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                      />
                      <label htmlFor="allCommunicationsOptOut" className="ml-3 text-sm text-gray-700">
                        <strong>Unsubscribe from ALL communications:</strong> Stop all marketing emails, 
                        product updates, and promotional phone calls. (Service-related communications may still be sent)
                      </label>
                    </div>

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="marketingOptOut"
                        name="marketingOptOut"
                        checked={formData.marketingOptOut}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                      />
                      <label htmlFor="marketingOptOut" className="ml-3 text-sm text-gray-700">
                        <strong>Stop Marketing Emails:</strong> Unsubscribe from marketing communications, 
                        promotions, and industry insights.
                      </label>
                    </div>

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="productUpdatesOptOut"
                        name="productUpdatesOptOut"
                        checked={formData.productUpdatesOptOut}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                      />
                      <label htmlFor="productUpdatesOptOut" className="ml-3 text-sm text-gray-700">
                        <strong>Stop Product Updates:</strong> Unsubscribe from product update notifications 
                        and feature announcements.
                      </label>
                    </div>

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="phoneContactOptOut"
                        name="phoneContactOptOut"
                        checked={formData.phoneContactOptOut}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                      />
                      <label htmlFor="phoneContactOptOut" className="ml-3 text-sm text-gray-700">
                        <strong>Stop Marketing Calls:</strong> Remove my number from marketing and 
                        sales call lists. (Support calls may still be made for service issues)
                      </label>
                    </div>

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="smsOptOut"
                        name="smsOptOut"
                        checked={formData.smsOptOut}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                      />
                      <label htmlFor="smsOptOut" className="ml-3 text-sm text-gray-700">
                        <strong>Stop SMS/Text Messages:</strong> Unsubscribe from all SMS/text messages 
                        including promotional offers and updates. (Critical service notifications may still be sent)
                      </label>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Your Data Rights (GDPR)</h4>
                  <p className="text-sm text-gray-600">
                    You have the right to access, rectify, port, or delete your personal data at any time. 
                    To exercise these rights or manage your communication preferences, contact us at{' '}
                    <Link href="mailto:privacy@contactedai.com" className="text-blue-600 hover:underline">
                      privacy@contactedai.com
                    </Link>{' '}
                    or use our{' '}
                    <Link href="/privacy-preferences" className="text-blue-600 hover:underline">
                      privacy preference center
                    </Link>.
                  </p>
                </div>

                <div className="p-4 bg-green-50 border border-green-200 rounded-lg mt-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                    How Our Sales Team Will Contact You
                  </h4>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Response Time:</strong> Our sales team will contact you within 24 hours via phone or SMS 
                    to discuss your free credits and schedule your consultation.
                  </p>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Example Contact:</strong> "Hi {formData.firstName || '[Your Name]'}, this is [Sales Rep] with Contacted AI. 
                    Thank you for your interest! I have your free credits ready and would love to show you how our AI 
                    can transform your customer communication..."
                  </p>
                  <p className="text-sm text-gray-600">
                    Your contact information helps us provide personalized service and ensure you get the most 
                    value from your free credits and consultation.
                  </p>
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="mb-8">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className={`mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ${
                      errors.agreeToTerms ? 'border-red-500' : ''
                    }`}
                  />
                  <label htmlFor="agreeToTerms" className="ml-3 text-sm text-gray-700">
                    <span className="text-red-500">*</span> I agree to the{' '}
                    <Link href="/terms-of-service" className="text-blue-600 hover:underline">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </Link>{' '}
                    of Scavenger AI LLC (doing business as Contacted AI).
                  </label>
                </div>
                {errors.agreeToTerms && (
                  <p className="text-red-500 text-sm mt-2 ml-7">{errors.agreeToTerms}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Processing Request...' : 'Get My Free Credits'}
                </button>
              </div>

              <div className="text-center space-y-2">
                <p className="text-sm text-gray-500">
                  This form is processed securely and in compliance with GDPR regulations.
                </p>
                <p className="text-xs text-gray-400">
                  Opt-out requests are processed within 48 hours. Opt-in preferences take effect immediately.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Ways to Reach Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">Get help from our support team</p>
              <Link href="mailto:support@contactedai.com" className="text-blue-600 hover:underline">
                support@contactedai.com
              </Link>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4">Toll-free number for verified customers</p>
              <p className="text-blue-600 font-semibold">1-800-CONTACT</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Available Monday-Friday, 9 AM - 6 PM EST</p>
              <button className="text-blue-600 hover:underline">
                Start Chat
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 