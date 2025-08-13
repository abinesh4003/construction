"use client";

import { motion } from "framer-motion";
import { Smartphone, Clock, AlertCircle, Bell, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ConstructionTracking() {
  const features = [
    {
      icon: Clock,
      title: "Real-Time Progress Tracking",
      description: "Monitor your project's development from foundation to finish with live updates",
    },
    {
      icon: AlertCircle,
      title: "Issue Resolution System",
      description: "Raise and track tickets for immediate resolution of construction challenges",
    },
    {
      icon: Bell,
      title: "Weekly Progress Reports",
      description: "Receive automated updates tailored to your project timeline",
    },
    {
      icon: DollarSign,
      title: "Financial Transparency",
      description: "Track expenses and payments in real-time through our dashboard",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Construction Tracking <span className="text-[#F05A29]">At Your Fingertips</span>
            </h2>
            
            <div className="space-y-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-[#F05A29]/10 p-3 rounded-lg">
                      <Icon className="h-6 w-6 text-[#F05A29]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12"
            >
              <Button
                size="lg"
                className="bg-[#F05A29] hover:bg-[#e04a20] px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Start Your Construction Journey
              </Button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-square w-full  overflow-hidden shadow-2xl">
              <Image
                src="/tracking_hero.png" // Replace with your image
                alt="Construction tracking app interface"
                fill
                className="object-cover py-4"
              />
          
           
            </div>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
}