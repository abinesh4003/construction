'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function BankingPartners() {
  const partners = [
    { name: "Bajaj Finserv", logo: "/bank-logos/bajaj.jpg" },
    { name: "ICICI", logo: "/bank-logos/icici.png" },
    { name: "Godrej Housing Finance", logo: "/bank-logos/godrej.png" },
    { name: "HDFC Home Loans", logo: "/bank-logos/hdfc.png" },
    { name: "Housing.com", logo: "/bank-logos/housing.png" },
    { name: "SBI Home Loans", logo: "/bank-logos/sbi.png" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-amber-500 mb-4 font-montserrat">
          Our Banking Partners
        </h2>
        <p className="text-gray-600 mb-12 inter max-w-2xl mx-auto">
          We collaborate with top banks to offer flexible and trusted financial solutions for your projects.
        </p>

        {/* Partner Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              className="relative w-full h-24 md:h-28 rounded-2xl bg-white/30 backdrop-blur-lg flex items-center justify-center p-4 shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 120px, 150px"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Optional luxury accent */}
      <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-amber-100 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-10 right-0 w-24 h-24 rounded-full bg-amber-200 opacity-20 blur-3xl"></div>
    </section>
  );
}
