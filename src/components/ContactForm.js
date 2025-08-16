'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { showToast } from '@/components/ui/toast';

const LuxuryContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    timeframe: 'residential',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      showToast('error', 'Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
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
      
      // Reset form on success
      setFormData({
        name: '',
        phone: '',
        location: '',
        timeframe: 'Residential',
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
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Name */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Full Name*
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-sm focus:ring-2 focus:ring-[#F05A29] focus:border-[#F05A29]`}
          placeholder="John Doe"
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
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number*
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-sm focus:ring-2 focus:ring-[#F05A29] focus:border-[#F05A29]`}
          placeholder="Enter your phone number"
          required
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
        )}
      </motion.div>

      {/* Location */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
          Project Location*
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className={`w-full px-4 py-3 border ${errors.location ? 'border-red-500' : 'border-gray-300'} rounded-sm focus:ring-2 focus:ring-[#F05A29] focus:border-[#F05A29]`}
          placeholder="Enter your location"
          required
        />
        {errors.location && (
          <p className="mt-1 text-sm text-red-600">{errors.location}</p>
        )}
      </motion.div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700 mb-2">
         Project Type*
        </label>
        <select
          id="timeframe"
          name="timeframe"
          value={formData.timeframe}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#F05A29] focus:border-[#F05A29]"
          required
        >
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
          <option value="renovation">Renovation</option>
          <option value="interior design">Inerior Design</option>
        </select>
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-6 bg-[#F05A29] hover:bg-[#e04a20] text-white font-medium rounded-sm transition-colors duration-300 flex items-center justify-center gap-2 ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <>
              <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
              <span>Processing...</span>
            </>
          ) : (
            <>
              <span>Request Free Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </>
          )}
        </button>
      </motion.div>

      {/* Privacy */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="text-xs text-gray-500 text-center"
      >
        By submitting this form, you agree to our{' '}
        <a href="/privacy-policy" className="text-[#F05A29] hover:underline">
          Privacy Policy
        </a>
      </motion.p>
    </form>
  );
};

export default LuxuryContactForm;