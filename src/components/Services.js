'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';

const categories = [
  {
    name: "Home Construction",
    image: "/construction-hero.png",
    description: "Duplex Homes, Luxury Homes, Villas",
    services: [
      {
        title: "Duplex Homes",
        description: "Modern two-story living with premium finishes",
        image: "/house/1.jpeg"
      },
      {
        title: "Luxury Homes",
        description: "Bespoke residences tailored to your vision",
       image: "/house/2.jpeg"
      },
      {
        title: "Villas",
        description: "Spacious retreats with resort-style amenities",
         image: "/house/3.jpeg"
      }
    ]
  },
  {
    name: "Commercial Construction",
    image: "/construction-hero-3.jpg",
    description: "PG/Rental, Schools, Shops, Hotels, Offices, Warehousing, Hospital",
    services: [
      {
        title: "PG/Rental",
        description: "Comfortable living spaces for students and professionals",
       image: "/house/6.jpeg"
      },
      {
        title: "Schools",
        description: "Inspirational learning environments",
           image: "/house/5.jpeg"
      },
      {
        title: "Hotels",
        description: "Hospitality spaces that delight guests",
         image: "/house/4.jpeg"
      }
    ]
  }
];

export default function ServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-20 bg-white"  id='service'>
      <div className="container mx-auto px-6">
       
        <h2 className="text-4xl font-light text-center mb-12">
           <span className="block text-[#F05A29] px-4 py-2  text-sm font-medium mb-6 tracking-wider">
           SERVICES
          </span>
          <span className="font-serif italic">Our Construction</span> Services
        </h2>

        {/* Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 cursor-pointer"
              onClick={() => setSelectedCategory(cat)}
              onHoverStart={() => setHovered(cat.name)}
              onHoverEnd={() => setHovered(null)}
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <motion.div
                  animate={{ scale: hovered === cat.name ? 1.1 : 1 }}
                  transition={{ duration: 0.4 }}
                  className="h-full w-full"
                >
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-medium mb-2">{cat.name}</h3>
                <p className="text-gray-600">{cat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCategory(null)}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl w-full max-w-4xl overflow-hidden max-h-[90vh] flex flex-col"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header Image */}
              <div className="relative h-64 w-full">
                <Image
                  src={selectedCategory.image}
                  alt={selectedCategory.name}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="absolute top-4 right-4 bg-white p-2 rounded-full hover:bg-gray-100 transition"
                >
                  <X className="h-5 w-5 text-gray-800" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-2xl text-white font-light">{selectedCategory.name}</h3>
                </div>
              </div>

              {/* Services List */}
              <div className="p-6 overflow-y-auto">
                <p className="text-gray-700 mb-6">{selectedCategory.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {selectedCategory.services.map((srv) => (
                    <div key={srv.title} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                      <div className="relative h-40 w-full">
                        <Image src={srv.image} alt={srv.title} fill className="object-cover" />
                      </div>
                      <div className="p-4">
                        <h4 className="font-medium mb-2">{srv.title}</h4>
                        <p className="text-sm text-gray-600">{srv.description}</p>
                      </div>
                    </div>
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
