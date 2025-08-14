'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, Star, Check, ArrowRight } from 'lucide-react';

const packages = [
  {
    title: "Basic",
    price: "₹2250/sqft",
    description: "Quality construction essentials with trusted brands",
    features: [
      "Steel & cement from reputable brands",
      "Floor tiles up to ₹50/sqft",
      "Standard flush doors/windows",
      "Tractor Emulsion finish",
      "Essential kitchen & bath fittings"
    ],
    brands: ["/brands/sunmic.png", "/brands/dalmia.png", "/brands/cera.png"],
    image: "/house/17.jpeg"
  },
  {
    title: "Classic",
    price: "₹2470/sqft",
    description: "Our most popular package with premium upgrades",
    features: [
      "Jindal Steel & premium cement",
      "Floor tiles up to ₹100/sqft",
      "Teak wood doors/windows",
      "Tractor Shyne Emulsion",
      "Stylish kitchen & bath fixtures"
    ],
    brands: ["/brands/jsw.png", "/brands/dalmia.png", "/brands/hindware.png"],
    popular: true,
     image: "/house/18.jpeg"
  },
  {
    title: "Premium",
    price: "₹2740/sqft",
    description: "Elegant living with modern amenities",
    features: [
      "High-grade steel & cement",
      "Floor tiles up to ₹140/sqft",
      "Designer teak wood finishes",
      "Apcolite Premium paint",
      "Upgraded kitchen & bath"
    ],
    brands: ["/brands/ultratech.png", "/brands/asianpaints.png", "/brands/jaquar.png"],
   image: "/house/19.jpeg"
  },
  {
    title: "Royale",
    price: "₹3010/sqft",
    description: "Ultimate luxury with high-end specifications",
    features: [
      "Premium structural materials",
      "Floor tiles up to ₹160/sqft",
      "Custom designer woodwork",
      "Apex Ultima exterior finish",
      "Luxury kitchen & bath fittings"
    ],
    brands: ["/brands/jsw.png", "/brands/asianpaints.png", "/brands/kohler.png"],
    image: "/house/20.jpeg"
  }
];

export default function LuxuryPackages() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <section className="py-28 bg-gray-50" id="package">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20" >
       
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            <span className="font-serif italic">Construction</span> Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tailored solutions to match your vision and budget
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedPackage(pkg)}
              className={`relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer border ${pkg.popular ? 'border-[gold] border-2' : 'border-gray-100'}`}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 bg-[#F05A29] text-white text-xs px-3 py-1 rounded-full font-medium tracking-wider z-10 flex items-center">
                  <Star className="h-3 w-3 mr-1 fill-white" />
                  POPULAR
                </div>
              )}
              
              <div className="relative h-48">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
    
                  className="object-cover w-full h-full group-hover:scale-105 transition-all duration-500"
                />
            
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{pkg.title}</h3>
                  <span className="text-[#F05A29] font-medium">{pkg.price}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {pkg.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-700">
                      <Check className="h-4 w-4 text-[#F05A29] mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="text-[#F05A29] hover:underline flex items-center text-sm font-medium">
                  View full details
                  <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Package Detail Modal */}
      <AnimatePresence>
        {selectedPackage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPackage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl shadow-2xl w-full max-w-4xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="relative h-64">
                <Image
                  src={selectedPackage.image}
                  alt={selectedPackage.title}
                  fill
                  className="object-cover"
                />
                <button 
                  onClick={() => setSelectedPackage(null)}
                  className="absolute top-4 right-4 bg-white p-2 rounded-full hover:bg-gray-100 transition-colors shadow-sm"
                >
                  <X className="h-5 w-5 text-gray-800" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-2xl font-light text-white">{selectedPackage.title}</h3>
                  <p className="text-white/90 mt-1">{selectedPackage.description}</p>
                </div>
                {selectedPackage.popular && (
                  <div className="absolute top-4 left-4 bg-[#F05A29] text-white text-sm px-3 py-1 rounded-full font-medium tracking-wider flex items-center">
                    <Star className="h-3 w-3 mr-1 fill-white" />
                    MOST POPULAR CHOICE
                  </div>
                )}
              </div>
              
              {/* Modal Content */}
              <div className="p-8 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="md:col-span-2">
                    <h4 className="text-lg font-medium mb-4 text-gray-900">Package Features</h4>
                    <ul className="space-y-3">
                      {selectedPackage.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="bg-[#F05A29]/10 p-1 rounded-full mr-3 mt-0.5">
                            <div className="h-2 w-2 bg-[#F05A29] rounded-full" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-4 text-gray-900">Included Brands</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {selectedPackage.brands.map((brand, i) => (
                        <div key={i} className="bg-gray-50 p-3 rounded-lg flex items-center justify-center">
                          <div className="relative h-10 w-full">
                            <Image
                              src={brand}
                              alt="Brand logo"
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h4 className="text-lg font-medium mb-1 text-gray-900">
                        {selectedPackage.title} Package
                      </h4>
                      <p className="text-2xl font-medium text-[#F05A29]">
                        {selectedPackage.price}
                      </p>
                    </div>
                    <button className="w-full md:w-auto bg-[#F05A29] hover:bg-[#e04a20] text-white px-8 py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                      Get This Package
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}