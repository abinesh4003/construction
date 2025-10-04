'use client';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import LuxuryContactForm from './ContactForm';
import { usePathname } from 'next/navigation';

export default function ContactSection() {
  const pathname = usePathname();
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Office',
      details: 'Varghese Construction, Thalavaipuram Main Road, Nagercoil',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 96296 95979',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'contact@vargheseconstruction.com',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Sat: 9AM - 7PM',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-10 sm:mb-12"
        >
          {/* Heading for seo */}
          {pathname=="/contact" && (
            <h1 className="sr-only">Contact Varghese Construction Nagercoil Builders</h1>
          ) }
          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Let&apos;s Build Your Dream with Varghese Construction
          </h2>
          <p className="text-base sm:text-lg font-inter text-gray-700 max-w-2xl mx-auto px-2">
            Get in touch with our team to discuss your construction project and get started today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Contact Info */}
          <div className="space-y-5 sm:space-y-6 order-2 lg:order-1">
            {contactInfo.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="p-2 bg-amber-100 rounded-lg">
                    <Icon className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                   <span className="font-barlow-condensed text-gray-900 text-sm sm:text-base mb-1 block">
  {item.title}
</span>

                    <p className="font-inter text-gray-600 text-xs sm:text-sm leading-snug">
                      {item.details}
                    </p>
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
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2 lg:col-span-2">
            <LuxuryContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
