'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const packages = [
  {
    name: 'Basic',
    tagline: 'Quality construction essentials with trusted brands',
    price: '₹2190/sqft',
    features: [
      'Steel & cement from reputable brands',
      'Floor tiles up to ₹50/sqft',
      'Standard flush doors/windows',
      'Tractor Emulsion finish',
      'Essential kitchen & bath fittings',
    ],
    brands: ['/brands/sunmic.png', '/brands/dalmia.png', '/brands/cera.png'],
    image: '/house/17.jpeg',
    ribbon: '',
    layout: 'left',
  },
  {
    name: 'Classic',
    tagline: 'Our most popular package with premium upgrades',
    price: '₹2400/sqft',
    features: [
      'Jindal Steel & premium cement',
      'Floor tiles up to ₹100/sqft',
      'Teak wood doors/windows',
      'Tractor Shyne Emulsion',
      'Stylish kitchen & bath fixtures',
    ],
    brands: ['/brands/jsw.png', '/brands/dalmia.png', '/brands/hindware.png'],
    image: '/house/18.jpeg',
    ribbon: 'Most Popular',
    layout: 'right',
  },
  {
    name: 'Premium',
    tagline: 'Elegant living with modern amenities',
    price: '₹2740/sqft',
    features: [
      'High-grade steel & cement',
      'Floor tiles up to ₹140/sqft',
      'Designer teak wood finishes',
      'Apcolite Premium paint',
      'Upgraded kitchen & bath',
    ],
    brands: ['/brands/ultratech.png', '/brands/asianpaints.png', '/brands/jaquar.png'],
    image: '/house/19.jpg',
    ribbon: '',
    layout: 'left',
  },
  {
    name: 'Royale',
    tagline: 'Ultimate luxury with high-end specifications',
    price: '₹2990/sqft',
    features: [
      'Premium structural materials',
      'Floor tiles up to ₹160/sqft',
      'Custom designer woodwork',
      'Apex Ultima exterior finish',
      'Luxury kitchen & bath fittings',
    ],
    brands: ['/brands/jsw.png', '/brands/asianpaints.png', '/brands/kohler.png'],
    image: '/house/20.jpeg',
    ribbon: 'Ultimate Luxury',
    layout: 'right',
  },
];

export default function PackagesSection() {
  return (
    <section className="w-full bg-gray-100 py-20 px-6 lg:px-20 bg-gradient-to-b from-gray-200 to-gray-200" id="packages"
    > 
      <div className=" mx-auto flex flex-col gap-20">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="kaushan-script-regular text-4xl lg:text-5xl text-amber-600 font-bold">
            ✨  Our Packages
          </h2>
          <p className="inter text-gray-700 mt-4 max-w-2xl mx-auto">
            Tailored construction solutions to match your vision, budget, and luxury lifestyle.
          </p>
        </motion.div>

        {/* Package Cards */}
        {packages.map((pkg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className={`relative flex flex-col lg:flex-row items-center rounded-md overflow-hidden bg-white gap-10 ${
              pkg.layout === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
            }`}
          >
            {/* Package Image */}
            <div className="relative w-full lg:w-1/2 overflow-hidden shadow-xl  flex-shrink-0 h-[200px] sm:h-[400px] md:h-[500px]">
              <Image src={pkg.image} alt={pkg.name} fill className="object-cover" priority />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" /> */}

              {/* Ribbon */}
              {pkg.ribbon && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-amber-300 text-black font-bold px-4 py-1 rounded-lg shadow-lg z-10">
                  {pkg.ribbon}
                </div>
              )}
            </div>

            {/* Floating Info Panel */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative w-full lg:w-1/2 rounded-3xl py-6 md:py-5 px-6 md:px-10  transition-all flex flex-col justify-start
                lg:-translate-y-16
              `}
            >
              <h3 className="kaushan-script-regular text-3xl text-amber-600 font-bold mb-2">{pkg.name}</h3>
              <p className="inter text-gray-600 mb-4">{pkg.tagline}</p>
              <p className="text-2xl montserrat font-bold text-amber-300 mb-6">{pkg.price}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {pkg.features.map((feat, i) => (
                  <li key={i} className="flex items-start text-gray-600 font-inter gap-2">
                    <Check className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" /> {feat}
                  </li>
                ))}
              </ul>

              {/* Brands */}
              <div className="flex flex-wrap gap-3 mb-6">
                {pkg.brands.map((b, i) => (
                  <Image key={i} src={b} alt={`Brand ${i}`} width={50} height={50} className="object-contain" />
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-block w-full text-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-300 text-black font-semibold hover:scale-105 transform transition"
              >
                Free Consulting →
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
