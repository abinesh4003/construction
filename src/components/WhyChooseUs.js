"use client";

import { motion } from "framer-motion";
import { CheckCircle, Shield, Timer, Wallet, Construction, Award, HardHat,ArrowRight} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Timer,
    title: "Timely Completion",
    description: "90% of projects delivered ahead of schedule",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Wallet,
    title: "Cost Transparency",
    description: "Fixed-price contracts with no hidden fees",
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Zero accidents in the past 3 years",
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "5-year warranty on all structural work",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Construction,
    title: "Modern Methods",
    description: "BIM technology for precision planning",
    color: "text-amber-500",
    bgColor: "bg-amber-50",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "2023 Best Commercial Builder Award",
    color: "text-[#F05A29]",
    bgColor: "bg-[#F05A29]/10",
  }
];

export default function LuxuryWhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-28 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span 
            className="inline-block text-[#F05A29] px-4 py-2 text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            WHY CHOOSE US
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-light mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Building <span className="font-serif italic">Excellence</span> Into Every Project
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We combine decades of experience with innovative techniques to deliver exceptional results that stand the test of time.
          </motion.p>
        </div>

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
                className="group relative overflow-hidden bg-white border border-gray-100 rounded-none p-8 hover:shadow-xl transition-all duration-500"
              >
                <div className="absolute inset-0 bg-[#F05A29] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                
                <div className="relative z-10">
                  <div className={`${feature.bgColor} group-hover:bg-white/20 p-4 rounded-lg inline-flex mb-6 transition-colors duration-500`}>
                    <Icon className={`h-8 w-8 ${feature.color} group-hover:text-white transition-colors duration-500`} strokeWidth={1.5} />
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button 
            size="lg"
            className="bg-[#F05A29] hover:bg-[#e04a20] text-white px-10 py-6 text-lg rounded-none font-light tracking-wider group"
          >
            Start your project today
            <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}