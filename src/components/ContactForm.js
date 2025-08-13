'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import PhoneInput from './PhoneInput';
import { ArrowRight } from 'lucide-react';

const LuxuryContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    timeframe: 'immediately',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
          className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#F05A29] focus:border-[#F05A29]"
          placeholder="John Doe"
          required
        />
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
        <PhoneInput
          value={formData.phone}
          onChange={(value) => setFormData(prev => ({ ...prev, phone: value }))}
          className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#F05A29] focus:border-[#F05A29]"
        />
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
          className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#F05A29] focus:border-[#F05A29]"
          placeholder="Enter your location"
          required
        />
      </motion.div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700 mb-2">
          Project Start Timeline*
        </label>
        <select
          id="timeframe"
          name="timeframe"
          value={formData.timeframe}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#F05A29] focus:border-[#F05A29]"
          required
        >
          <option value="immediately">Immediately</option>
          <option value="within-3-months">Within 3 Months</option>
          <option value="within-6-months">Within 6 Months</option>
          <option value="after-6-months">After 6 Months</option>
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
          className="w-full py-4 px-6 bg-[#F05A29] hover:bg-[#e04a20] text-white font-medium rounded-sm transition-colors duration-300 flex items-center justify-center gap-2"
        >
          Request Free Consultation
          <ArrowRight className="h-5 w-5" />
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