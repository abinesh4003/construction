"use client";

import { motion } from "framer-motion";
import { Building, Users, Ruler, Layers } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useDialog } from "./DialogProvider";

const stats = [
  {
    icon: Building,
    value: "150+",
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
    value: "3,00,000",
    label: "sqft Total Build-up",
  },
  {
    icon:  Building,
    value: "10+",
    label: "Years of Experience",
  },
  {
    icon: Users,
    value: "150+",
    label: "Happy Clients",
  }
];

const cities = [
  {
    name: "Kanyakumari",
    image: "/cities/kanyakumari.jpg",
  },
  {
    name: "Kavalkinaru",
    image: "/cities/kavalkinaru.jpg",
  },
  {
    name: "Nagercoil",
    image: "/cities/nagercoil.jpg",
  },
  {
    name: "Boothapandi",
    image: "/cities/boothapandi.jpg",
  },
  {
    name: "Rajakkamangalam",
    image: "/cities/Rajakkamangalam.jpg",
  },
  {
    name: "Muttom",
    image: "/cities/muttom.jpg",
  },
  {
    name: "Colachal",
    image: "/cities/colachel.jpg",
  },
  {
    name: "Thukaly",
    image: "/cities/thuckalay.jpg",
  }, 
  {
    name: "Marthandam",
    image: "/cities/marthandam.jpg",
  },
  {
    name: "Thiruvananthapuram",
    image: "/cities/Thiruvananthapuram.jpg",
  },
];

export default function Portfolio() {
  const { openDialog } = useDialog();
  return (
    <section className="py-20 w-screen bg-white" id="portfolio">
      <div className=" w-full mx-auto px-4 sm:px-6 lg:px-8">
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
          className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-20"
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
          className="bg-gray-50 rounded-2xl p-8 md:p-12 w-full mx-auto"
        >
          <div className="w-full mx-auto text-center ">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              We&apos;re Building Across{" "}
              <span className="text-[#F05A29]">10+ Cities</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-8 py-12">
              {cities.map((city, index) => (
                <motion.div
                  key={city.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex flex-col items-center "
                >
                  <div className="relative w-16 h-16 overflow-hidden mb-2 hover:scale-105 transition-all duration-300">
                    <Image
                      src={city.image}
                      alt={city.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm md:text-sm font-medium font-semibold ">{city.name}</span>
                </motion.div>
              ))}
            </div>
            <Button
              size="lg"
              className="bg-[#F05A29] hover:bg-[#e04a20] text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
             onClick={openDialog} >
              Start your project today
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
