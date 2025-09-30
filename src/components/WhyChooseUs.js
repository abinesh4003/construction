'use client';

import { motion } from 'framer-motion';
import { Clock, BadgeDollarSign, ShieldCheck, BadgeCheck, Cpu, Award } from 'lucide-react';
import Image from 'next/image';

export default function WhyChooseConstruction() {
  const features = [
    { title: 'Timely Completion', description: '90% of projects delivered ahead of schedule', icon: Clock },
    { title: 'Cost Transparency', description: 'Fixed-price contracts with no hidden fees', icon: BadgeDollarSign },
    { title: 'Safety First', description: 'Zero accidents in the past 3 years', icon: ShieldCheck },
    { title: 'Quality Assurance', description: '5-year warranty on all structural work', icon: BadgeCheck },
    { title: 'Modern Methods', description: 'BIM technology for precision planning', icon: Cpu },
    { title: 'Industry Recognition', description: '2023 Best Commercial Builder Award', icon: Award },
  ];

  return (
    <section className="relative w-full py-20 px-6 lg:px-20 text-gray-900">
      {/* Background with light interior image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/whyus/banner.jpg" // luxury light background
          alt="Luxury interior background"
          fill
          className="object-cover"
          priority
        />
        {/* no dark overlay, keep light airy look */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl montserrat font-bold tracking-tight">
            <span className="kaushan-script-regular text-amber-600">Why Choose</span>{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
              Our Construction
            </span>
          </h2>
          <p className="mt-4 text-lg inter text-gray-700 max-w-2xl mx-auto">
            Discover why clients trust us to deliver exceptional construction projects with quality, safety, and innovation.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-gray-200/40 bg-white/60 backdrop-blur-md p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-tr from-amber-400 to-amber-200 text-black shadow-inner group-hover:scale-110 transition-transform">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl montserrat font-semibold text-gray-900">{f.title}</h3>
                <p className="text-sm inter text-gray-600">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-white/70 backdrop-blur-xl border border-gray-200/40 shadow-xl px-8 py-12 flex flex-col lg:flex-row items-center justify-between"
        >
          <div>
            <h3 className="text-2xl lg:text-3xl montserrat font-bold text-gray-900">
              Get Free Consultations
            </h3>
            <p className="mt-2 inter text-gray-700 max-w-lg">
              Talk to our experts today and get a custom plan & estimate for your project.
            </p>
          </div>
          <a
            href="#contact"
            className="mt-6 lg:mt-0 inline-block px-8 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-300 text-black montserrat font-semibold shadow-lg hover:scale-105 transform transition"
          >
            Book Now →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
