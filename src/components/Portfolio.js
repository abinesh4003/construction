"use client";

import { motion } from "framer-motion";
import { Building, MapPin, Users, Ruler, Layers } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const stats = [
  { 
    icon: Building, 
    value: "300+", 
    label: "Total Projects" 
  },
  { 
    icon: Layers, 
    value: "1,000+", 
    label: "Floor Plans" 
  },
  { 
    icon: Users, 
    value: "100+", 
    label: "Construction Workers" 
  },
  { 
    icon: Ruler, 
    value: "5,00,000", 
    label: "sqft Total Build-up" 
  }
];

const services = {
  "Home": [
    {
      title: "Modern Duplex",
      description: "Contemporary duplex homes with smart space utilization",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
      locations: ["Kanyakumari", "Nagercoil", "Marthandam"]
    },
    {
      title: "Luxury Villas",
      description: "Premium villas with private amenities and landscaped gardens",
      image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg",
      locations: ["Thiruvananthapuram", "Nagercoil"]
    },
    {
      title: "Gated Community",
      description: "Secure residential complexes with shared facilities",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
      locations: ["Kanyakumari", "Thiruvananthapuram"]
    },
    {
      title: "Townhouses",
      description: "Elegant row houses with modern architectural designs",
      image: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
      locations: ["Marthandam", "Nagercoil"]
    },
    {
      title: "Apartments",
      description: "High-rise living spaces with panoramic views",
      image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
      locations: ["Thiruvananthapuram", "Kanyakumari"]
    }
  ],
  "PG/Rental": [
    {
      title: "Student Hostels",
      description: "Safe and affordable accommodations for students",
      image: "https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg",
      locations: ["Nagercoil", "Marthandam"]
    },
    {
      title: "Working Professionals PG",
      description: "Comfortable living spaces for young professionals",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      locations: ["Thiruvananthapuram", "Kanyakumari"]
    },
    {
      title: "Service Apartments",
      description: "Fully furnished short-term rental solutions",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      locations: ["Kanyakumari", "Nagercoil"]
    },
    {
      title: "Family Rentals",
      description: "Spacious homes for family accommodations",
      image: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg",
      locations: ["Thiruvananthapuram", "Marthandam"]
    },
    {
      title: "Premium Rentals",
      description: "Luxury living spaces with premium amenities",
      image: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg",
      locations: ["Nagercoil", "Thiruvananthapuram"]
    }
  ],
  "Schools": [
    {
      title: "Primary Schools",
      description: "Child-friendly educational infrastructure",
      image: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg",
      locations: ["Kanyakumari", "Nagercoil"]
    },
    {
      title: "High Schools",
      description: "Modern classrooms and laboratories",
      image: "https://images.pexels.com/photos/159740/library-la-trobe-study-students-159740.jpeg",
      locations: ["Thiruvananthapuram", "Marthandam"]
    },
    {
      title: "International Schools",
      description: "World-class educational facilities",
      image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
      locations: ["Nagercoil", "Thiruvananthapuram"]
    },
    {
      title: "Vocational Schools",
      description: "Specialized training centers",
      image: "https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg",
      locations: ["Kanyakumari", "Marthandam"]
    },
    {
      title: "Sports Academies",
      description: "Athletic training facilities",
      image: "https://images.pexels.com/photos/34514/spot-runs-start-launches-school.jpg",
      locations: ["Thiruvananthapuram", "Nagercoil"]
    }
  ],
  "Shops": [
    {
      title: "Retail Outlets",
      description: "Modern commercial spaces for businesses",
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg",
      locations: ["Kanyakumari", "Nagercoil"]
    },
    {
      title: "Shopping Complexes",
      description: "Integrated commercial developments",
      image: "https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg",
      locations: ["Thiruvananthapuram", "Marthandam"]
    },
    {
      title: "Showrooms",
      description: "Premium display spaces for brands",
      image: "https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg",
      locations: ["Nagercoil", "Thiruvananthapuram"]
    },
    {
      title: "Food Courts",
      description: "Modern dining and food spaces",
      image: "https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg",
      locations: ["Kanyakumari", "Marthandam"]
    },
    {
      title: "Market Complexes",
      description: "Organized retail marketplaces",
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg",
      locations: ["Thiruvananthapuram", "Nagercoil"]
    }
  ],
  "Hotels": [
    {
      title: "Budget Hotels",
      description: "Affordable accommodation solutions",
      image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
      locations: ["Kanyakumari", "Nagercoil"]
    },
    {
      title: "Business Hotels",
      description: "Professional stay options for travelers",
      image: "https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg",
      locations: ["Thiruvananthapuram", "Marthandam"]
    },
    {
      title: "Resorts",
      description: "Luxury vacation destinations",
      image: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg",
      locations: ["Nagercoil", "Thiruvananthapuram"]
    },
    {
      title: "Boutique Hotels",
      description: "Unique themed accommodations",
      image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
      locations: ["Kanyakumari", "Marthandam"]
    },
    {
      title: "Heritage Hotels",
      description: "Cultural hospitality experiences",
      image: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg",
      locations: ["Thiruvananthapuram", "Nagercoil"]
    }
  ],
  "Offices": [
    {
      title: "Corporate Offices",
      description: "Professional workspaces for businesses",
      image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg",
      locations: ["Kanyakumari", "Nagercoil"]
    },
    {
      title: "IT Parks",
      description: "Tech-enabled office complexes",
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg",
      locations: ["Thiruvananthapuram", "Marthandam"]
    },
    {
      title: "Co-working Spaces",
      description: "Flexible modern work environments",
      image: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg",
      locations: ["Nagercoil", "Thiruvananthapuram"]
    },
    {
      title: "Business Centers",
      description: "Premium office solutions",
      image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg",
      locations: ["Kanyakumari", "Marthandam"]
    },
    {
      title: "Government Offices",
      description: "Administrative buildings",
      image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg",
      locations: ["Thiruvananthapuram", "Nagercoil"]
    }
  ],
  "Warehousing": [
    {
      title: "Industrial Warehouses",
      description: "Large-scale storage solutions",
      image: "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg",
      locations: ["Kanyakumari", "Nagercoil"]
    },
    {
      title: "Cold Storages",
      description: "Temperature-controlled facilities",
      image: "https://images.pexels.com/photos/534228/pexels-photo-534228.jpeg",
      locations: ["Thiruvananthapuram", "Marthandam"]
    },
    {
      title: "Logistics Parks",
      description: "Integrated supply chain hubs",
      image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg",
      locations: ["Nagercoil", "Thiruvananthapuram"]
    },
    {
      title: "Distribution Centers",
      description: "Efficient product distribution hubs",
      image: "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg",
      locations: ["Kanyakumari", "Marthandam"]
    },
    {
      title: "Manufacturing Units",
      description: "Industrial production facilities",
      image: "https://images.pexels.com/photos/159823/kiev-ukraine-plant-factory-159823.jpeg",
      locations: ["Thiruvananthapuram", "Nagercoil"]
    }
  ],
  "Hospital": [
    {
      title: "Multi-specialty Hospitals",
      description: "Comprehensive healthcare facilities",
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg",
      locations: ["Kanyakumari", "Nagercoil"]
    },
    {
      title: "Specialty Clinics",
      description: "Focused medical care centers",
      image: "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg",
      locations: ["Thiruvananthapuram", "Marthandam"]
    },
    {
      title: "Diagnostic Centers",
      description: "Advanced medical testing facilities",
      image: "https://images.pexels.com/photos/3985166/pexels-photo-3985166.jpeg",
      locations: ["Nagercoil", "Thiruvananthapuram"]
    },
    {
      title: "Dental Hospitals",
      description: "Specialized oral care centers",
      image: "https://images.pexels.com/photos/3985165/pexels-photo-3985165.jpeg",
      locations: ["Kanyakumari", "Marthandam"]
    },
    {
      title: "Ayurveda Centers",
      description: "Traditional medicine facilities",
      image: "https://images.pexels.com/photos/3993241/pexels-photo-3993241.jpeg",
      locations: ["Thiruvananthapuram", "Nagercoil"]
    }
  ]
};


export default function LuxuryPortfolio() {
  const [activeTab, setActiveTab] = useState("Home");
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section id="portfolio" className="py-28 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[#F05A29] px-4 py-2 text-sm font-medium mb-6">
            OUR PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Building <span className="font-serif italic">India's</span> Future
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With a legacy of excellence across 10+ cities, we transform visions into landmark structures.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 text-center border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="bg-[#F05A29]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Icon className="h-8 w-8 text-[#F05A29]" strokeWidth={1.5} />
                </div>
                <p className="text-3xl font-light mb-3">{stat.value}</p>
                <p className="text-gray-600 text-sm tracking-wider">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Services Tabs */}
        <div className="mb-12">
          <div className="flex overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex space-x-1 border-b border-gray-200">
              {Object.keys(services).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap px-8 py-4 text-sm font-light tracking-wider transition-all ${
                    activeTab === tab
                      ? "text-[#F05A29] border-b-2 border-[#F05A29]"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services[activeTab].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              className="relative overflow-hidden group"
            >
              <div className="relative h-80">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={100}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />
              </div>
              
              <div className="absolute inset-0 flex items-end p-6">
                <div className="text-white transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-light mb-2">{service.title}</h3>
                  <p className="text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.description}
                  </p>
                  <button className="flex items-center gap-2 text-sm font-light tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    VIEW PROJECT
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <button className="border border-[#F05A29] text-[#F05A29] px-10 py-4 text-lg font-light tracking-wider hover:bg-[#F05A29] hover:text-white transition-all duration-300">
            VIEW ALL PROJECTS
          </button>
        </motion.div>
      </div>
    </section>
  );
}