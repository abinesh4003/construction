'use client';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { ArrowRight, Home, Building2, Users, Palette, ChevronDown } from 'lucide-react';
import { showToast } from '@/components/ui/toast';

const countryList = [
  { code: '+91', flag: '🇮🇳', name: 'India' },
  { code: '+1', flag: '🇺🇸', name: 'United States' },
  { code: '+44', flag: '🇬🇧', name: 'United Kingdom' },
  { code: '+971', flag: '🇦🇪', name: 'United Arab Emirates' },
  { code: '+61', flag: '🇦🇺', name: 'Australia' },
];

const projectTypes = [
  { icon: Home, label: 'Residential', value: 'residential' },
  { icon: Building2, label: 'Commercial', value: 'commercial' },
  { icon: Users, label: 'Renovation', value: 'renovation' },
  { icon: Palette, label: 'Interior Design', value: 'interior' },
];

const PhoneInput = ({ value, onChange, className = '', error }) => {
  const [countryCode, setCountryCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (value) {
      if (value.startsWith('+')) {
        const code = countryList.find(c => value.startsWith(c.code))?.code || '+91';
        const number = value.replace(code, '');
        setCountryCode(code);
        setPhoneNumber(number);
      } else {
        setPhoneNumber(value);
      }
    }
  }, [value]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handlePhoneChange = (e) => {
    const num = e.target.value.replace(/\D/g, '');
    setPhoneNumber(num);
    onChange(`${countryCode}${num}`);
  };

  const filteredCountries = countryList.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.code.includes(search)
  );

  return (
    <div className={`flex ${className}`}>
      <div ref={wrapperRef} className="relative">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={`px-3 py-3 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-l-lg bg-gray-50 flex items-center gap-2 hover:bg-gray-100 transition-colors font-inter`}
        >
          <span className="text-lg">{countryList.find(c => c.code === countryCode)?.flag}</span>
          <span className="text-gray-700 text-sm">{countryCode}</span>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </button>

        {open && (
          <div className="absolute z-10 bg-white border border-gray-200 shadow-lg rounded-lg mt-1 w-56 max-h-60 overflow-y-auto">
            <div className="p-2 sticky top-0 bg-white border-b border-gray-200">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search country..."
                className="w-full px-2 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 font-inter"
                autoFocus
              />
            </div>
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <div
                  key={country.code}
                  onClick={() => {
                    setCountryCode(country.code);
                    onChange(`${country.code}${phoneNumber}`);
                    setOpen(false);
                    setSearch('');
                  }}
                  className="px-3 py-2 flex items-center gap-2 hover:bg-amber-50 cursor-pointer text-sm font-inter"
                >
                  <span className="text-lg">{country.flag}</span>
                  <span className="flex-1 text-gray-900">{country.name}</span>
                  <span className="text-gray-500">{country.code}</span>
                </div>
              ))
            ) : (
              <div className="px-3 py-2 text-sm text-gray-500 text-center font-inter">No countries found</div>
            )}
          </div>
        )}
      </div>

      <input
        type="tel"
        value={phoneNumber}
        onChange={handlePhoneChange}
        className={`flex-1 px-4 py-3 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-r-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors font-inter`}
        placeholder="9876543210"
        required
      />
    </div>
  );
};

const LuxuryContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    else {
      const digitsOnly = formData.phone.replace(/\D/g, '');
      if (digitsOnly.length < 7) newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.projectType) newErrors.projectType = 'Please select a project type';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      showToast('error', 'Please fill in all required fields');
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!response.ok) throw new Error('Failed to send message');
      setFormData({ name: '', phone: '', email: '', projectType: '', message: '' });
      setErrors({});
      showToast('success', 'Your consultation request has been sent successfully!');
    } catch {
      showToast('error', 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handlePhoneChange = (phoneWithCode) => {
    setFormData(prev => ({ ...prev, phone: phoneWithCode }));
    if (errors.phone) setErrors(prev => ({ ...prev, phone: '' }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-kaushan-script-regular text-amber-500 mb-3">
            Start Your Project
          </h2>
          <p className="text-gray-700 font-inter">
            Get in touch for a free consultation about your construction project
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-barlow-condensed text-gray-900 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } font-inter`}
                placeholder="Your full name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-600 font-inter">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-barlow-condensed text-gray-900 mb-2">
                Phone Number *
              </label>
              <PhoneInput
                value={formData.phone}
                onChange={handlePhoneChange}
                error={errors.phone}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600 font-inter">{errors.phone}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-barlow-condensed text-gray-900 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors font-inter"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Project Type */}
          <div>
            <label className="block text-sm font-barlow-condensed text-gray-900 mb-3">
              Project Type *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {projectTypes.map((type) => {
                const Icon = type.icon;
                const isSelected = formData.projectType === type.value;
                return (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => {
                      setFormData(prev => ({ ...prev, projectType: type.value }));
                      if (errors.projectType) setErrors(prev => ({ ...prev, projectType: '' }));
                    }}
                    className={`p-4 border-2 rounded-lg text-center transition-all font-inter ${
                      isSelected
                        ? 'border-amber-500 bg-amber-50 text-amber-700'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    <Icon className={`w-6 h-6 mx-auto mb-2 ${isSelected ? 'text-amber-500' : 'text-gray-500'}`} />
                    <div className="text-sm font-medium">{type.label}</div>
                  </button>
                );
              })}
            </div>
            {errors.projectType && <p className="mt-1 text-sm text-red-600 font-inter">{errors.projectType}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-barlow-condensed text-gray-900 mb-2">
              Project Details
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-none font-inter"
              placeholder="Tell us about your project requirements, timeline, and any specific details..."
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-barlow-condensed py-4 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>
            <p className="text-xs text-gray-500 text-center mt-3 font-inter">
             We&apos;ll contact you within 24 hours to discuss your project details.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LuxuryContactForm;