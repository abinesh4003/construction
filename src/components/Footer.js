'use client';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin, ArrowRight, Star, Building2 } from 'lucide-react';
import { useDialog } from './DialogProvider';

const LuxuryFooter = () => {
  const { openDialog } = useDialog();
  
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "About Us", href: "#portfolio" },
        { name: "Our Services", href: "#service" },
        { name: "Projects", href: "#service" },
        { name: "Testimonials", href: "#reviews" },
      ]
    },
    {
      title: "Our Services",
      links: [
        { name: "Luxury Homes", href: "#", onclick: "openDialog" },
        { name: "Villas", href: "#", onclick: "openDialog" },
        { name: "Commercial Spaces", href: "#", onclick: "openDialog" },
        { name: "Renovation", href: "#", onclick: "openDialog" },
        { name: "Interior Design", href: "#", onclick: "openDialog" },
      ]
    }
  ];

  const socialIcons = [
    { icon: Facebook, href: "#", color: "hover:text-blue-400" },
    { icon: Instagram, href: "#", color: "hover:text-pink-400" },
    { icon: Twitter, href: "#", color: "hover:text-blue-300" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-500" }
  ];

  const contactInfo = [
    { 
      icon: MapPin, 
      text: "Thalavaipuram Main Road, Near Beski Auditorium, Simon Nagar, Nagercoil, Tamil Nadu, 629004",
      href: "https://www.google.com/maps/place/Varghese+Construction/@8.1744989,77.4170643,17z/data=!3m1!4b1!4m5!3m4!1s0x3b04f18b6b099351:0x354f907f00a899e7!8m2!3d8.1744989!4d77.4170643"
    },
    { icon: Phone, text: "+91 9629695979", href: "tel:+919629695979" },
    { icon: Mail, text: "contact@vargheseconstruction.com", href: "mailto:contact@vargheseconstruction.com" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Sitemap", href: "#" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-20 pb-8 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-500"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-amber-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-orange-500/10 rounded-full blur-xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Logo Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl shadow-lg">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-montserrat uppercase tracking-wider text-white">
                  Varghese
                </span>
                <span className="text-xs font-montserrat font-semibold uppercase tracking-[0.3em] text-amber-400 mt-1">
                  Construction
                </span>
              </div>
            </motion.div>

            {/* Trust Badge */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-gray-300">
                Trusted by 200+ clients for premium construction services
              </p>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3">
              {socialIcons.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={index}
                    href={item.href}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className={`p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-gray-400 ${item.color} transition-all duration-300 hover:bg-white/10 hover:border-white/20`}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-bold text-white relative pb-3 after:absolute after:left-0 after:bottom-0 after:w-16 after:h-0.5 after:bg-gradient-to-r after:from-amber-500 after:to-orange-500">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <motion.a
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.2 }}
                      href={link.href}
                      className="flex items-center text-gray-300 hover:text-white group transition-all duration-300 py-2"
                      onClick={link.onclick ? openDialog : null}
                    >
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="relative">
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-white relative pb-3 after:absolute after:left-0 after:bottom-0 after:w-16 after:h-0.5 after:bg-gradient-to-r after:from-amber-500 after:to-orange-500">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start group"
                  >
                    <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <a 
                      href={item.href} 
                      className="text-gray-300 hover:text-white transition-colors duration-300 group-hover:translate-x-1 transform"
                    >
                      {item.icon === MapPin ? (
                        <div className="space-y-1">
                          <p className="font-semibold text-white">Varghese Construction</p>
                          <p className="text-sm leading-relaxed">{item.text}</p>
                        </div>
                      ) : (
                        <span className="font-medium">{item.text}</span>
                      )}
                    </a>
                  </motion.li>
                );
              })}
            </ul>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openDialog}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        {/* Premium Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative my-12"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <Building2 className="w-6 h-6 text-white" />
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Varghese Construction. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-amber-400">
              <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
              <span className="text-sm">Building Dreams Since 2010</span>
            </div>
          </div>
          
          <div className="flex space-x-8">
            {legalLinks.map((link, index) => (
              <motion.a
                key={index}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                href={link.href}
                className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quality Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-8 pt-6 border-t border-white/5"
        >
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            ISO 9001:2015 Certified • Premium Construction Services
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default LuxuryFooter;