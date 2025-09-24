'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';

const categories = [
  {
    name: "Home Construction",
    image: "/homeservice.png",
    description: "Duplex Homes, Luxury Homes, Villas",
    services: [
      { title: "Duplex Homes", description: "Modern two-story living with premium finishes", image: "/house/1.jpeg" },
      { title: "Luxury Homes", description: "Bespoke residences tailored to your vision", image: "/house/2.jpeg" },
      { title: "Villas", description: "Spacious retreats with resort-style amenities", image: "/house/3.jpeg" }
    ]
  },
  {
    name: "Commercial Construction",
    image: "/commecialservice.jpg",
    description: "PG/Rental, Schools, Shops, Hotels, Offices, Warehousing, Hospital",
    services: [
      { title: "PG/Rental", description: "Comfortable living spaces for students and professionals", image: "/house/6.jpeg" },
      { title: "Schools", description: "Inspirational learning environments", image: "/house/5.jpeg" },
      { title: "Hotels", description: "Hospitality spaces that delight guests", image: "/house/4.jpeg" }
    ]
  }
];

export default function ServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white" id="service">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-montserrat text-[#F05A29]">
          <span className=" font-montserrat text-black">Our Construction</span> Services
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 cursor-pointer"
              onClick={() => setSelectedCategory(cat)}
              onHoverStart={() => setHovered(cat.name)}
              onHoverEnd={() => setHovered(null)}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <div className="relative h-72 w-full overflow-hidden">
                <motion.div
                  animate={{ scale: hovered === cat.name ? 1.1 : 1 }}
                  transition={{ duration: 0.5 }}
                  className="h-full w-full"
                >
                  <Image src={cat.image} alt={cat.name} fill className="object-cover" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 font-montserrat">{cat.name}</h3>
                <p className="text-gray-600 font-inter">{cat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCategory(null)}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-64 w-full">
                <Image src={selectedCategory.image} alt={selectedCategory.name} fill className="object-cover" />
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="absolute top-4 right-4 bg-white p-2 rounded-full hover:bg-gray-100 transition"
                >
                  <X className="h-5 w-5 text-gray-800" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-2xl md:text-3xl text-white font-semibold font-montserrat">
                    {selectedCategory.name}
                  </h3>
                </div>
              </div>

              {/* Services List */}
              <div className="p-6 overflow-y-auto">
                <p className="text-gray-700 mb-8 text-lg font-inter">{selectedCategory.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {selectedCategory.services.map((srv, idx) => (
                    <motion.div
                      key={srv.title}
                      className="bg-gray-50 rounded-xl overflow-hidden shadow-sm cursor-pointer hover:shadow-lg transition"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <div className="relative h-40 w-full">
                        <Image src={srv.image} alt={srv.title} fill className="object-cover" />
                      </div>
                      <div className="p-4">
                        <h4 className="font-montserrat font-semibold mb-1 text-lg">{srv.title}</h4>
                        <p className="text-sm text-gray-600 font-inter">{srv.description}</p>

                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
