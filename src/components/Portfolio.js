"use client";

import { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import { Building, Users, Ruler, Layers } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useDialog } from "./DialogProvider";

const stats = [
  { icon: Building, value: 150, suffix: "+", label: "Total Projects" },
  { icon: Layers, value: 1000, suffix: "+", label: "Floor Plans" },
  { icon: Users, value: 100, suffix: "+", label: "Construction Workers" },
  { icon: Ruler, value: 300000, suffix: "", label: "sqft Total Build-up" },
  { icon: Building, value: 10, suffix: "+", label: "Years of Experience" },
  { icon: Users, value: 150, suffix: "+", label: "Happy Clients" },
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

// Animated number component
function AnimatedNumber({ value, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      onUpdate(v) {
        setCount(Math.floor(v));
      },
    });
    return () => controls.stop();
  }, [value]);

  return <p className="montserrat text-3xl font-extrabold mb-2 text-gray-900">{count}{suffix}</p>;
}

export default function ProfessionalPortfolio() {
  const { openDialog } = useDialog();

  return (
    <section className="w-full bg-white py-24">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col gap-24">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="montserrat text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            You Made the <span className="text-[#F05A29]">Right Choice</span>
          </h2>
          <p className="inter text-gray-700 text-lg md:text-xl">
            We don&apos;t just build homes, we build{" "}
            <span className="text-[#F05A29] font-semibold">trust</span> and{" "}
            <span className="text-[#F05A29] font-semibold">quality</span>.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
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
                className="relative bg-gray-50 rounded-3xl shadow-sm p-8 flex items-center gap-6 hover:shadow-md transition-shadow duration-500"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
              >
                <div className="bg-[#F05A29]/20 p-4 rounded-full w-20 h-20 flex items-center justify-center">
                  <Icon className="h-10 w-10 text-[#F05A29]" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  <p className="inter text-gray-600 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Cities Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 montserrat text-gray-900">
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
                <p className="text-sm font-medium inter text-gray-700">{city.name}</p>
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
