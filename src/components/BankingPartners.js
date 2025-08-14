"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const banks = [
  { name: "Bajaj Finserv", logo: "/bank-logos/bajaj.jpg" },
  { name: "ICICI", logo: "/bank-logos/icici.png" },
  { name: "Godrej Housing Finance", logo: "/bank-logos/godrej.png" },
  { name: "HDFC Home Loans", logo: "/bank-logos/hdfc.png" },
  { name: "Housing.com", logo: "/bank-logos/housing.png" },
  { name: "SBI Home Loans", logo: "/bank-logos/sbi.png" },
];

export default function BankingPartners() {
  return (
    <section className="py-16 bg-gray-50" id="partners">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-3"
        >
          <span className="block text-[#F05A29] px-4 py-2  text-sm font-medium mb-6 tracking-wider">
          PARTNERS
          </span>
          Our Banking Partners
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 mb-10 max-w-2xl mx-auto"
        >
          Helping customers get easy access to loans for building construction.
        </motion.p>

        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {banks.map((bank, index) => (
            <motion.div
              key={bank.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-4 rounded-lg shadow-sm flex justify-center items-center"
            >
              <Image
                src={bank.logo}
                alt={bank.name}
                width={150}
                height={80}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
