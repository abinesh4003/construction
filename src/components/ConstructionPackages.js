'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useDialog } from './DialogProvider';

// Static packages array (same for server + client)
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
    name: 'Royal',
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
  const { openDialog } = useDialog();

  return (
    <section
      id="package"
      className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20
                 bg-gradient-to-r from-amber-50 via-amber-50 to-amber-100
                 bg-[length:200%_200%]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16 lg:gap-20">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
          suppressHydrationWarning
        >
          <h2 className="kaushan-script-regular text-3xl sm:text-4xl lg:text-5xl text-amber-600 font-bold mb-3 sm:mb-4">
            Our Packages
          </h2>
          <p className="inter text-gray-700 text-sm sm:text-base max-w-2xl mx-auto px-4">
            Tailored construction solutions to match your vision, budget, and luxury lifestyle.
          </p>
        </motion.div>

        {/* Package Cards */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.name} // use name (stable) instead of idx
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="relative"
              suppressHydrationWarning
            >
              <div
                className={`relative flex flex-col lg:flex-row items-stretch rounded-2xl sm:rounded-3xl overflow-hidden 
                  bg-white shadow-lg hover:shadow-xl transition-all duration-300
                  ${pkg.layout === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'}
                  h-auto lg:h-96 xl:h-[28rem]`}
              >
                {/* Package Image */}
                <div className="relative w-full lg:w-1/2 h-[180px] sm:h-96 lg:h-full flex-shrink-0 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    priority={idx < 2}
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-black/30 lg:via-transparent" />
                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white lg:bottom-6 lg:left-6">
                    <h3 className="kaushan-script-regular text-2xl sm:text-3xl lg:text-3xl font-bold drop-shadow-lg">
                      {pkg.name}
                    </h3>
                    <p className="inter text-sm sm:text-base lg:text-base mt-1 drop-shadow-md">
                      {pkg.tagline}
                    </p>
                    {pkg.ribbon ? (
                      <div className="mt-2 inline-block bg-amber-500/80 backdrop-blur-sm px-3 py-1 rounded-md font-bold text-xs sm:text-sm">
                        {pkg.ribbon}
                      </div>
                    ) : null}
                  </div>
                </div>

                {/* Content Panel */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative w-full lg:w-1/2 py-4 sm:py-6 lg:py-6 px-5 sm:px-8 lg:px-8 flex flex-col justify-center"
                  suppressHydrationWarning
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 sm:p-6 lg:p-6 shadow-xl border border-gray-100 h-full flex flex-col justify-center">
                    <p className="text-xl sm:text-2xl lg:text-2xl montserrat font-bold text-amber-500 mb-4">
                      {pkg.price}
                    </p>

                    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {pkg.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-start text-gray-700 font-inter gap-2 text-sm sm:text-base"
                        >
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
                      {pkg.brands.map((b) => (
                        <div
                          key={b}
                          className="relative w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg p-1 shadow-sm border"
                        >
                          <Image
                            src={b}
                            alt={`Brand logo`}
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block w-full text-center px-6 py-3 sm:py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-300 text-black font-semibold hover:shadow-lg transform transition-all duration-200 text-sm sm:text-base shadow-md"
                      onClick={openDialog}
                    >
                      Free Consulting →
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
