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
    <section id="why-choose-us" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        
        {/* Single Title */}
        <motion.h2 
          className="text-4xl md:text-5xl font-light text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Us for <span className="font-serif italic">Building Construction?</span>
        </motion.h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden bg-white border border-gray-100 rounded-none p-8 hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center"
              >
                <div className="absolute inset-0 bg-[#F05A29] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                
                <div className="relative z-10">
                  <div className={`${feature.bgColor} group-hover:bg-white/20 p-4 rounded-lg inline-flex mb-6 transition-colors duration-500`}>
                    <Image 
                      src={feature.icon}
                      alt={feature.title}
                      width={60}
                      height={60}
                      className="w-20 h-20"
                    />
                  </div>
                  
                  <h3 className="text-xl font-medium mb-3 group-hover:text-white transition-colors duration-500">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 group-hover:text-white/80 transition-colors duration-500">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
