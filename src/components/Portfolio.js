"use client";

import { motion } from "framer-motion";
import { Building, Users, Ruler, Layers } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useDialog } from "./DialogProvider";

const stats = [
  { icon: Building, value: "150+", label: "Total Projects" },
  { icon: Layers, value: "1,000+", label: "Floor Plans" },
  { icon: Users, value: "100+", label: "Construction Workers" },
  { icon: Ruler, value: "3,00,000", label: "sqft Total Build-up" },
  { icon: Building, value: "10+", label: "Years of Experience" },
  { icon: Users, value: "150+", label: "Happy Clients" },
];

const cities = [
  { name: "Kanyakumari", image: "/cities/kanyakumari.jpg" },
  { name: "Kavalkinaru", image: "/cities/kavalkinaru.jpg" },
  { name: "Nagercoil", image: "/cities/nagercoil.jpg" },
  { name: "Boothapandi", image: "/cities/boothapandi.jpg" },
  { name: "Rajakkamangalam", image: "/cities/Rajakkamangalam.jpg" },
  { name: "Muttom", image: "/cities/muttom.jpg" },
  { name: "Colachal", image: "/cities/colachel.jpg" },
  { name: "Thuckalay", image: "/cities/thuckalay.jpg" },
  { name: "Marthandam", image: "/cities/marthandam.jpg" },
  { name: "Thiruvananthapuram", image: "/cities/Thiruvananthapuram.jpg" },
];

export default function ModernPortfolio() {
  const { openDialog } = useDialog();

  return (
    <section className="w-full bg-gradient-to-b from-white via-gray-50 to-white py-24">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat">
            You Made the <span className="text-[#F05A29]">Right Choice</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto inter">
            We don&apos;t just build homes, we build <span className="text-[#F05A29] font-semibold">trust</span> and <span className="text-[#F05A29] font-semibold">quality</span>.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-tr from-[#F05A29]/30 to-orange-300/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                  <Icon className="h-10 w-10 text-[#F05A29]" strokeWidth={1.5} />
                </div>
                <p className="text-3xl font-bold montserrat mb-2">{stat.value}</p>
                <p className="text-gray-600 inter">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Cities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 montserrat">
            We&apos;re Building Across <span className="text-[#F05A29]">10+ Cities</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6">
            {cities.map((city, idx) => (
              <motion.div
                key={city.name}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="relative w-20 h-20 rounded-full overflow-hidden mb-2 hover:scale-105 transition-transform duration-300 shadow-md">
                  <Image src={city.image} alt={city.name} fill className="object-cover" />
                </div>
                <p className="text-sm font-medium inter">{city.name}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#F05A29] to-orange-400 hover:from-orange-500 hover:to-[#F05A29] text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
              onClick={openDialog}
            >
              Start Your Project Today
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
