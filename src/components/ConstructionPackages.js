'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle2, Sparkles, Crown } from 'lucide-react';

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
  return (
    <section className="bg-gradient-to-br from-amber-50 to-amber-100 py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3">Choose Your Construction Package</h2>
          <p className="text-lg text-slate-600">
            Crafted to fit your vision, budget, and lifestyle — because every home deserves perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-xl p-8 border 
                ${pkg.popular ? 'border-amber-400 shadow-amber-200/50 scale-[1.02]' : 'border-slate-200'}`}
            >
              {/* Ribbon for popular */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-yellow-400 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Sparkles className="w-4 h-4" /> Most Popular
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-4">
                <span className="text-2xl font-bold">{pkg.name}</span>
                <p className="text-sm text-slate-500 mt-1">{pkg.tagline}</p>
              </div>

              {/* Pricing */}
              <div className="text-center mb-6">
                <p className="text-3xl font-bold text-amber-600">{pkg.price}</p>
                <p className="text-sm text-slate-500 line-through">{pkg.originalPrice}</p>
                <p className="text-green-600 text-sm font-semibold mt-1">{pkg.savings}</p>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-slate-600 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>

              {/* Brands */}
              <div className="flex justify-center gap-4 mb-6">
                {pkg.brands.map((b) => (
                  <div key={b} className="relative w-10 h-10">
                    <Image src={b} alt="brand" fill className="object-contain" />
                  </div>
                ))}
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-semibold transition-all
                  ${pkg.popular ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-lg' : 'bg-slate-800 hover:bg-slate-900 text-white'}
                `}
              >
                Get Detailed Quote
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="bg-slate-900 text-white rounded-3xl mt-20 py-12 text-center">
          <p className="text-lg text-slate-300 mb-4">
            Need something unique? Lets tailor a plan for your dream home.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md"
          >
            Schedule Personalized Consultation
          </motion.button>
        </div>
      </div>
    </section>
  );
}
