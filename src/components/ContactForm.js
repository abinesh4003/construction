'use client';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ArrowRight, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { showToast } from '@/components/ui/toast';

const countryList = [
  { code: '+91', flag: '🇮🇳', name: 'India' },
  { code: '+1', flag: '🇺🇸', name: 'United States' },
  { code: '+44', flag: '🇬🇧', name: 'United Kingdom' },
  { code: '+971', flag: '🇦🇪', name: 'United Arab Emirates' },
  { code: '+61', flag: '🇦🇺', name: 'Australia' },
  { code: '+81', flag: '🇯🇵', name: 'Japan' },
  { code: '+49', flag: '🇩🇪', name: 'Germany' },
  { code: '+33', flag: '🇫🇷', name: 'France' },
  { code: '+39', flag: '🇮🇹', name: 'Italy' },
  { code: '+86', flag: '🇨🇳', name: 'China' },
  { code: '+7', flag: '🇷🇺', name: 'Russia' },
  { code: '+55', flag: '🇧🇷', name: 'Brazil' },
  { code: '+27', flag: '🇿🇦', name: 'South Africa' },
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
  if (num.length <= 15) {  // allow max 15 digits
    setPhoneNumber(num);
    onChange(`${countryCode}${num}`);
  }
};

  const filteredCountries = countryList.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.code.includes(search)
  );

  return (
    <div className={`flex ${className}`}>
      <div ref={wrapperRef}  className="relative">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Select country code"
          className={`px-1 py-2.5 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-l-lg bg-gray-100 flex items-center gap-1 hover:bg-gray-200 transition-colors`}
        >
          <span>{countryList.find(c => c.code === countryCode)?.flag}</span>
          <span>{countryCode}</span>
          <ChevronDown className="h-4 w-4 ml-1" />
        </button>

        {open && (
          <div className="absolute z-10 bg-white border border-gray-200 shadow-lg rounded-lg mt-1 w-56 max-h-60 overflow-y-auto">
            <div className="p-2 sticky top-0 bg-white">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search country"
                className=" px-2 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-[#F05A29]/50 focus:border-[#F05A29]"
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
                  className="px-3 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer text-sm"
                >
                  <span className="text-lg">{country.flag}</span>
                  <span className="flex-1">{country.name}</span>
                  <span className="text-gray-500">{country.code}</span>
                </div>
              ))
            ) : (
              <div className="px-3 py-2 text-sm text-gray-500">No countries found</div>
            )}
          </div>
        )}
      </div>

      <input
        type="tel"
        value={phoneNumber}
        onChange={handlePhoneChange}
        className={`w-full px-2 py-2.5 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-r-lg focus:ring-2 focus:ring-[#F05A29]/50 focus:border-[#F05A29] transition-all`}
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
    message: '',
    location: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+91 9629695979",
      action: "tel:+919629695979"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "contact@vargheseconstruction.com",
      action: "mailto:contact@vargheseconstruction.com"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "Thalavaipuram Main Road, Near Beski Auditorium, Simon Nagar, Nagercoil",
      action: "https://www.google.com/maps/search/?api=1&query=Thalavaipuram+Main+Road,+Near+Beski+Auditorium,+Simon+Nagar,+Nagercoil,+Varghese+Construction"
    }
  ];

  const validateForm = () => {
    const newErrors = {};


    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else {
      const digitsOnly = formData.phone.replace(/\D/g, '');
      if (digitsOnly.length < 7) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Project type is required';
    }


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      showToast('error', 'Please fix the errors in the form', 'error');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch (jsonError) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        throw new Error(errorData.error || 'Failed to send message');
      }
      
      const data = await response.json();
      console.log('Email sent successfully:', data);
      sendSMS(formData);

      setFormData({
        name: '',
        phone: '',
        email: '',
        projectType: '',
        message: '',

      });
      setErrors({});

      showToast('success', 'Your consultation request has been sent successfully! We will contact you soon.');
    } catch (error) {
      console.error('Submission error:', error);
      showToast('error', error.message || 'An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handlePhoneChange = (phoneWithCode) => {
    setFormData(prev => ({ ...prev, phone: phoneWithCode }));
    
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: '' }));
    }
  };

    const sendSMS = async (formData) => {
    console.log("Sending SMS with data:", formData);
    const res = await fetch("/api/send-sms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log(data);
    


    const response = await fetch("/api/send-whatsapp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const WhatsAppdata = await response.json();
    console.log(WhatsAppdata);
   
  };

  return (
    <div className="">
      {/* Form Section */}
      <div className="space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-light"
        >
          <span className="font-serif italic">Start</span> Your Project
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-4 w-full" noValidate>
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-[#F05A29]/50 focus:border-[#F05A29] transition-all`}
              placeholder="Enter your full name"
              required
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number*
            </label>
            <PhoneInput 
              value={formData.phone}
              onChange={handlePhoneChange}
              error={errors.phone}
              className='max-w-full'
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-[#F05A29]/50 focus:border-[#F05A29] transition-all`}
              placeholder="your@email.com"
            />
          </motion.div>

          {/* Project Type */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="relative"
          >
            <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
              Project Type*
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 border ${errors.projectType ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-[#F05A29]/50 focus:border-[#F05A29] appearance-none transition-all`}
              required
            >
              <option value="">Select project type</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="renovation">Renovation</option>
              <option value="interior">Interior Design</option>
            </select>
            <ChevronDown className="h-4 w-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            {errors.projectType && (
              <p className="mt-1 text-sm text-red-600">{errors.projectType}</p>
            )}
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Project Details
            </label>
            <textarea
              id="message"
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F05A29]/50 focus:border-[#F05A29] transition-all"
              placeholder="Tell us about your project..."
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 bg-gradient-to-r from-[#F05A29] to-[#FF7D45] hover:from-[#E04A20] hover:to-[#F05A29] text-white font-medium rounded-md transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Submit Request</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </motion.div>
        </form>
      </div>

    </div>
  );
};

export default LuxuryContactForm;