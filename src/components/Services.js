"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useDialog } from "./DialogProvider";
import { usePathname } from "next/navigation";

const categories = [
  {
    title: "Home Construction",
    subtitle: "Crafting timeless homes with elegance & precision",
    image: "/homeservice.jpg",
    items: [
      { title: "Duplex Homes", desc: "Modern two-story living with premium finishes", img: "/house/1.jpeg" },
      { title: "Luxury Homes", desc: "Bespoke residences tailored to your vision", img: "/house/2.jpeg" },
      { title: "Villas", desc: "Spacious retreats with resort-style amenities", img: "/house/3.jpeg" },
    ],
  },
  {
    title: "Commercial Construction",
    subtitle: "Building inspiring spaces for work & hospitality",
    image: "/commercialservice.jpg",
    items: [
      { title: "PG / Rental", desc: "Comfortable living spaces for students and professionals", img: "/house/6.jpeg" },
      { title: "Schools", desc: "Inspirational learning environments", img: "/house/5.jpeg" },
      { title: "Hotels", desc: "Hospitality spaces that delight guests", img: "/house/4.jpeg" },
    ],
  },
];

export default function PremiumServices() {
  const [active, setActive] = useState(0);
  const { openDialog } = useDialog();
  const pathname = usePathname();

  return (
    <section className="relative w-full py-12 md:py-16" id="service">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center px-6 mb-10"
      >
        {pathname === "/service" && (
          <div className="sr-only">
           <h1 className="sr-only">Construction Services in Nagercoil Homes, Villas & Commercial</h1> 
           <p className="sr-only">Residential construction: luxury homes, apartments, and villas with modern architecture.</p>
<p className="sr-only">Commercial projects: offices, shops, complexes, and industrial buildings with professional project management.</p>
<p className="sr-only">Renovation & interiors: turnkey solutions, modular kitchens, smart home systems, and eco-friendly designs.</p>
<p className="sr-only">Additional services: landscaping, plumbing, electrical work, building maintenance, and structural engineering consultation.</p>
<p className="sr-only">
Varghese Construction in Nagercoil offers a full range of construction services for residential, commercial, and industrial projects. Our services include: 
premium home construction, luxury villas, duplex homes, apartments, residential buildings, commercial complexes, offices, schools, hotels, PG/rental accommodations, and industrial buildings. 
We also specialize in renovations, interior design, turnkey solutions, modular kitchens, smart home systems, eco-friendly building solutions, landscaping, structural engineering, plumbing, electrical work, and building maintenance. 
Our expert team ensures high-quality materials, craftsmanship, and timely delivery for every project in Nagercoil, Kanyakumari, and across Tamil Nadu.
</p>
          </div>


        )}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-4xl md:text-5xl font-bold montserrat bg-gradient-to-r from-amber-500 to-orange-400 bg-clip-text text-transparent"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto font-[Inter]"
        >
          Discover our premium construction services tailored for homes and businesses.
        </motion.p>
      </motion.div>

      {/* Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden shadow-2xl rounded-xl"
      >
        <Image
          src={categories[active].image}
          alt={categories[active].title}
          fill
          priority
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Floating Shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          animate={{ y: [0, -10, 0] }}
          viewport={{ once: false }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-20 h-20 bg-amber-400/20 rounded-full blur-2xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          animate={{ y: [0, 15, 0] }}
          viewport={{ once: false }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"
        />

        {/* Banner Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.span
            key={categories[active].title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-3xl md:text-5xl font-bold text-white drop-shadow-xl font-[Montserrat] block"
          >
            {categories[active].title}
          </motion.span>

          <motion.p
            key={categories[active].subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-3 text-lg md:text-xl text-gray-200 max-w-xl font-[Inter]"
          >
            {categories[active].subtitle}
          </motion.p>
        </div>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex justify-center gap-6 mt-6 flex-wrap"
      >
        {categories.map((c, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={cn(
              "relative pb-2 text-lg font-semibold transition-all font-[Montserrat]",
              active === i ? "text-amber-500" : "text-gray-600 hover:text-amber-400"
            )}
          >
            {c.title}
            {active === i && (
              <motion.div
                layoutId="underline"
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="absolute left-0 bottom-0 w-full h-[2px] bg-amber-500"
              />
            )}
          </button>
        ))}
      </motion.div>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-6 md:px-12"
      >
        <AnimatePresence mode="wait">
          {categories[active].items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.25, 0.1, 0.25, 1],
                delay: idx * 0.15,
              }}
              className="group relative rounded-md overflow-hidden shadow-lg hover:shadow-2xl transition-all h-64"
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all flex flex-col justify-end p-6">
                <span className="text-lg font-semibold text-white font-[Montserrat] block">
                  {item.title}
                </span>
                <p className="text-gray-200 mt-1 text-sm font-[Inter]">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
        className="flex justify-center mt-12"
      >
        <motion.button
          onClick={openDialog}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 250, damping: 15 }}
          className="px-8 py-3 rounded-full bg-amber-500 text-white font-semibold text-lg shadow-lg hover:bg-amber-600 transition-all font-[Montserrat]"
        >
          Get Started today
        </motion.button>
      </motion.div>
    </section>
  );
}
