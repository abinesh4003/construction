'use client';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ContactForm from './ContactForm';

const LuxuryContactUsSection = () => {
  const contactCards = [
    {
      icon: MapPin,
      title: "Our Office",
      content: "Varghese Construction,Thalavaipuram Main Road, Near Beski Auditorium,Simon Nagar, Nagercoil,Tamil Nadu, 629004",
      color: "text-emerald-500",
      bgColor: "bg-emerald-50"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 96296 95979\nMon-Sat: 9AM - 7PM",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      link: "tel:+9196296 95979"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "contact@vargheseconstruction.com\nResponse within 24 hours",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      link: "mailto:contact@vargheseconstruction.com"
    },

  ];

  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >

          <h2 className="text-4xl md:text-5xl font-light mb-6">
            <span className="font-serif italic">Connect</span> With Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Reach out to discuss your dream project with our expert consultants
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`p-8 border border-gray-100 hover:shadow-lg transition-all ${card.bgColor}`}
                >
                  <div className="flex items-start">
                    <div className={`p-3 rounded-lg ${card.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">{card.title}</h3>
                      <p className="text-gray-600 whitespace-pre-line">
                        {card.content.split('\n').map((line, i) => (
                          <span key={i}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </p>
                      {card.link && (
                        <a
                          href={card.link}
                          className="mt-3 inline-flex items-center text-sm font-medium text-[#F05A29] hover:underline"
                        >
                          Contact now
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white p-12 border border-gray-100 shadow-lg">
              <h3 className="text-2xl font-light mb-4">
                Schedule a <span className="font-serif italic">Private</span> Consultation
              </h3>
              <p className="text-gray-600 mb-8">
                Complete this form to discuss your luxury construction project with our experts
              </p>
              <ContactForm />
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-gray-100 shadow-lg overflow-hidden"
        >

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.3405481714053!2d77.41666150000002!3d8.168404299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f18b6b099351%3A0x354f907f00a899e7!2sVARGHESE%20CONSTRUCTION!5e0!3m2!1sen!2sin!4v1755162094198!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>

        </motion.div>

      </div>
    </section>
  );
};

export default LuxuryContactUsSection;