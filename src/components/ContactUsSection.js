'use client';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import LuxuryContactForm from './ContactForm';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Office',
      details: 'Varghese Construction, Thalavaipuram Main Road, Nagercoil'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 96296 95979'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'contact@vargheseconstruction.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Sat: 9AM - 7PM'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
  Let&apos;s Build Together
</h2>
          <p className="text-lg font-inter text-gray-700 max-w-2xl mx-auto">
            Get in touch with our team to discuss your constr uction project and get started today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="p-2 bg-amber-100 rounded-lg">
                    <Icon className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-barlow-condensed text-gray-900 mb-1">{item.title}</h3>
                    <p className="font-inter text-gray-600 text-sm">{item.details}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="rounded-lg overflow-hidden shadow-sm border border-gray-100"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.3405481714053!2d77.41666150000002!3d8.168404299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f18b6b099351%3A0x354f907f00a899e7!2sVARGHESE%20CONSTRUCTION!5e0!3m2!1sen!2sin!4v1755162094198!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <LuxuryContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
