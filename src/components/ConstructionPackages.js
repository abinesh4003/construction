"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Basic",
    price: "₹2250 per sqft",
    description:
      "A budget package with no compromise on quality that includes all construction essentials.",
    highlights: [
      "Trusted brand steel & cement",
      "Standard floor tiles upto ₹50/sqft",
      "Standard flush doors and window finish",
      "Tractor Emulsion finish",
      "Essential kitchen & bathroom fittings",
    ],
    brands: ["/sunmic.png", "/dalmia.png", "/cera.png"],
  },
  {
    title: "Classic",
    price: "₹2470 per sqft",
    description:
      "Our best seller package with upgraded brands like Jindal Steels, Hindware etc at a considerable price.",
    highlights: [
      "Superior brand steel & cement",
      "Refined floor tiles upto ₹100/sqft",
      "Elegant teak doors and window finish",
      "Tractor Shyne Emulsion finish",
      "Stylish kitchen & bathroom",
    ],
    popular: true,
    brands: ["/jsw.png", "/dalmia.png", "/hindware.png"],
  },
  {
    title: "Premium",
    price: "₹2740 per sqft",
    description:
      "An elegant package crafted for modern living with extra provisions like solar heater setup, puja room door etc.",
    highlights: [
      "Superior brand steel & cement",
      "Premium floor tiles upto ₹140/sqft",
      "Designer teak doors and window finish",
      "Apcolite Premium finish",
      "Quality kitchen & bathroom",
    ],
    brands: ["/ultratech.png", "/asianpaints.png", "/jaquar.png"],
  },
  {
    title: "Royale",
    price: "₹3010 per sqft",
    description:
      "An ultimate plan with high-end finishes with amenities like EV charging, copper gas connection etc.",
    highlights: [
      "Superior brand steel & cement",
      "Lavish floor tiles upto ₹160/sqft",
      "Designer teak doors and window finish",
      "Apex Ultima Exterior finish",
      "Lavish fittings for kitchen & bathroom",
    ],
    brands: ["/jsw.png", "/asianpaints.png", "/kohler.png"],
  },
];
export default function LuxuryConstructionPackages() {
  return (
    <section id="packages" className="py-28 bg-gray-50">
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
            OUR PACKAGES
          </span>
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Construction <span className="font-serif italic">Packages</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your dream project — crafted with quality, elegance, and trust.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white p-8 border border-gray-100 hover:shadow-lg transition-all ${
                project.popular ? "border-[#F05A29]" : ""
              }`}
            >
              {project.popular && (
                <div className="bg-[#F05A29] text-white text-xs px-3 py-1 rounded-full inline-block mb-4 font-medium tracking-wider">
                  POPULAR CHOICE
                </div>
              )}
              
              <div>
                <h3 className="text-2xl font-light mb-2">{project.title}</h3>
                <p className="text-xl font-medium text-[#F05A29] mb-6">
                  {project.price}
                </p>
                <p className="text-gray-600 mb-6">{project.description}</p>

                <ul className="mb-8 space-y-3">
                  {project.highlights.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="text-[#F05A29] mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Brands */}
              {/* <div className="flex items-center gap-4 mb-8">
                {project.brands.map((brand, i) => (
                  <div key={i} className="relative h-10 w-20">
                    <Image
                      src={brand}
                      alt="Brand logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div> */}
              
              <button className="w-full flex items-center justify-center gap-2 bg-[#F05A29] text-white px-6 py-4 text-sm font-light tracking-wider hover:bg-[#e04a20] transition-colors">
                LEARN MORE
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}