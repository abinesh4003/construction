'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Image from 'next/image';

export default function ConstructionPackages() {
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
      image: '/house/19.jpeg',
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

  return (
    <section
      className="relative w-full py-32 px-6 lg:px-20"
      style={{
        backgroundImage: "url('/house/banner3.jpg')",
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative max-w-7xl mx-auto flex flex-col gap-20">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="kaushan-script-regular text-4xl lg:text-5xl text-amber-400 font-bold">
            Our Packages
          </h2>
          <p className="inter text-white mt-4 max-w-2xl mx-auto">
            Tailored construction solutions to match your vision, budget, and luxury lifestyle.
          </p>
        </motion.div>

       {/* Package Cards */}
{packages.map((pkg, idx) => (
 <motion.div
  key={pkg.name}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: idx * 0.2 }}
  className={`relative w-full flex flex-col lg:flex-row items-stretch gap-10 ${
    pkg.layout === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
  }`}
>
  {/* Image */}
  <div className="relative w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-xl flex-shrink-0">
    <Image src={pkg.image} alt={`${pkg.name} Package`} fill className="object-cover" priority />
    {pkg.ribbon && (
      <div className="absolute top-6 left-6 bg-gradient-to-r from-amber-500 to-amber-300 text-black font-bold px-4 py-1 rounded-lg shadow-lg">
        {pkg.ribbon}
      </div>
    )}
  </div>

  {/* Glass Info Panel */}
  <div className="relative w-full lg:w-1/2 bg-white/20 backdrop-blur-xl rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all flex flex-col justify-start ">
    <h3 className="kaushan-script-regular text-4xl text-amber-400 font-bold mb-2">{pkg.name}</h3>
    <p className="inter text-white mb-6">{pkg.tagline}</p>
    <div className="text-3xl montserrat font-bold text-amber-300 mb-6">{pkg.price}</div>

    {/* Features */}
    <ul className="flex flex-col gap-3 mb-6">
      {pkg.features.map((feat, i) => (
        <li key={i} className="flex items-center gap-3 inter text-white">
          <Check className="w-5 h-5 text-amber-500 flex-shrink-0" /> {feat}
        </li>
      ))}
    </ul>

    {/* Brands */}
    <div className="flex items-center gap-4 mb-6">
      {pkg.brands.map((b, i) => (
        <Image key={i} src={b} alt="Brand Logo" width={50} height={50} className="object-contain" />
      ))}
    </div>

    {/* CTA */}
    <a
      href="#contact"
      className="inline-block mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-300 text-black text-center font-semibold shadow-lg hover:scale-105 transform transition"
    >
      Free Consulting →
    </a>
  </div>
</motion.div>

))}

      </div>
    </section>
  );
}
