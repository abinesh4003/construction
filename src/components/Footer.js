'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin, ArrowRight, Star, Building2 } from 'lucide-react';
import { useDialog } from './DialogProvider';
import Image from 'next/image';
import Link from 'next/link';
// Client-only year component to prevent hydration errors
const CurrentYear = () => {
  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  if (!year) return null;

  return <>{year}</>;
};

const LuxuryFooter = () => {
  const { openDialog } = useDialog();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "About Us", href: "/portfolio" },
        { name: "Our Services", href: "/service" },
        { name: "Projects", href: "/service" },
        { name: "Testimonials", href: "/reviews" },
      ]
    },
    {
      title: "Our Services",
      links: [
        { name: "Luxury Homes", href: "#", onClick: openDialog },
        { name: "Villas", href: "#", onClick: openDialog },
        { name: "Commercial Spaces", href: "#", onClick: openDialog },
        { name: "Renovation", href: "#", onClick: openDialog },
        { name: "Interior Design", href: "#", onClick: openDialog },
      ]
    }
  ];

  const socialIcons = [
    { icon: Facebook, href: "#", color: "hover:text-blue-500" },
    { icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-600" }
  ];

  const contactInfo = [
    { 
      icon: MapPin, 
      text: "Thalavaipuram Main Road, Near Beski Auditorium, Simon Nagar, Nagercoil, Tamil Nadu, 629004",
      href: "https://www.google.com/maps"
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
    <footer className="relative bg-gray-900 text-white pt-16 pb-12 px-6 overflow-hidden font-inter">
      {/* Background Overlays */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute top-10 right-10 w-40 h-40 bg-[#F5B041]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-28 h-28 bg-[#FFD580]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image
                src="/logo1.png"
                alt="Varghese Construction Logo"
                width={120}
                height={40}
                className='w-auto h-12'
              />
            </div>

            {/* Trust Stars */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm font-inter text-gray-300">
                Trusted by 200+ clients for premium construction services
              </p>
            </div>

            {/* Social Icons */}
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
                    className={`p-3 bg-white/10 rounded-xl border border-white/20 text-gray-300 ${item.color} hover:bg-white/20 hover:border-white/30 transition-all duration-300`}
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
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-6"
            >
             <span className="text-xl font-bold font-montserrat text-[#FFD580] relative pb-2 border-b border-yellow-500">
  {section.title}
</span>

              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      onClick={link.onClick}
                      className="text-gray-300 hover:text-white font-inter transition-colors duration-300 flex items-center gap-2"
                    >
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold font-montserrat text-[#FFD580] relative pb-2 border-b border-yellow-500">Get In Touch</h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={i} className="flex items-start gap-3">
                    <div className="p-2 bg-gradient-to-r from-[#F5B041] to-[#FFD580] rounded-lg shadow-lg">
                      <Icon className="w-5 h-5 text-gray-900" />
                    </div>
                    <a href={item.href} className="text-gray-300 hover:text-white font-inter transition-colors duration-300">
                      {item.text}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openDialog}
              className="w-full bg-gradient-to-r from-[#F5B041] to-[#FFD580] text-gray-900 font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-12 relative">
          <div className="absolute left-1/2 -top-6 transform -translate-x-1/2">
            <div className="w-16 h-16 bg-gradient-to-r from-[#F5B041] to-[#FFD580] rounded-full flex items-center justify-center shadow-lg">
              <Building2 className="w-6 h-6 text-gray-900" />
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-300 text-sm font-inter">
          <p>&copy; <CurrentYear /> Varghese Construction. All rights reserved.</p>
          <p className="text-[#FFD580] font-montserrat">Building Dreams Since 2010</p>
          <div className="flex gap-4">
            {legalLinks.map((link, i) => (
              <a key={i} href={link.href} className="hover:text-[#FFD580] transition-colors">{link.name}</a>
            ))}
          </div>
        </div>

        {/* ISO Badge */}
        <p className="text-xs text-gray-500 uppercase tracking-widest mt-6 text-center font-inter">
          ISO 9001:2015 Certified • Premium Construction Services
        </p>
      </div>
    </footer>
  );
};

export default LuxuryFooter;
