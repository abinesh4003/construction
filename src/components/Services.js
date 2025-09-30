"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const services = {
  home: {
    banner: "/homeservice.jpg",
    title: "Home Construction",
    subtitle: "Crafting timeless homes with elegance & precision",
    items: [
      { title: "Duplex Homes", desc: "Modern two-story living with premium finishes", image: "/house/1.jpeg" },
      { title: "Luxury Homes", desc: "Bespoke residences tailored to your vision", image: "/house/2.jpeg" },
      { title: "Villas", desc: "Spacious retreats with resort-style amenities", image: "/house/3.jpeg" },
    ],
  },
  commercial: {
    banner: "/commercialservice.jpg",
    title: "Commercial Construction",
    subtitle: "Building inspiring spaces for work & hospitality",
    items: [
      { title: "PG / Rental", desc: "Comfortable living spaces for students and professionals", image: "/house/6.jpeg" },
      { title: "Schools", desc: "Inspirational learning environments", image: "/house/5.jpeg" },
      { title: "Hotels", desc: "Hospitality spaces that delight guests", image: "/house/4.jpeg" },
    ],
  },
};

export default function ServicesSection() {
  const [active, setActive] = useState("home");

  return (
    <section className="relative w-full bg-neutral-50 text-gray-900 overflow-hidden" id="service">
      {/* Section Heading */}
      <div className="text-center py-20 px-6">
        <h2 className="montserrat text-3xl md:text-5xl font-extrabold">
          <span className="bg-gradient-to-r from-amber-500 to-orange-400 bg-clip-text text-transparent">
            Our Services
          </span>
        </h2>
        <p className="inter mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Explore our wide range of construction solutions designed to bring your dream spaces to life.
        </p>
      </div>

      {/* Banner */}
      <div className="relative h-[50vh] w-full rounded-3xl overflow-hidden max-w-7xl mx-auto shadow-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={services[active].banner}
              alt={services[active].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>

        {/* Banner Text */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <motion.div
            key={services[active].title}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black/50 rounded-2xl p-8 md:p-12 text-center max-w-2xl"
          >
            <h3 className="montserrat text-3xl md:text-5xl font-bold text-white relative inline-block">
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                {services[active].title}
              </span>
              <span className="block h-[3px] w-16 bg-amber-400 mx-auto mt-3 rounded-full"></span>
            </h3>
            <p className="inter mt-4 text-base md:text-lg text-gray-200">
              {services[active].subtitle}
            </p>

            {/* Tabs */}
            <div className="flex gap-8 mt-8 justify-center">
              {Object.keys(services).map((key) => (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`relative pb-2 text-lg md:text-xl font-medium transition-all duration-300 ${
                    active === key ? "text-amber-400" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {services[key].title.split(" ")[0]}
                  {active === key && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 h-[2px] w-full bg-amber-400"
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid gap-8 md:grid-cols-3">
        {services[active].items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="group bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl overflow-hidden transition-all duration-500"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
            </div>
            <div className="p-6">
              <h4 className="montserrat text-xl font-semibold flex items-center justify-between">
                {item.title}
                <ArrowRight className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-300 text-amber-500" />
              </h4>
              <p className="inter mt-2 text-gray-600 text-sm">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
