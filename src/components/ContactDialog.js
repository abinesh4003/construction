'use client';
import { useState } from 'react';
import { X, ArrowRight, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { showToast } from '@/components/ui/toast';

const ContactDialog = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation function
 const validateForm = () => {
  const newErrors = {};
  const phoneRegex = /^[0-9]{10}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  // Only validate email if it's provided
  if (formData.email.trim() && !emailRegex.test(formData.email.trim())) {
    newErrors.email = 'Please enter a valid email address';
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
      
      // Reset form on success
      setFormData({
        name: '',
        phone: '',
        email: '',
        projectType: '',
        message: ''
      });
      setErrors({});

      showToast('success', 'Your message has been sent successfully! We will get back to you soon.');
      onClose();
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
      info: "Varghese Construction, Thalavaipuram Main Road, opposite Beski Auditorium, Thalavaipuram, Simon Nagar, Nagercoil, Tamil Nadu 629004",
      action: "https://maps.google.com"
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Form Section */}
              <div className="p-6 sm:p-8 md:p-10">
                <div className="flex justify-between items-start mb-6 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl font-light">
                    <span className="font-serif italic">Start</span> Your Project
                  </h2>
                  <button 
                    onClick={onClose}
                    className="text-gray-400 hover:text-[#F05A29] transition-colors p-1"
                    aria-label="Close dialog"
                  >
                    <X className="h-5 w-5 sm:h-6 sm:w-6" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 sm:py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-[#F05A29]/50 focus:border-[#F05A29] transition-all`}
                      required
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 sm:py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-[#F05A29]/50 focus:border-[#F05A29] transition-all`}
                        required
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 sm:py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-[#F05A29]/50 focus:border-[#F05A29] transition-all`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Type*
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 sm:py-3 border ${errors.projectType ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-[#F05A29]/50 focus:border-[#F05A29] appearance-none transition-all`}
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
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F05A29]/50 focus:border-[#F05A29] transition-all"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 sm:py-4 px-6 bg-gradient-to-r from-[#F05A29] to-[#FF7D45] hover:from-[#E04A20] hover:to-[#F05A29] text-white font-medium rounded-md transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Request</span>
                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Info Section */}
              <div className="bg-gray-50 p-6 sm:p-8 md:p-10 border-t lg:border-t-0 lg:border-l border-gray-200">
                <h3 className="text-xl sm:text-2xl font-light mb-6">
                  <span className="font-serif italic">Other</span> Ways to Connect
                </h3>
                
                <div className="space-y-4 sm:space-y-6">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    return (
                      <div key={index} className="flex items-start group">
                        <div className="bg-[#F05A29]/10 p-2.5 sm:p-3 rounded-full mr-3 sm:mr-4 group-hover:bg-[#F05A29]/20 transition-colors">
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#F05A29] group-hover:scale-110 transition-transform" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm sm:text-base">{method.title}</h4>
                          {method.action ? (
                            <a 
                              href={method.action} 
                              className="text-gray-600 hover:text-[#F05A29] transition-colors text-sm sm:text-base"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {method.info}
                            </a>
                          ) : (
                            <p className="text-gray-600 text-sm sm:text-base">{method.info}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2 sm:mb-4 text-sm sm:text-base">Our Commitment</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    We respect your privacy and guarantee that your information will 
                    only be used to contact you about your project inquiry.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactDialog;