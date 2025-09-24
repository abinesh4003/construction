"use client";

import { motion } from "framer-motion";
import { CheckCircle, Shield, Timer, Wallet, Construction, Award } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: "/whyus/time.jpg",
    title: "Timely Completion",
    description: "90% of projects delivered ahead of schedule",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
      icon: "/whyus/price.jpg",
    title: "Cost Transparency",
    description: "Fixed-price contracts with no hidden fees",
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
       icon: "/whyus/safety.jpg",
    title: "Safety First",
    description: "Zero accidents in the past 3 years",
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
         icon: "/whyus/quality.jpg",
    title: "Quality Assurance",
    description: "5-year warranty on all structural work",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {       icon: "/whyus/method.jpg",
    title: "Modern Methods",
    description: "BIM technology for precision planning",
    color: "text-amber-500",
    bgColor: "bg-amber-50",
  },
  {
       icon: "/whyus/trofy.jpg",
    title: "Industry Recognition",
    description: "2023 Best Commercial Builder Award",
    color: "text-[#F05A29]",
    bgColor: "bg-[#F05A29]/10",
  }
];

export default function LuxuryWhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50" id="portfolio">
      <div className="container mx-auto px-6">
        
        {/* Section Heading */}
         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-montserrat text-[#F05A29]">
         Why Choose <span className=" font-montserrat text-black">Our Construction</span> 
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-500"
            >
              {/* Icon Background Circle */}
              <div className={`${feature.bgColor} p-6 rounded-full mb-6`}>
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={60}
                  height={60}
                  className="w-16 h-16"
                />
              </div>

              {/* Feature Title */}
              <h3 className="text-xl md:text-2xl font-semibold mb-3 font-montserrat">
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p className="text-gray-600 font-inter text-base md:text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}