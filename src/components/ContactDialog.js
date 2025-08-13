'use client';
import { useState } from 'react';
import { X, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactDialog = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+91 12345 67890",
      action: "tel:+911234567890"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "contact@varghese.com",
      action: "mailto:contact@varghese.com"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "123 Avenue, Premium District"
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl shadow-2xl w-full max-w-4xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Form Section */}
              <div className="p-8 md:p-12">
                <div className="flex justify-between items-start mb-8">
                  <h2 className="text-2xl font-light">
                    <span className="font-serif italic">Start</span> Your Project
                  </h2>
                  <button 
                    onClick={onClose}
                    className="text-gray-400 hover:text-[#F05A29] transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#F05A29] focus:border-[#F05A29]"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#F05A29] focus:border-[#F05A29]"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#F05A29] focus:border-[#F05A29]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Type*
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#F05A29] focus:border-[#F05A29]"
                      required
                    >
                      <option value="">Select project type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="renovation">Renovation</option>
                      <option value="interior">Interior Design</option>
                    </select>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#F05A29] focus:border-[#F05A29]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-[#F05A29] hover:bg-[#e04a20] text-white font-medium rounded-sm transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    Submit Request
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </form>
              </div>

              {/* Contact Info Section */}
              <div className="bg-gray-50 p-8 md:p-12 border-l border-gray-200">
                <h3 className="text-xl font-light mb-6">
                  <span className="font-serif italic">Other</span> Ways to Connect
                </h3>
                
                <div className="space-y-6">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    return (
                      <div key={index} className="flex items-start">
                        <div className="bg-[#F05A29]/10 p-3 rounded-full mr-4">
                          <Icon className="h-5 w-5 text-[#F05A29]" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{method.title}</h4>
                          {method.action ? (
                            <a 
                              href={method.action} 
                              className="text-gray-600 hover:text-[#F05A29] transition-colors"
                            >
                              {method.info}
                            </a>
                          ) : (
                            <p className="text-gray-600">{method.info}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-4">Our Commitment</h4>
                  <p className="text-gray-600 text-sm">
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