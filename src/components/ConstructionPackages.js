'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { useDialog } from './DialogProvider';

const packages = [
  {
    name: 'Basic',
    tagline: 'Quality construction essentials with trusted brands',
    price: '₹2190/sqft',
    originalPrice: '₹2490/sqft',
    features: [
      'Steel & cement from reputable brands',
      'Floor tiles up to ₹50/sqft',
      'Standard flush doors/windows',
      'Tractor Emulsion finish',
      'Essential kitchen & bath fittings',
    ],
    brands: ['/brands/sunmic.png', '/brands/dalmia.png', '/brands/cera.png'],
    popular: false,
    savings: 'Save ₹300/sqft',
  },
  {
    name: 'Classic',
    tagline: 'Our most popular package with premium upgrades',
    price: '₹2400/sqft',
    originalPrice: '₹2800/sqft',
    features: [
      'Jindal Steel & premium cement',
      'Floor tiles up to ₹100/sqft',
      'Teak wood doors/windows',
      'Tractor Shyne Emulsion',
      'Stylish kitchen & bath fixtures',
      'Extended warranty coverage',
    ],
    brands: ['/brands/jsw.png', '/brands/dalmia.png', '/brands/hindware.png'],
    popular: true,
    savings: 'Save ₹400/sqft',
  },
  {
    name: 'Premium',
    tagline: 'Elegant living with modern amenities',
    price: '₹2740/sqft',
    originalPrice: '₹3200/sqft',
    features: [
      'High-grade steel & cement',
      'Floor tiles up to ₹140/sqft',
      'Designer teak wood finishes',
      'Apcolite Premium paint',
      'Upgraded kitchen & bath',
      'Smart home readiness',
      'Premium fixtures package',
    ],
    brands: ['/brands/ultratech.png', '/brands/asianpaints.png', '/brands/jaquar.png'],
    popular: false,
    savings: 'Save ₹460/sqft',
  },
  {
    name: 'Royal',
    tagline: 'Ultimate luxury with high-end specifications',
    price: '₹2990/sqft',
    originalPrice: '₹3600/sqft',
    features: [
      'Premium structural materials',
      'Floor tiles up to ₹160/sqft',
      'Custom designer woodwork',
      'Apex Ultima exterior finish',
      'Luxury kitchen & bath fittings',
      'Full smart home integration',
      'Custom architectural details',
      'Priority project management',
    ],
    brands: ['/brands/jsw.png', '/brands/asianpaints.png', '/brands/kohler.png'],
    popular: false,
    savings: 'Save ₹610/sqft',
  },
];

export default function ConstructionPackages() {
  const { openDialog } = useDialog();

  // Define directions for slide animations based on index
  const directions = [
    { x: -50, y: 0 }, // slide from left
    { x: 50, y: 0 },  // slide from right
    { x: 0, y: 50 },  // slide from bottom
    { x: 0, y: -50 }, // slide from top
  ];

  return (
    <section id="package" className="relative text-slate-800 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/construction-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-gray/900 to-black/50 " />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 leading-tight">
            Choose Your Construction Package
          </h2>
          <p className="text-base sm:text-lg  max-w-2xl mx-auto text-white/80">
            Crafted to fit your vision, budget, and lifestyle — because every home deserves perfection.
          </p>
        </motion.div>

        {/* Packages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
             initial={{ opacity: 0,scale:0.8  }}
          whileInView={{ opacity: 1, scale:1  }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
              whileHover={{ scale: 1.03, boxShadow: '0px 15px 30px rgba(255, 175, 0, 0.2)' }}
              className={`relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-md p-6 sm:p-8 border transition-all
                ${pkg.popular
                  ? 'border-amber-400 shadow-xl shadow-amber-300/40 scale-[1.02]'
                  : 'border-slate-200 hover:shadow-amber-100 scale-100'
                }`}
            >
              {/* Ribbon */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-yellow-400 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Most Popular
                </div>
              )}

              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-center mb-4"
              >
                <span className="text-xl sm:text-2xl font-bold">{pkg.name}</span>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">{pkg.tagline}</p>
              </motion.div>

              {/* Pricing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-center mb-6"
              >
                <p className="text-2xl sm:text-3xl font-bold text-amber-600">{pkg.price}</p>
                <p className="text-xs sm:text-sm text-slate-500 line-through">{pkg.originalPrice}</p>
                <p className="text-green-600 text-xs sm:text-sm font-semibold mt-1">{pkg.savings}</p>
              </motion.div>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {pkg.features.map((f, i) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.25 + i * 0.05, duration: 0.4 }}
                    className="flex items-start gap-2 text-slate-600 text-xs sm:text-sm leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    {f}
                  </motion.li>
                ))}
              </ul>

              {/* Brands */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex justify-center gap-3 sm:gap-4 mb-6 flex-wrap"
              >
                {pkg.brands.map((b, i) => (
                  <motion.div
                    key={b}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.35 + i * 0.05, duration: 0.4 }}
                    className="relative w-8 h-8 sm:w-10 sm:h-10"
                  >
                    <Image src={b} alt="brand" fill className="object-contain" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Button */}
              <motion.button
                onClick={openDialog}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-2.5 sm:py-3 rounded-lg font-semibold transition-all shadow-md text-sm sm:text-base
                  ${pkg.popular
                    ? 'bg-amber-500 hover:bg-amber-600 text-white'
                    : 'bg-slate-800 hover:bg-slate-900 text-white'
                  }`}
              >
                Get Detailed Quote
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0,scale:0.8  }}
          whileInView={{ opacity: 1, scale:1  }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="bg-slate-900 text-white rounded-3xl mt-20 sm:mt-24 py-10 sm:py-12 px-4 text-center"
        >
          <p className="text-base sm:text-lg text-slate-300 mb-4 max-w-xl mx-auto">
            Need something unique? Let’s tailor a plan for your dream home.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openDialog}
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg shadow-md text-sm sm:text-base"
          >
            Schedule Personalized Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
