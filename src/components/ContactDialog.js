'use client';
import { useState,useEffect,useRef } from 'react';
import { X, ArrowRight, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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

// PhoneInput component (theme-updated)
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
    if (num.length <= 15) {
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
      <div ref={wrapperRef} className="relative">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={`px-1 py-1.5 border ${error ? 'border-red-500' : 'border-amber-400'} rounded-l-lg bg-amber-50 flex items-center gap-1 hover:bg-amber-100 transition-colors`}
        >
          <span>{countryList.find(c => c.code === countryCode)?.flag}</span>
          <span>{countryCode}</span>
          <ChevronDown className="h-4 w-4 ml-1" />
        </button>

        {open && (
          <div className="absolute z-10 bg-white border border-gray-200 shadow-lg rounded-lg mt-1 w-56 max-h-32 overflow-y-auto">
            <div className="p-2 sticky top-0 bg-white">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search country"
                className="px-2 py-1 border border-gray-300 rounded-md text-sm focus:ring-amber-400 focus:border-amber-400"
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
                  className="px-3 py-1 flex items-center gap-2 hover:bg-amber-50 cursor-pointer text-sm"
                >
                  <span className="text-lg">{country.flag}</span>
                  <span className="flex-1">{country.name}</span>
                  <span className="text-gray-500">{country.code}</span>
                </div>
              ))
            ) : (
              <div className="px-3 py-1 text-sm text-gray-500">No countries found</div>
            )}
          </div>
        )}
      </div>

      <input
        type="tel"
        value={phoneNumber}
        onChange={handlePhoneChange}
        className={`w-full px-2 py-1.5 border ${error ? 'border-red-500' : 'border-amber-400'} rounded-r-lg focus:ring-amber-400 focus:border-amber-400 transition-all`}
        placeholder="9876543210"
        required
        maxLength={15}
      />
    </div>
  );
};


// ContactDialog component with theme colors
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
      info: " Thalavaipuram Main Road, Near Beski Auditorium,Simon Nagar, Nagercoil,Tamil Nadu, 629004",
      action: "https://www.google.com/maps/search/?api=1&query=Thalavaipuram+Main+Road,+Near+Beski+Auditorium,+Simon+Nagar,+Nagercoil,+Varghese+Construction"
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };
  const handlePhoneChange = (phoneWithCode) => {
    setFormData(prev => ({ ...prev, phone: phoneWithCode }));
    if (errors.phone) setErrors(prev => ({ ...prev, phone: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.projectType) newErrors.projectType = 'Project type is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/email', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      });
      if (!res.ok) throw new Error('Failed to send message');
      showToast('success', 'Your message has been sent successfully!');
      onClose();
      setFormData({name:'',phone:'',email:'',projectType:'',message:''});
    } catch (error) {
      showToast('error', error.message || 'Unexpected error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] overflow-y-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Form Section */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                <span className="text-lg sm:text-xl font-semibold text-amber-600 block">
  Start Your Project
</span>

                  <button onClick={onClose} className="text-gray-400 hover:text-amber-500 transition-colors p-1">
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3" noValidate>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-0.5">Full Name*</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border ${errors.name?'border-red-500':'border-amber-400'} rounded-md focus:ring-amber-400 focus:border-amber-400 text-sm`}
                    />
                    {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-0.5">Phone Number*</label>
                    <PhoneInput value={formData.phone} onChange={handlePhoneChange} error={errors.phone}/>
                    {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-0.5">Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className="w-full px-3 py-2 border border-amber-400 rounded-md focus:ring-amber-400 focus:border-amber-400 text-sm"/>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-0.5">Project Type*</label>
                    <select name="projectType" value={formData.projectType} onChange={handleChange} className="w-full px-3 py-2 border border-amber-400 rounded-md focus:ring-amber-400 focus:border-amber-400 text-sm">
                      <option value="">Select project type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="renovation">Renovation</option>
                      <option value="interior">Interior Design</option>
                    </select>
                    {errors.projectType && <p className="text-red-600 text-xs mt-1">{errors.projectType}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-0.5">Project Details</label>
                    <textarea name="message" rows="3" value={formData.message} onChange={handleChange} className="w-full px-3 py-2 border border-amber-400 rounded-md focus:ring-amber-400 focus:border-amber-400 text-sm" placeholder="Tell us about your project..."/>
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-amber-300 text-white rounded-md text-sm font-medium hover:shadow-lg transition-all">
                    {isSubmitting ? "Sending..." : "Submit Request"}
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="bg-amber-50 p-6 border-t lg:border-t-0 lg:border-l border-amber-200">
                <span className="text-lg font-semibold text-amber-600 mb-4 block">
  Other Ways to Connect
</span>

                <div className="space-y-3 text-sm">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    return (
                      <div key={index} className="flex items-start">
                        <div className="bg-amber-100 p-2 rounded-full mr-3">
                          <Icon className="h-4 w-4 text-amber-500"/>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">{method.title}</span>
                          <a href={method.action} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-500 transition-colors">
                            {method.title === "Visit Us" ? <span>{method.info}</span> : method.info}
                          </a>
                        </div>
                      </div>
                    )
                  })}
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
