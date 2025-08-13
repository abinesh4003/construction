"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

const luxuryBackgrounds = [
  "/luxury-construction-.jpg",
  "/luxury-construction-2.jpg",
  "/luxury-construction-3.jpg",
  "/luxury-construction-4.jpg",
];

export default function LuxuryHero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/construction-hero-3.jpg"
          alt="Luxury construction site"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 h-full flex flex-col justify-center pt-32 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-12 h-px bg-[#F05A29]" />
            <span className="text-[#F05A29] tracking-widest">VARGHESE CONSTRUCTION</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8 text-white">
            <motion.span 
              className="block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Building Your Dreams
            </motion.span>
            <motion.span 
              className="font-serif italic font-normal"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Into Reality
            </motion.span>
          </h1>

          <motion.p
            className="text-xl text-gray-200 mb-12 max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            From residential to commercial projects, we deliver top-notch construction services with precision, quality, and trust.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <button className="bg-[#F05A29] hover:bg-[#e04a20] px-8 py-4 rounded-sm text-lg font-medium transition-all group flex items-center gap-2">
              Get a Quote
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="bg-transparent border border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-sm text-lg font-medium transition-all group flex items-center gap-2">
              View Projects
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="animate-bounce flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll</span>
          <ChevronDown className="h-6 w-6 text-white" />
        </div>
      </motion.div>
    </section>
  );
}