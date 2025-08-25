'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, Star, Check, ArrowRight } from 'lucide-react';
import { useDialog } from './DialogProvider';

const packages = [
  {
    title: "Basic",
    price: "₹2190/sqft",
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
    price: "₹2400/sqft",
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
    price: "₹2990/sqft",
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
  const { openDialog } = useDialog();

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
              className={`relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer ${
                pkg.popular 
                  ? 'bg-gradient-to-br from-yellow-100 via-yellow-50 to-amber-50 border-2 border-yellow-400 shadow-lg shadow-yellow-200/50' 
                  : 'bg-white border border-[#F05A29]'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-600 to-amber-600 text-white text-xs px-3 py-1 rounded-full font-medium tracking-wider z-10 flex items-center shadow-md">
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
                {pkg.popular && (
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent" />
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`text-xl font-semibold ${pkg.popular ? 'text-amber-800' : 'text-gray-900'}`}>
                    {pkg.title}
                  </h3>
                  <span className={`font-medium ${pkg.popular ? 'text-amber-700' : 'text-[#F05A29]'}`}>
                    {pkg.price}
                  </span>
                </div>
                <p className={`text-sm mb-4 ${pkg.popular ? 'text-amber-600' : 'text-gray-600'}`}>
                  {pkg.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {pkg.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <Check className={`h-4 w-4 mr-2 mt-0.5 flex-shrink-0 ${pkg.popular ? 'text-amber-600' : 'text-[#F05A29]'}`} />
                      <span className={pkg.popular ? 'text-amber-700' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`hover:underline flex items-center text-sm font-medium ${
                  pkg.popular ? 'text-amber-700 hover:text-amber-800' : 'text-[#F05A29]'
                }`}>
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
              className={`rounded-xl shadow-2xl w-full max-w-4xl overflow-hidden max-h-[90vh] flex flex-col ${
                selectedPackage.popular 
                  ? 'bg-gradient-to-b from-amber-50 to-yellow-50 border-2 border-amber-300' 
                  : 'bg-white'
              }`}
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
                  className={`absolute top-4 right-4 p-2 rounded-full hover:bg-opacity-20 transition-colors shadow-sm ${
                    selectedPackage.popular 
                      ? 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-800' 
                      : 'bg-white hover:bg-gray-100 text-gray-800'
                  }`}
                >
                  <X className="h-5 w-5" />
                </button>
                <div className={`absolute bottom-0 left-0 right-0 p-6 ${
                  selectedPackage.popular 
                    ? 'bg-gradient-to-t from-amber-900/80 to-transparent' 
                    : 'bg-gradient-to-t from-black/70 to-transparent'
                }`}>
                  <h3 className={`text-2xl font-light ${
                    selectedPackage.popular ? 'text-amber-100' : 'text-white'
                  }`}>
                    {selectedPackage.title}
                  </h3>
                  <p className={`mt-1 ${
                    selectedPackage.popular ? 'text-amber-200' : 'text-white/90'
                  }`}>
                    {selectedPackage.description}
                  </p>
                </div>
                {selectedPackage.popular && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-600 to-amber-600 text-white text-sm px-3 py-1 rounded-full font-medium tracking-wider flex items-center shadow-md">
                    <Star className="h-3 w-3 mr-1 fill-white" />
                    MOST POPULAR CHOICE
                  </div>
                )}
              </div>
              
              {/* Modal Content */}
              <div className="p-8 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="md:col-span-2">
                    <h4 className={`text-lg font-medium mb-4 ${
                      selectedPackage.popular ? 'text-amber-800' : 'text-gray-900'
                    }`}>
                      Package Features
                    </h4>
                    <ul className="space-y-3">
                      {selectedPackage.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className={`p-1 rounded-full mr-3 mt-0.5 ${
                            selectedPackage.popular 
                              ? 'bg-amber-100' 
                              : 'bg-[#F05A29]/10'
                          }`}>
                            <div className={`h-2 w-2 rounded-full ${
                              selectedPackage.popular 
                                ? 'bg-amber-600' 
                                : 'bg-[#F05A29]'
                            }`} />
                          </div>
                          <span className={selectedPackage.popular ? 'text-amber-700' : 'text-gray-700'}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className={`text-lg font-medium mb-4 ${
                      selectedPackage.popular ? 'text-amber-800' : 'text-gray-900'
                    }`}>
                      Included Brands
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      {selectedPackage.brands.map((brand, i) => (
                        <div key={i} className={`p-3 rounded-lg flex items-center justify-center ${
                          selectedPackage.popular 
                            ? 'bg-amber-100/50 border border-amber-200' 
                            : 'bg-gray-50'
                        }`}>
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
                
                <div className={`p-6 rounded-lg ${
                  selectedPackage.popular 
                    ? 'bg-amber-100/50 border border-amber-200' 
                    : 'bg-gray-50'
                }`}>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h4 className={`text-lg font-medium mb-1 ${
                        selectedPackage.popular ? 'text-amber-800' : 'text-gray-900'
                      }`}>
                        {selectedPackage.title} Package
                      </h4>
                      <p className={`text-2xl font-medium ${
                        selectedPackage.popular ? 'text-amber-700' : 'text-[#F05A29]'
                      }`}>
                        {selectedPackage.price}
                      </p>
                    </div>
                    <button className={`w-full md:w-auto px-8 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 ${
                      selectedPackage.popular
                        ? 'bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-md shadow-amber-500/30'
                        : 'bg-[#F05A29] hover:bg-[#e04a20] text-white'
                    }`}
                    onClick={()=>{
                      openDialog();
                      setSelectedPackage(null);
                    }}
                    >
                      Free Consulting
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