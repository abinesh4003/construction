'use client';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import Image from 'next/image';
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
        { name: "Luxury Homes", href: "#",onclick:"openDialog" },
        { name: "Villas", href: "#",onclick:"openDialog" },
        { name: "Commercial Spaces", href: "#",onclick:"openDialog" },
        { name: "Renovation", href: "#",onclick:"openDialog" },
        { name: "Interior Design", href: "#",onclick:"openDialog" },
      ]
    }
  ];

  const socialIcons = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" }
  ];

  const contactInfo = [
    { icon: MapPin, text: "Varghese Construction,Thalavaipuram Main Road, Near Beski Auditorium,Simon Nagar, Nagercoil,Tamil Nadu, 629004" },
    { icon: Phone, text: "+91 9629695979", href: "tel:+919629695979" },
    { icon: Mail, text: "contact@vargheseconstruction.com", href: "mailto:contact@vargheseconstruction.com" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Sitemap", href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-28 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <span className="text-4xl font-serif italic font-medium tracking-tight text-white">
                VARGHESE
              </span>
              <span className="block text-xs tracking-widest text-[#F05A29]">
                CONSTRUCTION
              </span>
            </div>
            
           
            <div className="flex space-x-4">
              {socialIcons.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={index}
                    href={item.href}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-400 hover:text-[#F05A29] transition-colors"
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
            >
              <h4 className="text-lg font-medium mb-6 text-white relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-12 after:h-px after:bg-[#F05A29]">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <motion.a
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      href={link.href}
                      className="flex items-center text-gray-400 hover:text-[#F05A29] transition-colors group"
                      onClick={link.onclick ? openDialog : null}
                    >
                      <ArrowRight className="h-4 w-4 mr-2 text-[#F05A29] opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-medium mb-6 text-white relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-12 after:h-px after:bg-[#F05A29]">
              Contact Us
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
                    className="flex items-start"
                  >
                    <Icon className="h-5 w-5 text-[#F05A29] mr-3 mt-0.5 flex-shrink-0" />
                    {item.href ? (
                      <a href={item.href} className="text-gray-400 hover:text-[#F05A29] transition-colors">
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-gray-400">{item.text}</span>
                    )}
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-gray-800 my-8"
        ></motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Varghese Construction. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {legalLinks.map((link, index) => (
              <motion.a
                key={index}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                href={link.href}
                className="text-gray-500 hover:text-[#F05A29] text-sm transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default LuxuryFooter;