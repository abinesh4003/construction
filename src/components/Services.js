"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useDialog } from "./DialogProvider";
import { usePathname } from "next/navigation";
import Link from "next/link";

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
    <section className="relative w-full py-10 md:py-16" id="service">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4 sm:px-6 mb-8"
      >
        {pathname === "/service" && (
          <div className="sr-only">
            <h1>Construction Services in Nagercoil Homes, Villas & Commercial</h1>
            <p>Residential construction: luxury homes, apartments, and villas with modern architecture.</p>
            <p>Commercial projects: offices, shops, complexes, and industrial buildings with professional project management.</p>
            <p>Renovation & interiors: turnkey solutions, modular kitchens, smart home systems, and eco-friendly designs.</p>
            <p>Additional services: landscaping, plumbing, electrical work, building maintenance, and structural engineering consultation.</p>
            <ul>
              <li><Link href="/">Home Page</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/package">Packages & Pricing</Link></li>
              <li><Link href="/reviews">Reviews</Link></li>
              <li><Link href="/partners">Partners</Link></li>
            </ul>
          </div>
        )}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold montserrat bg-gradient-to-r from-amber-500 to-orange-400 bg-clip-text text-transparent"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-[Inter]"
        >
          Discover our premium construction services tailored for homes and businesses.
        </motion.p>
      </motion.div>

      {/* Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ ease: "easeInOut" }}
        className="relative w-full h-[45vh] sm:h-[55vh] md:h-[70vh] overflow-hidden shadow-2xl rounded-xl"
      >
        <Image
          src={categories[active].image}
          alt={categories[active].title}
          fill
          priority
          className="object-cover scale-105"
        />
        {/* black overlay */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/50" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3 sm:px-6">
          <motion.span
            key={categories[active].title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-white drop-shadow-xl montserrat block"
          >
            {categories[active].title}
          </motion.span>

          <motion.p
            key={categories[active].subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-2 sm:mt-3 text-sm sm:text-base md:text-xl text-gray-200 max-w-md sm:max-w-xl font-[Inter]"
          >
            {categories[active].subtitle}
          </motion.p>
        </div>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center gap-4 sm:gap-6 mt-5 sm:mt-6 flex-wrap px-2"
      >
        {categories.map((c, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={cn(
              "relative pb-1 sm:pb-2 text-base sm:text-lg font-semibold transition-all font-[Montserrat]",
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
        transition={{ duration: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 mt-8 sm:mt-10 px-4 sm:px-6 md:px-12"
      >
        <AnimatePresence mode="popLayout">
          {categories[active].items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0,x:-50 }}
              whileInView={{ opacity: 1 ,x:0}}
              exit={{ x: 300, opacity: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.15 }}
              className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all h-56 sm:h-64"
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all flex flex-col justify-end p-4 sm:p-6">
                <span className="text-base sm:text-lg font-semibold text-white font-[Montserrat] block">
                  {item.title}
                </span>
                <p className="text-gray-200 mt-1 text-xs sm:text-sm font-[Inter]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center mt-10 sm:mt-12"
      >
        {pathname !== "/service" &&(
       <Link href="/service">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 250, damping: 15 }}
            className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-amber-500 text-white font-semibold text-base sm:text-lg shadow-lg hover:bg-amber-600 transition-all font-[Montserrat]"
          >
            View all services
          </motion.button>
        </Link>
        )
      }
      </motion.div>
    </section>
  );
}
