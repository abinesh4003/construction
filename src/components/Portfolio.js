"use client";

import { motion } from "framer-motion";
import { Building, Users, Ruler, Layers } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const stats = [
  {
    icon: Building,
    value: "300+",
    label: "Total Projects",
  },
  {
    icon: Layers,
    value: "1,000+",
    label: "Floor Plans",
  },
  {
    icon: Users,
    value: "100+",
    label: "Construction Workers",
  },
  {
    icon: Ruler,
    value: "5,00,000",
    label: "sqft Total Build-up",
  },
];

const cities = [
  {
    name: "Kanyakumari",
    image: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg",
  },
  {
    name: "Kavalkinaru",
    image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
  },
  {
    name: "Nagercoil",
    image: "https://images.pexels.com/photos/358532/pexels-photo-358532.jpeg",
  },
  {
    name: "Boothapandi",
    image: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg",
  },
  {
    name: "Rajakkamangalam",
    image: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg",
  },
  {
    name: "Muttom",
    image: "https://images.pexels.com/photos/2832036/pexels-photo-2832036.jpeg",
  },
  {
    name: "Colachal",
    image: "https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg",
  },
  {
    name: "Thukaly",
    image: "https://images.pexels.com/photos/235734/pexels-photo-235734.jpeg",
  },
  {
    name: "Marthandam",
    image: "https://images.pexels.com/photos/373290/pexels-photo-373290.jpeg",
  },
  {
    name: "Thiruvananthapuram",
    image: "https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg",
  },
];

export default function Portfolio() {
  return (
    <section className="py-20 bg-white" id="portfolio">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            You Made the <span className="text-[#F05A29]">Right Choice</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
           Because we dont just build home, we build <span className="text-[#F05A29]">trust</span> and <span className="text-[#F05A29]">quality</span>
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
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ }}
                className="bg-gray-50 rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-500 ease-in-out "
 >
                <div className="bg-[#F05A29]/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-[#F05A29]" strokeWidth={1.5} />
                </div>
                <p className="text-3xl font-bold mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Cities Presence */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              We&apos;re Building Across{" "}
              <span className="text-[#F05A29]">10+ Cities</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
              {cities.map((city, index) => (
                <motion.div
                  key={city.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex flex-col items-center"
                >
                  <div className="relative w-20 h-20 rounded-full overflow-hidden mb-2 border-2 border-[#F05A29]">
                    <Image
                      src={city.image}
                      alt={city.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium">{city.name}</span>
                </motion.div>
              ))}
            </div>
            <Button
              size="lg"
              className="bg-[#F05A29] hover:bg-[#e04a20] text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              View All Projects
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
